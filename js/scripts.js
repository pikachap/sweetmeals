$(function() {
    $("#cakeBtn").click(function(){
        if ($(".cake").is(".collapse:not(.show)")) {
            $(".cake").collapse("show");
            $(".fudge").collapse("hide");
            $(".croll").collapse("hide");
            $(removeBorder("fub1", "crb1"));
            $(function(){
                var v = document.getElementById("cab1");
                v.classList.add("border");
                v.classList.add("border-dark");
                v.classList.add("border-right-0");
            })
            $(function(){
                var v = document.getElementById("cab2");
                v.classList.add("border");
                v.classList.add("border-dark");
                v.classList.add("border-left-0");
            })
        }
        else {
            $(".cake").collapse("hide");
            $(function(){
                var v = document.getElementById("cab1");
                v.classList.remove("border");
                v.classList.remove("border-dark");
                v.classList.remove("border-right-0");
            })
            $(function(){
                var v = document.getElementById("cab2");
                v.classList.remove("border");
                v.classList.remove("border-dark");
                v.classList.remove("border-left-0");
            })
        }
    })

    $("#fudgeBtn").click(function(){
        if ($(".fudge").is(".collapse:not(.show)")) {
            $(".fudge").collapse("show");
            $(".cake").collapse("hide");
            $(".croll").collapse("hide");
            $(removeBorder("cab1", "crb1"));
            $(function(){
                var v = document.getElementById("fub1");
                v.classList.add("border");
                v.classList.add("border-dark");
                v.classList.add("border-right-0");
            })
            $(function(){
                var v = document.getElementById("fub2");
                v.classList.add("border");
                v.classList.add("border-dark");
                v.classList.add("border-left-0");
            })
        }
        else {
            $(".fudge").collapse("hide");
            $(function(){
                var v = document.getElementById("fub1");
                v.classList.remove("border");
                v.classList.remove("border-dark");
                v.classList.remove("border-right-0");
            })
            $(function(){
                var v = document.getElementById("fub2");
                v.classList.remove("border");
                v.classList.remove("border-dark");
                v.classList.remove("border-left-0");
            })
        }
    })



    $("#crollBtn").click(function(){
        if ($(".croll").is(".collapse:not(.show)")) {
            $(".croll").collapse("show");
            $(".fudge").collapse("hide");
            $(".cake").collapse("hide");
            $(removeBorder("fub1", "cab1"));
            $(function(){
                var v = document.getElementById("crb1");
                v.classList.add("border");
                v.classList.add("border-dark");
                v.classList.add("border-right-0");
            })
            $(function(){
                var v = document.getElementById("crb2");
                v.classList.add("border");
                v.classList.add("border-dark");
                v.classList.add("border-left-0");
            })
        }
        else {
            $(".croll").collapse("hide");
            $(function(){
                var v = document.getElementById("crb1");
                v.classList.remove("border");
                v.classList.remove("border-dark");
                v.classList.remove("border-right-0");
            })
            $(function(){
                var v = document.getElementById("crb2");
                v.classList.remove("border");
                v.classList.remove("border-dark");
                v.classList.remove("border-left-0");
            })
        }
    })










    function removeBorder(x,y) {
        var v = document.getElementById(x);
        var b = document.getElementById(y);
        v.classList.remove("border");
        v.classList.remove("border-dark");
        v.classList.remove("border-left-0");
        b.classList.remove("border");
        b.classList.remove("border-dark");
        b.classList.remove("border-left-0");
    }
});
