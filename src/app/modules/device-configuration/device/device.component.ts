import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddDeviceComponent } from 'src/app/modal/add-device/add-device.component';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit{
  constructor(private modalService: NgbModal,) {}
  ngOnInit(): void {
    
  }

  openDevice()
  {
    this.modalService.open(AddDeviceComponent, {
      scrollable: true,
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
  }

}
