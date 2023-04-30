import { Component, OnInit } from '@angular/core';
import { ProductListingService } from '../services/product-listing.service';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { MatDialog } from '@angular/material/dialog';



import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import * as ProductActions from '../product.actions';
// import { Product } from '../models/product';
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
  // products$: Observable<any> | undefined;
  productsList:any = []

  // products$ = this.store.select(state => Object.values(state.products.products));

  selectedProduct$: Observable<any | null> = this.store.pipe(select(getSelectedProduct));

  constructor(private store: Store<AppState>,public dialog: MatDialog) {}

  ngOnInit() {
      // this.products$ = this.store.select(state => Object.values(state.products.products));
      this.store.select(state => Object.values(state.products.products)).subscribe((data:any)=>{
        if(data.length >0)
        // this.productsList = data[0].products;
        this.productsList = data;

      })
    this.store.dispatch(ProductActions.loadProducts());
  }

  openModal(item: any) {
    const productId = item.id;
    this.store.dispatch(ProductActions.selectProduct({ productId }));
        const dialogRef = this.dialog.open(ItemDetailComponent, {
      width: '900px',
      // data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}





//   constructor(private productListingService: ProductListingService,private route: Router,public dialog: MatDialog) {}

//   ngOnInit(): void {
//     this.getCardData()
//     console.log('testing ')
    
//   }

//   getCardData() {
//     this.productListingService.getProducts().subscribe((response: any) => {
//       console.log(response, "response is here");
//       this.dataSource = new MatTableDataSource(response);
//       this.cardData = response.products
//       console.log(this.cardData, "Card Dataaaaaqa");
//     }, (error: any) => {
//       console.log(error.message, "error is here")
//     })
//   }

//   getCardDetails(item:any) {
//     console.log('Clicked');
//     this.selectedItem=this.cardData.find((element: { id: any; })=>element.id==item.id)
//       console.log(this.selectedItem);
//       this.productListingService.selected_item=this.selectedItem;
//   }
//   openModal(item:any): void {
//     const dialogRef = this.dialog.open(ItemDetailComponent, {
//       width: '900px',
//       data: item
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//     });
//   }


// }
