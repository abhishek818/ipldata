<template>
  <div class="container">
    <v-client-table
      class="customtable"
      :data="matches"
      :columns="Object.keys(titles)"
      :options="options"
    />

    <!--
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" v-for="(value, key) in titles" :key="key">
              {{ key }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(match, index) in matches.results" :key="index">
            <td v-for="(value, key) in match" :key="key">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    -->
  </div>
</template>

<script>
import json from "../../datastuff/matches.json";
//import { ClientTable } from "vue-tables-2";
export default {
  name: "Matches",
  components: {},
  data() {
    return {
      titles: json.results[0],
      matches: json.results,
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
