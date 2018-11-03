import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { ToolbarComponent } from '@app/core/components/toolbar/toolbar.component';
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

  @ViewChild(MatDrawer)
  private drawer: MatDrawer;
  @ViewChild(ToolbarComponent)
  private toolbar: ToolbarComponent;

  private raceFilters = [{ name: 'Alliance' },
    { name: 'Horde' }];

  private statusFilters = [{ name: 'Married' },
    { name: 'Free', icon: '' },
    { name: 'Complicated' }];

  listPageFilters = [
    {
      name: 'Entity race',
      items: this.raceFilters,
    },
    {
      name: 'Entity status',
      items: this.statusFilters,
    },
  ];

  constructor(private store: Store<fromAbstractEntities.State>) {
    this.abstractEntities$ = store.pipe(select(getAllAbstractEntities));
    this.selected$ = store.pipe(select(getSelectedAbstractEntity));
  }

  ngOnInit() {
    this.toolbar.toggleClick.subscribe(() => this.drawer.toggle());
  }

  onSelect(id: number) {
    this.store.dispatch(new abstractEntityActions.Select(id));
  }
}
