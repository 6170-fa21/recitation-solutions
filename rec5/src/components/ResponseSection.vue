<template>
  <div>
    <h2>Response:</h2>
    <div class="scrollbox">
      <pre id="response" class="teletype">{{response}}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResponseSection",
  props: ['response'],
  data() {
    return {};
  },
  created: function() {},
  methods: {},
};
</script>

<style></style>
