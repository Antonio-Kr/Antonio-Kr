import { Injectable, Logger } from '@nestjs/common';
import { LanguageSeederService } from './language/language.service';

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly languageSeederService: LanguageSeederService,
  ) {}

  async seed() {
    await this.languages()
      .then(completed => {
        this.logger.debug('Successfuly');
        Promise.resolve(completed);
      })
      .catch(error => {
        this.logger.debug('failed');
        Promise.reject(error);
      });
  }

  async languages() {
    return await Promise.all(this.languageSeederService.create())
      .then(createdLanguages => {
        this.logger.debug(
          '№ of languages created: ' +
            createdLanguages.filter(
              nullValueOrCreatedLanguage => nullValueOrCreatedLanguage,
            ).length,
        );
        return Promise.resolve(true);
      })
      .catch(error => Promise.reject(error));
  }
}
