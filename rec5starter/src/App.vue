<template>
  <div>
    <header>
      <h1>URL Shortener</h1>
    </header>
    <FormSection />
    <ResponseSection />
  </div>
</template>

<script>
import FormSection from "./components/FormSection.vue";
import ResponseSection from "./components/ResponseSection.vue";

export default {
  name: "app",
  components: { FormSection, ResponseSection },
  data() {
    return {};
  },
  created: function() {},
  computed: {},
  methods: {},
};
</script>

<style></style>
