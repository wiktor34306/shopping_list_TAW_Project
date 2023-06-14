import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  public product = {
    listId: '',
    nameOfProduct: '',
    amount: '',
    unit: '',
  };

  constructor(private route: ActivatedRoute, private router: Router, private productService: DataService){}
  listId: string = ''
  productData: any={}
  productId: string = ''

  ngOnInit(): void {
      this.productId = this.route.snapshot.params['id']
      this.getProduct()
  }

  getProduct(){
    this.productService.getProductById(this.productId).subscribe(result => {
      this.productData = result
      this.setData()
    })
  }

  setData(){
    this.product.amount = this.productData.amount
    this.product.listId = this.productData.listId
    this.product.nameOfProduct = this.productData.nameOfProduct
    this.product.unit = this.productData.unit
  }

  updateData(){
    const data = {...this.productData, ...this.product}
    this.productService.add(data).subscribe(() => {

    })
    }
  }

