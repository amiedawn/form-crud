const inputForm = document.getElementById('input-form');
const parentFirstName = document.getElementById("parent-first-name");
const parentLastName = document.getElementById("parent-last-name");
const email = document.getElementById("email");
const childName = document.getElementById("child-name");
const grade = document.getElementById("grade");
const tableHeader = document.getElementById("table-header");
const table = document.getElementById("myTable");

function addRecord() {
  let recordCount = tableHeader.length;

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

  // loop to create rows
  // for (let i=0; i<recordCount; i++) {
  //   let row = tableHeader.insertRow(-1);
  //   row.className = "row-class";

  //   }
    
  //  JSON.stringify(Object.fromEntries(Parent));

  //  cell.className = "item";
  
  // extra instances of the object
  // const parent1 = new Parent("Joe", "Brown", "joe@email.com", "Suzy", 2);
  // parent1.getInfo();

  // const parent2 = new Parent("Sal", "Meyer", "sal@email.com", "Ava", 4);
  // parent1.getInfo();

  // const parent3 = new Parent("Sheri", "Jones", "sheri@email.com", "Tommy", 3);
  // parent1.getInfo();

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
  const parent1 = new Parent(parentFirstName, parentLastName, email, childName, grade);
  parent1.getInfo();

  const parent2 = new Parent("Sal", "Meyer", "sal@email.com", "Ava", 4);
  parent2.getInfo();

  const parent3 = new Parent("Sheri", "Jones", "sheri@email.com", "Tommy", 3);
  parent2.getInfo();

  // create columns
  let row = tableHeader.insertRow(recordCount);
  let cell1 = row.insertCell(0);
  cell1.innerHTML = parent1.parentFirstName;
  let cell2 = row.insertCell(1);
   cell2.innerHTML = parent1.parentLastName;
  let cell3 = row.insertCell(2);
   cell3.innerHTML = parent1.email;
   let cell4 = row.insertCell(3);
  cell4.innerHTML = parent1.childName;
  let cell5 = row.insertCell(4);
  cell5.innerHTML = parent1.grade;

  // print record to page
  
 
 
  
  

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

  recordCount++;
};

inputForm.onsubmit = addRecord();