// import { submitForm } from "./send-form";

export default class ValidateForm {
  constructor(form, inputsClassName, ...possibleVioletions) {
    this.form = form;
    this.inputs = form.querySelectorAll(inputsClassName);
    this.possibleVioletions = possibleVioletions;
    this.messages = {
      valueMissing: "Yikes, his field cannot be empty",
      patternMismatch: "Enter valid email, pretty please",
      tooShort: "Please write at least 3 signs, 'Hey' will do! :)",
    };
    this.noValidate();
    this.realtimeValidation();
    this.displayErrors;
  }

  noValidate() {
    this.form.setAttribute("novalidate", true);
  }

  displayErrors(inputValidated, violetion) {
    console.log("errooors");
    inputValidated.nextElementSibling.textContent = "siemanko";
	 }


  realtimeValidation() {
    this.inputs.forEach((input) => {
      input.addEventListener(
        "blur", (event) => {
          let testedInput = event.target;
          let { validity } = testedInput;
          console.log(testedInput);

          // eslint-disable-next-line no-restricted-syntax
          for (let key in validity) {
            if (validity[key] === true && key !== "valid") {
              console.log(`${validity[key]}is validity key`);
              console.log(`${key}is key`);
              console.log(typeof key);
              this.displayErrors(testedInput, key);
            }
          }
        },
        false,
      );
    }, false);
  }
}


//
