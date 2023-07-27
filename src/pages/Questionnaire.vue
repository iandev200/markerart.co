<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <!-- Page illustration -->
      <div
        class="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <section class="relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <!-- Contact form -->
            <form @submit="submit" class="max-w-xl mx-auto">
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-gray-300 text-sm font-medium mb-1"
                    for="name"
                    >Name</label
                  >
                  <Field
                    name="name"
                    type="text"
                    class="form-input w-full text-gray-300"
                    placeholder="Enter your first name"
                    v-model="values.name"
                    :rules="nameRules"
                  />
                  <span class="text-red-500">{{ errors.first("name") }}</span>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-gray-300 text-sm font-medium mb-1"
                    for="email"
                    >Email</label
                  >
                  <Field
                    name="email"
                    type="email"
                    class="form-input w-full text-gray-300"
                    placeholder="Enter your email address"
                    v-model="values.email"
                    :rules="emailRules"
                  />
                  <span class="text-red-500">{{ errors.first("email") }}</span>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-gray-300 text-sm font-medium mb-1"
                    for="message"
                    >Message</label
                  >
                  <Field
                    name="message"
                    type="textarea"
                    rows="4"
                    class="form-textarea w-full text-gray-300"
                    placeholder="Write your message"
                    v-model="values.message"
                    :rules="req"
                  />
                  <span class="text-red-500">{{
                    errors.first("message")
                  }}</span>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mt-6">
                <div class="w-full px-3">
                  <button
                    class="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Header from "../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import CtaContact from "../partials/CtaContact.vue";
import Footer from "../partials/Footer.vue";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useField, useForm } from "vee-validate";

export default {
  name: "Questionnaire",
  components: {
    Header,
    PageIllustration,
    CtaContact,
    Footer,
  },
  setup() {
    const { errors, values, validate, resetForm, handleSubmit } = useForm();

    async function submit() {
      try {
        await validate();
        const docRef = await addDoc(collection(db, "leads"), {
          name: values.name,
          email: values.email,
          message: values.message,
        });
        console.log("Document written with ID:", docRef.id);
        resetForm();
      } catch (error) {
        console.error("Error adding document:", error);
      }
    }

    return {
      values,
      errors,
      submit,
    };
  },
};
</script>
