using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos
{
    public class UpdateContactRequestDto
    {
        public required string Name { get; set; } = string.Empty;
        public string? Email { get; set; } = string.Empty;

        public required string Phone { get; set; } = string.Empty;
        public bool Favorite { get; set; }
    }
}