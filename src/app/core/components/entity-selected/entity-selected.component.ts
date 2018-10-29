import { Component, OnInit } from '@angular/core';
import { AbstractEntity } from '@app/core/models/abstract-entity.model';
import { getSelectedAbstractEntity } from '@app/core/store/reducers';
import * as fromAbstractEntities from '@app/core/store/reducers/abstract-entities';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-entity-selected',
  templateUrl: './entity-selected.component.html',
  styleUrls: ['./entity-selected.component.scss'],
})
export class EntitySelectedComponent implements OnInit {

  entity: AbstractEntity;

  constructor(private store: Store<fromAbstractEntities.State>) { }

  ngOnInit() {
    this.store.pipe(select(getSelectedAbstractEntity)).subscribe((entity => this.entity = entity));
  }

}
