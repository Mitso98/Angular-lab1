import { ProductsComponent } from './products/products.component';
import { Component, ViewChild } from '@angular/core';



@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab1';
  @ViewChild(ProductsComponent) productComponent!: ProductsComponent;

  // renderProductValues() {
  //   this.productComponent.renderValues();
  // }
}
