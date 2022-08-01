using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Shag_Kursovaya.Models
{
    [Table("Users_Recipes")]
    public class UserRecipe
    {
        public int Id { get; set; }
        public string RecipeName { get; set; }
        public int UserId { get; set; }
        public string Composition { get; set; }
        public int Cost { get; set; }
        public double Rank { get; set; }

        public UserRecipe()
        {

        }
        public UserRecipe(string recipeName, int userId, string composition, int cost)
        {
            RecipeName = recipeName;
            UserId = userId;
            Composition = composition;
            Cost = cost;
            Rank = 0;
        }
    }
}