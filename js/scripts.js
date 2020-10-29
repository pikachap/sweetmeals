$(function() {
    $("#cakeBtn").click(function(){
        if ($(".cake").is(".collapse:not(.show)")) {
            $(".ftoast").collapse("hide");
            $(".cake").collapse("show");
            $(".fudge").collapse("hide");
            $(".croll").collapse("hide");
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
            $(removeBorder("fub1", "crb1", "ftb1"));
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
            $(".ftoast").collapse("hide");
            $(".fudge").collapse("show");
            $(".cake").collapse("hide");
            $(".croll").collapse("hide");
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
            $(removeBorder("cab1", "crb1", "ftb1"));
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
            $(".ftoast").collapse("hide");
            $(".croll").collapse("show");
            $(".fudge").collapse("hide");
            $(".cake").collapse("hide");
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
            $(removeBorder("fub1", "cab1", "ftb1"));
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

    $("#ftoastBtn").click(function(){
        if ($(".ftoast").is(".collapse:not(.show)")) {
            $(".ftoast").collapse("show");
            $(".croll").collapse("hide");
            $(".fudge").collapse("hide");
            $(".cake").collapse("hide");
            $(function(){
                var v = document.getElementById("ftb1");
                v.classList.add("border");
                v.classList.add("border-dark");
                v.classList.add("border-right-0");
            })
            $(function(){
                var v = document.getElementById("ftb2");
                v.classList.add("border");
                v.classList.add("border-dark");
                v.classList.add("border-left-0");
            })
            $(removeBorder("fub1", "cab1", "crb1"));
        }
        else {
            $(".ftoast").collapse("hide");
            $(function(){
                var v = document.getElementById("ftb1");
                v.classList.remove("border");
                v.classList.remove("border-dark");
                v.classList.remove("border-right-0");
            })
            $(function(){
                var v = document.getElementById("ftb2");
                v.classList.remove("border");
                v.classList.remove("border-dark");
                v.classList.remove("border-left-0");
            })
        }
    })










    function removeBorder(x,y,z) {
        var b1 = document.getElementById(x);
        var b2 = document.getElementById(y);
        var b3 = document.getElementById(z);
        b1.classList.remove("border");
        b1.classList.remove("border-dark");
        b1.classList.remove("border-left-0");
        b2.classList.remove("border");
        b2.classList.remove("border-dark");
        b2.classList.remove("border-left-0");
        b3.classList.remove("border");
        b3.classList.remove("border-dark");
        b3.classList.remove("border-left-0");
    }
});
