import { Component, OnInit } from '@angular/core';
import { DebugService } from '../debug.service';
import { ExpenseEntry } from '../expense-entry';
import { ExpenseEntryService } from '../expense-entry.service';

@Component({
  selector: 'app-expense-entry-list',
  templateUrl: './expense-entry-list.component.html',
  styleUrls: ['./expense-entry-list.component.scss'],
  providers: [DebugService]
})
export class ExpenseEntryListComponent implements OnInit {

  title!: string; 
  expenseEntries!: ExpenseEntry[]; 
  constructor(private debugService: DebugService, private restService: ExpenseEntryService) { } 
  ngOnInit() { 
    this.debugService.info("Expense Entry List Component initialized");
     this.title = "Expense Entry List"; 
     this.getExpenseItems();
     
  }

  getExpenseItems(){ 
    this.restService.getExpenseEntries().subscribe( data => this.expenseEntries = data);
 }

 deleteExpenseEntry(evt: { preventDefault: () => void; }, id: number | ExpenseEntry) {
   evt.preventDefault();
   if(confirm("Are you sure to delete the entry?")) {
      this.restService.deleteExpenseEntry(id)
         .subscribe( data => console.log(data) );

      this.getExpenseItems();
   }
}

}
