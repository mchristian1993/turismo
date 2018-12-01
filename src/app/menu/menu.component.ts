import {Component, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  display = 'none';
  chris = '';
  tabs = 'none';

  constructor() {

  }

  ngOnInit() {
  }

  onCloseHandled() {

    this.display = 'none';

  }


  openModal() {

    this.display = 'block';

  }


}
