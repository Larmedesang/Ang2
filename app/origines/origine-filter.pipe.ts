import { PipeTransform, Pipe } from '@angular/core';
import { Origine } from './origine';

@Pipe({
    name: 'origineFilter'
})
export class OrigineFilterPipe implements PipeTransform{
    transform(value: Origine[], filterBy: string): Origine[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((origine: Origine) =>
            origine.origineNom.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}