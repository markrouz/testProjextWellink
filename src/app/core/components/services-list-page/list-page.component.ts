import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { ToolbarComponent } from '@app/core/components/toolbar/toolbar.component';
import { AbstractEntity } from '@app/core/models/abstract-entity.model';
import { EntityRace } from '@app/core/models/enums/entitiy-race.model';
import { EntityStatus } from '@app/core/models/enums/entity-staus.model';
import * as abstractEntityActions from '@app/core/store/actions/abstract-entities-actions';
import { getAllAbstractEntities, getSelectedAbstractEntity } from '@app/core/store/reducers';
import * as fromAbstractEntities from '@app/core/store/reducers/abstract-entities';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// todo надо бы выделить еще общий компонент для работы страницы списков
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {

  allAbstractEntities$: Observable<AbstractEntity[]>;
  selected$: Observable<AbstractEntity>;

  allAbstractEntities: AbstractEntity[];
  filteredAbstractEntities: AbstractEntity[];

  quantityOfChecked: number = 0;

  @ViewChild(MatDrawer)
  private drawer: MatDrawer;
  @ViewChild(ToolbarComponent)
  private toolbar: ToolbarComponent;

  // todo иконки добавить не получилось т.к. не могу переопределить стиль mat-list-item-content
  private raceFilters = [
    {
      name: 'Alliance',
      checked: false,
      filterMethod: (entities => entities.filter(entity => entity.race === EntityRace.Alliance)),
    },
    {
      name: 'Horde',
      checked: false,
      filterMethod: (entities => entities.filter(entity => entity.race === EntityRace.Horde)),
    },
  ];

  private statusFilters = [
    {
      name: 'Married',
      checked: false,
      filterMethod: (entities => entities.filter(entity => entity.status === EntityStatus.Married)),
    },
    {
      name: 'Free',
      checked: false,
      filterMethod: (entities => entities.filter(entity => entity.status === EntityStatus.Free)),
    },
    {
      name: 'Complicated',
      checked: false,
      filterMethod: (entities => entities.filter(entity => entity.status === EntityStatus.Complicated)),
    },
  ];

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
    this.allAbstractEntities$ = store.pipe(select(getAllAbstractEntities));
    this.selected$ = store.pipe(select(getSelectedAbstractEntity));
  }

  ngOnInit() {
    this.allAbstractEntities$.subscribe(entities => this.allAbstractEntities = entities);
    // todo при таком подходе фильтры не будут сохранятся при обновлении страницы
    this.filteredAbstractEntities = this.allAbstractEntities;
    this.toolbar.toggleClick.subscribe(() => this.drawer.toggle());
  }

  onSelect(id: number) {
    this.store.dispatch(new abstractEntityActions.Select(id));
  }

  private applyAllFilters() {

    this.quantityOfChecked = 0;

    let isAnyFilterChecked = false;
    const filterMatrix = [];
    this.listPageFilters.forEach((filter) => {
      let matrixRow = [];
      let isAnyFilterInItemChecked = false;
      filter.items.forEach((filterItem) => {
        if (filterItem.checked) {
          // лучше так: this.allAbstractEntities.filter(item.filterItem());
          matrixRow = matrixRow.concat(filterItem.filterMethod(this.allAbstractEntities));
          isAnyFilterChecked = true;
          isAnyFilterInItemChecked = true;
          this.quantityOfChecked += 1;
        }
      });
      if (isAnyFilterInItemChecked) {
        filterMatrix.push(matrixRow);
      }
    });

    const entityByAmount = new Map();
    filterMatrix.forEach((row) => {
      row.forEach((elem) => {
        if (entityByAmount.get(elem) === undefined) {
          entityByAmount.set(elem, 1);
        } else {
          entityByAmount.set(elem, entityByAmount.get(elem) + 1);
        }
      });
    });

    const filteredEntities = [];
    entityByAmount.forEach(((value, key) => {
      if (value === filterMatrix.length) {
        filteredEntities.push(key);
        console.log(value, key);
      }
    }));

    this.filteredAbstractEntities = isAnyFilterChecked ? filteredEntities : this.allAbstractEntities;
  }

}
