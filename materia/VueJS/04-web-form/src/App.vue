<template>
  <SignupForm2 />
</template>

<script>
import SignupForm2 from "./components/SignupForm2";

export default {
  name: "App",
  components: { SignupForm2 },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
  background: #eee;
}
</style>
