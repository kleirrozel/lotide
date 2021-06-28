const assertEqual = require("../assertEqual");
const tail= require("../tail");


const words = ["Yo Yo", "Lighthouse", "Labs"];
const results = tail(words);

assertEqual(words.length, 3);