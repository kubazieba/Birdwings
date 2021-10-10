import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function() {
      stickyNav();
      $(window).on('scroll', function () {
        var top: any = $(document).scrollTop();
        if(top > 20) {
          $(".navbar").addClass("sticky");
        } else {
          $(".navbar").removeClass("sticky");
        }
      });

      $(".menu-mobile").on('click', function() {
        $(".menu").toggleClass("show-menu");
        $(".menu-mobile i").toggleClass("show-menu");
        $("body").toggleClass("disabled-scroll");
        $(".navbar .menu li").on('click', function() {
          $(".menu-mobile").trigger('click');
        });
      });

    });

    function stickyNav() {
      let top: any = $(document).scrollTop();
      if(top > 20) {
        $('.navbar').addClass("sticky");
      } else {
        $('.navbar').removeClass("sticky");
      }
    }
  }

}
