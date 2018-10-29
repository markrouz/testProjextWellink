import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import * as fromAbstractEntities from './abstract-entities';

export interface State {
  abstractEntities: fromAbstractEntities.State;
}

export const reducers: ActionReducerMap<State> = {
  abstractEntities: fromAbstractEntities.reducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];

export const getAbstractEntityState = createFeatureSelector<fromAbstractEntities.State>('abstractEntities');

export const getIds = createSelector(getAbstractEntityState, fromAbstractEntities.getIds);

export const getAbstractEntities = createSelector(getAbstractEntityState, fromAbstractEntities.getAbstractEntities);

export const getLastEdited = createSelector(getAbstractEntityState, fromAbstractEntities.getLastEdited);

export const getSelected = createSelector(getAbstractEntityState, fromAbstractEntities.getSelected);

export const getLastEditedAbstractEntity = createSelector(
  getLastEdited,
  getAbstractEntities,
  (lastEdited, abstractEntities) => {
    return abstractEntities[lastEdited];
  },
);

export const getSelectedAbstractEntity = createSelector(
  getSelected,
  getAbstractEntities,
  (selectedId, abstractEntities) => {
    return abstractEntities[selectedId];
  },
);

export const getAllAbstractEntities = createSelector(
  getIds,
  getAbstractEntities,
  (ids, abstractEntities) => {
    return ids.map(id => abstractEntities[id]);
  },
);
