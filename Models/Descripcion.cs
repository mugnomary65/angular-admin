using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace angular_admin.Models
{
    public class Descripcion
    {
         public int Id {get; set;}     
         public int Cantidad {get; set;}    
         public string Texto {get; set;}  
         public double Precio {get; set;}
          public double Total {get; set;}       
      
          private int ServicioId {get; set;}
         
    }
}