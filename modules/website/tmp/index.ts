export { DiscordIconElement } from './icons/discord-icon.element';
export { GitHubIconElement } from './icons/github-icon.element';
export { KWDocumentElement } from './kw-document.element';
export { KWDocumentTreeElement } from './kw-document-tree.element';
export { KomoreIconElement } from './icons/komore-icon.element';
export { KWNavigationElement } from './kw-navigation.element';
export { KWSearchInputElement } from './kw-search-input.element';
import { initializeWebsite } from './initialize-website';
export { TwitterIconElement } from './icons/twitter-icon.element';

window.addEventListener('DOMContentLoaded', initializeWebsite);
