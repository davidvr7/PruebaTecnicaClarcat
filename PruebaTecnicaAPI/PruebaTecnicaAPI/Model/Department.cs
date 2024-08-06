using System.Text.Json.Serialization;

namespace PruebaTecnicaAPI.Model
{
    public class Department
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [JsonIgnore]
        public ICollection<UserDepartment> UserDepartments { get; set; }
    }
}
