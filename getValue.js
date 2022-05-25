function startFnc(){
  localStorage.setItem("fname",document.getElementById("nameOne").value);
  localStorage.setItem("gname",document.getElementById("nameTwo").value);
window.location = "game.html";
}
function bobo(){
  document.getElementById("scoreOne").innerHTML = localStorage.getItem("fname")+" :";
  document.getElementById("scoreTwo").innerHTML = localStorage.getItem("gname")+" :";
}
// alert( location.pathname);