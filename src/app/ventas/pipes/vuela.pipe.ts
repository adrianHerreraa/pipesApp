import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuelaPipe'
})
export class VuelaPipe implements PipeTransform {
    
    transform( value: boolean ): string {
        return (value) ? 'vuela' : 'No vuela';
    }

}