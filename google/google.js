// Google Expando Method
// =====================================================

function googleExpandoToggle() {
  $(this).toggleClass('active');
  $(this).next().toggleClass('active');
  $expando_card = $('.google-expando__card');

  // ARIA
  $expando_card.attr('aria-hidden') === 'true' ? $expando_card.attr('aria-hidden', 'false') : $expando_card.attr('aria-hidden', 'true');
}


// Google Expando Event
// =====================================================

$('.google-expando__icon').on('click', function() {
  googleExpandoToggle.call(this);
});