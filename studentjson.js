fetch("./students.json")
.then(function(resp) {
    return resp.json();
})
.then(function(data) {
    console.log(data);
    for (let i in data){
    document.querySelector(".test").innerText += data[i].ID;
    }
})
