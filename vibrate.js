(function($) {
    $.fn.vibrate = function() {
        return this.each(function() {
            var _this = $(this);
        
            _this.toggleClass('vibrate', true);
            
            _this.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                _this.toggleClass('vibrate', false);
            });
            
            return _this;
        });
    }
}(jQuery));