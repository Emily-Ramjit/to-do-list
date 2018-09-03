import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { itemService } from '../../../services/itemService'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private itemService: itemService, private router: Router, private route: ActivatedRoute) { }
  id:any;
  desc:any
  item: any;
  items:any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
    });
  }

  onSubmit(f: NgForm) {
    console.log(f.form.value);
    this.desc = f.form.value;
    this.createItem();
  }

  createItem(){
    var item = [
      
        {
          UserId: '0',
          item_desc: '0',
          item_status: 'incomplete'
        }
      
    ]
      console.log(this.item)
    item[0].UserId = this.id;
    item[0].item_desc = this.desc;
    item[0].item_status = 'incomplete';

    console.log(item[0])
  this.itemService.createItem(item[0]).subscribe();
  this.router.navigateByUrl('/home/'+ this.id)
  }

}
