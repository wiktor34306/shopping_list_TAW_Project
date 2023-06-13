import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {AuthInterceptor} from './services/auth/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { AddItemToListComponent } from './components/add-item-to-list/add-item-to-list.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { UpperTextPipe } from './pipes/upper-text.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DataService } from './services/data.service';
import { DetailsOfOneListComponent } from './components/details-of-one-list/details-of-one-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ShoppingListComponent,
    AddItemToListComponent,
    EditProductComponent,
    UpperTextPipe,
    DateFormatPipe,
    DetailsOfOneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
