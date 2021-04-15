import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Bloque} from './bloque.model';
import {Ciudad} from './ciudad.model';

@model({
  settings: {
    foreignKeys: {
      fkCiudadId: {
        name: 'fkCiudadId',
        entity: 'Ciudad',
        entityKey: 'codigo',
        foreignKey: 'ciudadId',
      },
    },
  },
})
export class Proyecto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  codigo?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  imagen: string;

  @belongsTo(() => Ciudad)
  ciudadId: number;

  @hasMany(() => Bloque)
  bloques: Bloque[];

  constructor(data?: Partial<Proyecto>) {
    super(data);
  }
}

export interface ProyectoRelations {
  // describe navigational properties here
}

export type ProyectoWithRelations = Proyecto & ProyectoRelations;
