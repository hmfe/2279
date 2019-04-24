import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchComponent } from '../pages/search/search.component';
import { ButtonComponent } from '../pages/button/button.component';

import { SearchFormComponent } from '../components/search-form/search-form.component';
import { ResultGridComponent } from '../components/result-grid/result-grid.component';
import { MenuComponent } from '../components/menu/menu.component';
import { LayoutComponent } from '../components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchFormComponent,
    ResultGridComponent,
    ButtonComponent,
    MenuComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
