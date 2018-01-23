/**
 * Created by shy on 2018/1/20.
 */
//首页导航部分隐藏的div
    $(function(){
        $(".leftUl > li").hover(function(){
            $(this).children(".hideAll").stop(true,true).slideDown().fast;
            //$(this).addClass('active').siblings().removeClass('active');
        },function(){
            $(this).children(".hideAll").stop(true,true).slideUp().fast;
        });
 //    var studyOne = document.querySelector('.studyOne');
//    var studyTwo = document.querySelector('.studyTwo');
//    studyTwo.style.height = studyOne.offsetHeight + "px";
//
//    window.onresize=function(){
//        studyOne = document.querySelector('.studyOne');
//        studyTwo = document.querySelector('.studyTwo');
//        studyTwo.style.height = studyOne.offsetHeight + "px";
//    }

//导航联系人部分
        $(".searchAll .firstBtn").hover(function(){
            $(".ibmPeople").css("display","block");
        },function(){
            setInterval(function(){
                $(".ibmPeople").css("display","none");
            },2000);
        });

//导航编辑部分的显示和隐藏
        $(".searchAll .twoBtn").click(function(){
            $(".hideMarketPlace").css("display","block");
        });
        $(".marketTitle b").click(function(){
            $(".hideMarketPlace").css("display","none");
        });

//滚轮滑动显示回到顶部部分
        var curTop=0;
        $("#ibmTop").hide();
        $(window).scroll(function(){
            curTop=$(window).scrollTop();
            if(curTop<0){
                $("#ibmTop").fadeOut();
            }else if(curTop>400){
                $("#ibmTop").fadeIn();
            }
            else if(curTop<130){
                $("#ibmTop").fadeOut();
            }
        })
})



