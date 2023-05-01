import { Component, OnInit } from '@angular/core';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import * as ProductActions from '../product.actions';
import { getProducts, getSelectedProduct } from '../product.selectors';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  displayedColumns: string[] = ['name', 'username', 'phone', 'website'];
  dataSource: any;
  cardData: any
  selectedItem: any;
  productsList:any = []
  selectedProduct$: Observable<any | null> = this.store.pipe(select(getSelectedProduct));

  constructor(private store: Store<AppState>,public dialog: MatDialog) {}

  ngOnInit() {
      this.store.select(state => Object.values(state.products.products)).subscribe((data:any)=>{
        if(data.length >0)
        this.productsList = data;

      })
    this.store.dispatch(ProductActions.loadProducts());
  }

  openModal(item: any) {
    const productId = item.id;
    this.store.dispatch(ProductActions.selectProduct({ productId }));
        const dialogRef = this.dialog.open(ItemDetailComponent, {
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}