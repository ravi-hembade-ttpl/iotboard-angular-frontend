import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{
  showIcon: boolean =false;
  items : any=[];
  selectedItem: any;

  ngOnInit(): void {
    this.items=[
      {icon:"ri-dashboard-3-line", name:'Dashboard', selected: false},
      {icon:"ri-macbook-line", name:'My Devices', selected: false},
      {icon:"ri-road-map-line", name:'Map', selected: false},
      {icon:"ri-file-code-line", name:'Triggers', selected: false},
      {icon:"ri-file-chart-line", name:'Reports', selected: false},
      {icon:"ri-mail-line", name:'Event Center', selected: false},
      {icon:"ri-cloud-line", name:' Sharing Center', selected: false},
      {icon:"ri-user-line", name:'Me', selected: false}
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
    }
  }


}
