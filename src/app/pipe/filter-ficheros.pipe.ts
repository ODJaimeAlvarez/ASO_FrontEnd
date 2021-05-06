import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFicheros'
})
export class FilterFicherosPipe implements PipeTransform {

  transform(value: any, arg: any): any { //value es filter:filterProyectos, pasa por parametro todos los datos del proyecto
    if(arg == '' || arg.length < 3) return value;
    const resultFicheros=[];
    for(const fichero of value) {
      if(fichero.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) { //indexOf devuelve un objeto con el primer match, en caso de que no, devuelve un -1
        resultFicheros.push(fichero);
      };
    };

    return resultFicheros;
  }

}
