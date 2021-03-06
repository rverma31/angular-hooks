import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page-components/login/login.component';
import { ProductsComponent } from './page-components/products/products.component';
import { PageNotFoundComponent } from './page-components/page-not-found/page-not-found.component';
import { UsersComponent } from './page-components/users/users.component';
import { ClientsComponent} from './page-components/clients/clients.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'our-clients', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductsComponent},
  { path : 'our-customers' , component: UsersComponent},
  { path : 'our-clients' ,component : ClientsComponent },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
