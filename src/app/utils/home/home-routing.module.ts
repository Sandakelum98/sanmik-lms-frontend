import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AddBookComponent } from 'src/app/components/add-book/add-book.component';
import { AllBookListComponent } from 'src/app/components/all-book-list/all-book-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'add-new-book', pathMatch: 'full' },
      { path: 'add-new-book', component: AddBookComponent },
      { path: 'all-books', component: AllBookListComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
