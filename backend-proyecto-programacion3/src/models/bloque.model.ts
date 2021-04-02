import {belongsTo, Entity, model, property, hasMany} from '@loopback/repository';
import {Proyecto} from './proyecto.model';
import {Inmueble} from './inmueble.model';

@model({
  settings: {
    foreignKeys: {
      fkProyectoId: {
        name: 'fkProyectoId',
        entity: 'Proyecto',
        entityKey: 'codigo',
        foreignKey: 'proyectoId',
      },
    },
  },
})
export class Bloque extends Entity {
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

  @belongsTo(() => Proyecto)
  proyectoId: number;

  @hasMany(() => Inmueble)
  inmuebles: Inmueble[];

  constructor(data?: Partial<Bloque>) {
    super(data);
  }
}

export interface BloqueRelations {
  // describe navigational properties here
}

export type BloqueWithRelations = Bloque & BloqueRelations;
