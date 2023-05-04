import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../sharedClassesAndTypes/DiscountOffers';
import { IProduct } from '../sharedClassesAndTypes/IProduct';
import { ICategory } from '../sharedClassesAndTypes/ICategory';
import { ProductServiceService } from '../services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  discount: DiscountOffers;

  storeName: string;
  storeLogo: string;
  productsList: IProduct[];
  productsListFiltered: IProduct[];
  categoriesList: ICategory[];
  clientName: string;
  isPurchased: boolean;
  errorMessage: any;

  constructor(private products: ProductServiceService, private router: Router) {
    this.discount = DiscountOffers.tenPercent;
    this.storeName = 'Hyper One';
    this.storeLogo = './assets/storeLogo.jpg';
    this.categoriesList = [{ id: 1, name: 'Processed Food' }];
    this.clientName = 'Mostafa';
    this.isPurchased = false;
  }

  buyItem(product: any = null): void {
    if (product === null) {
      this.isPurchased = !this.isPurchased;
    } else {
      product.isPurchased = !product.isPurchased;
    }
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllProducts();
  }

  getAllProducts() {
    this.products.GetAllProducts().subscribe({
      next: (data) => (this.productsList = data),
      error: (error) => (this.errorMessage = error),
    });
  }

  showDiscountedProducts() {
    this.router.navigate(['/products/discounted']);
  }
  showRegularProducts() {
    this.router.navigate(['/products/regular']);
  }
}
