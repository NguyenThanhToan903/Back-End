const buttonChangeMode = document.querySelector("#change-mode");
console.log(buttonChangeMode);

//========
//Set cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const currentMode = getCookie("mode");
const body = document.querySelector("body");
body.setAttribute("class", currentMode);

buttonChangeMode.onclick = () => {
  const body = document.querySelector("body");
  const mode = body.getAttribute("class");
  console.log(mode);
  if (mode !== "dark") {
    body.setAttribute("class", "dark");
    setCookie("mode", "dark");
  } else {
    body.setAttribute("class", "light");
    setCookie("mode", "light");
  }
};
