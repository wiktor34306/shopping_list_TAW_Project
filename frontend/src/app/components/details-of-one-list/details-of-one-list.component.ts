import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ListService } from 'src/app/services/list.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-details-of-one-list',
  templateUrl: './details-of-one-list.component.html',
  styleUrls: ['./details-of-one-list.component.css']
})
export class DetailsOfOneListComponent implements OnInit {
  public list = {
    isImportant: false,
    date: new Date(),
    titleOfList: '',
    products: [] // Dodaj właściwość products do listy
  };
  public lists!: any[];
  public selectedProduct: any; // Dodaj zmienną selectedProduct

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
      this.getProductsForList(this.list); // Pobierz ponownie produkty dla aktualnej listy po dodaniu nowego produktu
      return result;
    });
    this.product = { // Zresetuj obiekt produktu po dodaniu
      listId: '',
      nameOfProduct: '',
      amount: '',
      unit: '',
    };
  }

  deleteProduct(product: any) {
    this.dataService.deleteProduct(product.id).subscribe((result) => {
      this.getList(); // Pobierz ponownie produkty dla aktualnej listy po usunięciu produktu
    });
  }

  editProduct(product: any) {
    this.selectedProduct = product; // Zapisz wybrany produkt do zmiennej selectedProduct
  }

  navigateToListEdit(listId: string){
    this.router.navigate(['edit-name-list/',listId])
  }

  navigateToProductEdit(listId: string){
    this.router.navigate(['edit-product/',listId])
  }

}
