using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/contact")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public ContactController(ApplicationDBContext context)
        {
            _context = context;
        }
    }
}