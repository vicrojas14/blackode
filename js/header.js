
    /*  Header collaps */
    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            /*Cambia el color del div cuando es distinto a 0*/
            if(scroll>300){
                $('.navbar').css({
                    'background-color':'#15002E',
                    'padding-top':'20px',
                    'padding-bottom':'20px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.navbar').css({
                    'background-color':'transparent',
                    'padding-top':'30px',
                    'padding-bottom':'30px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });

    /*  Logo hEADER */
    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            /*Cambia el color del div cuando es distinto a 0*/
            if(scroll>300){
                $('#logo_header').css({
                    'height':'30px',
                    'display':'block',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('#logo_header').css({
                    'height':'40px',
                    'display':'none',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });

    /*  Logo hEADER */
    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            /*Cambia el color del div cuando es distinto a 0*/
            if(scroll>300){
                $('#logo_header-isotipo').css({
                    'height':'30px',
                    'display':'none',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('#logo_header-isotipo').css({
                    'height':'60px',
                    'display':'block',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });

    /*  Logo hEADER */
    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            /*Cambia el color del div cuando es distinto a 0*/
            if(scroll>300){
                $('#logo_header2').css({
                    'height':'30px',
                    'display':'block',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('#logo_header2').css({
                    'height':'40px',
                    'display':'none',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });

    /*  Logo hEADER */
    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            /*Cambia el color del div cuando es distinto a 0*/
            if(scroll>300){
                $('#logo_header2-isotipo-movil').css({
                    'height':'30px',
                    'display':'none',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('#logo_header2-isotipo-movil').css({
                    'height':'50px',
                    'display':'block',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });
 

    /*  Color menu */
    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            /*Cambia el color del div cuando es distinto a 0*/
            if(scroll>100){
                $('.navbar a').css({
                    'margin-top':'10px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.navbar a').css({
                    'margin-top':'5px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });

     /*  menu header space */
     $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            /*Cambia el color del div cuando es distinto a 0*/
            if(scroll>100){
                $('.menu-header').css({
                    'color':'#ffffff',
                    'margin-top':'5px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.menu-header').css({
                    'margin-top':'10px',
                    'color':'#ffffff',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });





    /*  -------------------- Pinos WEB ------------------ */

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            if(scroll>20){
                $('.pino1').css({
                    'left':'-40px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.pino1').css({
                    'left':'50px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            if(scroll>20){
                $('.pino2').css({
                    'left':'120px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.pino2').css({
                    'left':'230px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            if(scroll>20){
                $('.pino3').css({
                    'right':'-40px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.pino3').css({
                    'right':'50px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            if(scroll>20){
                $('.pino4').css({
                    'right':'120px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.pino4').css({
                    'right':'250px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });

    
    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            if(scroll>20){
                $('.pino5').css({
                    'right':'220px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.pino5').css({
                    'right':'360px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });

    /*  -------------------- Pinos MOVIL ------------------ */

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            if(scroll>20){
                $('.pino1-movil').css({
                    'left':'-40px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.pino1-movil').css({
                    'left':'0px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            if(scroll>20){
                $('.pino2-movil').css({
                    'left':'70px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.pino2-movil').css({
                    'left':'130px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            if(scroll>20){
                $('.pino3-movil').css({
                    'right':'-40px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.pino3-movil').css({
                    'right':'0px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            if(scroll>20){
                $('.pino4-movil').css({
                    'right':'70px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.pino4-movil').css({
                    'right':'150px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });

    
    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            if(scroll>20){
                $('.pino5-movil').css({
                    'right':'170px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.pino5-movil').css({
                    'right':'260px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });


    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            if(scroll>20){
                $('.pino6-movil-alter').css({
                    'left':'30px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.pino6-movil-alter').css({
                    'left':'70px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            if(scroll>20){
                $('.pino7-movil-alter').css({
                    'right':'50px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.pino7-movil-alter').css({
                    'right':'90px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });



    

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            if(scroll>0){
                $('.luna').css({
                    'left':'300px',
                    'bottom':'400px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.luna').css({
                    'left':'680px',
                    'bottom':'50px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            if(scroll>0){
                $('.luna-movil').css({
                    'left':'30px',
                    'bottom':'500px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.luna-movil').css({
                    'left':'100px',
                    'bottom':'0px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });


    /*  Menu burger */
    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            /*Cambia el color del div cuando es distinto a 0*/
            if(scroll>300){
                $('.menu-burger i').css({
                    'margin-top':'0px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.menu-burger i').css({
                    'margin-top':'10px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });
 