import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { AbstractEntity } from '@app/core/models/abstract-entity.model';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss'],
})
export class EntityListComponent implements OnInit, OnChanges {

  @Input() entities: AbstractEntity[];
  @Output() select = new EventEmitter();

  tableDataSource: MatTableDataSource<AbstractEntity>;
  columnsToDisplay: string[] = ['name', 'race', 'status', 'description'];

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.tableDataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tableDataSource = new MatTableDataSource(this.entities);
  }
}
