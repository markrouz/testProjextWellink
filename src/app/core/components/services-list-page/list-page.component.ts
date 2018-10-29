import { Component, OnInit } from '@angular/core';
import { AbstractEntity } from '@app/core/models/abstract-entity.model';
import { getAllAbstractEntities, getSelectedAbstractEntity } from '@app/core/store/reducers';
import * as fromAbstractEntities from '@app/core/store/reducers/abstract-entities';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as abstractEntityActions from '@app/core/store/actions/abstract-entities-actions';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {

  abstractEntities$: Observable<AbstractEntity[]>;
  selected$: Observable<AbstractEntity>;

  constructor(private store: Store<fromAbstractEntities.State>) {
    this.abstractEntities$ = store.pipe(select(getAllAbstractEntities));
    this.selected$ = store.pipe(select(getSelectedAbstractEntity));
  }

  ngOnInit() {
  }

  onSelect(id: number) {
    this.store.dispatch(new abstractEntityActions.Select(id));
  }
}
