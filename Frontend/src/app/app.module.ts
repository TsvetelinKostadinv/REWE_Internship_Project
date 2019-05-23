import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductEditorComponent } from './components/product-editing/product-editor/product-editor.component';
import { ProductViewComponent } from './components/product-viewing/product-view/product-view.component';
import { ProductAdderComponent } from './components/product-adding/product-adder/product-adder.component';
import { ProductListerComponent } from './components/product-listing/product-lister/product-lister.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductEditorComponent,
    ProductViewComponent,
    ProductAdderComponent,
    ProductListerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
