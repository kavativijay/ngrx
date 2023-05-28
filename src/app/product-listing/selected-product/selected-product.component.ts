import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateProduct } from 'src/app/product.actions';
// import { UpdateProduct, updateProduct } from 'src/app/product.actions';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {
  @Input() selectedItem: any
  @Output() updateEmit = new EventEmitter();

  constructor(private store: Store<any>) { }
  ngOnInit(): void {
  }

  update() {
    let parseData: any = JSON.stringify(this.selectedItem);
    let updatedProduct: any = JSON.parse(parseData);
    // debugger
    updatedProduct.title = "test"
    // const updatedProduct = { name: 'Updated Product Name' };
    // this.store.dispatch(new updatedProduct({ updateProduct }));
    this.store.dispatch(updateProduct(updatedProduct));
    this.updateEmit.emit(this.selectedItem);
  }

  delete() {

  }
}
