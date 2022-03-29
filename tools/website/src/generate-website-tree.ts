import { readDirectory } from '@komore/runtime/node';
//import { marked } from 'marked';

const path = process.argv[2];

console.log('going for ' + path);

readDirectory(path).pipe(

).subscribe(
  x => console.log('weee', x)
);
