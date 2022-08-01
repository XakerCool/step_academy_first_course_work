$(document).ready(function()
{  
  var staticScroll =  $(window).scrollTop() + $(window).height();
  var $element = $('.footer');
  let counter = 0;
  if(staticScroll>$element.offset().top)
  {
    $('.create_your_burger').css('bottom', $element.height())
    $('.cart').css('bottom', $element.height())
  }
  $(window).scroll(function() 
  {
    var scroll = $(window).scrollTop() + $(window).height();
    var offset = $element.offset().top
    var offset1 = $element.offset().top + ($element.height()-20);
      if (scroll > offset1 && counter == 0) 
      {
        //$('.create_your_burger').toggleClass('_onFooter');
        $('.create_your_burger').css('bottom', $element.height()+20)
        $('.cart').css('bottom', $element.height()+20)
        counter = 1;
      }
      if(scroll< offset1 && counter!=0)
      {
        //$('.create_your_burger').removeClass('_onFooter');
        $('.create_your_burger').css('bottom', $element.height()-20)
        $('.cart').css('bottom', $element.height()-20)
        counter=0;
      }
      if(scroll<offset)
      {
        $('.create_your_burger').css('bottom', 20)
        $('.cart').css('bottom', 20)
      }
  });
  //функция создания бургера
  var cotlettes_count = 0;
  var salad_papers_count = 0;
  var tomatos_count = 0;
  var onions_count = 0;
  var cheese_count = 0;
  var down_buns_count = 0;
  var total_burger_price = 200;
  $button_elem = $('.comp_button');
  $button_elem.click(function()
  {
    //console.log($(this).attr("name"));
    var imgName = $(this).attr("name");
    $('.burger_parts_list').append('<li class="burger_part"><img src="../Images/'+imgName+'.png" alt=""></li>');
    //$('.total_components_list').append('<li>'+$(this).text()+'</li>')
    total_burger_price+=Number($(this).attr("price"));
    $('.total_creating_burger_price').text(total_burger_price);
    if($(this).attr("name")=="cotlette")
    {
      cotlettes_count++;
      if(cotlettes_count>0)
      {
        $('.total_components_list').children().each(function(index, item)
        {
          if($(item).attr('id')=='cotlette')
          {
            $(item).remove();
          }
        });
          $('.total_components_list').append('<li id="cotlette">Котлета'+' x'+cotlettes_count+'</li>');
      }
      else
        $('.total_components_list').append('<li id="cotlette">Котлета</li>');
    }
    else if($(this).attr("name")=="salad_paper")
    {
      salad_papers_count++;
      if(salad_papers_count>0)
      {
        $('.total_components_list').children().each(function(index, item)
        {
          if($(item).attr('id')=='salad_paper')
          {
            $(item).remove();
          }
        });
        $('.total_components_list').append('<li id="salad_paper">Лист салата'+' x'+salad_papers_count+'</li>');
      }
      else
        $('.total_components_list').append('<li id="salad_paper">Лист салата</li>');
    }
    else if($(this).attr("name")=="tomato")
    {
      tomatos_count++;
      if(tomatos_count>0)
      {
        $('.total_components_list').children().each(function(index, item){
          if($(item).attr('id')=='tomato')
          {
            $(item).remove();
          }
        });
        $('.total_components_list').append('<li id="tomato">Помидор'+' x'+tomatos_count+'</li>');
      }
      else
        $('.total_components_list').append('<li id="tomato">Помидор</li>');
    }
    else if($(this).attr("name")=="onion")
    {
      onions_count++;
      if(onions_count>0)
      {
        $('.total_components_list').children().each(function(index, item){
          if($(item).attr('id')=='onion')
          {
            $(item).remove();
          }
        });
        $('.total_components_list').append('<li id="onion">Лук'+' x'+onions_count+'</li>');
      }
      else
        $('.total_components_list').append('<li id="onion">Лук</li>');
    }
    else if($(this).attr("name")=="cheese")
    {
      cheese_count++;
      if(cheese_count>0)
      {
        $('.total_components_list').children().each(function(index, item){
          if($(item).attr('id')=='cheese')
          {
            $(item).remove();
          }
        });
        $('.total_components_list').append('<li id="cheese">Сыр'+' x'+cheese_count+'</li>');
      }
      else
        $('.total_components_list').append('<li id="cheese">Сыр</li>');
    }
    else if($(this).attr("name")=="down_bun")
    {
      down_buns_count++;
      if(down_buns_count>0)
      {
        $('.total_components_list').children().each(function(index, item){
          if($(item).attr('id')=='down_bun')
          {
            $(item).remove();
          }
        });
        $('.total_components_list').append('<li id="down_bun">Нижняя булка'+' x'+down_buns_count+'</li>');
      }
      else
        $('.total_components_list').append('<li id="down_bun">Нижняя булка</li>');
    }
  });
  //удаление всех элементов
  $('.clear_button_but').click(function()
  {
    cotlettes_count = 0;
    salad_papers_count = 0;
    tomatos_count = 0;
    onions_count = 0;
    cheese_count = 0;
    down_buns_count = 0;
    ketchup_elements_count=0;
    mustard_elements_count=0;
    burger_parts_count=0;
    total_burger_price=200;
    $('.total_creating_burger_price').text(total_burger_price);
    var children_picture = $('.burger_parts_list').children();
    var children_list = $('.total_components_list').children();
    $(children_picture).each(function(index, item){
      if($(item).attr('id')!='up_bun')
      { 
        item.remove();
      }
    });
    $(children_list).each(function(index, item){
      if($(item).attr('id')!='up_bun')
      { 
        item.remove();
      }
    });
  });
  //удаление элемента по клику
  $('.delete_one_but').click(function()
  {
    if($('.total_components_list').children().eq($('.total_components_list').children().length-1).attr('id')!="up_bun")
    {
      if($('.total_components_list').children().eq($('.total_components_list').children().length-1).attr('id')=='ketchup_sauce')//удаление кутчупа
      {  
        total_burger_price-=50;
        $('.total_creating_burger_price').text(total_burger_price);
        ketchup_elements_count--;
        if(ketchup_elements_count>0)
        {
          $('.total_components_list').children().each(function(index, item){
            if($(item).attr('id')=='ketchup_sauce')
            {
              $(item).remove();
            }
          });
          $('.total_components_list').append('<li id="ketchup_sauce">Кетчуп'+' x'+ketchup_elements_count+'</li>');
        }
        else
        {
          $('.total_components_list').children().eq($('.total_components_list').children().length-1).remove();
        }
      }
      else if($('.total_components_list').children().eq($('.total_components_list').children().length-1).attr('id')=='mustard_sauce')//удаление горчицы
      {
        total_burger_price-=50;
        $('.total_creating_burger_price').text(total_burger_price);
        mustard_elements_count--;
        if(mustard_elements_count>0)
        {
          $('.total_components_list').children().each(function(index, item){
            if($(item).attr('id')=='mustard_sauce')
            {
              $(item).remove();
            }
          });
          $('.total_components_list').append('<li id="mustard_sauce">Горчица'+' x'+mustard_elements_count+'</li>');
        }
        else
        {
          $('.total_components_list').children().eq($('.total_components_list').children().length-1).remove();
        }
      }
      else if($('.total_components_list').children().eq($('.total_components_list').children().length-1).attr('id')=='cotlette')//удаление котлеты
      {  
        total_burger_price-=300;
        $('.total_creating_burger_price').text(total_burger_price);
        cotlettes_count--;
        if(cotlettes_count>0)
        {
          $('.total_components_list').children().each(function(index, item){
            if($(item).attr('id')=='cotlette')
            {
              $(item).remove();
            }
          });
          $('.total_components_list').append('<li id="cotlette">Котлета'+' x'+cotlettes_count+'</li>');
          if($('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).attr('id')!="up_bun")
          {
            $('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).remove();
          }
        }
        else
        {
          $('.total_components_list').children().eq($('.total_components_list').children().length-1).remove();
          if($('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).attr('id')!="up_bun")
          {
            $('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).remove();
          }
        }
      }
      else if($('.total_components_list').children().eq($('.total_components_list').children().length-1).attr('id')=='salad_paper')//удаление листьев салата
      {  
        total_burger_price-=100;
        $('.total_creating_burger_price').text(total_burger_price);
        salad_papers_count--;
        if(salad_papers_count>0)
        {
          $('.total_components_list').children().each(function(index, item){
            if($(item).attr('id')=='salad_paper')
            {
              $(item).remove();
            }
          });
          $('.total_components_list').append('<li id="salad_paper">Лист салата'+' x'+salad_papers_count+'</li>');
          if($('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).attr('id')!="up_bun")
          {
            $('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).remove();
          }
        }
        else
        {
          $('.total_components_list').children().eq($('.total_components_list').children().length-1).remove();
          if($('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).attr('id')!="up_bun")
          {
            $('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).remove();
          }
        }
      }
      else if($('.total_components_list').children().eq($('.total_components_list').children().length-1).attr('id')=='tomato')//удаление помидоров
      {  
        total_burger_price-=150;
        $('.total_creating_burger_price').text(total_burger_price);
        tomatos_count--;
        if(tomatos_count>0)
        {
          $('.total_components_list').children().each(function(index, item){
            if($(item).attr('id')=='tomato')
            {
              $(item).remove();
            }
          });
          $('.total_components_list').append('<li id="tomato">Помидор'+' x'+tomatos_count+'</li>');
          if($('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).attr('id')!="up_bun")
          {
            $('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).remove();
          }
        }
        else
        {
          $('.total_components_list').children().eq($('.total_components_list').children().length-1).remove();
          if($('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).attr('id')!="up_bun")
          {
            $('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).remove();
          }
        }
      }
      else if($('.total_components_list').children().eq($('.total_components_list').children().length-1).attr('id')=='onion')//удаление лука
      {  
        total_burger_price-=100;
        $('.total_creating_burger_price').text(total_burger_price);
        onions_count--;
        if(onions_count>0)
        {
          $('.total_components_list').children().each(function(index, item){
            if($(item).attr('id')=='onion')
            {
              $(item).remove();
            }
          });
          $('.total_components_list').append('<li id="onion">Лук'+' x'+onions_count+'</li>');
          if($('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).attr('id')!="up_bun")
          {
            $('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).remove();
          }
        }
        else
        {
          $('.total_components_list').children().eq($('.total_components_list').children().length-1).remove();
          if($('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).attr('id')!="up_bun")
          {
            $('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).remove();
          }
        }
      }
      else if($('.total_components_list').children().eq($('.total_components_list').children().length-1).attr('id')=='cheese')//удаление сыра
      {  
        total_burger_price-=100;
        $('.total_creating_burger_price').text(total_burger_price);
        cheese_count--;
        if(cheese_count>0)
        {
          $('.total_components_list').children().each(function(index, item){
            if($(item).attr('id')=='cheese')
            {
              $(item).remove();
            }
          });
          $('.total_components_list').append('<li id="cheese">Сыр'+' x'+cheese_count+'</li>');
          if($('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).attr('id')!="up_bun")
          {
            $('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).remove();
          }
        }
        else
        {
          $('.total_components_list').children().eq($('.total_components_list').children().length-1).remove();
          if($('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).attr('id')!="up_bun")
          {
            $('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).remove();
          }
        }
      }
      else if($('.total_components_list').children().eq($('.total_components_list').children().length-1).attr('id')=='down_bun')//удаление нижней булки
      {  
        total_burger_price-=200;
        $('.total_creating_burger_price').text(total_burger_price);
        down_buns_count--;
        if(down_buns_count>0)
        {
          $('.total_components_list').children().each(function(index, item){
            if($(item).attr('id')=='down_bun')
            {
              $(item).remove();
            }
          });
          $('.total_components_list').append('<li id="down_bun">Нижняя булка'+' x'+down_buns_count+'</li>');
          if($('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).attr('id')!="up_bun")
          {
            $('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).remove();
          }
        }
        else
        {
          $('.total_components_list').children().eq($('.total_components_list').children().length-1).remove();
          if($('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).attr('id')!="up_bun")
          {
            $('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).remove();
          }
        }
      }
      else
      {
        $('.total_components_list').children().eq($('.total_components_list').children().length-1).remove();
        if($('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).attr('id')!="up_bun")
        {
          $('.burger_parts_list').children().eq($('.burger_parts_list').children().length-1).remove();
        }
      }
    }
  });
  //добавление соуса
  var ketchup_elements_count = 0;//кол-во кетчупа
  var mustard_elements_count = 0;//кол-во горчицы
  $('#ketchup').click(function()
  {
    total_burger_price+=50;
    $('.total_creating_burger_price').text(total_burger_price);
    ketchup_elements_count++;
    if(ketchup_elements_count>0)
    {
      $('.total_components_list').children().each(function(index, item)
      {
        if($(item).attr('id')=='ketchup_sauce')
        {
          $(item).remove();
        }
      });
      $('.total_components_list').append('<li id="ketchup_sauce">Кетчуп'+' x'+ketchup_elements_count+'</li>');
    }
    else
      $('.total_components_list').append('<li id="ketchup_sauce">Кетчуп</li>');
  });
  $('#mustard').click(function()
  {
    $('.total_components_list').append('<li id="mustard_sauce">Горчица</li>');
    total_burger_price+=50;
    $('.total_creating_burger_price').text(total_burger_price);
    mustard_elements_count++;
    if(mustard_elements_count>0)
    {
      $('.total_components_list').children().each(function(index, item)
      {
        if($(item).attr('id')=='mustard_sauce')
        {
          $(item).remove();
        }
      });
      $('.total_components_list').append('<li id="mustard_sauce">Горчица'+' x'+mustard_elements_count+'</li>');
    }
    else
      $('.total_components_list').append('<li id="mustard_sauce">Горчица</li>');
  });
  //удаление элемента из корзины
  var cart_items = $('.cart_items_list').children();
  function DeleteOneProduct(currentItem)
  {
    console.log('deleting');
    product_count=0;
    var current_button = $(currentItem);
    var current_container = $(current_button).closest(".cart_item");

    $(current_container).stop().animate(
    {
      height: "0px",
      width: "0px",
      opacity: 0,
    }, 600, function() 
      {
        $(this).remove();
      }
    );
  };
  $('.remove_product_button').click(function()
  {
    DeleteOneProduct(this);
  });
  //очистка корзины
  $('.remove_all_button').click(function()
  {
    product_count=0;
    $(cart_items).each(function(index, item)
    {
      $('.total_price_span').text('0');
      $(item).stop().animate(
      {
        height: "0px",
        width: "0px",
        opacity: 0,
      }, 600, function() 
        {
          $(this).remove();
        }
      );
    });
  });
  //добавление еще одного товара в корзине
  var product_count = 1;
  $('.product_add_button').click(function()
  {
    product_count++;
    console.log(product_count);
    var counter_container = $(this).closest("div");
    $(counter_container).children(".product_count").val(product_count);
  });
  //удаление одного товара из корзины
  $('.product_remove_button').click(function()
  {
    product_count--;
    console.log(product_count);
    if(product_count<=0)
    {
      $(DeleteOneProduct($(this).closest('.cart_item')));
    }
    else
    {
      var counter_container = $(this).closest("div");
      $(counter_container).children(".product_count").val(product_count);
    }
    if(cart_items.children().lenght()<1)
    {
      $('.total_price_span').text('0');
    }
  });
}); 




