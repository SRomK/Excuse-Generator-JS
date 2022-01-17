/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function() {
<<<<<<< HEAD

const who = ["The dog", "My grandma", "His toad", "My cat"];
const action = ["ate", "peed", "poop", "destroy"];
const what = ["my cup of coffe", "the bike", "the wall"];
const when = [
  "before dinner",
  "right on time",
  "when I finished",
  "during my class",
  "while I was reading"
];

const RandomIndex = arr => Math.floor(Math.random() * arr.length);
const RandomItem = (arr, i) => arr[i];

RandomItem(action, RandomIndex(action));

const generateExcuse = () => {
  let e = "";
  for (let v of data) {
    e += `${RandomItem(v, RandomIndex(v))} `;
  }
  return e;
};

console.log(generateExcuse(data));

=======
//write your code here

const runExcuse = () => {
  let who = ["The dog", "My grandma", "His toad", "My cat"];
  let action = ["ate", "peed", "poop", "destroy"];
  let what = ["my cup of coffe", "the bike", "the wall"];
  let when = [
    "before dinner",
    "right on time",
    "when I finished",
    "during my class",
    "while I was reading"
  ];

  return `${who[Math.floor(Math.random() * who.length)]} ${
    action[Math.floor(Math.random() * action.length)]
  } ${what[Math.floor(Math.random() * what.length)]} ${
    when[Math.floor(Math.random() * when.length)]
  }`;
};

>>>>>>> 8085b430ca8f954b9cc6cde936f475c4095f43c3
console.log(runExcuse());
