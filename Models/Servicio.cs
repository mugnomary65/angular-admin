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

public string Formapagos {get; set;}
public double Seisporciento  {get; set;}
public double PrecioReal  {get; set;}
public double Subtotal  {get; set;}
public double Tiosan  {get; set;}
public double GastosNetos  {get; set;}
public double Ganancias  {get; set;}

public string Nota{get; set;}


[ForeignKey("ClienteID")]
public int ClienteID { get; set;}
public Cliente Clientes { get; set; }

[ForeignKey("EstadoId")]
public int EstadoId { get; set;}
public Estado Estados { get; set;}


public virtual List<Descripcion> Descripcions { get; set;}

        
    }
}