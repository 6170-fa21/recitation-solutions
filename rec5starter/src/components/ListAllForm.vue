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
    listShortsUrls() {},
  },
};
</script>

<style></style>
