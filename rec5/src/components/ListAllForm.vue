<template>
  <div>
    <form id="list-all">
      <h3>List All Short URLs</h3>
      <input
        type="submit"
        value="List Short URLs"
        v-on:click.prevent="listShortUrls"
      />
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../main";

export default {
  name: "ListAllForm",
  props: [],
  data() {
    return {};
  },
  created: function() {},
  methods: {
    listShortUrls() {
      // Try fetching all shorts stored on the server and show the response
      axios
        .get(`/api/shorts`)
        .then((response) =>
          eventBus.$emit("response-change", {
            data: response.data,
            status: response.status,
          })
        )
        .catch((error) =>
          eventBus.$emit("response-error", {
            data: error.data,
            status: error.status,
          })
        );
    },
  },
};
</script>

<style></style>
