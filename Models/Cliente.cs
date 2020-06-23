using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace angular_admin.Models
{
    public class Cliente
    {
        public int ClienteId {get; set;}
        public string Nombre  {get; set;}
        public string Email {get; set;}
        public string Telefono {get; set;}
        public string Address {get; set;}
        public string ZipCode {get; set;}
        [DataType(DataType.Date)]
        public DateTime Date {get; set;}

          // Definición de la Relación
    
    }
}