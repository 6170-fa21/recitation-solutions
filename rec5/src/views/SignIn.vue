<template>
  <div>
    <h1>Sign In Page</h1>
    <h3 v-if="signedInUser">
      You are signed in as {{ signedInUser }}.<br />
      You can safely go to the
      <router-link class="router-link" to="/">home page</router-link>
    </h3>
    <div v-else>
      <form id="sign-in" v-on:submit.prevent="signIn">
        <div>
          <label for="username">Username:</label>
          <input v-model="username" id="username" name="username" />
        </div>
        <input type="submit" value="Sign In" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../main";

export default {
  name: "SignIn",
  props: ["signedInUser", "response"],
  components: {},
  data() {
    return {
      username: "",
    };
  },
  computed: {},
  methods: {
    signIn() {
      axios
        .post("/api/session", {
          username: this.username,
        })
        .then((response) => {
          eventBus.$emit("login-success", {
            data: response.data,
          });
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>

<style></style>
