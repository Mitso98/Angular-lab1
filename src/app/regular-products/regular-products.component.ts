import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { IProduct } from '../sharedClassesAndTypes/IProduct';
import { map } from 'rxjs';

@Component({
  selector: 'app-regular-products',
  templateUrl: './regular-products.component.html',
  styleUrls: ['./regular-products.component.scss'],
})
export class RegularProductsComponent {
  productsList: IProduct[];
  errorMessage: any;

  constructor(private products: ProductServiceService) {}
  ngOnInit() {
    this.getRegularProducts();
  }

  getRegularProducts() {
    this.products
      .GetAllProducts()
      .pipe(
        map((products) =>
          products.filter((product) => product.discount === 'No Discount')
        )
      )
      .subscribe({
        next: (data) => (this.productsList = data),
        error: (err) => (this.errorMessage = err),
      });
  }
}
