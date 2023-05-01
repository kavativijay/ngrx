import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { ProductListingComponent } from './product-listing.component';

describe('ProductListingComponent', () => {
  let component: ProductListingComponent;
  let fixture: ComponentFixture<ProductListingComponent>;
  let store: MockStore;
  let dialog: jasmine.SpyObj<MatDialog>;

  const initialState = {
    products: {
      products: {},
      selectedProduct: null
    }
  };

  beforeEach(async () => {
    const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ProductListingComponent],
      providers: [
        provideMockStore({ initialState }),
        { provide: MatDialog, useValue: matDialogSpy },
      ],
    }).compileComponents();
    dialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListingComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<any>>(Store) as MockStore;
    dialog.open.and.returnValue({ afterClosed: () => of('closed') } as any);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load products on init', () => {
    spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalled();
  });

  it('should open modal', () => {
    spyOn(store, 'dispatch');
    const item = { id: 1 };
    component.openModal(item);
    expect(store.dispatch).toHaveBeenCalled();
    expect(dialog.open).toHaveBeenCalled();
  });

});
