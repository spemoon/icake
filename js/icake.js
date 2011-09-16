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
            $('.photo-album').append(html);
            helper.addEventListener.imgHover();
        },
        html:function() {
            var html = "";
            for( var i = 0 ; i < cake.length ; i++ ){
                (function(c) {
                    html += "<a href=\"#\" data-id=\"" + cake[c].cid + "\" class=\"" + config[c] + "\"><img src=" + cake[c].src + " alt=\"\" />" + cake[c].title + "</a>" ;
                })(i);
            }
            return html;
        },
        addEventListener:{
            imgHover:function() {
                $('.photo-album a img').hover(function(e) {
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
