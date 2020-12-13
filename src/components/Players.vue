<template>
  <div class="container">
    <v-client-table
      class="customtable"
      :data="players"
      :columns="Object.keys(titles)"
      :options="options"
    />
  </div>
</template>

<script>
import json from "../../datastuff/players.json";
export default {
  name: "Players",
  components: {},
  data() {
    return {
      titles: json[0],
      players: json,
      options: {},
    };
  },
  created() {
    console.log(this.players);
  },
};
</script>

<style scoped>
.customtable {
  padding: 10px;
}
</style>
