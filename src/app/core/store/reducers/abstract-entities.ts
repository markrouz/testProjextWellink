import { AbstractEntity } from '@app/core/models/abstract-entity.model';
import { EntityRace } from '@app/core/models/enums/entitiy-race.model';
import { EntityStatus } from '@app/core/models/enums/entity-staus.model';
import * as AbstractEntityAction from '@app/core/store/actions/abstract-entities-actions';

export interface State {
  ids: number[];
  abstractEntities: { [id: number]: AbstractEntity };
  lastEdited: number;
  selected: number;
}

export const initialState: State = {
  ids: [1, 2],
  abstractEntities: {
    1: {
      id: 1, name: 'RandomName1',
      race: EntityRace.Alliance,
      strong: false,
      status: EntityStatus.Free,
      hobby: 'programming',
      description: 'usual human',
      creationDate: new Date('December 17, 1995 03:24:00'),
      ip: '192.168.1.1',
      lastChangeDate: new Date('October 1, 2018 14:20:00'),
    },
    2: {
      id: 2, name: 'RandomName2',
      race: EntityRace.Horde,
      strong: true,
      status: EntityStatus.Complicated,
      hobby: 'killing',
      description: 'usual orc',
      creationDate: new Date('December 14, 1994 11:00:00'),
      ip: '192.168.1.1',
      lastChangeDate: new Date('October 2, 2018 04:19:00'),
    },
  },
  lastEdited: null,
  selected: null,
};

export function reducer(state = initialState, action: AbstractEntityAction.Action) {
  switch (action.type) {

    case AbstractEntityAction.ADD_ONE: {
      const newEntity: AbstractEntity = action.payload;

      return {
        ...state,
        ids: [...state.ids, newEntity.id],
      };
    }

    case AbstractEntityAction.SELECT: {
      const id = action.payload;
      return {
        ...state, selected: id,
      };
    }

    case AbstractEntityAction.EDIT: {
      const id = action.payload;
      return {
        ...state, lastEdited: id,
      };
    }

    default:
      return state;
  }
}

export const getIds = (state: State) => state.ids;
export const getAbstractEntities = (state: State) => state.abstractEntities;
export const getSelected = (state: State) => state.selected;
export const getLastEdited = (state: State) => state.lastEdited;
