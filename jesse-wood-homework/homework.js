let headDiv = document.getElementById("head-div");
let tableDiv = document.getElementById("table-div");
let docTable = document.getElementById("table");
let tableBody = document.getElementById("table-body");
let idInput = document.getElementById("id");
let nameInput = document.getElementById("username");
let classInput = document.getElementById("class");
let levelInput = document.getElementById("level");
let submitButton = document.getElementById("submit-button");

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    console.log("event");

    var id = idInput.value;
    idInput.value = '';
    var username = nameInput.value;
    nameInput.value = '';
    var pClass = classInput.value;
    classInput.value = '';
    var level = levelInput.value;
    levelInput.value = '';
    
    if (id && username && pClass && level) {
        console.log('true')
        var row = document.createElement('tr');
        tableBody.append(row);
        var idCell = document.createElement('td');
        idCell.value = id;
        row.append(idCell);

        var nameCell = document.createElement('td');
        nameCell.value = username;
        row.append(nameCell);

        var classCell = document.createElement('td');
        classCell.value = pClass;
        row.append(classCell);

        var levelCell = document.createElement('td');
        levelCell.value = level;
        row.append(levelCell);
    }
})