function show_menu() {
    document.getElementById("menu").style.visibility = "visible";
     document.getElementById("menu").style.width= "100%";
     document.getElementById("container").style.zIndex = "-1";
     document.getElementById("menu").style.zIndex = "13";
     document.getElementById("open").style.visibility = "hidden";






}

function hide_menu() {
    document.getElementById("menu").style.visibility = "hidden";
   document.getElementById("open").style.visibility = "visible";

}

function  validate(){
    var name =document.getElementById("name").value;
    if (name=='')
    {
       document.getElementById("eresult").innerHTML="name is Required";
      return false ;}
    
    var adresse =document.getElementById("adresse").value;
    if (adresse=='')
    { document.getElementById("eresult").innerHTML="adresse is Required";
        return false ;}

    var email =document.getElementById("email").value;
    if (email=='')
        { document.getElementById("eresult").innerHTML="email is  Required";
        return false ;
    }
   
   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)==false)
    {  document.getElementById("eresult").innerHTML="email haven't email forme";
    return false ;}
    else{return true;}
}
    
        
    
