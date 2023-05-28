import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { getSelectedProduct } from 'src/app/product.selectors';
import { AppState } from 'src/app/app.state';
import * as ProductActions from '../../product.actions';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit{

  
  displayedColumns: string[] = ['name', 'username', 'phone', 'website'];
  dataSource: any;
  cardData: any
  selectedItem: any;
  productsList:any = []
  selectedProduct$: Observable<any | null> = this.store.pipe(select(getSelectedProduct));
  categories:any;
  selectedProduct:any;
  showDetails:boolean = false;
   constructor(private store: Store<AppState>,public dialog: MatDialog, private route:Router) {}

  
  ngOnInit() {
    this.store.select(state => Object.values(state.products.products)).subscribe((data:any)=>{
      if(data.length >0){
        this.productsList = data;
        this.separateByCategory();
      }

    })
  this.store.dispatch(ProductActions.loadProducts());
}

// openModal(item: any) {
//   const productId = item.id;
//   this.store.dispatch(ProductActions.selectProduct({ productId }));
//       const dialogRef = this.dialog.open(ItemDetailComponent, {
//     width: '900px',
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log('The dialog was closed');
//   });
// }

updateAccordionData(updatedProduct: any) {
  debugger
  // this.store.dispatch(ProductActions.updateProduct({ updatedProduct }));
}

details(product:any){
  debugger  
  this.selectedProduct = product;
  this.showDetails = true;

  
}
back(){
  this.showDetails = false;
}

toggleAccordion(category: any) {
  category.open = !category.open;
}

separateByCategory() {
  const groupedProducts = this.productsList.reduce((acc: { [x: string]: any[]; }, product: { category: string | number; }) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  this.categories = Object.keys(groupedProducts).map(category => {
    return { category, products: groupedProducts[category], 
      open: false,
    };
  });
}

updateClick(selectedItem:any){
    const updatedAccordionData = { ...this.productsList, title: "selectedItem.title" };

const updatedProduct = selectedItem;
  // this.store.dispatch(ProductActions.updateProduct({ updatedProduct }));
}

}
