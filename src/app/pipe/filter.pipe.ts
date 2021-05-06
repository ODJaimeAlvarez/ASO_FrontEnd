import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any { //value es filter:filterProyectos, pasa por parametro todos los datos del proyecto
    if(arg == '' || arg.length < 3) return value;
    const resultPosts=[];
    for(const valor of value) {
      if(valor.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) { //indexOf devuelve un objeto con el primer match, en caso de que no, devuelve un -1
        resultPosts.push(valor);
      };
    };

    return resultPosts;
  }

}//class
