import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './user/admin.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { StoreComponent } from './store/store.component';
import { StoreItemComponent } from './store/store-item.component';
import { ShoppingCartComponent } from "./store/shopping-cart.component";
import { UserSignupComponent } from './user/user-signup/user-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    UserLoginComponent,
    StoreComponent,
    StoreItemComponent,
    ShoppingCartComponent,
    UserSignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
