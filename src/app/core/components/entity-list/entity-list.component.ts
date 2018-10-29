import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { AbstractEntity } from '@app/core/models/abstract-entity.model';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss'],
})
export class EntityListComponent implements OnInit {

  @Input() entities: AbstractEntity[];
  @Output() select = new EventEmitter();

  tableDataSource: MatTableDataSource<AbstractEntity>;
  columnsToDisplay: string[] = ['name', 'race', 'status', 'description'];

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.tableDataSource = new MatTableDataSource(this.entities);
    this.tableDataSource.sort = this.sort;
  }

}
