$(document).ready(function () {

    reLayoutSubEles();

    $(window).resize(function () {
        reLayoutSubEles();
    });

    function reLayoutSubEles() {
        var window_width = $(window).width()
        if (window_width < 768) {
            moveElePosition($("#m-section-1 .img-horizontal-layout"), 1);
            moveElePosition($("#m-section-2 .img-horizontal-layout"), 1);
        } else {
            moveElePosition($("#m-section-1 .img-horizontal-layout"), 2);
            moveElePosition($("#m-section-2 .img-horizontal-layout"), 2);
        }
    }

    //type 1:before 2:after
    function moveElePosition(currentEle, type) {
        if (type == 1) {
            var prevEle = currentEle.prev();
            prevEle.before(currentEle);
        } else {
            var nextEle = currentEle.next();
            nextEle.after(currentEle);
        }
    }

    $(".m-navigation ul li").on("click", function () {
        $(".m-navigation ul li").css("background-color", "white");
        $(this).css("background-color", "#FBFBFB");
        var index = $(this).index();
        var section = "#m-section-" + index;
        $('html , body').animate({ scrollTop: $(section).offset().top - 54 }, 1000, 'swing');
    })

    $(".nav-drawer-list li").on("click", function () {
        hiddenNavDrawerBar();

        var index = $(this).index();
        var section = "#m-section-" + index;
        $('html , body').animate({ scrollTop: $(section).offset().top }, 1000, 'swing');
    })

    $(".navbar-drawer-bar .navbar").on("click", function () {
        if ($(".navbar-drawer-bar").hasClass("drawer-open")) {
            hiddenNavDrawerBar();
        } else {
            showNavDraweBar();
        }
    })

    $(".navbar-drawer-mask").on("click", function () {
        hiddenNavDrawerBar();
    })

    $("#zach_click").on("click", function () {
        window.open("/zach");
    });

    function showNavDraweBar() {
        $(".navbar-drawer-bar").addClass("drawer-open");
        $('body').css({
            "overflow-x": "hidden",
            "overflow-y": "hidden"
        });
        $(".navbar-drawer-mask").fadeIn();
        $(".nav-drawer-list").slideDown();
    }

    function hiddenNavDrawerBar() {
        $(".navbar-drawer-bar").removeClass("drawer-open");
        $('body').css({
            "overflow-x": "auto",
            "overflow-y": "auto"
        });
        $(".navbar-drawer-mask").fadeOut();
        $(".nav-drawer-list").slideUp();
    }

    $("#m-section-1 .m_img_preview").on("click", function () {
        var eleId = $(this).attr("id");
        $.fancybox.open(configPreviewImages(eleId, 4), configFancyboxSettings());
    })

    $("#m-section-2 .m_img_preview").on("click", function () {
        var eleId = $(this).attr("id");
        $.fancybox.open(configPreviewImages(eleId, 4), configFancyboxSettings());
    })

    $("#m-section-3 a").on("click", function () {
        var eleId = $(this).attr("id");
        $.fancybox.open(configPreviewImages(eleId, 4), configFancyboxSettings());
    })

    function configPreviewImages(eleId, count) {
        var images = [];
        for (i = 0; i < count; i++) {
            images.push({
                src: "homepage/src/preview/" + eleId + "_" + (i + 1) + ".png"
            });
        }
        return images;
    }

    function configFancyboxSettings() {
        return {
            loop: false,
            infobar: false,
            animationEffect: "zoom-in-out",
            transitionEffect: "slide",
            // clickContent: function (current, event) {
            //     return "close";
            // },
            dblclickContent: "zoom",
            buttons: [
                "zoom",
                "fullScreen",
                "close"
            ]
        }
    }

    $(".m-flip-enable").on("click", function () {
        if (isMobile.any()) {
            if ($(".m-flip-enable").hasClass("is_back")) {
                $(".m-flip-enable").removeClass("is_back");
                $(".m-flip-enable .wechat_flip_front").css("transform", "rotateY(0deg)");
                $(".m-flip-enable .wechat_flip_back").css("transform", "rotateY(180deg)");
            } else {
                $(".m-flip-enable").addClass("is_back");
                $(".m-flip-enable .wechat_flip_front").css("transform", "rotateY(180deg)");
                $(".m-flip-enable .wechat_flip_back").css("transform", "rotateY(0deg)");
            }
        }
    });

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
});

(function (win) {

    animateSubEles();

    $(function () {
        $(win).scroll(function () {
            animateSubEles();
        });
    });

    function animateSubEles() {
        var windowPageYOffset = window.pageYOffset,
            windowPageYOffsetAddHeight = windowPageYOffset + window.innerHeight;

        $(".m-animate").each(function (index, item) {
            var imgOffsetTop = $(item).offset().top;
            if (imgOffsetTop >= windowPageYOffset && imgOffsetTop < windowPageYOffsetAddHeight) {
                $(item).css({
                    "transform": "translate3d(0, 0, 0)",
                    "-ms-transform": "translate3d(0, 0, 0)",
                    "-o-transform": "translate3d(0, 0, 0)",
                    "-webkit-transform": "translate3d(0, 0, 0)",
                    "-moz-transform": "translate3d(0, 0, 0)",
                    "opacity": 1
                });
            }
        });
    }
}(window));