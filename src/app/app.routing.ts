import { Routes, RouterModule } from "@angular/router"; 
import { ModuleWithProviders } from "@angular/core";

import { AdminComponent } from "./user/admin.component";
import { UserComponent } from "./user/user.component";
import { UserLoginComponent } from "./user/user-login.component";
import { StoreComponent } from "./store/store.component";
import { StoreItemComponent } from "./store/store-item.component";
import { ShoppingCartComponent } from "./store/shopping-cart.component";

const APP_ROUTES: Routes = [
	//path = domainName + endpoint, i.e. www.esportsmerch.com/[some path]
	{
		path: '',
		component: StoreComponent
	},
	{
		path: 'item/:id',
		component: StoreItemComponent
	},
	{
		path: 'adminpage',
		component: AdminComponent
	},
	{
		path: 'userlogin',
		component: UserLoginComponent
	},
	{
		path: 'userprofile',
		component: UserComponent
	},
	{
		path: 'shoppingcart',
		component: ShoppingCartComponent
	},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);