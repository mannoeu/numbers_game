import { Selectors } from "./selectors";
import { Games } from "./games";
import { validateForm } from "../utils";

function handleSubmit(e) {
  e.preventDefault();
  const number = Selectors.inputNumber.value;
  const selectedGame = Array.from(Selectors.radios).find(
    (item) => item["checked"]
  );

  const hasInvalid = validateForm(number, selectedGame);

  if (hasInvalid) {
    return alert(hasInvalid);
  }

  return Games.run(selectedGame.value);
}

export function applyListeners() {
  Selectors.form.addEventListener("submit", handleSubmit);
}
