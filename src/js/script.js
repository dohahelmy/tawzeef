$(function () { // Dropdown toggle
  $('.dropdown__button').click(function () {
    $(this).next('.dropdown__menu').slideToggle();
  });

  $(document).click(function (e) {
    var target = e.target;
    if (!$(target).is('.dropdown__button') && !$(target).parents().is('.dropdown__button')) {
      $('.dropdown__menu').slideUp();
    }
  });



  $('#right-arrow').click(function (event) {
    event.preventDefault();
    $('.categories').animate({
      scrollLeft: "+=200px"
    }, "slow");
  });

  $('#left-arrow').click(function (event) {
    event.preventDefault();
    $('.categories').animate({
      scrollLeft: "-=200px"
    }, "slow");
  });


  $(".categories .tab:first-child").addClass('active');
  $(".categories .tab").click(function () {
    $(".categories .tab").removeClass("active");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).addClass("active");
  });
});


$('#form').steps({
  onFinish: function () {
    alert('complete');
  }
});

function previewFile(input) {
  var file = $(input).get(0).files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function () {
      $(input).siblings("img").css('opacity', '1');
      $(input).siblings("img").attr("src", reader.result);
    }
    reader.readAsDataURL(file);
  }
}


$('.add-more').on('click', function () {
  let row = $(this).siblings('.sided-row').clone();
  row.insertBefore($(this));
})