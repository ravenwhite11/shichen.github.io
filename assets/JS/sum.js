var fadeTime = 300;

/* 取得input */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});
$('.product-removal button').click( function() {
  removeItem(this);
});

/* 總金額 */
function recalculateCart()
{
  var total = 0;
  $('.product').each(function () {
    total += parseFloat($(this).children('.product-line-price').text());
  });
  /* 總金額淡入淡出 */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-total').html(total);
    $('.totals-value').fadeIn(fadeTime);
  });
}

/* 更新數字 */
function updateQuantity(quantityInput)
{
  /* 找到價錢並計算 */
  var productRow = $(quantityInput).parent().parent();
  var price = productRow.children('.product-price').text();
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  /* 小計ㄉ淡入淡出 */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice);
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}

