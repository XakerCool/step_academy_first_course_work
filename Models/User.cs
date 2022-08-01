using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Shag_Kursovaya.Models
{
    [Table("Users")]
    public class User
    {
        public int Id { get; set; }
        [DataType(DataType.Password)]
        public string Password { get; set; }
        public string Login { get; set; }
        public string Email { get; set; }
        public double ChefRank { get; set; }
        public bool IsLogined { get; set; }
        public List<UserRecipe> UserRecipes { get; set; }

        public User()
        {
            Password = "test";
            Login = "test";
            Email = "test";
            ChefRank = 0;
            IsLogined = false;
            UserRecipes = new List<UserRecipe>();
        }
    }
}