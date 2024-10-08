using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dto;
using api.Dtos;
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

        public static Contact ToContactFromCreateDTO(this CreateContactRequestDto contactDto)
        {

            return new Contact
            {
                Name = contactDto.Name,
                Email = contactDto.Email,
                Phone = contactDto.Phone,
                Favorite = contactDto.Favorite
            };

        }

    }
}