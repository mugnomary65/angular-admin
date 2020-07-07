import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filerServicios'
})
export class FilerServiciosPipe implements PipeTransform {

  transform(value: any[], args: any): any {
    if(args == '')
    {return value;
   }
    const resultPost = [];
    for(const post of value)
    {
   if(post.clientes.address.toLowerCase().indexOf(args.toLowerCase()) > -1 || post.clientes.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1
   || post.estados.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1
   || post.date.toLowerCase().indexOf(args.toLowerCase()) > -1)
   {
     resultPost.push(post);
   };
    };
    return resultPost;
   
   }

}
