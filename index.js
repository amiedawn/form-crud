let inputForm = document.querySelector('#input-form');
let parentFirstName = document.querySelector("#parent-first-name");
let parentLastName = document.querySelector("#parent-last-name");
let email = document.querySelector("#email");
let childName = document.querySelector("#child-name");
let grade = document.querySelector("#grade");
let tableHeader = document.getElementById("#table-header");
let table = document.getElementById("#myTable");
let button = document.querySelector("#submit");




// define class Parent with class declaration
class Parent {
  constructor(parentFirstName, parentLastName, email, childName, grade) {
    this.parentFirstName = parentFirstName;
    this.parentLastName = parentLastName;
    this.email = email;
    this.childName = childName;
    this.grade = grade;
  }
  getInfo() {
    return (
      this.parentFirstName,
      this.parentLastName,
      this.email,
      this.childName,
      this.grade
    );
  }
}

// create extra instances of the object
let parent1 = new Parent("Joe", "Brown", "joe@email.com", "Suzy", 2);
parent1.getInfo();

let parent2 = new Parent("Sal", "Meyer", "sal@email.com", "Ava", 4);
parent2.getInfo();

let parent3 = new Parent("Sheri", "Jones", "sheri@email.com", "Tommy", 3);
parent3.getInfo();

// array of all objects
let allParents = [parent1, parent2, parent3];

// array of all object names
let allParentsName = [
  parent1.parentFirstName,
  parent2.parentFirstName,
  parent3.parentFirstName,
];

// read input form
function readInputForm(e) {
  e.preventDefault();

  const containerInput = document.querySelectorAll("#container-input");
  const values = Array.from(containerInput).map((el) => el.value);
  const res = allParents.filter((a) => values.includes(a.parentFirstName));
  display(res);
};


// onsubmit event
// button.addEventListener("click", (e) => {
//   e.preventDefault();

//   const containerInput = document.querySelectorAll("#container-input");
//   const values = Array.from(containerInput).map((el) => el.value);
//   const res = allParents.filter((a) => values.includes(a.parentFirstName));
//   display(res);
// });

// create new record
function createRecord() {
  alert("createRecord works");
  let tbodyEl = document.querySelectorAll("#users");
  let newRow = tbodyEl[0].insertRow();
  return newRow;
};

// create new cell
function createData(el, newTr) {
  alert("create data works");
  let newEl = document.createElement("td");
  let elementId = document.querySelectorAll("td").length;
  newEl.setAttribute("id", elementId);
  newEl.innerHTML = el;
  newTr.appendChild(newEl);
};

// print new record
function display(element) {
  alert("display data");
  element.forEach((e) => {
    const newTr = createRecord();
    createData(e.parentFirstName, newTr);
    createData(e.parentLastNme, newTr);
    createData(e.email, newTr);
    createData(e.childName, newTr);
    createData(e.grade, newTr);
  });
};

// create columns

// let cell1 = row.insertCell(0);
// let cell2 = row.insertCell(1);
// let cell3 = row.insertCell(2);
// let cell4 = row.insertCell(3);
// let cell5 = row.insertCell(4);

// // print record to page
// cell1.innerHTML = new Parent(0);
// cell2.innerHTML = parent2.parentLastName;
// cell3.innerHTML = new Parent(0);
// cell4.innerHTML = parent2.childName;
// cell5.innerHTML = parent2.grade;

/** */

// extra instances of the object
// const parent1 = new Parent("Joe", "Brown", "joe@email.com", "Suzy", 2);
// parent1.getInfo();

// const parent2 = new Parent("Sal", "Meyer", "sal@email.com", "Ava", 4);
// parent2.getInfo();

// const parent3 = new Parent("Sheri", "Jones", "sheri@email.com", "Tommy", 3);
// parent2.getInfo();

// create columns
// let row = tableHeader.insertRow(recordCount);
// let cell1 = row.insertCell(0);
// let cell2 = row.insertCell(1);
// let cell3 = row.insertCell(2);
// let cell4 = row.insertCell(3);
// let cell5 = row.insertCell(4);

// // print record to page
// cell1.innerHTML = new Parent(0);
// cell2.innerHTML = parent1.parentLastName;
// cell3.innerHTML = new Parent(0);
// cell4.innerHTML = parent1.childName;
// cell5.innerHTML = parent1.grade;

//   cell1.innerHTML = new Parent(0);
//   cell2.innerHTML = parent2.parentLastName;
//   cell3.innerHTML = new Parent(0);
//   cell4.innerHTML = parent2.childName;
//   cell5.innerHTML = parent2.grade;

//     cell1.innerHTML = new Parent(0);
//     cell2.innerHTML = parent3.parentLastName;
//     cell3.innerHTML = new Parent(0);
//     cell4.innerHTML = parent3.childName;
//     cell5.innerHTML = parent3.grade;

// recordCount++;


//inputForm.onsubmit = addRecord();

console.log("i am here");

// inputForm.onsubmit = addRecord();

