import { TranslateService } from './translate.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'translate',
    pure: false // add in this line, update value when we change language
})

export class TranslatePipe implements PipeTransform {

    constructor(private _translate: TranslateService) { }

    transform(value: string): any {
        if (!value) {
          return;
        }
        return this._translate.instant(value);
    }
}
