<template>
  <!-- TODO: use 'short-container-popular' : 'short-container' CSS classes to delineate popular shorts -->
  <div>
    <div class="short-name"> {{ short.name }}</div>
    <p>Creator ID: {{ creatorIdentity }}</p>
    <p>Number of times visited: {{ visitCount }}</p>
    <p>Short URL: <a target="_blank" v-bind:href=" 'http://localhost:3000/' + short.name" v-on:click="incrementShortCount">
      http://localhost:3000/{{short.name}}
    </a> </p>
    <a target="_blank" v-bind:href="short.url">
      {{ short.url }}
    </a>
    <div class="short-item-actions">
      <input class="edit" v-model.trim='url' type="text" name="url" placeholder="New Url">
      <button v-on:click="updateShort">Update</button>
      <button v-on:click="deleteShort">Delete</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../main";

export default {
  name: "ShortListItem",

  props: {
    short: Object,
    // TODO: create a popular prop
  },

  data() {
    return {
      url: "",
    };
  },

  computed: {
    creatorIdentity: function() {
      return this.short.creator ? this.short.creator : "anonymous";
    },
    visitCount: function() {
      return this.short.count;
    }
  },

  methods: {
    updateShort: function() {
      const body = { url: this.url, isCount: false};
      axios
        .put(`/api/shorts/${this.short.name}`, body)
        .then(() => {
          // handle success
          eventBus.$emit("update-short-success", this.short);
        })
        .catch(() => {
          // handle error
          eventBus.$emit("update-short-error", this.short);
        })
        .then(() => (this.url = ""));
    },

    deleteShort: function() {
      axios
        .delete(`/api/shorts/${this.short.name}`, {})
        .then(() => {
          eventBus.$emit("delete-short-success", this.short);
        })
        .catch(() => {
          eventBus.$emit("delete-short-error", this.short);
        });
    },

    incrementShortCount: function() {
      // TODO: implement incrementing short API call here
    }
  }
};
</script>