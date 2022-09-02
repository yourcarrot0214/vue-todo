<template>
  <div class="footer-container">
    <span class="all-clear-button" v-on:click="allClear">All Clear</span>
  </div>
</template>

<script>
export default {
  methods: {
    allClear: function() {
      // 📡
      this.$emit("allClear");
    }
  }
};
</script>

<style>
.footer-container {
  margin: 1rem 0;
  padding: 0.5rem 0;
  width: 100%;
}
.all-clear-button {
  border: 3px solid #bdbdbd;
  border-radius: 6px;
  font-size: 1.5rem;
  padding: 0 0.5rem;
  color: #bdbdbd;
}
.all-clear-button:hover {
  cursor: pointer;
  box-shadow: 0px 5px 5px;
  color: #424242;
}
</style>