import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageComponentsComponent } from './page-components/page-components.component';
import { LoginComponent } from './page-components/login/login.component';
import { ProductsComponent } from './page-components/products/products.component';
import { PageNotFoundComponent } from './page-components/page-not-found/page-not-found.component';
import { UsersComponent } from './page-components/users/users.component';
import { UsersInfoService } from './services/users-info.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterComponent } from './page-components/products/search-filter/search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageComponentsComponent,
    LoginComponent,
    ProductsComponent,
    PageNotFoundComponent,
    UsersComponent,
    SearchFilterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [UsersInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
