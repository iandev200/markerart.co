import { createApp } from "vue";
import router from "./router";
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";

// Configure the validation messages
configure({
  generateMessage: (context) => {
    const messages = {
      required: "This field is required.",
      email: "Please enter a valid email address.",
    };
    const message = messages[context.rule.name];
    return message ? message : `The ${context.field} field is invalid.`;
  },
});
