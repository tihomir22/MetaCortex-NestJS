import { Injectable } from '@nestjs/common';
import { PrecioActivoModelo } from '../schemas/precioActivo';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { SoloPrecioModelo } from '../schemas/soloPrecio';

@Injectable()
export class PreciosActivoService {

    constructor(@InjectModel('PreciosActivos') private readonly precioActivo: Model<PrecioActivoModelo>) { }

    async getAll():Promise<Array<PrecioActivoModelo>>{
        const result = await this.precioActivo.find();
        return result;
    }

    async getByID(parCrypto:string):Promise<any>{
        const result= await this.precioActivo.findOne({_id:parCrypto});
        return result;
    }

    /*async create(name:string,age:number,breed:string): Promise<PrecioActivoModelo> {
      
      const createdCat = new this.catModel({
          name,
          age,
          breed
      });
      const result= await createdCat.save();
      console.log(result);
      return null;
    }*/

}
