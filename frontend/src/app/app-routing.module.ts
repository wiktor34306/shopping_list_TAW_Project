import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AuthGuard } from './services/auth.guard';
import { AddItemToListComponent } from './components/add-item-to-list/add-item-to-list.component';
import { HistoryOfDeletedItemsComponent } from './components/history-of-deleted-items/history-of-deleted-items.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-item-to-list',
    component: AddItemToListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'history-of-deleted-items',
    component: HistoryOfDeletedItemsComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
