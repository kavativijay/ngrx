import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { HttpClientModule, HttpHeaders,HttpClient } from '@angular/common/http';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to home component when the path is empty
  { path: 'home', component: ProductListingComponent },
  {path: '', component: ProductListingComponent},
  // {path: 'item-detail', component: ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
