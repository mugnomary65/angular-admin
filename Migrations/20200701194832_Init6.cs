using Microsoft.EntityFrameworkCore.Migrations;

namespace angular_admin.Migrations
{
    public partial class Init6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Servicio_ClienteID",
                table: "Servicio");

            migrationBuilder.CreateIndex(
                name: "IX_Servicio_ClienteID",
                table: "Servicio",
                column: "ClienteID",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Servicio_ClienteID",
                table: "Servicio");

            migrationBuilder.CreateIndex(
                name: "IX_Servicio_ClienteID",
                table: "Servicio",
                column: "ClienteID");
        }
    }
}
