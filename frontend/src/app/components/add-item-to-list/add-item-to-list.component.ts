import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'add-item-to-list',
  templateUrl: './add-item-to-list.component.html',
  styleUrls: ['./add-item-to-list.component.css']
})
export class AddItemToListComponent {
  public product = {
    isImportant: false,
    date: new Date(),
    titleOfList: '',
    nameOfProduct: '',
    amount: 0,
    unit: '',
    listId: '' // Dodane pole listId
  };

  constructor(private dataService: DataService, public router: Router) {}

  create() {
    this.product.listId = uuidv4(); // Generowanie unikalnego ID listy
    this.dataService.add(this.product).subscribe((result) => {
      return result;
      // console.log(result);
    });
    this.router.navigate(['/shopping-list']);
  }
}
