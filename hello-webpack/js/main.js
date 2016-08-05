// require('../css/main.css');
// var hello=require("./hello.js");
import {hello} from './hello.js';

document.querySelector('h2').textContent = hello("Jack");
