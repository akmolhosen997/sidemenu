(function ($) {
"use strict";

 $('.has-dropdown').on("click" , function(){
    $(this).next('.submenu').slideToggle();
    $(this).find('.icon').toggleClass('iconrotete')
 })


})(jQuery);