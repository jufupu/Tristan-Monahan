<template>
  <div>
    <b-row>
      <data-table></data-table>
    </b-row>
  </div>
</template>

<script>
import DataTable from "@/components/DataTable.vue";

export default {
  name: "Home",
  components: {
    DataTable,
  },
};
</script>