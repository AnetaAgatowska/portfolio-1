/* eslint-disable guard-for-in */
import { submitForm } from "./send-form";

export default class ValidateForm {
  constructor(form, inputsClassName, errorMsgClassName, messages) {
    this.form = form;
    this.inputs = form.querySelectorAll(inputsClassName);
    this.errorMsgList = document.querySelectorAll(errorMsgClassName);
    this.messages = messages;
    this.noValidate();
    this.realtimeValidation();
    this.validateOnSubmit();
  }

  noValidate() {
    this.form.setAttribute("novalidate", true);
  }

  displayErrors(inputValidated, violetion) {
    const input = inputValidated;
    input.nextElementSibling.textContent = this.messages[violetion];
    input.setAttribute("aria-describedby", `error-for-${inputValidated.id}`);
  }

  inputsValidation(testedInput) {
    let { validity } = testedInput;

    // eslint-disable-next-line no-restricted-syntax
    for (let violetion in validity) {
      if (validity[violetion] === true && violetion !== "valid") {
        this.displayErrors(testedInput, violetion);
        testedInput.nextElementSibling.style.webkitTextFillColor = "#ff2424";
        return;
      }

      this.displayErrors(testedInput, "check");
      testedInput.nextElementSibling.style.webkitTextFillColor = "#5eb15e";
    }
  }


  realtimeValidation() {
    this.inputs.forEach((input) => {
      input.addEventListener(
        "blur", (e) => {
          this.inputsValidation(e.target);
        },
        false,
      );
    });
  }


  validateOnSubmit() {
    this.form.addEventListener(
      "submit", (e) => {
        e.preventDefault();
        console.log(this.inputs);
        this.inputs.forEach((input) => {
          this.inputsValidation(input);
        });
      }, false,
    );
  }
}
