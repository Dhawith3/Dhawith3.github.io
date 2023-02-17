/ (A) CREATE NUMPAD HTML
hwrap: null, // numpad wrapper container
hpad: null, // numpad itself
hdisplay: null, // number display
hbwrap: null, // buttons wrapper
hbuttons: {}, // individual buttons
init: () => {
  // (A1) WRAPPER
  numpad.hwrap = document.createElement("div");
  numpad.hwrap.id = "numWrap";
 
  // (A2) ENTIRE NUMPAD ITSELF
  numpad.hpad = document.createElement("div");
  numpad.hpad.id = "numPad";
  numpad.hwrap.appendChild(numpad.hpad);
 
  // (A3) DISPLAY
  numpad.hdisplay = document.createElement("input");
  numpad.hdisplay.id = "numDisplay";
  numpad.hdisplay.type = "text";
  numpad.hdisplay.disabled = true;
  numpad.hdisplay.value = "0";
  numpad.hpad.appendChild(numpad.hdisplay);
 
  // (A4) NUMBER BUTTONS
  numpad.hbwrap = document.createElement("div");
  numpad.hbwrap.id = "numBWrap";
  numpad.hpad.appendChild(numpad.hbwrap);

  // (A5) BUTTONS
  let buttonator = (txt, css, fn) => {
    let button = document.createElement("div");
    button.innerHTML = txt;
    button.classList.add(css);
    button.onclick = fn;
    numpad.hbwrap.appendChild(button);
    numpad.hbuttons[txt] = button;
  };
 
  // 7 TO 9
  for (let i=7; i<=9; i++) { buttonator(i, "num", () => { numpad.digit(i); }); }
  // BACKSPACE
  buttonator("&#10502;", "del", numpad.delete);
  // 4 TO 6
  for (let i=4; i<=6; i++) { buttonator(i, "num", () => { numpad.digit(i); }); }
  // CLEAR
  buttonator("C", "clr", numpad.reset);
  // 1 to 3
  for (let i=1; i<=3; i++) { buttonator(i, "num", () => { numpad.digit(i); }); }
  // CANCEL
  buttonator("&#10006;", "cx", () => { numpad.hide(1); });
  // 0
  buttonator(0, "zero", () => { numpad.digit(0); });
  // .
  buttonator(".", "dot", numpad.dot);
  // OK
  buttonator("&#10004;", "ok", numpad.select);
 
  // (A6) ATTACH NUMPAD TO HTML BODY
  document.body.appendChild(numpad.hwrap);
}
window.addEventListener("DOMContentLoaded", numpad.init);
