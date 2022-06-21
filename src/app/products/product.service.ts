import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
api_Url: string ='https://fakestoreapi.com/products'
products: any= []
  constructor(private http: HttpClient) { }

  getProducts():Observable<any[]>{
return this.http.get<any[]>(this.api_Url).pipe(map((res)=>{
return res
}))
  }
}
