import { PipeTransform, Pipe } from '@angular/core';
import { Depense } from './depense';

@Pipe({
    name: 'depenseFilter'
})
export class DepenseFilterPipe implements PipeTransform{
    transform(value: Depense[], filterBy: string): Depense[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((depense: Depense) =>
            depense.depenseNom.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}