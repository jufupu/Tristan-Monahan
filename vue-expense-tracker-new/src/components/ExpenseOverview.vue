<template>
  <div>
    <b-row class="text-center">
      <b-col>
        <div>
          <h6>Total Expenses</h6>
          <h4>
            <strong>${{ totalExpenses }}</strong>
          </h4>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "ExpenseOverview",
  props: {
    totalExpenses: Number
  },
 
};
</script>

<style>
.filter-card:hover {
  cursor: pointer;
  text-decoration: underline;
}

.bg-active-filter {
  background-color: #e9f1fe;
  color: #074297;
}
</style>