import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email : any;

  constructor()
  {
    this.email = sessionStorage.getItem("userEmail");
  }
  ngOnInit(): void {
    console.log("email",this.email)
  }
}
