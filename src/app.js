/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function() {
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

console.log(runExcuse());
