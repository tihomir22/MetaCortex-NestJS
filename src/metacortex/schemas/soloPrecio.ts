import * as mongoose from 'mongoose';

export const soloPrecio = new mongoose.Schema({
    asset: String,
    price: Number,
    timestamp: Number,
});

export interface SoloPrecioModelo {
    asset: string,
    price: number,
    timestamp: number,
}