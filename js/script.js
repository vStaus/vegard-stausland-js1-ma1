//oppgave 1

function myFunction() {
    const cat = [
        {complain: "Meow!"}
    ];
    console.log ("Meow!");
}
myFunction();

//oppgave 2
document.querySelector("h3").innerHTML = "Updated heading"

//oppgave 3
const heading = document.querySelector("h3");
heading.style.fontSize = "2em";

// oppgave 4
heading.classList.add("subheading")

//oppgave 5

var allParagraphs = document.querySelectorAll("p");

for (let para of allParagraphs) {
    para.style.color = "red";
}
//oppgave 6

var resultsContainer = document.querySelector(".results")
resultsContainer.innerHTML = "<p>New paragraphs</p>"

resultsContainer.style.backgroundColor = "yellow";

//oppgave 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
function createList(theCats) {
    console.log(theCats)
}

createList(cats)