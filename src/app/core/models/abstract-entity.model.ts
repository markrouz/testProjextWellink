import { EntityRace } from '@app/core/models/enums/entitiy-race.model';
import { EntityStatus } from '@app/core/models/enums/entity-staus.model';

export interface AbstractEntity {
  id: number;
  name: string; // todo поле ввода текста
  race: EntityRace; // todo радио кнопка
  strong: boolean; // todo чекбокс
  status: EntityStatus; // todo enum для селектора
  hobby: string; // todo enum для селектора с автозаполнением
  description: string; // todo text-area с возможностью растягивания
  creationDate: Date; // todo выбор даты
  ip: string; // todo поле для ввода ip
  lastChangeDate: Date;
}
