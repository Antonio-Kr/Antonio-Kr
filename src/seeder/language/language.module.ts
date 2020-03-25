import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguageSeederService } from './language.service';
import { LanguageSchema } from 'src/seeder/schemas/language.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Language', schema: LanguageSchema }]),
  ],
  providers: [LanguageSeederService],
  exports: [LanguageSeederService],
})
export class LanguageSeederModule {}
