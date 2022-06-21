import { CartService } from './cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartNumber: number = 0;
  title = 'E-commerce by Angular';
  products: any=[]
  constructor(private cartservice: CartService, private route:Router){}


  ngOnInit(){
this.cartservice.getProduits().subscribe((res)=>{
  
if(res !== null){
  this.cartNumber = res.length;
  
}

})

  }
  redirectCart(){
 this.route.navigate(['/cart'])
  }
}
