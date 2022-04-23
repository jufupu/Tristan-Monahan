<template>
  <div>
    <b-row>
      <b-alert v-model="showSuccessAlert" variant="success" dismissible>
        {{ alertMessage }}
      </b-alert>
    </b-row>
    <b-row>
      <expense-overview
        :totalExpenses="totalExpenses"       
      ></expense-overview>
    </b-row>
    <b-row class="mt-3">
      <b-card>
        <b-row align-h="between">
          <b-col cols="6">
            <h3>{{ tableHeader }}</h3>
          </b-col>
          <b-col cols="2">
            <b-row>
              <b-col>
                <b-button
                  variant="primary"
                  id="show-btn"
                  @click="showCreateModal"
                >
                  <b-icon-plus class="text-white"></b-icon-plus>
                  <span class="h6 text-white">New Expense</span>
                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-table
            striped
            hover
            :items="items"
            :fields="fields"
            class="text-center"
          >
            <template #cell(item)="data">
              {{
                `${data.item.item}`
              }}
            </template>
            <template #cell(amount)="data">
              ${{
                `${data.item.amount}`
              }}
            </template>
            <template #cell(actions)="data">
              <b-row>
                <b-col cols="7">
                  <b-icon-pencil-square
                    class="action-item"
                    variant="primary"
                    @click="getRowData(data.item.id)"
                  ></b-icon-pencil-square>
                </b-col>
                <b-col cols="1">
                  <b-icon-trash-fill
                    class="action-item"
                    variant="danger"
                    @click="showDeleteModal(data.item.id)"
                  ></b-icon-trash-fill>
                </b-col>
              </b-row>
            </template>
          </b-table>
        </b-row>
      </b-card>
    </b-row>

    <!-- Modal for adding new expenses -->
    <b-modal
      ref="create-expense-modal"
      size="xl"
      hide-footer
      title="New Expense"
    >
      <create-expense-form
        @closeCreateModal="closeCreateModal"
        @reloadDataTable="getExpenseData"
        @showSuccessAlert="showAlertCreate"
      ></create-expense-form>
    </b-modal>

    <!-- Modal for updating expenses -->
    <b-modal
      ref="edit-expense-modal"
      size="xl"
      hide-footer
      title="Edit Expense"
    >
      <edit-expense-form
        @closeEditModal="closeEditModal"
        @reloadDataTable="getExpenseData"
        @showSuccessAlert="showAlertUpdate"
        :expenseId="expenseId"
      ></edit-expense-form>
    </b-modal>

    <!-- Delete Expense Modal -->
    <b-modal
      ref="delete-expense-modal"
      size="md"
      hide-footer
      title="Confirm Deletion"
    >
      <delete-expense-modal
        @closeDeleteModal="closeDeleteModal"
        @reloadDataTable="getExpenseData"
        @showDeleteAlert="showDeleteSuccessModal"
        :expenseId="expenseId"
      ></delete-expense-modal>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import ExpenseOverview from "@/components/ExpenseOverview.vue";
import CreateExpenseForm from "@/components/CreateExpenseForm.vue";
import EditExpenseForm from "@/components/EditExpenseForm.vue";
import DeleteExpenseModal from "@/components/DeleteExpenseModal.vue";

export default {
  components: {
    ExpenseOverview,
    CreateExpenseForm,
    EditExpenseForm,
    DeleteExpenseModal,
  },
  data() {
    return {
      

      fields: [
        {
          key: "item",
          label: "Item",
          sortable: false,
        },
        {
          key: "category",
          label: "Category",
          sortable: false,
        },
        {
          key: "location",
          label: "Location",
          sortable: false,
        },
        {
          key: "amount",
          label: "Amount",
          sortable: false,
        },
		{
          key: "spent_on",
          label: "Date",
          sortable: false,
        },
        "actions",
      ],
      items: [],
      totalExpenses: 0,      
      expenseId: 0,
      companySearchTerm: "",
      tableHeader: "",
      showSuccessAlert: false,
      alertMessage: "",
    };
  },
  mounted() {
    this.getExpenseData();
  },
  methods: {
    showCreateModal() {
      this.$refs["create-expense-modal"].show();
    },
    closeCreateModal() {
      this.$refs["create-expense-modal"].hide();
    },
    getExpenseData() {
      axios
        .get("http://localhost:3000/expenses/")
        .then((response) => {
          this.tableHeader = "Expenses";
          this.items = response.data;             
          //this.totalExpenses = response.data.length;            
          this.totalExpenses = response.data.reduce((acc,item) => Number(item.amount) + Number(acc),0);      
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getRowData(id) {
      this.$refs["edit-expense-modal"].show();
      this.expenseId = id;
    },
    closeEditModal() {
      this.$refs["edit-expense-modal"].hide();
    },
   
    showAlertCreate() {
      this.showSuccessAlert = true;
      this.alertMessage = "Expense was created successfully!";
    },
    showAlertUpdate() {
      this.showSuccessAlert = true;
      this.alertMessage = "Expense was updated successfully";
    },
    showDeleteModal(id) {
      this.$refs["delete-expense-modal"].show();
      this.expenseId = id;
    },
    closeDeleteModal() {
      this.$refs["delete-expense-modal"].hide();
    },
    showDeleteSuccessModal() {
      this.showSuccessAlert = true;
      this.alertMessage = "Expense was deleted successfully!";
    },
  },
};
</script>

<style>
.action-item:hover {
  cursor: pointer;
}
</style>