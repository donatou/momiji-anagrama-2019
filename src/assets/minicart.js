$(document).on('click', '.cart-summary', function (e) {
  e.preventDefault();
  $('body').addClass('cart-open');
  $('#mm_cartoverlay').animate({ "right": '0' });
  $('#cart_temp_late form').css('opacity', '0.2');
  updateMinicart();
});

$(document).on('click', 'span.closecart_mm', function (e) {
  e.preventDefault();
  closeMinicart();
});

function closeMinicart() {
  $('#mm_cartoverlay').animate({ "right": '-400' });
  $('body').removeClass('cart-open');
}
$(document).on('click', '#cart_temp_late .continue-shopping', function (e) {
  e.preventDefault();
  closeMinicart();
});

$(document).on('click', '.cart-open', function (event) {
  if (!$(event.target).closest('#cart_temp_late').length) {
    event.stopPropagation();
    closeMinicart();
  }
});

$(document).on('click','.recomended_pro_mm .button-add button',function(e){
  e.preventDefault();
  var varid = $(this).data('variant');
  $(this).text('Adding...')
  setTimeout(function(){
    addItemtocart({id:varid,quantity:1});
  },300);
});

$(document).on('click', '.minicart-summ .item .remove_mm', function (e) {
  e.preventDefault();
  var varid = $(this).data('variant_id');
  $(this).text('Eliminando...')
  setTimeout(function () {
    removeItemcart(varid);
  }, 100);
});

$(document).on('click', '.minicart-summ .item a.notabutton.quantity-up', function (e) {
  var parent = $(this).closest('.quantity'),
      qty = $(parent).find('input').val(),
      variant = $(parent).data('variant'),
      newval = parseInt(qty) + 1;
  $(parent).find('input').val(newval);
  updateCart(variant, newval);
});

$(document).on('click', '.minicart-summ .item a.notabutton.quantity-down', function (e) {
  var parent = $(this).closest('.quantity'),
      qty = $(parent).find('input').val(),
      variant = $(parent).data('variant'),
      newval = parseInt(qty) - 1;
  if (newval != 0) {
    $(parent).find('input').val(newval);
    updateCart(variant, newval);
  }
});

$(document).on('submit', '[action="/cart/add"]', function (e) {
  e.preventDefault();
  var formdata = $(this).serialize(),
      parent = $(this);
  $('#cart_temp_late form').css('opacity', '0.2');
  setTimeout(function () {
    $(parent).find('.button').val('Add to cart');
  }, 2000);
  addItemtocart(formdata);
});

function updateCart(variant, newval) {
  $.ajax({
    type: "post",
    url: "/cart/change.js",
    data: { id: variant, quantity: newval },
    dataType: 'json',
    success: function (cart) {
      updateMinicart();
    }
  });
}

function removeItemcart(varid) {
  $.ajax({
    type: "post",
    url: "/cart/change.js",
    data: { id: varid, quantity: 0 },
    dataType: 'json',
    success: function (cart) {
      updateMinicart();
    }
  });
}

function addItemtocart(formdat) {
  $.ajax({
    type: "post",
    url: "/cart/add.js",
    data: formdat,
    dataType: 'json',
    success: function (cart) {
      console.log('item added');
      updateMinicart();
    }
  });
}

function updateMinicart() {
  $.ajax({
    type: "GET",
    url: "/",
    success: function (data) {
      console.log('minicart loaded');
      $('#cart_temp_late form').css('opacity', '1');
      var recomenpro = $(data).filter('#mm_cartoverlay').html();
      $(document).find('#mm_cartoverlay').html(recomenpro);
      $('body').addClass('cart-open');
      $('#mm_cartoverlay').animate({ "right": '0' });
    }
  });
}

function reveal(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'flex') {
        e.style.display = 'none';
    } else {
        var allTexts = document.querySelectorAll(".hidden_tyc");
        for (var i = 0, len = allTexts.length; i < len; i++) {
            allTexts[i].style.display = 'none';
        }
        e.style.display = 'flex';
    }
}