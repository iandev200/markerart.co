import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email } from "@vee-validate/rules";

// Use the Vee-Validate components
const app = createApp(App);
app.use(router);
app.component("Form", Form);
app.component("Field", Field);
app.component("ErrorMessage", ErrorMessage);

// Define the validation rules and messages
defineRule("required", required);
defineRule("email", email);

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

app.mount("#app");
