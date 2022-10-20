document.getElementsByClassName('last-updated')[0].innerHTML = "Last Updated: "+document.lastModified

function toggleMenu() {
    var temp = document.getElementsByClassName("toggler")[0]
    temp.classList.toggle("hide")
    if (temp.classList[1]=="hide") {
        document.querySelector(".toggler > a").innerHTML = "&#9776; Menu"
    }
    else {
        document.querySelector(".toggler > a").innerHTML = "&#10006; Close"
    }
}


// select the elements to manipulate (output to)
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);


datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;






// get the current full date
const todayDate = new Date();

// get the current year
const currYear = todayDate.getFullYear();

// combine the copyright sign with the curr year
document.querySelector("#fullYear").textContent = currYear;

//get the updated date and time

document.querySelector("#lastUpdated").textContent = `Last Updated: ${document.lastModified}`;



const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */

  //get a date 
const today = new Date();
//get the actual day ---number
const dayNumber = today.getDay();
//get the events id
const  element = document.getElementById("box-six");
//display the event if its either monday or tuesday
if (dayNumber ==  1 || dayNumber == 2) {
    
    element.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";

    element.classList.add("showme");
  } else {
    element.classList.add("hideme");

  }
