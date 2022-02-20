import { q } from './q'
import * as $ from 'jquery'

console.log(1)
console.log(q())

const arrowIcon = function (deg, buttonClasses) {
  return `
        <button 
            type="button" 
            class="slick-arrow ${buttonClasses}">
                <svg style="width:20px; height:20px; font-size: 20px;transform: rotate(${deg}deg);"  viewBox="0 0 512 512">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 328l144-144 144 144"/>
                </svg>
        </button>
    `
}

$(function () {
  console.log('ready')

  $('.top-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: arrowIcon(90, 'slick-next'),
    prevArrow: arrowIcon(270, 'slick-prev'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  })

  $('.quote-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: arrowIcon(90, 'slick-next'),
    prevArrow: arrowIcon(270, 'slick-prev'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {},
      },
      {
        breakpoint: 640,
        settings: {},
      },
    ],
  })
})
