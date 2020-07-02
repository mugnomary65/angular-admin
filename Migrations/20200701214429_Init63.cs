using Microsoft.EntityFrameworkCore.Migrations;

namespace angular_admin.Migrations
{
    public partial class Init63 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Servicio_ClienteID",
                table: "Servicio");

            migrationBuilder.CreateIndex(
                name: "IX_Servicio_ClienteID",
                table: "Servicio",
                column: "ClienteID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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
    }
}
