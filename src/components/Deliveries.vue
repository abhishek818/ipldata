<template>
  <div class="container">
    <v-client-table
      class="customtable"
      :data="deliveries"
      :columns="Object.keys(titles)"
      :options="options"
    />
  </div>
</template>

<script>
import json from "../../datastuff/deliveries.json";
export default {
  name: "Deliveries",
  components: {},
  data() {
    return {
      titles: json.results[0],
      deliveries: json.results,
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
