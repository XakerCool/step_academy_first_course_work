using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Shag_Kursovaya.Models
{
    [Table("Contacts")]
    public class Contact
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
    }
}