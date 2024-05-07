

function makeNoButtonAppear() {
    var top = Math.random() * 400;

    var left = Math.random() * 400;
    document.getElementById("no").style.position = "absolute";
  
    document.getElementById("no").style.top = top + "px";
    document.getElementById("no").style.left = left + "px";
    document.getElementById("no").style.display = "block";


   
  }
function appearAfterDelay() {
    setTimeout(makeNoButtonAppear, Math.random() * 2000);

}

appearAfterDelay();

document.getElementById("no").onclick = function() { 
    document.getElementById("no").style.display = "none";
   
    appearAfterDelay();
}

document.getElementById("yes").onclick = function() {
    alert("Thank you for your feedback!");
}