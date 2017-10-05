$().ready(function() {


    setTimeout(function () {
        $('.solution-list').addClass('active');
    },500);
    setTimeout(function () {
        $('.solutions-list__title').addClass('active');
    },500);
    setTimeout(function () {
        $('.main-block').addClass('active');
    },500);
    setTimeout(function () {
        $('.page-title').addClass('active');
    },500);
    setTimeout(function () {
        $('.solutions-list__logo').addClass('active');
    },500);
    var init = {

        click:function(){
            $('.modal-button').click(function(e){
                e.preventDefault();
                e.stopPropagation();
                $('.white-filter').addClass('active');
                $('.modal-block').addClass('active');
            });
            $('.close-but').click(function(e){
                $('.white-filter').removeClass('active');
                $('.modal-block').removeClass('active');
            });
            $('.solution-list__item').click(function(){
                $('.solution-list__item').removeClass('active');
                $(this).addClass('active');
                var id = $(this).data('id');
                $('.solution-content__item').removeClass('active');
                $('.solution-content__item-'+id).addClass('active');
            });
        },
        postRender:function(){
            var urlSplit = window.location.hash;
            $('.solution-list__item').each(function () {
                console.log($(this).data('name'));
                console.log($(this).data('name'));
                if('#'+$(this).data('name')===urlSplit){
                    $(this).click();
                }
            });
            function mainScroll(el){

            }
            $('.main-anchor').click(function(e){
                if($('main.main').length){
                    e.preventDefault();
                    var top = $($(this).attr('href')).offset().top;
                    function open(){
                        $("html,body").unbind("mousewheel", preventDefault);
                    }
                    function preventDefault(e) {
                        e.preventDefault();
                    }
                    function close(){
                        $("html,body").bind("mousewheel",preventDefault);
                    }

                    close();
                    setTimeout(open,1000);
                    $('html,body').animate({scrollTop: top}, 1000);
                }

            })

        },
        resizableFunctions:function(){
            function mainBlock(){
                $('section.main').height($(window).height()-$('header').height());
            }
            mainBlock();
        }
    }
    init.postRender();
    init.click();
    init.resizableFunctions();
    $(window).resize(function(){
        init.resizableFunctions();
    });

    $(window).scroll(function(){
        // console.log($('html').scrollTop())
    })

});