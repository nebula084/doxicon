const favicon = document.getElementById("favicon");

function icon(ico) {
  favicon.setAttribute("href", ico);
}


function setTitle() {
  var x = document.getElementById("thingo").value;
  document.title = x;
  document.cookie = "title=x"
}



function newGame(link, wide = "65%", high = "98%") {
  if (
    document.getElementById('gameWindow') &&
    confirm("Are you sure you want to switch games?")
  ) {
    var y = document.getElementById("gameFrame");
    y.remove();
    var x = document.createElement("iframe");
    x.setAttribute("src", link);
    x.setAttribute("width", wide);
    x.setAttribute("height", high);
    x.setAttribute("id", "gameFrame");
    x.setAttribute("fullscreen", "true");
    x.setAttribute("scrolling", "no");
    document.getElementById('gameWindow').appendChild(x);
  }

}

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}






