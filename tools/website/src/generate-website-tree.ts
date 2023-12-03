import { readDirectory } from '@komore/node/file-system';

//import { marked } from 'marked';

const path = process.argv[2] ?? '.';

console.log('going for ' + path);

readDirectory(path)
  .pipe()
  .subscribe(x => console.log('weee', x));
