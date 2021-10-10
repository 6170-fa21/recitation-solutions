<template>
  <div>
    <div v-if="!signedInUser">
      Since you are not signed in, you cannot access the app. Please sign in
      <router-link class="router-link" to="/login">
        here
      </router-link>
    </div>

    <div v-else>
      <header>
        <h1>URL Shortener</h1>
      </header>
      <FormSection />
      <ResponseSection v-bind:response="response" />
    </div>
  </div>
</template>

<script>
import FormSection from "../components/FormSection.vue";
import ResponseSection from "../components/ResponseSection.vue";

export default {
  name: "AuthenticatedMain",
  props: ["signedInUser", "response"],
  components: {
    FormSection,
    ResponseSection,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style></style>
