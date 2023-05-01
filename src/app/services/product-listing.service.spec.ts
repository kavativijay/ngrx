import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ProductListingService } from './product-listing.service';

describe('ProductListingService', () => {
  let service: ProductListingService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductListingService]
    });
    service = TestBed.inject(ProductListingService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get products successfully', () => {
    const dummyProducts = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];

    service.getProducts().subscribe(products => {
      expect(products).toEqual(dummyProducts);
    });

    const req = httpMock.expectOne('https://dummyjson.com/products');
    expect(req.request.method).toBe('GET');
    req.flush(dummyProducts);
  });

});
