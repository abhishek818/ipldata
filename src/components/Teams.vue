<template>
  <div class="container">
    <v-client-table
      class="customtable"
      :data="teams"
      :columns="Object.keys(titles)"
      :options="options"
    />
  </div>
</template>

<script>
import json from "../../datastuff/teams.json";
export default {
  name: "Teams",
  components: {},
  data() {
    return {
      titles: json.results[0],
      teams: json.results,
      options: {},
    };
  },
};
</script>

<style scoped>
.customtable {
  padding: 10px;
}
</style>
