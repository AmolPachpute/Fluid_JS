$(document).ready(function() {
    var initial_width = $(window).width();
    var initial_height = $(window).height();
    
    // you need to specify the parent element/div which needs to be scaled. "mainContainer" in this case
    // change the name to which ever div you want to scale
    var elm = $("#mainContainer");

    //max_width and max_height are variables which holds the maximum height and width for the parent div to scale.
    var max_height = 768;
    var max_width = 1024;

    // _scale function takes 5 arguments as follows:
    // "elm" - this is the parent element/div for which the scaling is performed.
    // "max_width" - maximum width of the parent div, beyond which it will not scale.
    // "max_height" - maximum height of the parent div beyond which it will not scale.
    // "initial_width" - initial width of the window when the page load for the first time( initial refresh of the page).
    // "initial_hieght" - initial height of the window when the page load for the first time(initial refresh of the page).
    _scale(elm, max_width, max_height, initial_width, initial_height);

    // this function is called when the the width or the height of the window is changed
    $(window).resize(function() {
        _scale(elm, max_width, max_height, initial_width, initial_height);
    });
    _scale(elm, max_width, max_height, initial_width, initial_height);
});

function _scale(elm, max_width, max_height, initial_width, initial_height) {
    var width = $(window).width() // width after resizing of the window
    var height = $(window).height() // height after resizing of the window
    var new_width = (width / max_width);
    var new_height = (height / max_height);
    var flag = 0;
    var ratio = width / height;
    if (ratio >= 0.9 && ratio <= 1.5) {
        flag = 1;
    }
    $("body").css('height', height - 6);
    $("body").css('width', width - 10);
    var left_origin = "40%";
    if (width > 1200) {
        left_origin = "50%";
    }

    if (width <= height || flag == 1) {
        if (new_width > 1) {
            
            //console.log(">1 and flag1");
            //new_width = new_width - (10*1.2)/100;
            //new_width = new_width - 0.20;

            elm.css({
                'transform': 'scale(' + new_width + ')',
                'transform-origin': left_origin + ' top 0px',
                '-ms-transform': 'scale(' + new_width + ')',
                '-webkit-transform': 'scale(' + new_width + ')',
                '-moz-transform': 'scale(' + new_width + ')'
            });

        } else if (new_width <= 1) {
            //console.log("2 and flag1");
            elm.css({
                'transform': 'scale(' + new_width + ')',
                'transform-origin': '-1px 4px',
                '-ms-transform': 'scale(' + new_width + ')',
                '-webkit-transform': 'scale(' + new_width + ')',
                '-moz-transform': 'scale(' + new_width + ')'
            });
        }
    } else {
        if (new_height > 1) {
            //alert();
            //console.log(">1");
            //new_width = new_width - (10*1.2)/100;
            //new_width = new_width - 0.20;
            elm.css({
                'transform': 'scale(' + new_height + ')',
                'transform-origin': left_origin + ' top 0px',
                '-ms-transform': 'scale(' + new_height + ')',
                '-webkit-transform': 'scale(' + new_height + ')',
                '-moz-transform': 'scale(' + new_height + ')'
            });
        } else if (new_height <= 1) {
            //alert("else");
            //console.log("<1");
            elm.css({
                'transform': 'scale(' + new_height + ')',
                'transform-origin': left_origin + ' top 0px',
                '-ms-transform': 'scale(' + new_height + ')',
                '-webkit-transform': 'scale(' + new_height + ')',
                '-moz-transform': 'scale(' + new_height + ')'
            });
        }
    }


}
