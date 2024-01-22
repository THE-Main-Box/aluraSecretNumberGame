let SecretNumber;
let attempts = 0;
let texto = "";

const numberList = [0];
const lastNumber = numberList[numberList.length - 1];

const answerButton = document.querySelector(".container__botao");
const restartButton = document.querySelector("#reiniciar");
const Restartarea = document.querySelector(".container__input");

const generateAleatoryNumber = () => {
  SecretNumber = Math.floor(Math.random() * 100 + 1);
  numberList.push(SecretNumber);

  if (SecretNumber === lastNumber) {
    generateAleatoryNumber();
  }
};

generateAleatoryNumber();

function exibirTextoNaTela(tag, texto) {
  const campo = document.querySelector(tag);
  campo.innerText = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Male", { rate: 2 });
  return campo;
}

texto="Jogo do número Secreto"
exibirTextoNaTela(".container__texto h1", texto);

texto = "escolha um número entre 1 e 100";
exibirTextoNaTela(".texto__paragrafo", texto);

const verificarChute = () => {
  let answer = parseInt(document.querySelector(".container__input").value);
  attempts++;
  Rarea.value = "";
  Rarea.focus();

  if (SecretNumber === answer) {
    tent = attempts > 1 ? "tentativas" : "tentativa";
    texto = `Você acertou o Número Secreto:${answer} em ${attempts} ${tent}`;
    answerButton.disabled = true;
    restartButton.disabled = false;
  } else if (SecretNumber > answer) {
    texto = `Número Secreto é um pouco maior que ${answer}`;
  } else if (SecretNumber < answer) {
    texto = `Número Secreto é um pouco menor que ${answer}`;
  }
  exibirTextoNaTela(".texto__paragrafo", texto);
};

const restart = () => {
  texto = "escolha um número entre 1 e 10";
  exibirTextoNaTela(".texto__paragrafo", texto);

  Rarea.value = "";

  generateAleatoryNumber();
  answerButton.disabled = false;
  restartButton.disabled = true;

  numberList = [0];
};

generateAleatoryNumber();
