import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {environment} from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule} from 'angularfire2/auth';

import { FlashMessagesModule } from 'angular2-flash-messages';

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
import { ClientService } from "./services/client.service";
import { AuthService } from "./services/auth.service";
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterComponent } from './page-components/products/search-filter/search-filter.component';
import { ClientsComponent } from './page-components/clients/clients.component';

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
    SearchFilterComponent,
    ClientsComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase,'productusers'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot(),
    
  ],
  providers: [UsersInfoService,AuthService,ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
