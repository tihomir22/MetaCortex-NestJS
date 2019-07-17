import { Module, HttpModule } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PreciosActivo } from "./schemas/precioActivo";
import { RealTimeDataController } from "./controller/real-time-data.controller";
import { PreciosActivoService } from "./service/precios-activo.service";


@Module({
    imports: [MongooseModule.forFeature([{ name: 'PreciosActivos', schema: PreciosActivo,collection:"PreciosActivos" }]),HttpModule],
    controllers: [RealTimeDataController],
    providers: [PreciosActivoService],
    exports:[PreciosActivoService,]
})
export class MetacortexModule {}
