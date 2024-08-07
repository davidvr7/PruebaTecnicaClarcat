using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace PruebaTecnicaAPI.Model
{
    public class User
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string firstName { get; set; }

        [Required]
        public string lastName { get; set; }

        [Required]
        public string email { get; set; }
          
        public string phoneNumber { get; set; }   
        public int? departmentId { get; set; }

        [JsonIgnore]
        public Department department { get; set; }
    }
}
 