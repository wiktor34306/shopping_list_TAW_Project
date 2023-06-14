import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';
import { Location } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 
  public products!: {
    id: string,
    listId: string,
    nameOfProduct: string,
    amount: number,
    unit: string,
    date: Date;
  }[];

  lists!: any[]
  productItem: any[]=[]

  constructor(private service: DataService, private listService: ListService, private router: Router, private location: Location) {}

  ngOnInit() {
    this.getAllList();
  }

  showList: any[]=[]
  
  hideList(listId:number){
    this.showList[listId]=!this.showList[listId]
  }

  getAllList(){
    this.listService.getAll().subscribe((result) => {
      this.lists = result
      this.showList = new Array(this.lists.length).fill(false)
      console.log(result)
      this.getAll()
    })
  }

  getAll() {
    for(let i = 0; i < this.lists.length; i++){
      this.service.getById(this.lists[i].id).subscribe((result) => {
        console.log(result)
        this.productItem[i]=result
      })
    }
    
  }

  deleteList(listId: string) {
    if (listId) {
      // Usuń produkty powiązane z listą
      for (let i = 0; i < this.productItem[0].length; i++) {
        if (this.productItem[0][i].listId == listId) {
          const productId = this.productItem[0][i].id;
          this.service.deleteProduct(productId).pipe(
            catchError((error) => {
              console.log('Error deleting product:', error);
              return of(null); // Zwróć pustą wartość w przypadku błędu
            })
          ).subscribe(() => {
            console.log(`Product with ID ${productId} deleted.`);
          });
        }
      }
  
      // Usuń listę
      this.listService.deleteList(listId).pipe(
        catchError((error) => {
          console.log('Error deleting list:', error);
          return of(null); // Zwróć pustą wartość w przypadku błędu
        })
      ).subscribe(
        () => {
          console.log(`List with ID ${listId} deleted.`);
          this.getAllList();
          window.location.reload(); // Przeładowanie strony
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    }
  }
  

  toggleList(product: {
    listId: string;
    titleOfList: string;
    items: {
      id: string;
      nameOfProduct: string;
      amount: number;
      unit: string;
    }[];
    showList: boolean;
  }) {
    product.showList = !product.showList;
  }

  }

