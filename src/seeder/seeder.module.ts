import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguageSeederModule } from './language/language.module';
import { Seeder } from './seeder';

@Module({
  imports: [
    LanguageSeederModule,
    MongooseModule.forRoot('mongodb://localhost/languages'),
  ],
  providers: [Logger, Seeder],
})
export class SeederModule {}
