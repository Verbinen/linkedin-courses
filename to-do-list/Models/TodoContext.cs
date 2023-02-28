using Microsoft.EntityFrameworkCore;

namespace to_do_list.Models
{
    public class TodoContext : DbContext   
    {
        public TodoContext(DbContextOptions<TodoContext> options)
            : base(options)
        {
        }

        public DbSet<TodoItem> TodoItems { get; set; }
    }
}
