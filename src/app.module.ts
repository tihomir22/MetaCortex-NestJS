import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RealTimeDataController } from './metacortex/controller/real-time-data.controller';
import { MetacortexModule } from './metacortex/metacortex.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://tihomir22:guarilla12@yeaboi-xmlke.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }),
    MetacortexModule,
    HttpModule],
  controllers: [AppController, RealTimeDataController],
  providers: [AppService],
})
export class AppModule { }
