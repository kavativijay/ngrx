import { Component, Inject, OnInit } from '@angular/core';
import { ProductListingService } from '../services/product-listing.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  data:any;
}

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  constructor(private productService: ProductListingService, @Inject(MAT_DIALOG_DATA) public data: DialogData,
  public dialogRef: MatDialogRef<ItemDetailComponent> ){
  };
  selectedItem:any;
ngOnInit(): void {
    this.selectedItem  = this.data;
}

close(){
  this.dialogRef.close();
}
}
