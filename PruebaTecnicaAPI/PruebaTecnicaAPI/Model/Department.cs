using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace PruebaTecnicaAPI.Model
{
    public class Department
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string name { get; set; }

        public ICollection<User> users { get; set; }
    }
}
