import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { DialogData, ItemDetailComponent } from './item-detail.component';

describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;
  let store: MockStore;
  let dialogRef: MatDialogRef<ItemDetailComponent>;
  const initialState = {
    products: {
      products: {
        1: { id: 1, name: 'Product 1' },
        2: { id: 2, name: 'Product 2' },
        3: { id: 3, name: 'Product 3' },
      },
      selectedProduct: 2
    }
  };

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemDetailComponent],
      imports: [
        StoreModule.forRoot({})
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { data: {} } },
        { provide: MatDialogRef, useValue: mockDialogRef },
        provideMockStore({ initialState }),
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<any>>(Store) as MockStore;
    dialogRef = TestBed.inject(MatDialogRef);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set product$ on init', () => {
    component.ngOnInit();
    expect(component.product$).toBeDefined();
  });

  it('should close the dialog', () => {
    component.close();
    expect(dialogRef.close).toHaveBeenCalled();
  });

});
