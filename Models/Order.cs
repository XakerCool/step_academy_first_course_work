using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Shag_Kursovaya.Models
{
    [Table("Orders")]
    public class Order
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int DishId { get; set; }
        public int CityId { get; set; }
        public int Cost { get; set; }
        public bool IsMadeByUser { get; set; }
    }
}