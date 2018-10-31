import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// todo второй тулбар это такое себе (как минимум из-за того, что пришлось продублировать стили). надо сделать как-то по-другому
// todo нужно как-то все таки сделать кнопки как на висле и выдвигающуюся панель фильтров
@Component({
  selector: 'app-entity-toolbar',
  templateUrl: './entity-toolbar.component.html',
  styleUrls: ['./entity-toolbar.component.scss'],
})
export class EntityToolbarComponent implements OnInit {

  pageName: string = 'Page name';

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
