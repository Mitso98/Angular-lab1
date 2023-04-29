"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var DiscountOffers_1 = require("../sharedClassesAndTypes/DiscountOffers");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService) {
        this.productService = productService;
        this.discount = DiscountOffers_1.DiscountOffers.tenPercent;
        this.storeName = 'Hyper One';
        this.storeLogo = './assets/storeLogo.jpg';
        // this.productsList = [
        //   {
        //     id: 1,
        //     img: './assets/p1.jpg',
        //     name: 'Corn Flakes',
        //     price: 20,
        //     quantity: 5,
        //     isPurchased: false,
        //   },
        //   {
        //     id: 2,
        //     img: './assets/p2.jpg',
        //     name: 'iPhone11',
        //     price: 20000,
        //     quantity: 5,
        //     isPurchased: false,
        //   },
        //   {
        //     id: 3,
        //     img: './assets/p3.jpg',
        //     name: 'iPhone12',
        //     price: 30000,
        //     quantity: 5,
        //     isPurchased: false,
        //   },
        //   {
        //     id: 4,
        //     img: './assets/p4.jpg',
        //     name: 'iPhone13',
        //     price: 40000,
        //     quantity: 5,
        //     isPurchased: false,
        //   },
        // ];
        this.categoriesList = [{ id: 1, name: 'Processed Food' }];
        this.clientName = 'Mostafa';
        this.isPurchased = false;
    }
    ProductsComponent.prototype.buyItem = function (product) {
        if (product === void 0) { product = null; }
        if (product === null) {
            this.isPurchased = !this.isPurchased;
        }
        else {
            product.isPurchased = !product.isPurchased;
        }
    };
    ProductsComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.renderValues();
        console.log(this.productsList);
    };
    ProductsComponent.prototype.renderValues = function () {
        var _this = this;
        this.productService.GetAllProducts().subscribe({ next: function (data) { return _this.productsList = data; },
            error: function (error) { return _this.errorMessage = error; } });
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.scss']
        })
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;

//# sourceMappingURL=products.component.js.map
