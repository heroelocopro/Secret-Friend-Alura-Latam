// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var inputAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let listaSorteados = document.getElementById("resultado");
let amigos = [];
let amigosSorteados = [];
// funciones
function agregarAmigo() {
  let amigo = firstUpperCaseLetter(inputAmigo.value);
  if (amigo == null || amigo.length == 0 || amigo > 0 || amigo <= 0) {
    showMessageError("Error,debe ser texto,no debe estar vacio, ni ser nulo");
    return;
  }
  if (amigos.includes(amigo)) {
    showMessageError("ese amigo ya existe.");
  } else {
    hideMessageError();
    inputAmigo = resetInput(inputAmigo);
    amigos.push(amigo);
    mostrarAmigos();
  }
}
function sortearAmigo() {
  let randomNumber = Math.floor(Math.random() * amigos.length);
  randomNumber == amigos.length ? randomNumber : randomNumber;
  let randomFriend = amigos[randomNumber];
  amigosSorteados.length == amigos.length
    ? showMessageWarning("No quedan mas amigos para sortear.")
    : hideMessageWarning();
  amigosSorteados.includes(randomFriend)
    ? sortearAmigo()
    : amigosSorteados.push(randomFriend);
  mostrarAmigosSorteados();
}
function mostrarAmigosSorteados() {
  listaSorteados.innerHTML = "";
  amigosSorteados.forEach((amigo) => {
    listaSorteados.innerHTML += `<li> ${amigo} </li>`;
  });
}
function mostrarAmigos() {
  listaAmigos.innerHTML = "";
  amigos.forEach((amigo) => {
    listaAmigos.innerHTML += `<li> ${amigo} </li>`;
  });
}
function resetInput(input) {
  input.value = "";
  return input;
}
function showMessageError(message) {
  let error = document.getElementById("error");
  var message = firstUpperCaseLetter(message);
  if (error.classList.contains("invisible")) {
    error.classList.remove("invisible");
    error.innerText = message;
  }
}
function hideMessageError() {
  let error = document.getElementById("error");
  if (error.classList.contains("invisible") == false) {
    error.classList.add("invisible");
  }
}
function showMessageWarning(message) {
  let warning = document.getElementById("warning");
  var message = firstUpperCaseLetter(message);
  if (warning.classList.contains("invisible")) {
    warning.classList.remove("invisible");
    warning.innerText = message;
  }
}
function hideMessageWarning() {
  let warning = document.getElementById("warning");
  if (warning.classList.contains("invisible") == false) {
    warning.classList.add("invisible");
  }
}
function firstUpperCaseLetter(text) {
  if (text.length == 0) {
    return "";
  }
  let UpperText = "";
  for (let i = 0; i <= text.length - 1; i++) {
    if (i == 0) {
      UpperText += text.charAt(i).toUpperCase();
    } else {
      UpperText += text.charAt(i).toLowerCase();
    }
  }
  return UpperText;
}
