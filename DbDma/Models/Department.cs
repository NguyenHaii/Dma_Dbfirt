using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace UniversityApi.Models
{
    public class Department
    {
        public int DepartmentId { get; set; }

        [Required, StringLength(150)]
        public string DepartmentName { get; set; }

        [StringLength(100)]
        public string Dean { get; set; }

        // Quan hệ 1-n
        public ICollection<Lecturer>? Lecturers { get; set; }
    }
}
