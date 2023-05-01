import { Component, Inject, OnInit } from '@angular/core';
import { ProductListingService } from '../services/product-listing.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
export interface DialogData {
  data:any;
}

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
  public dialogRef: MatDialogRef<ItemDetailComponent>, private store: Store<any> ){
  };
  selectedItem:any;
  product$: Observable<any> | undefined;

ngOnInit(): void {
    this.product$ = this.store.pipe(select(state => state.products.selectedProduct))
}

close(){
  this.dialogRef.close();
}
}
