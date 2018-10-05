$(function () {
	//Effecks
	$(".puff_effect").on("click",function () {
         $(".pic1").effect("puff",{
         	percent:200
         },2000);
    });
    $(".bounce_effect").on("click",function () {
         $(".pic2").effect("bounce",{
         	direction: 'left',
         	distance: 50,
         	times: 7,
         	mode: 'hide'
         },2000);
    });
    $(".explode_effect").on("click",function () {
         $(".explode").effect("explode",{
         	pieces: 4,
           },2000,function(){
           	$(this).effect("explode",{
         	pieces: 4,
         	mode: 'show'
           },2000);
        });
    });
    //show/hide
    $(".btn_show").on("click",function () {
    	 $(".pic3").show("bounce",{
    	 	direction: 'left',
         	distance: 50,
         	times: 7,
          },2000);
    });
    $(".btn_hide").on("click",function () {
    	 $(".pic3").hide("drop",{
    	 	direction: 'left',
          },2000);
    });
    $(".btn_show1").on("click",function () {
    	 $(".effect_show").show("explode",{
    	 	pieces: 9,
          },2000);
    });
    $(".btn_hide1").on("click",function () {
    	 $(".effect_show").hide("shake",{
    	 	direction: 'right',
         	distance: 50,
         	times: 7,
          },2000);
    });
    //Add class,Remove class
    $(".ad_class").on("click",function () {
    	 $(".div").addClass("anim",2000);
   });
    $(".rm_class").on("click",function () {
    	 $(".div").removeClass("anim",2000);
    });
    //Switch class
     $(".sw_class").on("click",function () {
    	 $(".div1").switchClass("div1","anim",2000);
   });
     //color Animation
     $(".btn_anim").on("click",function () {
    	 $(".animate").animate({
    	 	"fontSize": "26px",
    	 	"color": "white",
    	 	"backgroundColor" : "blue",
    	 	"width": "350px"
    	 },3000);
     }); 
     //Accordion
     $(".accord").accordion({
     	active: false,
     	collapsible: true,
     	heightStyle: "content",
     }); 
     //Tabs
     $(".tabs").tabs({
     	active: 1,
     	collapsible: true,
     	heightStyle: "auto"
     	});
    //Menu
    $("ul.menu").menu();
    //Button
    $(".btn-jquery").button();
    //Datepicker
     $(".datepic").datepicker({
     	yearRange: "1950:2018", //задается диапазон
     	changeYear: true, // выбор года
     	changeMonth: true, //выбор месяца
     	showAnim: 'explode', //анимация
     	showOn: 'both', //при нажатии на кнопку и в поле
     	duration: 'slow', //медленно
     	numberOfMonths: [1,3]  //одна строка по три месяца
     });
   //Slider
  /* $(".slider-jquery").slider({
   max: 100,
   miv: 10,
   range: true, //два бегунка
   values: [10,50] //положение бегунков, начальная позиция первого и второго бегунка
});  */
    $( ".slider-jquery" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ], //начальное положение бегунков
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( ".slider-jquery" ).slider( "values", 0 ) +
      " - $" + $( ".slider-jquery" ).slider( "values", 1 ) );
    //dialog
    $(".btn-dial").on("click", function () {
    	$("div.hide").dialog({
    		modal: true, //модальное окно, всплывающее поверх сайта
    		buttons:{
    			Ok: function () {
    				$(this).dialog("close")
    			}
    		}
    	});
    });
    //Появление формы чз время
   /* setTimeout(function () {
    	$("form.hide").dialog({
    		modal: true
    	});
    },2000);*/
    //Autocomplet
    let lang = ["HTML","CSS","JavaScript","Java","C++","C#","PHP","Pascal","Algol","Scala"];
    $("input.lang").autocomplete({
    	source: lang
    });
    //Draggable  можно перемещать картинку
    $("img.drag").draggable({
    	helper: 'clone', /*перемещается копия*/
    	delay: 300,   /*перемещается чз некоторое время*/
    	opacity: 0.5, /*полупрозрачность*/
    	revert: true, /*возвращается обратно*/
    	zIndex: 1000/*будет над другими элементами виден*/
    });
    //Droppable
    $("img.drag1").draggable({
    	revert: "invalid",
    	start: function(event, ui){
    		ui.helper.css('transform','rotate(5deg) scale(1.2)')
    	},
    	stop: function(event, ui){
    		ui.helper.css('transform','rotate(0deg) scale(1)');
    	},
    	zIndex: 200
    });
    $(".trash").droppable({
    	activeClass: 'highlight',
    	drop: function(event, ui){
    		ui.helper.hide('explode');
    		$(this).attr('src','images/trashcan-full-icon.png');
    	}
    }); 
    //sortable перемещение ячеек
    $(".sort1").sortable({
    	connectWith: '.sort2', /*между списками*/
    	helper: 'clone',
    	revert: true,
    	
    });
    $(".sort2").sortable({
    	connectWith: '.sort1'
    });
    //resizebl изменение размера рисунка
    $(".resize").resizable({
    /* maxWidth: 300,
     maxHeight: 400,*/
     animate: true,
     animationDuration: 'slow'
    });
    //colorbox
    $("a.gal").colorbox({
    	rel: 'gal1',
    	speed: 700,   /*скорость раскрытия картинки*/
    	width: 500,
    	height: 500,
    	innerWidth: 350,
        innerHeight: 350,
        opacity: 0.5,   /*полупрозрачность*/
        slideshow: true, /*запуск слайдов*/
        slideshowSpeed: 2000,/*скорость*/
        slideshowAuto: false, /*автозапуск*/
        current: "Рисунок {current} из {total}",/*меняет текст*/
        slideshowStart: "Запуск слайдшоу",
        slideshowStop: "Остановка слайдшоу",
    });
    $("a.coltext").colorbox({
    	inline: true,
    	width: "50%"
    });	
    //Inline youtube
    $("a.colyoutube").colorbox({
    	iframe: true,
    	width: 550,
        height: 550
    });	
    //SuperFish
    $("ul.sf-menu").superfish({
    	delay: 1000, /*время задержки*/
    	speed: 'slow'
    });
    //Unitegallery
    $("#unitegallery").unitegallery(); 
    $(".slider").bxSlider({
        minSlides: 2,
        maxSlides: 2,
        moveSlides:1,
        slideMargin: 10,
        slideWidth: 300,
        captions: true
    });
});
