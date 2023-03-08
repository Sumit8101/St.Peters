import React, { useState, useEffect } from 'react';
import "./Nav.css";
import $ from "jquery";
import "./Navbar.css"



export default function Navbar2() {
   useEffect(()=>{
      (function($) {

         $.fn.menumaker = function(options) {
             
             var cssmenu = $(this), settings = $.extend({
               title: "Menu",
               format: "dropdown",
               sticky: false
             }, options);
       
             return this.each(function() {
               cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
               $(this).find("#menu-button").on('click', function(){
                 $(this).toggleClass('menu-opened');
                 var mainmenu = $(this).next('ul');
                 if (mainmenu.hasClass('open')) { 
                   mainmenu.hide().removeClass('open');
                 }
                 else {
                   mainmenu.show().addClass('open');
                   if (settings.format === "dropdown") {
                     mainmenu.find('ul').show();
                   }
                 }
               });
       
               cssmenu.find('li ul').parent().addClass('has-sub');
       
            const   multiTg = function() {
                 cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                 cssmenu.find('.submenu-button').on('click', function() {
                   $(this).toggleClass('submenu-opened');
                   if ($(this).siblings('ul').hasClass('open')) {
                     $(this).siblings('ul').removeClass('open').hide();
                   }
                   else {
                     $(this).siblings('ul').addClass('open').show();
                   }
                 });
               };
       
               if (settings.format === 'multitoggle') multiTg();
               else cssmenu.addClass('dropdown');
       
               if (settings.sticky === true) cssmenu.css('position', 'fixed');
       
              const resizeFix = function() {
                 if ($( window ).width() > 768) {
                   cssmenu.find('ul').show();
                 }
       
                 if ($(window).width() <= 768) {
                   cssmenu.find('ul').hide().removeClass('open');
                 }
               };
               resizeFix();
               return $(window).on('resize', resizeFix);
       
             });
         };
       })($);
       
       (function($){
       $(document).ready(function(){
       
       $(document).ready(function() {
         $("#cssmenu").menumaker({
           title: "Menu",
           format: "multitoggle"
         });
       
         $("#cssmenu").prepend("<div id='menu-line'></div>");
       
       var foundActive = false, activeElement, linePosition = 0, menuLine = $("#cssmenu #menu-line"), lineWidth, defaultPosition, defaultWidth;
       
       $("#cssmenu > ul > li").each(function() {
         if ($(this).hasClass('active')) {
           activeElement = $(this);
           foundActive = true;
         }
       });
       
       if (foundActive === false) {
         activeElement = $("#cssmenu > ul > li").first();
       }
       
       defaultWidth = lineWidth = activeElement.width();
       
       defaultPosition = linePosition = activeElement.position().left;
       
       menuLine.css("width", lineWidth);
       menuLine.css("left", linePosition);
       
       $("#cssmenu > ul > li").hover(function() {
         activeElement = $(this);
         lineWidth = activeElement.width();
         linePosition = activeElement.position().left;
         menuLine.css("width", lineWidth);
         menuLine.css("left", linePosition);
       }, 
       function() {
         menuLine.css("left", defaultPosition);
         menuLine.css("width", defaultWidth);
       });
       
       });
       
       
       });
       })($);
   },[])
   
  return (
<div className="container-fluid ">
   <div className='row d-flex  align-items-center mb-1 banner-img'>
      <div className='col-4 '>
      <a href="/"><img src="img/logo_2.png"  alt="..." height="110px"/></a>
      </div>
      <div className='col-6 '>
      <img src="img/stpeter.png"  alt="..."  />
      </div>
      <div className='col-2 '>
      <a href=""><button type="button" class="btn btn-light">Log In</button></a>
      </div>
   </div>
  
   <div class="container-fluid text-center">
 <div id='cssmenu' className="justify-content-md-center">
<ul>
   <li><a href='#'>Home</a></li>
   <li class='has-sub'><a href='#'>About School</a>
      <ul>
         <li ><a href='#'>About School</a>           
         </li>
         <li ><a href='#'>Staff</a>            
         </li>
         <li ><a href='#'>CBSE Information</a>           
         </li>
         <li ><a href='#'>Mission & Vision</a>           
         </li>
      </ul>
   </li>
   <li class=' has-sub'><a href='#'>Admission</a>
      <ul>
         <li ><a href='#'>Admission Information</a>           
         </li>
         <li ><a href='#'>Fees Structur</a>            
         </li>
         
      </ul>
   </li>
   <li class=' has-sub'><a href='#'>Gallary</a>
      <ul>
         <li ><a href='#'>Photo Gallary</a>           
         </li>
         <li ><a href='#'>Video Gallary</a>            
         </li>
         
      </ul>
   </li>
   <li class=' has-sub'><a href='#'>Contact</a>
      <ul>
         <li ><a href='#'>Phone Directory</a>           
         </li>
         <li ><a href='#'>Career</a>            
         </li>
         
      </ul>
   </li>
   
  
</ul>
</div>
</div>

</div>
  )
  
}
