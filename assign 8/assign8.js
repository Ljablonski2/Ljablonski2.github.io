

//     document.getElementById("RadialShelf").addEventListener("mouseover", bookspin);

// function bookspin(){

/*Learned Below from this Anime JS Beginner YouTube Tutorial: https://www.youtube.com/watch?v=g7WnZ9hxUak*/
anime({
    targets: '#RadialShelf',
    translateY: [
        { value: 2, duration: 300 },
        { value: 2, duration: 0 }
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine',
        // autoplay: true,
        // duration: 1200,
        // loop: true
    }
});
// };

// //  $(".rowBKs").on("click", function() {
// //     $(".popup-overlay, .popup-content").addClass("active");
// //   });

// //   //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
// //   $(".rowBKs, .popup-overlay").on("click", function() {
// //     $(".popup-overlay, .popup-content").removeClass("active");
// //   }); 

// // learned from https://www.youtube.com/watch?v=fAFmavLsNR0 //
//   let books= [
//       {
//         "book": img src= "Assets/AliceBK.svg",
//       },
//       { "book": img src= "Assets/HGWells.svg",

//       },
//       {"book": img src= "Assets/JaneEyreBKsvg",
//     },
//     { "book": img src= "Assets/MobyDickBK.svg",
//     },
//     { "book": img src= "Assets/OdysseyBK.svg",
// }
// ]

// const $radial = $('#RadialShelf');

// $RadialShelf.click(function(){
//     let number = Math.floor(Math.random()*books.length);
//     $('#book').html('<span>"</span>' + books[number].book + '<span>"</span>');

// }

/*Couldn't get these to work, but I had hoped to have the book spiral rotate on click*/

$(function () {
    var effects = 'animated rotatein';
    var effectsEnd = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd";

    $('.rowBKS').click(function () {
        $(this).addClass(effects).one(effectsEnd, function () {
            $(this).removeClass(effects);
        });
    });
});

/*I also wanted each individual book that you could read to be able to pulse on hover, but couldn't get this to work either*/
$(function () {
    var effects = 'animated pulse';
    var effectsEnd = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd";

    $('#alicebook').hover(function () {
        $(this).addClass(effects).one(effectsEnd, function () {
            $(this).removeClass(effects);
        });
    });
});