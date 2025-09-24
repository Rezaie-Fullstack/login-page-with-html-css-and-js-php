let eyeicon= document.getElementById("aye");
let passwordicon= document.getElementById("password");
eyeicon.onclick=function(){
    if(passwordicon.type=="password"){
        passwordicon.type="text";
        eyeicon.src="photos/open.png"
    }else{
        passwordicon.type="password";
        eyeicon.src="photos/close.png"
    }
}