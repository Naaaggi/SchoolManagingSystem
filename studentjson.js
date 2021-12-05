
function checkCourse(){
var Table = document.getElementById("myTable")
Table.innerHTML = ""
fetch("students.json")
.then(function(resp) {
    return resp.json()
})
.then(function(data) {
    var courseSelect = document.getElementById('course')
    var value = courseSelect.options[courseSelect.selectedIndex].value
    console.log(value)
    var CS = data.filter(function (entry) {
        return entry.Department === value
    });
    console.log(CS)
    for(i in CS){
        document.getElementById("myTable").innerHTML += `<tr>
                                                        <td>${CS[i].ID}</td>
                                                        <td>${CS[i].FirstName}</td>
                                                        <td>${CS[i].LastName}</td>
                                                        <td>${CS[i].Gender}</td>
                                                        <td>${CS[i].DOB}</td>
                                                        <td>${CS[i].Department}</td>
                                                        <td>${CS[i].EmailID}</td>
                                                        <td>${CS[i].JoiningDate}</td>
                                                        </tr>`
    }
        


    }
)
}


