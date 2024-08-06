using System.Text.Json.Serialization;

namespace PruebaTecnicaAPI.Model
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }

        [JsonIgnore]
        public ICollection<UserDepartment> UserDepartments { get; set; }
    }
}
