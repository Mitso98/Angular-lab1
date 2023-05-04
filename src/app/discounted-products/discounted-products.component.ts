import { Component, Input } from '@angular/core';
import { IProduct } from '../sharedClassesAndTypes/IProduct';
import { ProductServiceService } from '../services/product-service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-discounted-products',
  templateUrl: './discounted-products.component.html',
  styleUrls: ['./discounted-products.component.scss'],
})
export class DiscountedProductsComponent {
  productsList: IProduct[];
  errorMessage: any;

  constructor(
    private products: ProductServiceService
  ) {}
  ngOnInit() {
    this.getDiscountedProducts();
  }

  getDiscountedProducts() {
    this.products
      .GetAllProducts()
      .pipe(
        map((products) =>
          products.filter((product) => product.discount !== 'No Discount')
        )
      )
      .subscribe({
        next: (data) => (this.productsList = data),
        error: (err) => (this.errorMessage = err),
      });
  }
}
