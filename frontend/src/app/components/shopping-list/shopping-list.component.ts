// import { Component, OnInit } from '@angular/core';
// import { DataService } from 'src/app/services/data.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'shopping-list',
//   templateUrl: './shopping-list.component.html',
//   styleUrls: ['./shopping-list.component.css']
// })
// export class ShoppingListComponent implements OnInit {
//   public products!: {
//     listId: string;
//     titleOfList: string;
//     items: {
//       id: string;
//       nameOfProduct: string;
//       amount: number;
//       unit: string;
//     }[];
//     showList: boolean;
//     date: Date;
//   }[];

//   constructor(private service: DataService, private router: Router) {}

//   ngOnInit() {
//     this.getAll();
//   }

//   getAll() {
//     this.service.getAll().subscribe((response: any) => {
//       if (Array.isArray(response)) {
//         this.products = response.reduce((acc: any[], product: any) => {
//           const existingList = acc.find(
//             (item) =>
//               item.titleOfList === product.titleOfList &&
//               new Date(item.date).toDateString() ===
//                 new Date(product.date).toDateString()
//           );
//           if (existingList) {
//             existingList.items.push({
//               id: product._id,
//               nameOfProduct: product.nameOfProduct,
//               amount: product.amount,
//               unit: product.unit
//             });
//           } else {
//             acc.push({
//               listId: product._id, // Zmiana nazwy pola na listId
//               titleOfList: product.titleOfList,
//               items: [
//                 {
//                   id: product._id,
//                   nameOfProduct: product.nameOfProduct,
//                   amount: product.amount,
//                   unit: product.unit
//                 }
//               ],
//               showList: false,
//               date: new Date(product.date)
//             });
//           }
//           return acc;
//         }, []);
//       }
//     });
//   }

//   toggleList(product: {
//     listId: string; // Zmiana nazwy pola na listId
//     titleOfList: string;
//     items: {
//       id: string; // Zmiana nazwy pola na id
//       nameOfProduct: string;
//       amount: number;
//       unit: string;
//     }[];
//     showList: boolean;
//   }) {
//     product.showList = !product.showList;
//   }

//   deleteList(listId: string) {
//     if (listId) {
//       this.service.deleteList(listId).subscribe(() => {
//         this.getAll(); // Odświeżenie listy po usunięciu
//       });
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 
  public products!: {
    listId: string,
    nameOfProduct: string,
    amount: number,
    unit: string,
    date: Date;
  }[];

  lists!: any[]
  productItem: any[]=[]

  constructor(private service: DataService, private listService: ListService, private router: Router) {}

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

  deleteList(listId: string) {
    console.log('listId:', listId); // Dodaj tę linię
    // if (listId) {
    //   this.service.deleteList(listId).subscribe(() => {
    //     this.getAll();
    //   });
    // }
  }
  }

