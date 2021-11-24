let inputForm = document.getElementById("input-form");
let parentFirstName = document.getElementById("parent-first-name");
let parentLastName = document.getElementById("parent-last-name");
let email = document.getElementById("email");
let childName = document.getElementById("child-name");
let grade = document.getElementById("grade");
let tableHeader = document.getElementById("table-header");


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

// extra instances of the object
const parentObj = new Parent(
  parentFirstName,
  parentLastName,
  email,
  childName,
  grade
);
parent1.getInfo();

// const parent2 = new Parent("Sal", "Meyer", "sal@email.com", "Ava", 4);
// parent2.getInfo();

// const parent3 = new Parent("Sheri", "Jones", "sheri@email.com", "Tommy", 3);
// parent3.getInfo();

// create columns and rows
function addRecord() {
  let table = document.getElementById("myTable").insertRow(document.getElementById('myTable').rows.length);
  let cell1 = table.insertCell(0);
  let cell2 = table.insertCell(1);
  let cell3 = table.insertCell(2);
  let cell4 = table.insertCell(3);
  let cell5 = table.insertCell(4);
  let cell6 = table.insertCell(5);

  // read input values?
  cell1.innerHTML = parentObj.parentFirstName.value;
  cell2.innerHTML = parentObj.parentLastName.value;
  cell3.innerHTML = parentObj.email.value;
  cell4.innerHTML = parentObj.childName.value;
  cell5.innerHTML = parentObj.grade.value;
  cell6.innerHTML = "<input type='button' value='Delete' onclick='deleteRecord(this)' />;"

//  const parentFirstName = document.getElementById("parent-first-name").value; ??

};
  // display values from input form to record in table
  function printValues(parentObj) {
    // for <td>
    let table = document.getElementById("myTable").rows[0].cells.length;
    document.querySelectorAll("#input-form").innerHTML = parentObj;
    let arr = new Array();

    for (let i = 0; i < document.getElementById("myTable").rows.length; i++) {
      arr[i] = {"54":document.getElementById("myTable").rows[i].cells[0].innerHTML, "87":document.getElementById("myTable").rows[i].cells[1].innerHTML};
    };

    let (answer) = confirm("Are you sure?");
    let json = { errorCode:1000, message: 'Success', data: arr};
    
    if (answer) {
      alert(JSON.stringify(json));
    } else {}

  };



  

  recordCount++;
  
  // let recordCount = table.length;


  // let row = table.insertRow(recordCount);
inputForm.onsubmit = addRecord();
