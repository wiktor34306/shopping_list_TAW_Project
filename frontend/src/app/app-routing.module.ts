import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AuthGuard } from './services/auth.guard';
import { AddItemToListComponent } from './components/add-item-to-list/add-item-to-list.component';
import { DetailsOfOneListComponent } from './components/details-of-one-list/details-of-one-list.component';
import { EditNameListComponent } from './components/edit-name-list/edit-name-list.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

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
    path: 'details-of-one-list',
    component: DetailsOfOneListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-name-list/:id',
    component: EditNameListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
