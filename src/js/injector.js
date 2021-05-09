const MESSAGE_SELECTOR = ".game__result";

export function Injector(message, selector = MESSAGE_SELECTOR) {
  this.selector = document.querySelector(selector);
  this.message = message;

  this.injectDOM = () => {
    if (this.selector) {
      this.selector.innerHTML = this.message;
    }
  };

  this.setMessage = (newMessage) => {
    this.message = newMessage;
  };

  return {
    selector: this.selector,
    message: this.message,
    injectDOM: this.injectDOM,
    setMessage: this.setMessage,
  };
}
