<template>
  <div class="home">
    <img alt="IPL logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to IPL Data App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
.home{
    margin-top: 50px;
}
</style>
