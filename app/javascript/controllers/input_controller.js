import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['error'];

  validateAlias(event) {
    const alias = event.target.value;
    // Regex to check for special characters
    const regex = /^[a-zA-Z0-9\-_]*$/;

    if (!regex.test(alias)) {
      this.errorTarget.classList.remove('text-ice-blue');
      this.errorTarget.classList.add('text-rojo');
    } else {
      this.errorTarget.classList.remove('text-rojo');
      this.errorTarget.classList.add('text-ice-blue');
    }
  }
}
