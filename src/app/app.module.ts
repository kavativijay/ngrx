import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import {MatDialogModule} from '@angular/material/dialog';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



import { productReducer } from './product.reducer';
import { ProductEffects } from './product.effects';
import { SelectedProductComponent } from './product-listing/selected-product/selected-product.component';
import { CategoriesListComponent } from './product-listing/categories-list/categories-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListingComponent,
    ItemDetailComponent,
    SelectedProductComponent,
    CategoriesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ products: productReducer }),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    NoopAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
