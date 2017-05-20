(function($) {
  $(document).ready(function($) {
    $('[class*="css-icon-"]').closest('a').click(function() {
      var $icon = $(this).find('[class*="css-icon-"]');
      if($icon.attr('data-icon')) {
        var setClass = $icon.prop('class').match(/css-icon(-\w+)+/gy)[0].replace('css-icon-','');
        $icon.removeClass();
        $icon.addClass('css-icon-'+$icon.attr('data-icon'));
        $icon.attr('data-icon',setClass);
      }
    });
  });
}(jQuery));
