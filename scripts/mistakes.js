function mistakesReport() {
  let mistakeList = JSON.parse(localStorage.getItem("mistakeList"));
  let mistakes = mistakeList.length;
  let statBox = document.getElementById("stats");
  let report = "";
  if (mistakes > 0) {
    report += "You had " + mistakes + " mistakes.<br />";
    report += "You missed: <br /><br />"
    for (var m = 0; m < mistakes; m++) {
      var x = mistakeList[m][0];
      var y = mistakeList[m][1];
      report += x + " * " + y + " = " + x * y + "<br />";
    }
    localStorage.setItem("table", 1);
  }
  else {
    statBox.style.backgroundImage = "url('https://acegif.com/wp-content/gif/confetti-25.gif')";
    report = "<br /><br />You had ZERO mistakes! ROCK ON, Spartan!";
    statBox.style.height = "300px";
    statBox.style.width = "500px";
    statBox.style.fontSize = "24pt";
    statBox.style.color = "black";
    statBox.style.backgroundColor = "white";
  }
  statBox.innerHTML = report;
}