import { Product } from './../models/product.model';
import { ProductService } from './../../../shareds/service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.productService.findAll().subscribe(products => {
      this.products = products;
    });
  }

}
