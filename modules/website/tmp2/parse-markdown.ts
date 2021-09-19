import * as marked from 'marked';

marked.use({

});

export function parseMarkdown() {}
marked.parse(fileContent, (err, res) => {
  if (err) {
    console.log('oops', err);
  } else {
    console.log(res);
  }
});
