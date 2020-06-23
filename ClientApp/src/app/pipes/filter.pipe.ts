import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrar'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], args: any): any {
   if(args == '')
   {return value;
  }
   const resultPost = [];
   for(const post of value)
   {
  if(post.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1 ||post.address.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
  post.email.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
  post.telefono.toLowerCase().indexOf(args.toLowerCase()) > -1 ||  post.zipCode.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
  post.date.toLowerCase().indexOf(args.toLowerCase()) > -1)
  {
    resultPost.push(post);
  };
   };
   return resultPost;
  
  }

}
 