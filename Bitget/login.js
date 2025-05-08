function func(event){
    event.preventDefault();
    const email= document.getElementById("Email").value;
    const password = document.getElementById('Password').value;

    if(email && password){
        window.location.href = "login2.html";
    }
    else{
        return;
    }

}