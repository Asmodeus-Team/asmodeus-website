$(function() {
    api.onload();
    headerUpWhat();
    dropdownHeader();
    $('.nav-item [data-active-page]').addClass($('.nav-item [data-active-page]').attr('data-active-page'));
    $('[data-toggle="tooltip"]').tooltip();
    $("#logout-btn").click(function(e) {
        api.logout();
    });
});

$(window).on('load', function() {
    animateWhenVisible();
})

function headerUpWhat() {
    $(".site-navigation a").click(function(e) {
        if (!$(e.target).closest('.dropdown-toggle').length) {
            $(".navbar-collapse").collapse('hide');
        }
    });
}

function animateWhenVisible() {
    hideAll();
    isInView();
    $(window).scroll(function() {
        isInView();
        stickHeader();
    });
};

function dropdownHeader() {
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
        var targetMenu = $(this).parent().children('.dropdown-menu');
        var leftVal = targetMenu.offset().left + targetMenu.width();
        if (leftVal > $(window).width()) {
            targetMenu.addClass('dropmenu-flow-right');
        }
    });
}

function stickHeader() {
    var V = 0;
    var C = "sticky";
    if ($(window).scrollTop() > V) {
        $('.header-st').addClass(C);
        if (C == "sticky") {
            $('.page-container').css('padding-top', $('.header-st').height());
        }
    } else {
        $('.header-st').removeClass(C).removeAttr('style');
        $('.page-container').removeAttr('style');
    }
}

function hideAll() {
    $('.animated').each(function(i) {
        $(this).removeClass('animated').addClass('hideMTech');
    });
}

function isInView() {
    $($(".hideMTech").get().reverse()).each(function(i) {
        var target = jQuery(this);
        var a = target.offset().top + target.height();
        var b = $(window).scrollTop() + $(window).height();
        if (target.height() > $(window).height()) {
            a = target.offset().top;
        }
        if (a < b) {
            var objectClass = target.attr('class').replace('hideMTech', 'animated');
            target.css('visibility', 'hidden').removeAttr('class');
            setTimeout(function() { target.attr('class', objectClass).css('visibility', 'visible'); }, 0.01);
            target.on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
                $(this).removeClass($(this).attr('data-appear-anim-style'))
            });
        }
    });
}