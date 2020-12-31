//Mixed Messages written by Dean R - 31/12/2020

//Global constants for output;
const starSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const seasons = {"Summer": ["December", "January", "February"], "Autumn": ["March", "April", "May"], 
                "Winter": ["June", "July", "August"], "Spring" : ["September", "October", "November"]};
const numbers = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

//Main 
let r1 = Math.floor(Math.random()*12);
let r2 = Math.floor(Math.random()*4);
let r3 = Math.floor(Math.random()*29);
let r4 = Math.floor(Math.random()*10);

console.log('Thank you for executing me... this is no coincidence, you probably want to know a secret.');
console.log(`Your true love is out there, I can't give you there name or where abouts, but I can say this...`);
console.log(`They are of ${starSigns[r1]} star sign, born on day ${r3} of ${seasons[r2]}. Look for the number ${numbers[r4]} wherever you go, that will lead you to them!`);