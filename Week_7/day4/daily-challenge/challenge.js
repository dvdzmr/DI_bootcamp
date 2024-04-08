import greeting from 'greeting';
import colorfulmessage from 'colorfulmessage';
const readFile = require('./files/read-file.cjs');
// it doesnt import and i dont understand why, i also tried require().

greeting("David");
colorfulmessage("hello");
readFile('./files/file-data.txt');