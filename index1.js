//const inputForm = document.querySelector('input-form');
const parentFirstName = document.querySelector("parent-first-name");
const parentLastName = document.querySelector("parent-last-name");
const email = document.querySelector("email");
const childName = document.querySelector("child-name");
const grade = document.querySelector("grade");
const tableHeader = document.getElementById("table-header");
const table = document.getElementById("myTable");

function addRecord() {
  let recordCount = 1;

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
  const parent1 = new Parent("Joe", "Brown", "joe@email.com", "Suzy", 2);
  parent1.getInfo();

  const parent2 = new Parent("Sal", "Meyer", "sal@email.com", "Ava", 4);
  parent1.getInfo();

  const parent3 = new Parent("Sheri", "Jones", "sheri@email.com", "Tommy", 3);
  parent1.getInfo();

  // array of all objects
  let allParents = [parentFirstName, parentLastName, email, childName, grade];

  // array of all object names
  let allParentsName = [
    parent1.parentFirstName, parent2.parentFirstName, parent3.parentFirstName
  ];

  // onsubmit event
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const inputForm = document.querySelectorAll('#input-form');
    const values = Array.from(inputForm).map(el => el.value);
    const res = allParents.filter(a => values.includes(a.parentFirstName));
    display(res);
  });

  // create new record
  function createRecord() {
    let tbodyEl = document.querySelectorAll('#users');
    let newRow = tbodyEl[0].insertRow();
    return newRow;
  };

  // create data in record
  function createData(el, newTr) {
    let newEl = document.createElement('td');
    let elementId = document.querySelectorAll("td").length;
    newEl.setAttribute('id', elementId);
    newEl.innerHTML = el;
    newTr.appendChild(newEl);
  };

  // print new record
  function display(element) {
    element.forEach(e => {
      const newTr = createRecord();
      createData(e.parentFirstName, newTr);
      createData(e.parentLastNme, newTr);
      createData(e.email, newTr);
      createData(e.childName, newTr);
      createData(e.grade, newTr);
    })
  };

  // loop to create rows
  // for (let i=0; i<recordCount; i++) {
  //   let row = tableHeader.insertRow(-1);
  //   row.className = "row-class";

  //   }

  //  JSON.stringify(Object.fromEntries(Parent));

  //  cell.className = "item";

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
};

//inputForm.onsubmit = addRecord();