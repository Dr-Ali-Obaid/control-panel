import './assets/sass/style.scss';
import 'normalize.css'

var person = require ('./student.js');

var p1 = person('ali', 'obaid');
var p2 = person('mai', 'shaboon');
console.log(p1);
console.log(p2);
setTimeout(()=> alert('hi ali'), 4000);
