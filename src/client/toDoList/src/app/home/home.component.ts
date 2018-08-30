import { Component, OnInit } from '@angular/core';
import { itemService } from '../../../services/itemService'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: number;
  private setID: any;

  item_id:any
  item_desc:any
  item_status:any;

  receivedData:boolean = false;
  items:any;

  constructor(private itemService : itemService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.items = [];
    this.setID = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getItems(this.id);
   });
  }

   getItems(id){
    this.receivedData = false;
    this.itemService.getItems(id).subscribe(res =>{
      console.log(res)
        this.item_id = res[0].item_id;
        this.item_desc = res[0].item_desc;
        this.item_status = res[0].item_status;
        this.receivedData = true;
      });
  }
}
