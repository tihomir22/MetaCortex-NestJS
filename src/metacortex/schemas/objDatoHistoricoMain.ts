import * as mongoose from 'mongoose';
import { DatoHistoricoSingular, DatoHistoricoSingularModelo } from './objDatoHistoricoSingular';

export const DatoHistoricoMain = new mongoose.Schema({
    periodo: String,
    numRegistros: Number,
    dato: Array(DatoHistoricoSingular),
});

export interface DatoHistoricoModelo {
    periodo: string,
    numRegistros: number,
    dato: Array<DatoHistoricoSingularModelo>,
}