import * as mongoose from 'mongoose';

export const RegistroTecnico = new mongoose.Schema({
    numRegistry: Number,
    historicPrice: Number,
    technicalIndicator:Number,
    date:String
});

export interface RegistroTecnicoModelo {
    numRegistry: number,
    historicPrice: number,
    technicalIndicator:number,
    date:string
}