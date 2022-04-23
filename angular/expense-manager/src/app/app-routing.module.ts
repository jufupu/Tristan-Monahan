import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component'; 
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component'; 
import { EditEntryComponent } from './edit-entry/edit-entry.component';


const routes: Routes = [ 
  { path: 'expenses', component: ExpenseEntryListComponent }, 
  { path: 'expenses/detail/:id', component: ExpenseEntryComponent }, 
  { path: 'expenses/add', component: EditEntryComponent },
  { path: 'expenses/edit/:id', component: EditEntryComponent},
  { path: '', redirectTo: 'expenses', pathMatch: 'full' }]; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
