import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ListService } from 'src/app/services/list.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'add-item-to-list',
  templateUrl: './add-item-to-list.component.html',
  styleUrls: ['./add-item-to-list.component.css']
})
export class AddItemToListComponent implements OnInit {
  public list = {
    isImportant: false,
    date: new Date(),
    titleOfList: '',
    products: [] // Dodaj właściwość products do listy
  };
  public lists!: any[];

  public product = {
    listId: '',
    nameOfProduct: '',
    amount: '',
    unit: '',
  };

  ngOnInit(): void {
    this.getList();
  }

  constructor(private dataService: DataService, private listService: ListService, public router: Router) {}

  createList(){
    this.listService.add(this.list).subscribe((result) => {
      this.getList();
      // Ustaw wartość list.isImportant na podstawie stanu checkboxa
    this.list.isImportant = this.list.isImportant || false;
    });
  }

  

  getList(){
    this.listService.getAll().subscribe((result) => {
      this.lists = result;
      this.lists.forEach((list: any) => {
        this.getProductsForList(list); // Pobierz produkty dla każdej listy
      });
    });
  }

  getProductsForList(list: any){
    this.dataService.getById(list.id).subscribe((result) => {
      list.products = result; // Przypisz pobrane produkty do właściwości products dla danej listy
    });
  }

  createProduct() {
    this.dataService.add(this.product).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/shopping-list']);
  }

}
