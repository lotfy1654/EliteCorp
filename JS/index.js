$(function() {

            'use strict';
            // Adjust Slider Height
            var winH= $(window).height(),
                upperH = $('.upper-bar').innerHeight(),
                navH = $('.nabbar').innerHeight();

            $('.slider').height(winH - (upperH + navH));


            $('.featured-work ul li').on('click', function() {
                    $(this).addclass('active').siblings().removeclass('active');
                    if ($(this).data('class') === 'all') {
                        $('.shuffle-imgs .col-md').css('opacity', '1')
                    } else {
                        $('.shuffle-imgs .col-md').css('opacity', '.08')
                        $(this).data('class').parent().css('opacity', '1')
                        }


                    });




            })