import { environment } from './../../../environments/environment.prod';
import { Product } from './../../components/products/models/product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const env = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(env, product);
  }

  findAll(): Observable<Product[]>{
    return this.http.get<Product[]>(env);
  }
}
