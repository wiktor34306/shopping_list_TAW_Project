import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-edit-name-list',
  templateUrl: './edit-name-list.component.html',
  styleUrls: ['./edit-name-list.component.css']
})
export class EditNameListComponent implements OnInit {
  public list = {
    isImportant: false,
    date: '',
    titleOfList: '',
  };
  public listData!: any;

  constructor(private route: ActivatedRoute, private router: Router, private listService: ListService){}
  listId: string = ''

  ngOnInit(): void {
      this.listId = this.route.snapshot.params['id']
      this.getList()
  }

  getList(){
    this.listService.getById(this.listId).subscribe(result => {
      this.listData = result
      this.setData()
    })
  }

  setData(){
    const date = new Date (this.listData.date)
    let month = ''
    if(date.getMonth()+1 < 10){
      month = '0'+(date.getMonth()+1)
    }
    else {
      month = '' + (date.getMonth()+1)
    }
    const formattedDate = date.getFullYear() + '-' + month + '-' + date.getDate()
    console.log(new Date (this.listData.date) )
    this.list.date = formattedDate
    this.list.isImportant = this.listData.isImportant === "false" ? false : true
    this.list.titleOfList = this.listData.titleOfList
  }

  updateData(){
    const data = {...this.listData, ...this.list}
    this.listService.add(data).subscribe(() => {

    })
    }
  }
