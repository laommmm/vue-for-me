<template>
  <div class="home">
    <img alt="Vue logo" src="./images/logo.png">
    <Test />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "home",
  mounted() {
    this.getJSON();
  },
  methods: {
    getJSON() {
      // ajax demo
      this.http("get", this.api.a_hello).then(
        res => {
          let response = res.data;
          console.log(response);
        },
        error => {
          alert(error);
        }
      );
    }
  },
  components: {
    HelloWorld
  }
};
</script>
