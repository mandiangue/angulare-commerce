import { CartService } from './../cart/cart.service';
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: any[]

  constructor(private productservice: ProductService, private cartservice: CartService) { }

  ngOnInit() {
    this.productservice.getProducts().subscribe((res) => {
      this.products = res;

      this.products.forEach((o: any) => {
        Object.assign(o, { quantity: 1, totalP: o.price, sommeT: o.price })


      })

    })

  }
  ajoutDansPanier(product: any) {
    this.cartservice.ajoutPanier(product)
    this.cartservice.addLocalstorage(product)


  }
}
