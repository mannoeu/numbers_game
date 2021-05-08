export function validateForm(number, selectedGame) {
  return !selectedGame
    ? "Escolha um dos jogos"
    : !number
    ? "Digite um número entre 1 e 1000"
    : "";
}

export function getFibonacciSequence(num) {
  let value = Number(num);
  if (value <= 1) return 1;

  return getFibonacciSequence(value - 1) + getFibonacciSequence(value - 2);
}
