
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
