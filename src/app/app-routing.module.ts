import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { HttpClientModule, HttpHeaders,HttpClient } from '@angular/common/http';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CategoriesListComponent } from './product-listing/categories-list/categories-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to home component when the path is empty
  { path: 'home', component: CategoriesListComponent },
  {path: '', component: CategoriesListComponent},
  // {path: 'item-detail', component: ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
