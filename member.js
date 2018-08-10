

function validate_name(){
	var name = document.forms["frm1"]["name"].value;
         document.getElementById("err-name").innerHTML="";

	
   if (name.length<5){
      
   	  document.getElementById("err-name").innerHTML="full name minimum 6";
      return false;

   	  
    }
    else if(name.length>21)
    {   	  document.getElementById("err-name").innerHTML="full name maximum 20";
  return false;
   	
}
 }

function validate_adresse()
{ 
		var adresse = document.forms["frm1"]["adresse"].value;
 
    if(adresse=="")
  {
  	 document.getElementById("err-adresse").innerHTML="put your adress please";
     return false
         

}

}
function validate_niveau()
{ 
    var niveau = document.forms["frm1"]["niveau"].value;
 
    if(niveau=="")
  {
     document.getElementById("err-niveau").innerHTML="put your level please";
     return false;
         

}

}
function validate_msg()
{ 
    var message = document.forms["frm1"]["msg"].value;
 
    if(messgae=="")
  {
     document.getElementById("err-msg").innerHTML="put your messgae please";
     return false;
         

}

}

function validate_email()
{
		var email = document.forms["frm1"]["email"].value;
        document.getElementById("err-email").innerHTML="";


	 var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(email)==false)
  {
  	document.getElementById("err-email").innerHTML="enter a valid email";
          return false;

   }
  }   



			

function send()
{
return(validate_name() && validate_email() && validate_pseudo() && validate_pwd() && confirm_pwd());
  

  }
function connecter()
{
return(validate_pseudo() && validate_pwd());
  

  }


function show_menu() {
       document.getElementById("menu").style.visibility = "visible";
        document.getElementById("menu").style.width= "100%";
        document.getElementById("flower").style.zIndex = "-1";
        document.getElementById("menu").style.zIndex = "13";
        document.getElementById("open").style.visibility = "hidden";






}

function hide_menu() {
       document.getElementById("menu").style.visibility = "hidden";
      document.getElementById("open").style.visibility = "visible";

}
