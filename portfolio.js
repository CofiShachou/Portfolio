setTimeout(()=>{
    function load() {
        $(".latice").css("opacity","0");
        setTimeout(()=>{
            $(".onoKaoBasSve").css("opacity","1");
            $("body").css("background-color","var(--boja3)");
        },500);
    }
    document.onload=load();
    setTimeout(()=>{
        $(".latice").css("display","none");
    },2000);
},10000);


// setTimeout(()=>{
//     
// },1000);

