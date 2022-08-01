using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shag_Kursovaya.Models
{
    public class Cart
    {
        public List<Dish> cartDishes = new List<Dish>();
        public void AddItem(string dishName, Context db)
        {
            cartDishes.Add(db.Dishes.Where(z => z.Name == dishName).FirstOrDefault());
        }
        public List<Dish> GetDishes()
        {
            return cartDishes;
        }
    }
}