import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractEntity } from '@app/core/models/abstract-entity.model';
import { EntityRace } from '@app/core/models/enums/entitiy-race.model';
import { EntityFavoriteHobbies } from '@app/core/models/enums/entity-favorite-hobbies.model';
import { EntityStatus } from '@app/core/models/enums/entity-status.model';
import { getSelectedAbstractEntity } from '@app/core/store/reducers';
import * as fromAbstractEntities from '@app/core/store/reducers/abstract-entities';
import { select, Store } from '@ngrx/store';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as abstractEntityActions from '@app/core/store/actions/abstract-entities-actions';
import { Location } from '@angular/common';

@Component({
  selector: 'app-entity-selected',
  templateUrl: './entity-selected.component.html',
  styleUrls: ['./entity-selected.component.scss'],
})
export class EntitySelectedComponent implements OnInit {

  private entity: AbstractEntity; // todo в этом компоненте, по всей видимости, я нарушаю redux т.к. entity меняется без всяких действий

  entityEditForm: FormGroup;

  possibleEntityRaces: string[];
  possibleEntityStatuses: string[];
  possibleEntityHobbies: string[];
  filteredPossibleEntityHobbies: Observable<string[]>;

  currentDate: Date = new Date();

  constructor(private store: Store<fromAbstractEntities.State>,
              private fb: FormBuilder,
              private location: Location) { }

  ngOnInit() {
    this.store.pipe(select(getSelectedAbstractEntity)).subscribe((entity => this.entity = entity));

    // todo добавить в шаблон отображение ошибок
    this.entityEditForm = this.fb.group({
      entityName: [this.entity.name, [Validators.required]],
      entityRace: [this.entity.race, [Validators.required]],
      isEntityStrong: [this.entity.isStrong, [Validators.required]],
      entityStatus: [this.entity.status, [Validators.required]],
      entityHobby: [this.entity.hobby, [Validators.required]],
      entityDescription: [this.entity.description, [Validators.required]],
      entityCreationDate: [{ value: this.entity.creationDate, disabled: true }, [Validators.required]],
      entityIpV4: [this.entity.ipV4,
        [Validators.required,
          Validators.pattern(
            '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$'),
        ],
      ],
    });

    this.possibleEntityRaces = Object.keys(EntityRace);
    this.possibleEntityStatuses = Object.keys(EntityStatus);
    this.possibleEntityHobbies = Object.keys(EntityFavoriteHobbies);
    this.filteredPossibleEntityHobbies = this.entityHobbyFormControl.valueChanges.pipe(
      map(value => this.filterEntityPossibleHobbies(value)),
    );

    interval(1000).subscribe(() => this.currentDate = new Date());
  }

  private filterEntityPossibleHobbies(filterByValue: string): string[] {
    const filterValue = filterByValue.toLowerCase();
    return this.possibleEntityHobbies.filter(hobby => hobby.toLowerCase().includes(filterValue));
  }

  onSubmit(): void {
    this.entity.name = this.entityNameFormControl.value;
    this.entity.race = this.entityRaceFormControl.value;
    this.entity.isStrong = this.entityStrongFormControl.value;
    this.entity.status = this.entityStatusFormControl.value;
    this.entity.description = this.entityDescriptionFormControl.value;
    this.entity.creationDate = this.entityCreationDateFormControl.value;
    this.entity.ipV4 = this.entityIpV4FormControl.value;
    this.entity.lastChangeDate = this.currentDate;

    this.store.dispatch(new abstractEntityActions.Edit(this.entity.id));
    this.location.back();
  }

  get entityNameFormControl(): AbstractControl {
    return this.entityEditForm.controls['entityName'];
  }

  get entityRaceFormControl(): AbstractControl {
    return this.entityEditForm.controls['entityRace'];
  }

  get entityStrongFormControl(): AbstractControl {
    return this.entityEditForm.controls['isEntityStrong'];
  }

  get entityStatusFormControl(): AbstractControl {
    return this.entityEditForm.controls['entityStatus'];
  }

  get entityHobbyFormControl(): AbstractControl {
    return this.entityEditForm.controls['entityHobby'];
  }

  get entityDescriptionFormControl(): AbstractControl {
    return this.entityEditForm.controls['entityDescription'];
  }

  get entityCreationDateFormControl(): AbstractControl {
    return this.entityEditForm.controls['entityCreationDate'];
  }

  get entityIpV4FormControl(): AbstractControl {
    return this.entityEditForm.controls['entityIpV4'];
  }

}
