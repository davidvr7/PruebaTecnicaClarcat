using Microsoft.EntityFrameworkCore;
using PruebaTecnicaAPI.Model;
 
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Department> Departments { get; set; }
    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
         
        modelBuilder.Entity<User>()
            .HasOne(u => u.department)
            .WithMany(d => d.users)
            .HasForeignKey(u => u.departmentId); 
    }
}