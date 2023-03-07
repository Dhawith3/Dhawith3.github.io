//first
function one() {
  document.getElementById('one').id = 'aclicked';

  const text = document.createTextNode("1");
  const pNode = document.getElementById("realpass");
  pNode.appendChild(text);

  password()
}

function two() {
  document.getElementById('two').id = 'bclicked';

  const text = document.createTextNode("2");
  const pNode = document.getElementById("realpass");
  pNode.appendChild(text);

  password()
}

function three() {
  document.getElementById('three').id = 'cclicked';

  const text = document.createTextNode("3");
  const pNode = document.getElementById("realpass");
  pNode.appendChild(text);

  password()
}

//second
function four() {
  document.getElementById('four').id = 'dclicked';

  const text = document.createTextNode("4");
  const pNode = document.getElementById("realpass");
  pNode.appendChild(text);

  password()
}

function five() {
  document.getElementById('five').id = 'eclicked';

  const text = document.createTextNode("5");
  const pNode = document.getElementById("realpass");
  pNode.appendChild(text);

  password()
}

function six() {
  document.getElementById('six').id = 'fclicked';

  const text = document.createTextNode("6");
  const pNode = document.getElementById("realpass");
  pNode.appendChild(text);

  password()
}

//third
function seven() {
  document.getElementById('seven').id = 'gclicked';

  const text = document.createTextNode("7");
  const pNode = document.getElementById("realpass");
  pNode.appendChild(text);

  password()
}

function eight() {
  document.getElementById('eight').id = 'hclicked';

  const text = document.createTextNode("8");
  const pNode = document.getElementById("realpass");
  pNode.appendChild(text);

  password()
}

function nine() {
  document.getElementById('nine').id = 'iclicked';

  const text = document.createTextNode("9");
  const pNode = document.getElementById("realpass");
  pNode.appendChild(text);

  password()
}

//fourth
function cancel() {
  window.location.href = 'index.html';
}

function zero() {
  document.getElementById('zero').id = 'kclicked';

  const text = document.createTextNode("0");
  const pNode = document.getElementById("realpass");
  pNode.appendChild(text);

  password()
}

function enter() {
  a = document.getElementById("realpass").innerHTML;
  b = document.getElementById("fakepass").innerHTML;

  if (a == b){
    window.location.href = 'phone.html';
  } 
  else {
    alert("Password is incorrect.")
    window.location.href = 'index.html';
  }
}

function password(){
  const text = document.createTextNode(".");
  const pNode = document.getElementById("passcode");
  pNode.appendChild(text);
  document.getElementById('passcode').style.marginBottom = "-10px";
}