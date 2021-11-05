function validateForm() {
    var username = document.forms["contactForm"]["username"].value;
    var firstname = document.forms["contactForm"]["firstname"].value;
    var lastname = document.forms["contactForm"]["lastname"].value;
    var email = document.forms["contactForm"]["email"].value;
    var password = document.forms["contactForm"]["password"].value;
    var cpassword = document.forms["contactForm"]["password-confirm"].value;
    
    if (username == null || username == "") {
        alert("Please insert a username");
        return false;
    }
    
    else if (firstname == null || firstname == "") {
        alert("First Name must be filled out");
        return false;
    } else if (lastname == null || lastname == "") {
        alert("Last Name must be filled out");
        return false;
}else if (email == null || email == "") {
    alert("Email must be filled out");
    return false;

}
else if (password == null || password == "") {
    alert("Password must be filled out");
    return false;

}
else if (password !== cpassword ) {
    alert("The password doesn't match");
    return false;

}
else return true;
}

var leftattempts=3

 function validateAdmin(){

    var username= document.forms["contactForm"]["username"].value;
    var password= document.forms["contactForm"]["password"].value;
    var submitLogin = document.getElementById("login");
    var e = document.getElementById("formchoice");
    var formaction = e.options[e.selectedIndex].value;


    switch (formaction) {
        case "./staff.html":
            if (username == null || username == "") {
                alert("Username must be filled out");
                return false;
            }
            
            else if (password == null || password == "") {
                alert("Passowrd must be filled out");
                return false;
            }
            else{document.forms["contactForm"].action = "./staff.html";
            return true;}

        
        break;
        case "./admin.html":
  

    if (username !="Admin" || password != "Admin") {
        leftattempts--;
        alert("Login failed, Incorrect usename or password, you still have " + leftattempts + " attempt(s).");
        if(leftattempts==0){
        alert("The username or password was incorrect 3 times, the login button is now going to be disabled");
        submitLogin.disabled = true;
        
    }
    return false;
}
else{
    document.forms["contactForm"].action = "./admin.html";

}
break;

        
}
 } 

 