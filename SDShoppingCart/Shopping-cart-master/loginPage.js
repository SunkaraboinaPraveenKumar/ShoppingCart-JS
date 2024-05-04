
const user=localStorage.getItem("UserData");

const userdata=JSON.parse(user);

const username=document.getElementById("username");

const password1=document.getElementById("password1");

function validateLogin(){
    if(username.value!==userdata[0]){
        alert("UserName doesn't match!");
        return false;
    }
    else if(password1.value!==userdata[1]){
        alert("Password is incorrect re-try!");
        return false;
    }
    alert("Login Successfull!");
    return true;
}