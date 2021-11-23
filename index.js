const table = document.getElementById("table");
const addButton = document.getElementById("btn-add");

addButton.onclick = () => {
    table.style.display = "block";
};

function createOutputTable() {
  let recordCount = 1;
  let firstName = "";
  let lastName = "";
  let email = "";
  let childFirstName = "";
  let grade = 1;

  

};

document.getElementById("btn-add").addEventListener("click", createOutputTable);