using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.ModelBinding;
using System.Web.Mvc;
using System.Web.UI;
using Shag_Kursovaya.Models;

namespace Shag_Kursovaya.Controllers
{
    public class MainPageController : Controller
    {
        User currentUser = new User();
        Context db;
        Cart cart = new Cart();
        public List<Dish> cartItems = new List<Dish>();
        public MainPageController()
        {
            db = new Context();
            //cart.cartDishes.Add(db.Dishes.Where(z => z.Name == "Гамбургер").FirstOrDefault());
        }
        public ActionResult Main()
        {
            var user = Session["userInfo"] as User;
            //string s = Environment.CurrentDirectory;
            if (user != null)
            {
                if (user.IsLogined == true)
                {
                    return View(user);
                }
                else
                    return View();
            }
            else
                return View();
        }
        public ActionResult UnloginedPage()
        {
            return PartialView();
        }
        public ActionResult LoginedPage(string isLogined)
        {
            var tempUser = Session["userInfo"];
            if (isLogined == "true")
            {
                return PartialView(tempUser as User);
            }
            else
                return UnloginedPage();
        }
        public ActionResult AddInCart(string dishName) 
        {
            cart.AddItem(dishName, db);
            return RedirectToAction("Main");
        }
        public ActionResult CartPage()
        {
            return View(cart.GetDishes());
        }
        public ActionResult FillContacts()
        {
            return PartialView(db.Contacts);
        }

        public ActionResult FillMenu()
        {
            return PartialView(db.Dishes);
        }

        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(string login, string password)
        {
            User loginingUser = db.Users.Where(z=> (z.Email== login & z.Password==password)|(z.Login == login & z.Password == password)).FirstOrDefault();
            if (loginingUser != null)
            {
                loginingUser.IsLogined = true;
                Session["userInfo"] = loginingUser;
                return RedirectToAction("Main");
            }
            else
                return RedirectToAction("Login");
        }
        public ActionResult LogOut()
        {
            Session["userInfo"] = null;
            return RedirectToAction("Main");
        }
        [HttpGet]
        public ActionResult Registration()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Registration(string login, string email, string password, string confrim_password)
        {
            Page page = HttpContext.CurrentHandler as Page;
            User registratingUser = new User();
            if (password == confrim_password)
            {
                if (db.Users.Where(z => z.Login == login).Count() > 0)
                {
                    TempData["RegisterError"] = "Пользователь с таким именем уже существует!";
                }
                else if (db.Users.Where(z => z.Email == email).Count() > 0)
                {
                    TempData["RegisterError"] = "Пользователь с такой почтой уже существует!";
                }
                else if (db.Users.Where(z => z.Password == password).Count() > 0)
                {
                    TempData["RegisterError"] = "Пароль уже занят!";
                }
                else
                {
                    registratingUser.Login = login;
                    registratingUser.Email = email;
                    registratingUser.Password = password;
                    registratingUser.ChefRank = 0;
                    registratingUser.IsLogined = false;
                    db.Users.Add(registratingUser);
                    db.SaveChanges();
                    return RedirectToAction("Login");
                }
                return View();
            }
            else
            {
                return View();
            }
        }
        public ActionResult AboutUs()
        {
            if (Session["userInfo"] != null)
                return View(Session["userInfo"] as User);
            else
                return View();
        }
        public ActionResult UserProfile()
        {
            return View(Session["userInfo"] as User);
        }
        [HttpGet]
        public ActionResult CreateBurger()
        {
            if (Session["userInfo"] != null)
                return View(Session["userInfo"] as User);
            else
                return View();
        }
        [HttpPost]
        public void PublishUserBurger(string recipeName, int userId, string composition, int cost)
        {
            UserRecipe userRecipe = new UserRecipe(recipeName, userId, composition, cost);
            db.Users_Recipes.Add(userRecipe);
            db.SaveChanges();
        }
        public ActionResult FillCategoryMenu(string category)
        {
            var categoryList = db.Dishes.Where(z=>z.Category==category).ToList();
            if (categoryList != null)
                return PartialView(categoryList);
            else
                return FillMenu();
        }
        public ActionResult UsersRecipes()
        {
            var tempUsersTopDishes = db.Users_Recipes.ToList().OrderByDescending(z=>z.Rank);
            if (tempUsersTopDishes != null)
                return PartialView(tempUsersTopDishes);
            else
                return FillMenu();
        }
    }
}