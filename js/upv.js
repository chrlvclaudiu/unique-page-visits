(function($, wnd) {
    Drupal.behaviors.upv = {
        attach: function(settings, config) {
            $.get(Drupal.settings.basePath + 'upv/js', function(data) {
                $('body').prepend(data.html);
            });
        }
    };
})(jQuery, window);