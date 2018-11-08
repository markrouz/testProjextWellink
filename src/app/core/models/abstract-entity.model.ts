import { EntityRace } from '@app/core/models/enums/entitiy-race.model';
import { EntityStatus } from '@app/core/models/enums/entity-status.model';

export interface AbstractEntity {
  id: number;
  name: string;
  race: EntityRace;
  isStrong: boolean;
  status: EntityStatus;
  hobby: string;
  description: string; // todo text-area с возможностью растягивания (горизонтальное?)
  creationDate: Date;
  ipV4: string; // todo поле для ввода ip. Наверное, стоит сделать маску.
  lastChangeDate: Date;
}
