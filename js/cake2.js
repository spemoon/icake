(function($) {
    var divoffset = 10;
    var MouseEvent = function(e) {
        this.x = e.pageX;
        this.y = e.pageY;
    };
    var helper ={
        init:function() {
            var html = "";
            html += helper.html();
            $('.gallery').append(html);
            helper.addEventListener.imgHover();
        },
        html:function() {
            var html = "";
            for( var i = 0 ; i < cake.length ; i++ ){
                (function(c) {
                    var classi = c + 1 ;
                    if ( classi >= 6 ){
                        classi = c % 6 + 1;
                    }
                    html += "<li><a href=\"#\" data-id=\"" + cake[c].cid + "\" class=\"pic-" + classi + "\"><img src=" + cake[c].src + " alt=\"" + cake[c].title + "\" /><span>" + cake[c].title + "</span></a></li>" ;
                })(i);
            }
            return html;
        },
        addEventListener:{
            imgHover:function() {
                $('.gallery a img').hover(function(e) {
                    var cid = $(this).parent().attr("data-id");
                    $('.pinched p').html(cake[cid].cook);
                    var Mouse = function(e) {
                        var mouse = new MouseEvent(e);
                        var leftpos = mouse.x + divoffset;
                        var toppos = mouse.y + divoffset;
                        $('.pinched').css("left",leftpos);
                        $('.pinched').css("top",toppos);
                    }
                    Mouse(e);
                    $('.pinched').show();
                },function() {
                    $('.pinched').hide();
                });
            }
        }
    };
    $(function() {
        helper.init();
    });
})(jQuery);
