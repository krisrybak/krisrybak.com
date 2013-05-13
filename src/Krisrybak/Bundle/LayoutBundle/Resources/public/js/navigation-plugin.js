(function($) {
    "use strict"

    var Navigate = function(data) {
        this.$className         = data.find('.navigation').data('navigator')
        this.init()
    }

    Navigate.prototype = {
        constructor: Navigate

        ,init: function() {
            this.setPositionRelative()
            this.animateBlue()
            this.animateGreen()
            this.animateOrange()
            this.animateYellow()
            this.animatePurple()
            this.animatePink()
            this.setNavigationHeight(this.getListHeigh())            
        }

        ,getListHeigh: function() {
            return ($('.nav').height())
        }

        ,setNavigationHeight: function(height) {
            $('div#navigation').height(height)
        }

        ,getListWidth: function() {
            return ($('.nav').width() - $('.nav li').width())
        }

        ,setPositionRelative: function() {
            $('.nav li').css('position', 'relative')
        }

        ,animateBlue: function() {
            $('.nav li.blue').animate({
                left: '+='+this.getListWidth()
            }, 300, 'easeInOutCirc', function() {
                $(this).animate({
                    left: '0'
                }, 500, 'easeOutQuint', function() {
                })
            })
        }

        ,animateGreen: function() {
            $('.nav li.green').animate({
                left: '+='+this.getListWidth()
            }, 500, 'easeInOutCirc', function() {
                $(this).animate({
                    left: '0'
                }, 300, 'easeOutQuint', function() {
                })
            })
        }
        ,animateOrange: function() {
            $('.nav li.orange').animate({
                left: '+='+this.getListWidth()
            }, 350, 'easeInQuint', function() {
                $(this).animate({
                    left: '0'
                }, 450, 'easeOutQuint', function() {
                })
            })
        }
        ,animateYellow: function() {
            $('.nav li.yellow').animate({
                left: '+='+this.getListWidth()
            }, 300, 'easeOutCirc', function() {
                $(this).animate({
                    left: '0'
                }, 500, 'easeOutExpo', function() {
                })
            })
        }
        ,animatePurple: function() {
            $('.nav li.purple').animate({
                left: '+='+this.getListWidth()
            }, 400, 'easeOutCirc', function() {
                $(this).animate({
                    left: '0'
                }, 400, 'easeOutExpo', function() {
                })
            })
        }
        ,animatePink: function() {
            $('.nav li.pink').animate({
                left: '+='+this.getListWidth()
            }, 300, 'easeInOutCirc', function() {
                $(this).animate({
                    left: '0'
                }, 500, 'easeOutExpo', function() {
                })
            })
        }
    }

    /* STATE PLUGIN DEFINITION
    * ============================ */
    $.fn.Navigator = function (method) {
        var data = this.data('krisrybak.navigator')
        if (!data) this.data('krisrybak.navigator', (data = new Navigate(this)))
        if (typeof method == 'string') data[method].call(data)
        return this
    }

    $.fn.Navigator.Constructor = Navigate

    /* STATE DATA-API
    * =================== */
    $(function () {
        $(document).ready( function() {
            $(this).Navigator()
        })
    })

})(jQuery);
