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
            <form ref="form" class="max-w-xl mx-auto">
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-gray-300 text-sm font-medium mb-1"
                    for="first-name"
                    >Name</label
                  >
                  <input
                    id="first-name"
                    v-model="name"
                    label="name"
                    type="text"
                    class="form-input w-full text-gray-300"
                    placeholder="Enter your first name"
                    :rules="nameRules"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-gray-300 text-sm font-medium mb-1"
                    for="email"
                    >Email</label
                  >
                  <input
                    v-model="email"
                    id="email"
                    label="email"
                    type="email"
                    class="form-input w-full text-gray-300"
                    placeholder="Enter your email address"
                    :rules="emailRules"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-gray-300 text-sm font-medium mb-1"
                    for="message"
                    >Message</label
                  >
                  <textarea
                    v-model="message"
                    id="message"
                    rows="4"
                    class="form-textarea w-full text-gray-300"
                    placeholder="Write your message"
                    :rules="req"
                  ></textarea>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mt-6">
                <div class="w-full px-3">
                  <button
                    class="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                    @click="submit"
                    type="button"
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

export default {
  name: "Questionnaire",
  components: {
    Header,
    PageIllustration,
    CtaContact,
    Footer,
  },
  methods: {
    async submit() {
      try {
        const docRef = await addDoc(collection(db, "leads"), {
          name: this.name,
          email: this.email,
          message: this.message,
        });
        console.log("Document written with ID:", docRef.id);
      } catch (error) {
        console.error("Error adding document:", error);
      }
    },
  },
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [(v) => !!v || "Name is required"],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      message: "",
      req: [(v) => !!v || "Field is required"],
    };
  },
};
</script>
