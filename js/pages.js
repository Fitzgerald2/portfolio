/*jshint esversion: 6*/

//alert("Javascrypt is working");

//when the nezt button is clicked show a new pages
//each page should show a new colors and content
//when the previouse button is pushed show previousepage
//when the random button is pushed show a random pages

//when key is pressed show the next page

//step 1 add the content for the pages.

const pages = [{


    content: "Welcom",
    background: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 121, 10, 0.18669474625787819) 26%, rgba(0, 255, 83, 0.5228292000393908) 75%)",
    circle: " #e3210e"
  },

  {
    content: "this is the pages content",
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(45,9,121,0.18669474625787819) 12%, rgba(34,69,112,1) 37%, rgba(255,113,0,0.5228292000393908) 53%)",
    circle: "#4664fc"
  },

  {
    content: "this is the pages content",
    background: "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(115,252,70,1) 100%)",
    circle: "#dbd525"
  },

  {
    content: `This is where you <a href="cv.pdf">download my CV</a>`,
    background: "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(37,76,242,0.22871155298056722) 46%, rgba(7,55,232,1) 100%)",
    circle: "#0737e8"
  }
];

//pick the relevent tags is html and save them in const
const bodyTag = document.querySelector("body");
const circleTag = document.querySelector(".circle");
const nextTag = document.querySelector(".next");
const prevTag = document.querySelector(".previous");
const randomTag = document.querySelector(".random");
const h2Tag = document.querySelector("h2");

//create a page tracker
let pageNum = 0;

//create action to increase page number

const next = function() {
  pageNum = pageNum + 1;
  if (pageNum > pages.length - 1) {
    pageNum = 0
  }
};
//we only have 4 pages so going to five in unwanted

//crate acton to decrease page number

const previous = function() {
  pageNum = pageNum - 1;

  if (pageNum < 0) {
    pageNum = pages.length - 1;
  }
};

//
const random = function() {
  pageNum = Math.floor(Math.random() * pages.length);


};
const updatePage = function() {
  h2Tag.innerHTML = pages[pageNum].content;
  circleTag.style.backgroundColor = pages[pageNum].circle;
  bodyTag.style.backgroundColor = pages[pageNum].background;
};



//create event listner

nextTag.addEventListener("click", function() {
  next();
  console.log(pageNum);
  updatePage();
});

prevTag.addEventListener("click", function() {
  previous();
  console.log(pageNum);
  updatePage();
});

randomTag.addEventListener("click", function() {

  random();
  console.log(pageNum);
  updatePage();
});