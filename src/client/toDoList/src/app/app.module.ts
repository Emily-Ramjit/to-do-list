import { BrowserModule } from '@angular/platform-browser';

import { userService } from '../../services/userService';
import { itemService } from '../../services/itemService'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule }        from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home/:id',
    component: HomeComponent
  }
 ]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [ userService, itemService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
