var aritm = function() {
    var sum = function(a, b){
        return a + b;
    }

    var multiply = function(a, b){
        return a * b;
    }

	var divide = function(a, b){
        return a / b;
    }

    var reduce = function(a, b){
        return a - b;
    }

    return{
        suma: sum,
        impartire: divide,
        produs: multiply,
        scadere: reduce
    }
};

/////////////////////////////////////////////////
// 1.
$(".purpleToFuchsia").on("click",function(){
  $(".purple").css("background-color","fuchsia")
});

// 2.
$(".toggleGreenGrey").on("click",function(){
  $(".green, .grey").toggleClass("green grey");
})

// 3.
$(".switchBoxes").on("click",function(){
  //$(".red, .blue").toggleClass("red blue");
  var b1 = $(".red").clone();
  var b2 = $(".blue").clone();
  $(".blue").addClass("temp");
  $(".red").replaceWith(b2);
  $(".temp").replaceWith(b1);
  $(".blue").removeClass("red");
})

// 4.
$(".insertText").on("click",function() {
   $(".purple").append('<p class="white">Text!</p>')

  //$("<p/>").html('text').attr('class','white').appendTo(".purple");

})

// 5.
// Already done, see 3.
// 6.
var clicks = 0;
var class1;
var class2;
$(".colors div").on("click",function(){
  if (clicks<1) {
    class1 = $(this).attr('class');
    clicks++;
    console.log("clicks="+clicks);
  }
  else if (clicks>0) {
    class2 = $(this).attr('class');
    $("."+class1+", ."+class2).toggleClass(class1+ " "+class2);
    clicks--;
    console.log("clicks="+clicks);
  }
});

// 7.
$(window).resize(function () {
  var maxHeight = Math.max.apply(0, $(".colors").children().map(function ()
  {return $(this).height();}).get());
  //get viewport height,width
  //find ratio between max and vph, w and vpw
  //set for all
    console.log(maxHeight);
  $(".colors").children().each(function(){
    $(this).height(maxHeight);
  })
});
