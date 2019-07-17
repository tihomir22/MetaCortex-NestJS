import * as mongoose from 'mongoose';

export const DatoHistoricoSingular = new mongoose.Schema({
    open_time: String,
    open: Number,
    high: Number,
    low: Number,
    close: Number,
    volume: Number,
});

export interface DatoHistoricoSingularModelo {
    open_time: string,
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number,
}