import { Controller, Get, Query, Res, HttpStatus, HttpService } from '@nestjs/common';
//import { ApiOperation, ApiResponse, ApiImplicitQuery } from '@nestjs/swagger';
import { PreciosActivoService } from '../service/precios-activo.service';
import { ApiOperation, ApiResponse, ApiImplicitQuery } from '@nestjs/swagger';
import { ValidacionesEstaticas } from '../validaciones/validacionesEstaticas';

@Controller('real-time-data')
export class RealTimeDataController {

    constructor(private readonly preciosActivo: PreciosActivoService,private readonly http:HttpService) {

    }


    @ApiOperation({ title: 'Get All Stored Assets' })
    @ApiResponse({ status: 200, description: 'The list of all stored assets has been successfully retrieved.' })
    @ApiResponse({ status: 400, description: 'Validation failed' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    /*@ApiImplicitQuery({ name: 'projectId', description: 'filter tasks by project id', required: false })
    @ApiImplicitQuery({ name: 'status', description: 'filter tasks by status if project id specified', required: false })*/
    @Get('/')
    async getAll(@Query() query,
        @Res() res
    ) {
        const preciosActivos = await this.preciosActivo.getAll();
        return res.status(HttpStatus.OK).json({
            message: +new Date(),
            preciosActivos
        })
    }

    @ApiOperation({ title: 'Get All Stored Assets' })
    @ApiResponse({ status: 200, description: 'The list of all stored assets has been successfully retrieved.' })
    @ApiResponse({ status: 400, description: 'Validation failed' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    /*@ApiImplicitQuery({ name: 'projectId', description: 'filter tasks by project id', required: false })
    @ApiImplicitQuery({ name: 'status', description: 'filter tasks by status if project id specified', required: false })*/
    @Get('/price')
    async getPrice(@Query() query,
        @Res() res
    ) {
        if (ValidacionesEstaticas.esValidacionDePrecio(query)) {
            let preciosActivos = await this.preciosActivo.getByID(query.base + query.counter);
            if(preciosActivos==null){
               preciosActivos=this.http.get('https://koordinator1488.herokuapp.com/prices/' + query.base + "/" + query.counter).toPromise();
            }
            return res.status(HttpStatus.OK).json({
                message: "All right bb",
                preciosActivos
            })
        } else {
            return res.status(HttpStatus.NOT_ACCEPTABLE).json({
                message: "Incorrect parameters",
            })
        }
        /*const preciosActivos = await this.preciosActivo.getAll();
        return res.status(HttpStatus.OK).json({
            message: +new Date(),
            preciosActivos
        })*/

        /**
         *      if (preciosActivos == null) {
            //    return this.http.get('https://koordinator1488.herokuapp.com/prices/' + query.base + "/" + query.counter).pipe(map(response => response.data)).toPromise();
            }
            //let soloPrecio: SoloPrecioModelo = (preciosActivos != null) ? ({ asset: query.base + query.counter, price: preciosActivos.precio, timestamp: +new Date() }) : ()
           
         */
    }
}
