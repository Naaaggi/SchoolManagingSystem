var selectedRow = null

function onFormSubmit() {
    if (validateSI() && validateFN()  && validateEM())  {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["StudentId"] = document.getElementById("StudentId").value;
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["gender"] = document.querySelector('input[name="gender"]:checked').value;
        formData["email"] = document.getElementById("email").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.StudentId;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.firstname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.lastname;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.dob;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.gender;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.email;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("StudentId").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("StudentId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("firstname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[3].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[4].innerHTML;
    document.getElementById("email").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.StudentId;
    selectedRow.cells[1].innerHTML = formData.firstname;
    selectedRow.cells[2].innerHTML = formData.lastname;
    selectedRow.cells[3].innerHTML = formData.dob;
    selectedRow.cells[4].innerHTML = formData.gender;
    selectedRow.cells[5].innerHTML = formData.email;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validateSI() {
    isValid = true;
    if (document.getElementById("StudentId").value == "") {
        isValid = false;
        document.getElementById("StudentIdValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("StudentIdValidationError").classList.contains("hide"))
            document.getElementById("StudentIdValidationError").classList.add("hide");
    }
    return isValid;
}
function validateFN() {
    isValid = true;
    if (document.getElementById("firstname").value == "") {
        isValid = false;
        document.getElementById("FirstNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("FirstNameValidationError").classList.contains("hide"))
            document.getElementById("FirstNameValidationError").classList.add("hide");
    }
    return isValid;
}

function validateEM() {
    isValid = true;
    if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("EmailValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("EmailValidationError").classList.contains("hide"))
            document.getElementById("EmailValidationError").classList.add("hide");
    }
    return isValid;
}


