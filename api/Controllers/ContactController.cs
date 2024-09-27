using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos;
using api.Mappers;
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

        [HttpGet]
        public IActionResult GetAll()
        {

            var contacts = _context.Contacts.ToList()
            .Select(s => s.ToContactDto());
            return Ok(contacts);
        }

        [HttpGet("{id}")]

        public IActionResult GetById([FromRoute] int id)
        {
            var contact = _context.Contacts.Find(id);
            if (contact == null)
            {
                return NotFound();
            }
            return Ok(contact.ToContactDto());

        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateContactRequestDto contactDto)
        {
            var contactModel = contactDto.ToContactFromCreateDTO();
            _context.Contacts.Add(contactModel);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { id = contactModel.Id }, contactModel.ToContactDto());
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult Update([FromRoute] int id, [FromBody] UpdateContactRequestDto updateDto)
        {
            var contactModel = _context.Contacts.FirstOrDefault(x => x.Id == id);

            if (contactModel == null)
            {
                return NotFound();
            }

            contactModel.Name = updateDto.Name;
            contactModel.Email = updateDto.Email;
            contactModel.Phone = updateDto.Phone;
            contactModel.Favorite = updateDto.Favorite;

            _context.SaveChanges();
            return Ok(contactModel.ToContactDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            var contactModel = _context.contacts.FirstOrDefault(x => x.Id == id);
            if (contactModel == null)
            {
                return NotFound();
            }

        }



    }
}