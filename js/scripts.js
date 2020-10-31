$(function() {
    let allId = ["cab1", "cab2", "fub1", "fub2", "crb1", "crb2", "ftb1", "ftb2"];
    let allClass = [".cake", ".fudge", ".croll", ".ftoast"];



    $("#cakeBtn").click(function(){
        $(toggleMe(".cake", "cab1", "cab2"));
    })

    $("#fudgeBtn").click(function(){
        $(toggleMe(".fudge", "fub1", "fub2"));
    })

    $("#crollBtn").click(function(){
        $(toggleMe(".croll", "crb1", "crb2"));
    })

    $("#ftoastBtn").click(function(){
        $(toggleMe(".ftoast", "ftb1", "ftb2"));
    })




    function toggleMe(x, y, z) {
        if ($(x).is(".collapse:not(.show)")) {
            $(x).collapse("show");
            $(hideAll(x));
            $(showMe(y, z));
            $(removeBorder(y, z));
        }
        else {
            $(x).collapse("hide");
            hideMe(y, z);
        }
    }

    function hideAll(x) {
        let cla1 = allClass.indexOf(x);
        let cla12 = cla1 + 1;
        let cla2 = allClass.length;
        let hide1 = allClass.slice(0, cla1);
        let hide2 = allClass.slice(cla12, cla2);
        let hideFin = hide1.concat(hide2);
        let hv = 0;
        while (hv < hideFin.length){
            var h1 = hideFin[hv];
            if (h1 == null) {
                continue;
            }
            $(h1).collapse("hide");
            hv = ++hv;
            
        }
    }

    function showMe(x, y){
        $(function(){
            var v = document.getElementById(x);
            v.classList.add("border");
            v.classList.add("border-dark");
            v.classList.add("border-right-0");
        })
        $(function(){
            var v = document.getElementById(y);
            v.classList.add("border");
            v.classList.add("border-dark");
            v.classList.add("border-left-0");
        })
    }

    function hideMe(x, y){
        $(function(){
            var v = document.getElementById(x);
            v.classList.remove("border");
            v.classList.remove("border-dark");
            v.classList.remove("border-right-0");
        })
        $(function(){
            var v = document.getElementById(y);
            v.classList.remove("border");
            v.classList.remove("border-dark");
            v.classList.remove("border-left-0");
        })
    }


    function removeBorder(x,y) {
        let val1 = allId.indexOf(x);
        let val12 = val1 + 1;
        let val2 = allId.indexOf(y);
        let val22 = val2 + 1;
        let val3 = allId.length;
        let remBor1 = allId.slice(0, val1);
        let remBor2 = allId.slice(val12, val2);
        let remBor3 = allId.slice(val22, val3);
        let remFin = remBor1.concat(remBor2, remBor3);
        let bv = 0;
        while (bv < remFin.length){
            var b1 = document.getElementById(remFin[bv]);
            if (b1 == null) {
                bv = ++bv;
                continue;
            }
            b1.classList.remove("border");
            b1.classList.remove("border-dark");
            b1.classList.remove("border-left-0");
            bv = ++bv;
        }
    }










});