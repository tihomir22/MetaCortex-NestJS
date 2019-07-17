import * as mongoose from 'mongoose';
import { RegistroTecnicoModelo, RegistroTecnico } from './registroTecnico';

export const IndicadorTecnico = new mongoose.Schema({
    indicatorName: String,
    periodoDatosHistoricos: String,
    tipoSeries:String,
    intervalo:Number,
    dato: Array(RegistroTecnico),
});

export interface IndicadorTecnicoModelo {
    indicatorName: string,
    periodoDatosHistoricos: string,
    tipoSeries:string,
    intervalo:number,
    dato: Array<RegistroTecnicoModelo>,
}