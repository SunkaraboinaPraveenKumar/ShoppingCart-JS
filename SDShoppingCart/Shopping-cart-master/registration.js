function validateForm(){
    const nameUser=document.getElementById("name").value;
    const password=document.getElementById("password").value;
    const user=[nameUser,password];
    localStorage.setItem("UserData",JSON.stringify(user));
    const confirm=document.getElementById("repeat-password").value;
    const small = "abcdefghijklmnopqrstuvwxyz";
    const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special = "!@#$%^&*()_+-=";
    const numeric = "1234567890";
    let s = false;
    let c = false;
    let spec = false;
    let num = false;
    const pass = password;
    if(password.length<8){
        alert("Password is too small atleast 8 characters!");
        return false;
    }
    if(password!==confirm){
        alert("Passwords not Matching!!");
        return false;
    }
    for (let i = 0; i < pass.length; i++) {
        if (small.includes(pass[i])) {
            s = true;
        }
        if (capital.includes(pass[i])) {
            c = true;
        }
        if (special.includes(pass[i])) {
            spec = true;
        }
        if (numeric.includes(pass[i])) {
            num = true;
        }
    }
    if ( s==false || c==false || spec==false || num==false) {
        alert("The password must be the combination of small,caps,special and numeric symbols");
        return false;
    }
    alert("Registration Successfull!");
    return true;
}
