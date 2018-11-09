import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractEntity } from '@app/core/models/abstract-entity.model';
import { EntityRace } from '@app/core/models/enums/entitiy-race.model';
import { EntityFavoriteHobbies } from '@app/core/models/enums/entity-favorite-hobbies.model';
import { EntityStatus } from '@app/core/models/enums/entity-status.model';
import * as abstractEntityActions from '@app/core/store/actions/abstract-entities-actions';
import * as fromAbstractEntities from '@app/core/store/reducers/abstract-entities';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-create-new-entity',
  templateUrl: './create-new-entity.component.html',
  styleUrls: ['./create-new-entity.component.scss'],
})
export class CreateNewEntityComponent implements OnInit {

  // todo приходится много дублировать из компонета entity-selected.Надо бы подумать над выносом общего
  private createdEntity: AbstractEntity;

  createEntityForm: FormGroup;

  possibleEntityRaces: string[];
  possibleEntityStatuses: string[];
  possibleEntityHobbies: string[];
  filteredPossibleEntityHobbies: Observable<string[]>;

  constructor(private store: Store<fromAbstractEntities.State>,
              private fb: FormBuilder,
              private location: Location) { }

  ngOnInit() {
    this.createEntityForm = this.fb.group({
      entityName: ['', [Validators.required]],
      entityRace: ['', [Validators.required]],
      isEntityStrong: ['', [Validators.required]],
      entityStatus: ['', [Validators.required]],
      entityHobby: ['', [Validators.required]],
      entityDescription: ['', [Validators.required]],
      entityCreationDate: [{ value: '', disabled: true }, [Validators.required]],
      entityIpV4: ['',
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
  }

  onSubmit(): void {

    // const newEntityId = Math.floor(Math.random() * (9)) + 2;
    const newEntityId = 3;
    this.createdEntity = {
      creationDate: this.entityCreationDateFormControl.value,
      description: this.entityDescriptionFormControl.value,
      hobby: this.entityHobbyFormControl.value,
      id: newEntityId,
      ipV4: this.entityIpV4FormControl.value,
      isStrong: this.entityStrongFormControl.value,
      name: this.entityNameFormControl.value,
      race: this.entityRaceFormControl.value,
      status: this.entityStatusFormControl.value,
      lastChangeDate: new Date(),
    };
    this.store.dispatch(new abstractEntityActions.AddOne(this.createdEntity));

    this.location.back();
  }

  private filterEntityPossibleHobbies(filterByValue: string): string[] {
    const filterValue = filterByValue.toLowerCase();
    return this.possibleEntityHobbies.filter(hobby => hobby.toLowerCase().includes(filterValue));
  }

  get entityNameFormControl(): AbstractControl {
    return this.createEntityForm.controls['entityName'];
  }

  get entityRaceFormControl(): AbstractControl {
    return this.createEntityForm.controls['entityRace'];
  }

  get entityStrongFormControl(): AbstractControl {
    return this.createEntityForm.controls['isEntityStrong'];
  }

  get entityStatusFormControl(): AbstractControl {
    return this.createEntityForm.controls['entityStatus'];
  }

  get entityHobbyFormControl(): AbstractControl {
    return this.createEntityForm.controls['entityHobby'];
  }

  get entityDescriptionFormControl(): AbstractControl {
    return this.createEntityForm.controls['entityDescription'];
  }

  get entityCreationDateFormControl(): AbstractControl {
    return this.createEntityForm.controls['entityCreationDate'];
  }

  get entityIpV4FormControl(): AbstractControl {
    return this.createEntityForm.controls['entityIpV4'];
  }
}
