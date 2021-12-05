
function checkCourse(){
var Table = document.getElementById("myTable")
Table.innerHTML = ""
fetch("students.json")
.then(function(resp) {
    return resp.json()
})
.then(function(data) {
    var courseSelect = document.getElementById('course')
    var value = courseSelect.options[courseSelect.selectedIndex].text
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

function checkSemester(){
    var Table = document.getElementById("myTable")
    Table.innerHTML = ""
    fetch("students.json")
    .then(function(resp) {
        return resp.json()
    })
    .then(function(data) {
        var semesterSelect = document.getElementById('semester')
        var value = semesterSelect.options[semesterSelect.selectedIndex].value
        console.log(value)
        for(i in data){
            var arr = data[i].JoiningDate.split("-")
            var MM=arr[1]
            console.log(MM)
        }
        var winterMonths = ["01","02","03","10","11","12"]
        var summerMonths = ["04","05","06","07","08","09"]

            var SS = data.filter(function (entry) {
                if (value === "Winter") return winterMonths.includes(entry.JoiningDate.split("-")[1])
                if (value === "Summer") return summerMonths.includes(entry.JoiningDate.split("-")[1])
        }
        )

        console.log(SS)
        for(i in SS){

            document.getElementById("myTable").innerHTML += `<tr>
                                                            <td>${SS[i].ID}</td>
                                                            <td>${SS[i].FirstName}</td>
                                                            <td>${SS[i].LastName}</td>
                                                            <td>${SS[i].Gender}</td>
                                                            <td>${SS[i].DOB}</td>
                                                            <td>${SS[i].Department}</td>
                                                            <td>${SS[i].EmailID}</td>
                                                            <td>${SS[i].JoiningDate}</td>
                                                            </tr>`
        }
            
    
    
        }
    )
    }


