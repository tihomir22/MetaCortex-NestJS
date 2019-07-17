import * as mongoose from 'mongoose';
import { DatoHistoricoMain, DatoHistoricoModelo } from './objDatoHistoricoMain';

export const PreciosActivo = new mongoose.Schema({
    _id: String,
    precio: Number,
    listaDatosHora: Array(DatoHistoricoMain),
    parBase: String,
    parContra: String,
    listaIndicadores: Array(Object)
});

export interface PrecioActivoModelo {
    _id: string;
    precio: number;
    listaDatoshora: Array<DatoHistoricoModelo>;
    parBase: string;
    parContra: string;
    listaIndicadores: Array<any>;
}