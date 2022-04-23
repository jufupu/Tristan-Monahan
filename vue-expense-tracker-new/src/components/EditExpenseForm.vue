<template>
  <b-form class="mt-3">
    <b-row>
      <b-row>
        <h4 class="text-secondary">Expense Details</h4>
      </b-row>
      <b-col cols="6">
        <b-form-group id="item" label="Item" label-for="item">
          <b-form-input
            id="item"
            type="text"
            placeholder="item"
            v-model="expense.item"
          ></b-form-input>
        </b-form-group>
      </b-col>      
    </b-row>
    <b-row class="mt-3">
      <b-col cols="6">
        <b-form-group id="amount" label="Amount ($)" label-for="amount">
          <b-form-input
            id="amount"
            type="text"
            placeholder="$0.00"
            v-model="expense.amount"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row> 
	<b-row>
      <b-col cols="4">
        <b-form-group
          id="category"
          label="Category"
          label-for="category"
        >
          <b-form-select
            v-model="expense.category"
			:options="options"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    
	<b-row>
      <b-col cols="4">
        <b-form-group
          id="location"
          label="Location"
          label-for="location"
        >
          <b-form-input
            id="location"
            type="text"
            placeholder="KFC"
            v-model="expense.location"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="4">
        <b-form-group
          id="spent_on"
          label="Spent On"
          label-for="spent_on"
        >
          <b-form-input
            id="spent_on"
            type="date"
            v-model="expense.spent_on"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>    
    <b-row class="mt-4">
      <b-col cols="3">
        <b-button variant="primary" class="px-5" @click="updateExpense"
          >Update Expense</b-button
        >
      </b-col>
      <b-col>
        <b-button @click="triggerClose">Close</b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import axios from "axios";

export default {
  name: "EditExpenseModal",
  props:{
      expenseId: Number,
  },
  data() {
    return {
      expense: {},
	  options:[
		{ value: null, text: 'Please select a category' },
          { value: 'Food', text: 'Food' },
          { value: 'Vegetables', text: 'Vegetables' },
          { value: 'Fruit', text: 'Fruit' },
          { value: 'Electronic Item', text: 'Electronic Item'}
	  ]
    };
  },
  mounted(){
      this.getExpenseByID();
  },
  methods: {
    triggerClose() {
      this.$emit("closeEditModal");
    },
    getExpenseByID() {
      axios
        .get(`http://localhost:3000/expenses/${this.expenseId}`)
        .then((response) => {
         this.expense = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateExpense(){
        axios
         .put( `http://localhost:3000/expenses/${this.expenseId}`,
          this.expense).then((response) => {
              console.log(response.data);
              this.$emit("closeEditModal");
              this.$emit("reloadDataTable");
              this.$emit("showSuccessAlert");
          }).catch((error) => {
              console.log(error)
          });
    },
  },
};
</script>