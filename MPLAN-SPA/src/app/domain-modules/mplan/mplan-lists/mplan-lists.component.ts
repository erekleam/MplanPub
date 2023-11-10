import { Component,OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mplan-lists',
  templateUrl: './mplan-lists.component.html',
  styleUrls: ['./mplan-lists.component.scss']
})
export class MplanListsComponent {
  

  constructor(
    private title : Title
  ) { }

  public ngOnInit(): void {
    this.title.setTitle('List');

  }

}
