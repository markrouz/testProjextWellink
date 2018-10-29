import { AbstractEntity } from '@app/core/models/abstract-entity.model';
import { Action } from '@ngrx/store';

export const SELECT = '[Abstract-entities] Select';
export const ADD_ONE = '[Abstract-entities] Add One';
export const EDIT = '[Abstract-entity] Edit';

export class Select implements Action {
  readonly type = SELECT;

  constructor(public payload: number) {}
}

export class AddOne implements Action {
  readonly type = ADD_ONE;

  constructor(public payload: AbstractEntity) {}
}

export class Edit implements Action {
  readonly type = EDIT;

  constructor(public payload: number) {}
}

export type Action = AddOne | Select | Edit;
