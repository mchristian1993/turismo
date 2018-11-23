import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  display = 'none';
  chris = '';

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
