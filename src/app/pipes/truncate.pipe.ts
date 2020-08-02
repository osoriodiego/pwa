import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
    transform(value: string, limit: string): string{
        if(value.length > parseInt(limit)){
            return value.substring(0, parseInt(limit))+" ...";
        }else{
            return value;
        }
    }
}