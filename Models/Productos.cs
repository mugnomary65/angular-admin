using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
namespace angular_admin.Models
{
    public class Productos
    {
        public int Id {get; set;}
        public string Codigo {get; set;}
        public string Descripcion {get; set;}
        public double Entrada  {get; set;}
        public double Salida  {get; set;}
        public double Saldo  {get; set;}
    }
}