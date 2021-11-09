import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculasPipe',
})
export class MayuscularPipe implements PipeTransform {

    transform( value: string, isMayusculas: boolean = true ): string {
        if( isMayusculas ){
            return value.toUpperCase();
        }else {
            return value.toLowerCase();
        }
        
    }

}