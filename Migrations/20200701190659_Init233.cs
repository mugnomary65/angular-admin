using Microsoft.EntityFrameworkCore.Migrations;

namespace angular_admin.Migrations
{
    public partial class Init233 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Descripcion_Servicios_ServicioId1",
                table: "Descripcion");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Clientes_ClienteID",
                table: "Servicios");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Estados_EstadoId",
                table: "Servicios");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Servicios",
                table: "Servicios");

            migrationBuilder.RenameTable(
                name: "Servicios",
                newName: "Servicio");

            migrationBuilder.RenameIndex(
                name: "IX_Servicios_EstadoId",
                table: "Servicio",
                newName: "IX_Servicio_EstadoId");

            migrationBuilder.RenameIndex(
                name: "IX_Servicios_ClienteID",
                table: "Servicio",
                newName: "IX_Servicio_ClienteID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Servicio",
                table: "Servicio",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Descripcion_Servicio_ServicioId1",
                table: "Descripcion",
                column: "ServicioId1",
                principalTable: "Servicio",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicio_Clientes_ClienteID",
                table: "Servicio",
                column: "ClienteID",
                principalTable: "Clientes",
                principalColumn: "ClienteId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicio_Estados_EstadoId",
                table: "Servicio",
                column: "EstadoId",
                principalTable: "Estados",
                principalColumn: "EstadoId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Descripcion_Servicio_ServicioId1",
                table: "Descripcion");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicio_Clientes_ClienteID",
                table: "Servicio");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicio_Estados_EstadoId",
                table: "Servicio");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Servicio",
                table: "Servicio");

            migrationBuilder.RenameTable(
                name: "Servicio",
                newName: "Servicios");

            migrationBuilder.RenameIndex(
                name: "IX_Servicio_EstadoId",
                table: "Servicios",
                newName: "IX_Servicios_EstadoId");

            migrationBuilder.RenameIndex(
                name: "IX_Servicio_ClienteID",
                table: "Servicios",
                newName: "IX_Servicios_ClienteID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Servicios",
                table: "Servicios",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Descripcion_Servicios_ServicioId1",
                table: "Descripcion",
                column: "ServicioId1",
                principalTable: "Servicios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Clientes_ClienteID",
                table: "Servicios",
                column: "ClienteID",
                principalTable: "Clientes",
                principalColumn: "ClienteId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Estados_EstadoId",
                table: "Servicios",
                column: "EstadoId",
                principalTable: "Estados",
                principalColumn: "EstadoId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
