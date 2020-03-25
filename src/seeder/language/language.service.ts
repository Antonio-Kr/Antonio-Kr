import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { languages } from 'src/languages.data';
import { ILanguage } from 'src/seeder/interfaces/language.interface';

@Injectable()
export class LanguageSeederService {
  constructor(
    @InjectModel('Language') private readonly languageModel: Model<ILanguage>,
  ) {}

  create(): Array<Promise<ILanguage>> {
    return languages.map(async (language: ILanguage) => {
      return await this.languageModel
        .findOne({ name: language.name })
        .exec()
        .then(async dbLanguage => {
          if (dbLanguage) {
            return Promise.resolve(null);
          }

          return Promise.resolve(await this.languageModel.create(language));
        })
        .catch(error => Promise.reject(error));
    });
  }
}
