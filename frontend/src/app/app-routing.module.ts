import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AuthGuard } from './services/auth.guard';
import { AddItemToListComponent } from './components/add-item-to-list/add-item-to-list.component';
import { DetailOfOneListComponent } from './components/detail-of-one-list/detail-of-one-list.component';

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
    path: 'detail-of-one-list/:id',
    component: DetailOfOneListComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
