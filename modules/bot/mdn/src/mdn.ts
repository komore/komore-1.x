import { command, default as CookiecordClient, Module } from 'cookiecord';
import { Message, MessageEmbed } from 'discord.js';
import { sendWithMessageOwnership } from '../util/send';
import { TS_BLUE } from '../env';
import { Fzf, FzfResultItem } from 'fzf';
import fetch from 'node-fetch';

interface Doc {
	url: string;
	title: string;
}

export class FuzzySearch {
	docs: Doc[];

	constructor(docs: Doc[]) {
		this.docs = docs;
	}

	search(needle: string, { limit = 10 }): FzfResultItem<Doc>[] {
		// Use `let` because we might come up with a new list (aka. shortlist)
		// that makes the haystack search much simpler to send to `Fzf()`.
		let docs = this.docs;
		// The list of docs is possible over 10,000 entries (in 2021). If the
		// search input is tiny, don't bother with the overhead of Fzf().
		// Because we don't even need it when the test is so easy in that
		// it just needs to contain a single character.
		if (needle.length <= 3) {
			const needleLowerCase = needle.toLowerCase();
			// The reason this works and makes sense is because the `this.docs` is
			// already sorted by popularity.
			// So if someone searches for something short like `x` we just take
			// the top 'limit' docs that have an `x` in the `.url`. This is
			// faster than going through every doc with Fzf.
			const shortlistDocs: Doc[] = [];
			for (const doc of this.docs) {
				if (doc.url.toLowerCase().includes(needleLowerCase)) {
					shortlistDocs.push(doc);
					if (shortlistDocs.length === limit) {
						break;
					}
				}
			}
			// Suppose the needle was `yx`  and the `limit` as 10, then if we only found
			// 9 (which is less than 10) docs that match exactly this, then we might
			// be missing out, so we can't use the shortlist.
			// For example, there might be more docs like `aaYbbbbXccc` which
			// will be found by Fzf() but wouldn't be find in our shortlist because
			// the two characters aren't next to each other.
			if (shortlistDocs.length >= limit) {
				docs = shortlistDocs;
			}
		}

		const haystack = new Fzf(docs, {
			limit,
			selector: (item: Doc) => item.url,
		});
		// All longer strings, default to using the already initialized `Fzf()` instance.
		return haystack.find(needle);
	}
}

// From https://developer.mozilla.org/static/js/fuzzy-search.ts

const STALE_MS = 86_400_000;

// From https://developer.mozilla.org/static/js/search.tsx
type Item = {
	url: string;
	title: string;
};

let index: Item[] = [];
let lastUpdate = 0;
let fuzzy: FuzzySearch = new FuzzySearch(index);

function updateIndex() {
	if (Number(new Date()) - lastUpdate >= STALE_MS) {
		lastUpdate = Number(new Date());
		fetch('https://developer.mozilla.org/en-US/search-index.json')
			.then(res => res.json())
			.then(json => {
				index = json;
				fuzzy = new FuzzySearch(index);
			});
	}
}

updateIndex();

export class MDNModule extends Module {
	constructor(client: CookiecordClient) {
		super(client);
	}

	@command({
		description: 'Search the Mozilla Developer Network documentation',
		single: true,
	})
	async mdn(msg: Message, text: string) {
		const hit = fuzzy.search(text, { limit: 1 })[0];
		if (!hit) {
			return await sendWithMessageOwnership(
				msg,
				'❌ No results found for that query',
			);
		}
		const embed = new MessageEmbed()
			.setColor(TS_BLUE)
			.setTitle(hit.item.title)
			.setAuthor(hit.item.url.replace(/^\/en-US\//, '').replace(/\//g, ' / ').replace(/_/g, ' '))
			.setURL(hit.item.url);
		await sendWithMessageOwnership(msg, { embeds: [embed] });
	}
}