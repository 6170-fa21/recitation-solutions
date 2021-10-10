<template>
  <div>
    <router-view v-bind:signedInUser="signedInUser" v-bind:response="response">
    </router-view>
  </div>
</template>

<script>
import { eventBus } from "./main";

export default {
  name: "app",
  components: {},
  data() {
    return {
      signedInUser: "",
      response: "",
    };
  },
  created: function() {
    eventBus.$on("response-change", (data) => {
      this.response = data;
    });
    eventBus.$on("response-error", (error) => {
      this.response = error;
    });
    eventBus.$on("login-success", (data) => {
      this.signedInUser = data.data.username;
    });
  },
  computed: {},
  methods: {},
};
</script>

<style></style>
