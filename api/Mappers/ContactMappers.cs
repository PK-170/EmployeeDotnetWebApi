using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dto;
using api.Models;

namespace api.Mappers
{
    public static class ContactMappers
    {

        public static ContactDto ToContactDto(this Contact contactModel)
        {
            return new ContactDto
            {

                Id = contactModel.Id,
                Name = contactModel.Name,
                Email = contactModel.Email,
                Phone = contactModel.Phone
            };
        }

    }
}