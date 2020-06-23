using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace angular_admin.Models
{
    public class Servicio
    {
  public int Id {get; set;}
 public string IdServicio {get; set;}
public double Total  {get; set;}
public  DateTime Date  {get; set;}
public double Manobra  {get; set;}
public double Seisporciento  {get; set;}
public double Subtotal  {get; set;}
public double Tiosan  {get; set;}
public double GastosNetos  {get; set;}
public double Ganancias  {get; set;}

public string Nota{get; set;}


[ForeignKey("ClienteID")]
public int ClienteID { get; set;}
public virtual Cliente Clientes { get; set; }

[ForeignKey("EstadoId")]
public int EstadoId { get; set;}
public virtual Estado Estados { get; set;}

public virtual ICollection<Descripcion> Descripcions { get; set;}

        
    }
}