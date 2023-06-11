import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public products$!: {
    id: string;
    titleOfList: string;
    items: {
      id: string;
      nameOfProduct: string;
      amount: number;
      unit: string;
    }[];
    showList: boolean;
    date: Date;
  }[];

  constructor(private service: DataService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((response: any) => {
      if (Array.isArray(response)) {
        this.products$ = response.reduce((acc: any[], product: any) => {
          const existingList = acc.find(
            (item) =>
              item.titleOfList === product.titleOfList &&
              new Date(item.date).toDateString() ===
                new Date(product.date).toDateString()
          );
          if (existingList) {
            existingList.items.push({
              id: product._id,
              nameOfProduct: product.nameOfProduct,
              amount: product.amount,
              unit: product.unit
            });
          } else {
            acc.push({
              id: product._id,
              titleOfList: product.titleOfList,
              items: [
                {
                  id: product._id,
                  nameOfProduct: product.nameOfProduct,
                  amount: product.amount,
                  unit: product.unit
                }
              ],
              showList: false,
              date: new Date(product.date)
            });
          }
          return acc;
        }, []);
      }
    });
  }

  toggleList(product: {
    id: string;
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

  deleteList(id: string) {
    this.service.deleteList(id).subscribe(() => {
      this.getAll();
      window.location.reload(); // Odświeżenie strony
    });
  }
}
