import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{
  showIcon: boolean =false;
  items : any=[];
  selectedItem: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items=[
      {icon:"ri-dashboard-3-line", name:'Dashboard', selected: false, route:'/dashboard'},
      {icon:"ri-macbook-line", name:'My Devices', selected: false, route:'/devices'},
      {icon:"ri-road-map-line", name:'Map', selected: false, route:'/dashboard'},
      {icon:"ri-file-code-line", name:'Triggers', selected: false, route:'/dashboard'},
      {icon:"ri-file-chart-line", name:'Reports', selected: false, route:'/dashboard'},
      {icon:"ri-mail-line", name:'Event Center', selected: false, route:'/dashboard'},
      {icon:"ri-cloud-line", name:' Sharing Center', selected: false, route:'/dashboard'},
      {icon:"ri-user-line", name:'Me', selected: false, route:'/dashboard'}
    ]
    
  }

  changeIcon(value:any)
  {
    this.showIcon = value == "expand" ? false : true; 
  }

  onItemClick(item: any) {
    if (this.selectedItem === item) {
      this.selectedItem = null; 
    } else {
      this.selectedItem = item; 
      this.router.navigate([item.route]);
    }
  }


}
