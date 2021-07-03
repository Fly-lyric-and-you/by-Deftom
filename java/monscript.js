function openNavig() {
document.getElementById("myNavig").style.width = "100%";
}


function closeNavig() {
  document.getElementById("myNavig").style.width = "0%";
}

/*---------------------------------------------------*/

function openNav() {
document.getElementById("myNav").style.width = "100%";
}


function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/*---------------------------------------------------*/

function openNav1() {
document.getElementById("myNav1").style.width = "100%";
}


function closeNav1() {
  document.getElementById("myNav1").style.width = "0%";
}

/*---------------------------------------------------*/

function openNav2() {
document.getElementById("myNav2").style.width = "100%";
}


function closeNav2() {
  document.getElementById("myNav2").style.width = "0%";
}
/*---------------------------------------------------*/



var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}




