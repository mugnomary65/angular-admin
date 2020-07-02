using Microsoft.EntityFrameworkCore.Migrations;

namespace angular_admin.Migrations
{
    public partial class Init23 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Descripcion_Servicios_ServicioId1",
                table: "Descripcion");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Servicios",
                table: "Servicios");

            migrationBuilder.DropColumn(
                name: "ServicioId",
                table: "Servicios");

            migrationBuilder.DropColumn(
                name: "DescripcionId",
                table: "Servicios");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Servicios",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Descripcion_Servicios_ServicioId1",
                table: "Descripcion");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Servicios",
                table: "Servicios");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Servicios");

            migrationBuilder.AddColumn<int>(
                name: "ServicioId",
                table: "Servicios",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<int>(
                name: "DescripcionId",
                table: "Servicios",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Servicios",
                table: "Servicios",
                column: "ServicioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Descripcion_Servicios_ServicioId1",
                table: "Descripcion",
                column: "ServicioId1",
                principalTable: "Servicios",
                principalColumn: "ServicioId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
