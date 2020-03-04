$(document).ready(function(){
    var ship="";
    var placement;
    var gamestart = false;
    var turn = 1;
    var p1moves = 0;
    var p2moves = 0;
    /*player1s chests*/
    var p1Chests = 0;
    var LC1 = 0;
    var TC1 = 0;
    var SC1 = 0;
    var SQC1 = 0;
    var BC1 = 0;
    /*player2s chests*/
    var p2Chests = 0;
    var LC2 = 0;
    var TC2 = 0;
    var SC2 = 0;
    var SQC2 = 0;
    var BC2 = 0;
    
    function highlight(){
        $(this).toggleClass("here")
    };
    
    function isTurn(){
        if(turn==2){
            $(".namePlate2").addClass("mark");
            $(".namePlate1").removeClass("mark");
            p2moves = 0;
        }
        if(turn==1){
            $(".namePlate1").addClass("mark");
            $(".namePlate2").removeClass("mark");
            p1moves = 0;
        }  
    }
    
    $("div.box").click(function(){
        if(gamestart){
            if(turn==1 && p1moves==1){
                alert("Max number of moves made this turn. End turn");
            }else if(turn==2 && p2moves==1){
                alert("Max number of moves made this turn. End turn");     
            }else{
                if(turn==1 && ($(this).attr("id")<101)){
                    console.log($(this).attr("id"))
                    alert("Don't dig up your own treasure")
                }else if(turn==2 && ($(this).attr("id")<101)){
                    p2moves= p2moves+1;
                    $(this).addClass("boom");
                    //var t = $(this).addClass("boom");
                    $(this).removeClass("boom",1500);
                    if($(this).hasClass("CH")){
                        $(this).removeClass("box");
                        $(this).addClass("hit");
                        $('#hitgif').modal('show');
                        if($(this).hasClass("SCHP1")){
                            SC1 = SC1+1;
                            if(SC1==2){
                                $('#completeHit').modal('show');
                                p1Chests = p1Chests+1;
                            }
                        }
                        if($(this).hasClass("LCHP1")){
                            LC1 = LC1+1;
                            if(LC1==3){
                                $('#completeHit').modal('show');
                                p1Chests = p1Chests+1;
                            }
                        }
                        if($(this).hasClass("TCHP1")){
                            TC1 = TC1+1;
                            if(TC1==4){
                                $('#completeHit').modal('show');
                                p1Chests = p1Chests+1;
                            }
                        }
                        if($(this).hasClass("SQCHP1")){
                            SQC1 = SQC1+1;
                            if(SQC1==4){
                                $('#completeHit').modal('show');
                                p1Chests = p1Chests+1;
                            }
                        }
                        if($(this).hasClass("BCHP1")){
                            BC1 = BC1+1;
                            if(BC1==6){
                                $('#completeHit').modal('show');
                                p1Chests = p1Chests+1;
                            }
                        }
                    }else{
                        $(this).addClass("miss");
                        $(this).removeClass("box");
                        $('#missgif').modal('show');
                    }
                }
                    /*<--Player1|Player2-->*/
                if(turn==2 && ($(this).attr("id")>999)){
                    alert("Don't dig up your own treasure")
                }else if(turn==1 &&($(this).attr("id")>999)){
                    p1moves= p1moves+1;
                    $(this).addClass("boom");
                    //var t = $(this).addClass("boom");
                    $(this).removeClass("boom",1500);
                    if($(this).hasClass("CH")){
                        $(this).removeClass("box");
                        $(this).addClass("hit");
                        $('#hitgif').modal('show');
                        if($(this).hasClass("SCHP2")){
                            SC2 = SC2+1;
                            if(SC2==2){
                                $('#completeHit').modal('show');
                                p2Chests = p2Chests+1;
                            }
                        }
                        if($(this).hasClass("LCHP2")){
                            LC2 = LC2+1;
                            if(LC2==3){
                                $('#completeHit').modal('show');
                                p2Chests = p2Chests+1;
                            }
                        }
                        if($(this).hasClass("TCHP2")){
                            TC2 = TC2+1;
                            if(TC2==4){
                                $('#completeHit').modal('show');
                                p2Chests = p2Chests+1;
                            }
                        }
                        if($(this).hasClass("SQCHP2")){
                            SQC2 = SQC2+1;
                            if(SQC2==4){
                                $('#completeHit').modal('show');
                                p2Chests = p2Chests+1;
                            }
                        }
                        if($(this).hasClass("BCHP2")){
                            BC2 = BC2+1;
                            if(BC2==6){
                                $('#completeHit').modal('show');
                                p2Chests = p2Chests+1;
                            }
                        }
                        console.log(p1Chests);
                        console.log(p2Chests);
                        if(p2Chests==10){
                            $('#player1Win').modal('show');
                            $(".retstart").removeClass("hide");
                        }
                        if(p1Chests==10){
                            $('#player2Win').modal('show');
                            $(".retstart").removeClass("hide");
                        }
                    }else{
                        $(this).addClass("miss");
                        $(this).removeClass("box");
                        $('#missgif').modal('show');
                    }
                }
            }
        };
    });
    
    $("div.box").on("mouseover mouseleave", highlight);
    /*MiddleButtons*/
    $("#end").click(function(){
        if(turn==1){
            turn = 2;
        }else{
            turn = 1;
        }
        isTurn();
    });
    $("#start").click(function(){
        if($("#p1r").hasClass("hide")&& $("#p2r").hasClass("hide")){
            $("#start").addClass("hide");
            $("#end").removeClass("hide");
            $("#clear").addClass("hide");
            $(".chests").addClass("transp");
            $(".chests").removeClass("bg-dark");
            $(".displayChest").addClass("hide");
            isTurn();
            alert("Open and close settings(top right) to fix the white space on the bottom.");
            gamestart = true ;
            console.log(gamestart);
        }else{
            alert("Not all players are ready");
        }
    });
    $(".restart").click(function(){
       location.reload();
    });
    $("#p1r").click(function(){
        if(p1Chests==5){
            $("#p1r").addClass("hide");
            $("#clear1").addClass("hide");
            $("#p2r").removeClass("hide");
            $("#clear2").removeClass("hide");
            $(".displayChest1").addClass("hide");
            $(".displayChest2").removeClass("hide");
        }else{
            alert("You must place all your chests.");
        }
    });
    $("#p2r").click(function(){
        if(p2Chests==5){
            $("#p2r").addClass("hide");
            $("#clear2").addClass("hide");
            $(".displayChest2").addClass("hide");
        }else{
            alert("You must place all your chests.");
        }
    });
    /*End*/
    /*ResetChests*/
    $("#clear1").click(function(){
        p1Chests = 0;
        for (x=1;x<100;x++) {
            if($("#"+x).hasClass("SCH")){
                $("#"+x).removeClass("CH SCH");
            }
            if($("#"+x).hasClass("LCH")){
                $("#"+x).removeClass("CH LCH");
            }
            if($("#"+x).hasClass("TCH")){
                $("#"+x).removeClass("CH TCH");
            }
            if($("#"+x).hasClass("SQCH")){
                $("#"+x).removeClass("CH SQCH");
            }
            if($("#"+x).hasClass("BCH")){
                $("#"+x).removeClass("CH BCH");
            }
            if($("#"+x).hasClass("miss")){
                $("#"+x).addClass("box");
                $("#"+x).removeClass("miss");
            }
            if($("#"+x).hasClass("hit")){
                $("#"+x).addClass("box");
                $("#"+x).removeClass("hit");
            }
        }
    });
    $("#clear2").click(function(){
        p2Chests = 0;
        for (x=1000;x<1100;x++) {
            if($("#"+x).hasClass("SCH")){
                $("#"+x).removeClass("CH SCH");
            }
            if($("#"+x).hasClass("LCH")){
                $("#"+x).removeClass("CH LCH");
            }
            if($("#"+x).hasClass("TCH")){
                $("#"+x).removeClass("CH TCH");
            }
            if($("#"+x).hasClass("SQCH")){
                $("#"+x).removeClass("CH SQCH");
            }
            if($("#"+x).hasClass("BCH")){
                $("#"+x).removeClass("CH BCH");
            }
            if($("#"+x).hasClass("miss")){
                $("#"+x).addClass("box");
                $("#"+x).removeClass("miss");
            }
            if($("#"+x).hasClass("hit")){
                $("#"+x).addClass("box");
                $("#"+x).removeClass("hit");
            }
        }
    });
    /*End*/
    $("#LCH1").draggable({ snap: ".LC", scope: ".box", revert: "invalid"});
    $("#BCH1").draggable({snap: ".BC", scope: ".box", revert: "invalid"});
    $("#TCH1").draggable({ snap: ".TC", scope: ".box", revert: "invalid"});
    $("#SCH1").draggable({snap: ".SC", scope: ".box", revert: "invalid"});
    $("#SQCH1").draggable({snap: ".SQC", scope: ".box", revert: "invalid"});
    
    $("#LCH2").draggable({ snap: ".LC", scope: ".box", revert: "invalid"});
    $("#BCH2").draggable({snap: ".BC", scope: ".box", revert: "invalid"});
    $("#TCH2").draggable({ snap: ".TC", scope: ".box", revert: "invalid"});
    $("#SCH2").draggable({snap: ".SC", scope: ".box", revert: "invalid"});
    $("#SQCH2").draggable({snap: ".SQC", scope: ".box", revert: "invalid"});
    
    $(".box").droppable({scope: ".box", tolerance: "pointer"});
    /*Placeing chests*/
    $("div.ch").on("dragstart", function(){
        ship = $(this).attr("id");
    });
     $("div.box").on("mouseover",function(){
        placement = parseFloat($(this).attr("id"));
     });
    $("div.ch").on("dragstop",function(){
        console.log(ship);
            if(ship == "SCH1"){
                if($("#"+placement).hasClass("SC")){
                    $("#"+placement).addClass("SCHP1");
                    $("#"+placement).addClass("CH");
                    placement = placement+1;
                    $("#"+placement).addClass("SCHP1");
                    $("#"+placement).addClass("CH");
                    p1Chests = p1Chests+1;
                }else{alert("Invalid Placement")}
            }
        /*
            if(ship == "SCH2"){
                if($("#"+placement).hasClass("LC")){
                    $("#"+placement).addClass("SCH");
                    $("#"+placement).addClass("CH");
                    placement = placement+10;
                    $("#"+placement).addClass("SCH");
                    $("#"+placement).addClass("CH");
                }else{alert("Invalid Placement")}
            }
            */
            if(ship == "LCH1"){
                if($("#"+placement).hasClass("LC")){
                    $("#"+placement).addClass("LCHP1");
                    $("#"+placement).addClass("CH");
                    placement = placement+1;
                    $("#"+placement).addClass("LCHP1");
                    $("#"+placement).addClass("CH");
                    placement = placement+1;
                    $("#"+placement).addClass("LCHP1");
                    $("#"+placement).addClass("CH");
                    p1Chests = p1Chests+1;
                }else{alert("Invalid Placement")}
            }
            if(ship == "TCH1"){
                if($("#"+placement).hasClass("TC")){
                    $("#"+placement).addClass("TCHP1");
                    $("#"+placement).addClass("CH");
                    placement = placement+10;
                    $("#"+placement).addClass("TCHP1");
                    $("#"+placement).addClass("CH");
                    placement = placement+10;
                    $("#"+placement).addClass("TCHP1");
                    $("#"+placement).addClass("CH");
                    placement = placement+10;
                    $("#"+placement).addClass("TCHP1");
                    $("#"+placement).addClass("CH");
                    p1Chests = p1Chests+1;
                }else{alert("Invalid Placement")}
            }
            if(ship == "SQCH1"){
                if($("#"+placement).hasClass("SQC")){
                    $("#"+placement).addClass("SQCHP1");
                    $("#"+placement).addClass("CH");
                    placement = placement+1;
                    $("#"+placement).addClass("SQCHP1");
                    $("#"+placement).addClass("CH");
                    placement = placement+10;
                    $("#"+placement).addClass("SQCHP1");
                    $("#"+placement).addClass("CH");
                    placement = placement-1;
                    $("#"+placement).addClass("SQCHP1");
                    $("#"+placement).addClass("CH");
                    p1Chests = p1Chests+1;
                }else{alert("Invalid Placement")}
            }
            if(ship == "BCH1"){
                if($("#"+placement).hasClass("BC")){
                    $("#"+placement).addClass("BCHP1");
                    $("#"+placement).addClass("CH");
                    placement = placement+1;
                    $("#"+placement).addClass("BCHP1");
                    $("#"+placement).addClass("CH");
                    placement = placement+1;
                    $("#"+placement).addClass("BCHP1");
                    $("#"+placement).addClass("CH");
                    placement = placement+10;
                    $("#"+placement).addClass("BCHP1");
                    $("#"+placement).addClass("CH");
                    placement = placement-1;
                    $("#"+placement).addClass("BCHP1");
                    $("#"+placement).addClass("CH");
                    placement = placement-1;
                    $("#"+placement).addClass("BCHP1");
                    $("#"+placement).addClass("CH");
                    p1Chests = p1Chests+1;
                    console.log(p1Chests);
                }else{alert("Invalid Placement")}
            }
        
        if(ship == "SCH2"){
                if($("#"+placement).hasClass("SC")){
                    $("#"+placement).addClass("SCHP2");
                    $("#"+placement).addClass("CH");
                    placement = placement+1;
                    $("#"+placement).addClass("SCHP2");
                    $("#"+placement).addClass("CH");
                    p2Chests = p2Chests+1;
                }else{alert("Invalid Placement")}
            }
        /*
            if(ship == "SCH2"){
                if($("#"+placement).hasClass("LC")){
                    $("#"+placement).addClass("SCH");
                    $("#"+placement).addClass("CH");
                    placement = placement+10;
                    $("#"+placement).addClass("SCH");
                    $("#"+placement).addClass("CH");
                }else{alert("Invalid Placement")}
            }
            */
            if(ship == "LCH2"){
                if($("#"+placement).hasClass("LC")){
                    $("#"+placement).addClass("LCHP2");
                    $("#"+placement).addClass("CH");
                    placement = placement+1;
                    $("#"+placement).addClass("LCHP2");
                    $("#"+placement).addClass("CH");
                    placement = placement+1;
                    $("#"+placement).addClass("LCHP2");
                    $("#"+placement).addClass("CH");
                    p2Chests = p2Chests+1;
                }else{alert("Invalid Placement")}
            }
            if(ship == "TCH2"){
                if($("#"+placement).hasClass("TC")){
                    $("#"+placement).addClass("TCHP2");
                    $("#"+placement).addClass("CH");
                    placement = placement+10;
                    $("#"+placement).addClass("TCHP2");
                    $("#"+placement).addClass("CH");
                    placement = placement+10;
                    $("#"+placement).addClass("TCHP2");
                    $("#"+placement).addClass("CH");
                    placement = placement+10;
                    $("#"+placement).addClass("TCHP2");
                    $("#"+placement).addClass("CH");
                    p2Chests = p2Chests+1;
                }else{alert("Invalid Placement")}
            }
            if(ship == "SQCH2"){
                if($("#"+placement).hasClass("SQC")){
                    $("#"+placement).addClass("SQCHP2");
                    $("#"+placement).addClass("CH");
                    placement = placement+1;
                    $("#"+placement).addClass("SQCHP2");
                    $("#"+placement).addClass("CH");
                    placement = placement+10;
                    $("#"+placement).addClass("SQCHP2");
                    $("#"+placement).addClass("CH");
                    placement = placement-1;
                    $("#"+placement).addClass("SQCHP2");
                    $("#"+placement).addClass("CH");
                    p2Chests = p2Chests+1;
                }else{alert("Invalid Placement")}
            }
            if(ship == "BCH2"){
                if($("#"+placement).hasClass("BC")){
                    $("#"+placement).addClass("BCHP2");
                    $("#"+placement).addClass("CH");
                    placement = placement+1;
                    $("#"+placement).addClass("BCHP2");
                    $("#"+placement).addClass("CH");
                    placement = placement+1;
                    $("#"+placement).addClass("BCHP2");
                    $("#"+placement).addClass("CH");
                    placement = placement+10;
                    $("#"+placement).addClass("BCHP2");
                    $("#"+placement).addClass("CH");
                    placement = placement-1;
                    $("#"+placement).addClass("BCHP2");
                    $("#"+placement).addClass("CH");
                    placement = placement-1;
                    $("#"+placement).addClass("BCHP2");
                    $("#"+placement).addClass("CH");
                    p2Chests = p2Chests+1;
                }else{alert("Invalid Placement")}
            }
        });
    /*End*/
    /* ChangeBackgrounds&Chests*/
     $("#bgVM").click(function(){
        if($("#gamePage").hasClass("bg-info")){
            $("#gamePage").removeClass("bg-info");
            $("#gamePage").addClass("vikingMetal");
        }else if($("#gamePage").hasClass("bg-dark")){
            $("#gamePage").removeClass("bg-dark");
            $("#gamePage").addClass("vikingMetal");
        }else if($("#gamePage").hasClass("bg-warning")){
            $("#gamePage").removeClass("bg-warning");
            $("#gamePage").addClass("vikingMetal");
        }else if($("#gamePage").hasClass("bg-danger")){
            $("#gamePage").removeClass("bg-danger");
            $("#gamePage").addClass("vikingMetal");
        }else if($("#gamePage").hasClass("pirateG")){
            $("#gamePage").removeClass("pirateG");
            $("#gamePage").addClass("vikingMetal");
        }else if($("#gamePage").hasClass("pirateSpook")){
            $("#gamePage").removeClass("pirateSpook");
            $("#gamePage").addClass("vikingMetal");
        }else if($("#gamePage").hasClass("belowDeck")){
            $("#gamePage").removeClass("belowDeck");
            $("#gamePage").addClass("vikingMetal");
        }
         if($(".map").hasClass("mapSpook")){
            $(".map").removeClass("mapSpook");
            $(".map").addClass("mapViking");
        }else if($(".map").hasClass("mapP")){
            $(".map").removeClass("mapP");
            $(".map").addClass("mapViking");
        }
        if($(".LCHd").hasClass("LCHpirate")){
            $(".LCHd").removeClass("LCHpirate");
            $(".LCHd").addClass("LCHnorse");
        }
         if($(".TCHd").hasClass("TCHpirate")){
            $(".TCHd").removeClass("TCHpirate");
            $(".TCHd").addClass("TCHnorse");
        }
         if($(".SQCHd").hasClass("SQCHpirate")){
            $(".SQCHd").removeClass("SQCHpirate");
            $(".SQCHd").addClass("SQCHnorse");
        }
         if($(".SCHd").hasClass("LCHpirate")){
            $(".SCHd").removeClass("LCHpirate");
            $(".SCHd").addClass("LCHnorse");
        }
         if($(".BCHd").hasClass("LCHpirate")){
            $(".BCHd").removeClass("LCHpirate");
            $(".BCHd").addClass("LCHnorse");
        }
    });
    $("#bgAM").click(function(){
        if($("#gamePage").hasClass("bg-info")){
            $("#gamePage").removeClass("bg-info");
            $("#gamePage").addClass("pirateG");
        }else if($("#gamePage").hasClass("bg-dark")){
            $("#gamePage").removeClass("bg-dark");
            $("#gamePage").addClass("pirateG");
        }else if($("#gamePage").hasClass("bg-warning")){
            $("#gamePage").removeClass("bg-warning");
            $("#gamePage").addClass("pirateG");
        }else if($("#gamePage").hasClass("bg-danger")){
            $("#gamePage").removeClass("bg-danger");
            $("#gamePage").addClass("pirateG");
        }else if($("#gamePage").hasClass("vikingMetal")){
            $("#gamePage").removeClass("vikingMetal");
            $("#gamePage").addClass("pirateG");
        }else if($("#gamePage").hasClass("pirateSpook")){
            $("#gamePage").removeClass("pirateSpook");
            $("#gamePage").addClass("pirateG");
        }else if($("#gamePage").hasClass("belowDeck")){
            $("#gamePage").removeClass("belowDeck");
            $("#gamePage").addClass("pirateG");
        }
        if($(".map").hasClass("mapSpook")){
            $(".map").removeClass("mapSpook");
            $(".map").addClass("mapP");
        }else if($(".map").hasClass("mapViking")){
            $(".map").removeClass("mapViking");
            $(".map").addClass("mapP");
        }           
    });
    $("#bgred").click(function(){
        if($("#gamePage").hasClass("bg-info")){
            $("#gamePage").removeClass("bg-info");
            $("#gamePage").addClass("bg-danger");
        }else if($("#gamePage").hasClass("bg-dark")){
            $("#gamePage").removeClass("bg-dark");
            $("#gamePage").addClass("bg-danger");
        }else if($("#gamePage").hasClass("bg-warning")){
            $("#gamePage").removeClass("bg-warning");
            $("#gamePage").addClass("bg-danger");
        }else if($("#gamePage").hasClass("vikingMetal")){
            $("#gamePage").removeClass("vikingMetal");
            $("#gamePage").addClass("bg-danger");
        }else if($("#gamePage").hasClass("pirateG")){
            $("#gamePage").removeClass("pirateG");
            $("#gamePage").addClass("bg-danger");
        }else if($("#gamePage").hasClass("pirateSpook")){
            $("#gamePage").removeClass("pirateSpook");
            $("#gamePage").addClass("bg-danger");
        }else if($("#gamePage").hasClass("belowDeck")){
            $("#gamePage").removeClass("belowDeck");
            $("#gamePage").addClass("bg-danger");
        }
        if($(".map").hasClass("mapSpook")){
            $(".map").removeClass("mapSpook");
            $(".map").addClass("mapP");
        }else if($(".map").hasClass("mapViking")){
            $(".map").removeClass("mapViking");
            $(".map").addClass("mapP");
        }
    });
    $("#bgblack").click(function(){
        if($("#gamePage").hasClass("bg-info")){
            $("#gamePage").removeClass("bg-info");
            $("#gamePage").addClass("bg-dark");
        }else if($("#gamePage").hasClass("bg-danger")){
            $("#gamePage").removeClass("bg-danger");
            $("#gamePage").addClass("bg-dark");
        }else if($("#gamePage").hasClass("bg-warning")){
            $("#gamePage").removeClass("bg-warning");
            $("#gamePage").addClass("bg-dark");
        }else if($("#gamePage").hasClass("vikingMetal")){
            $("#gamePage").removeClass("vikingMetal");
            $("#gamePage").addClass("bg-dark");
        }else if($("#gamePage").hasClass("pirateG")){
            $("#gamePage").removeClass("pirateG");
            $("#gamePage").addClass("bg-dark");
        }else if($("#gamePage").hasClass("pirateSpook")){
            $("#gamePage").removeClass("pirateSpook");
            $("#gamePage").addClass("bg-dark");
        }else if($("#gamePage").hasClass("belowDeck")){
            $("#gamePage").removeClass("belowDeck");
            $("#gamePage").addClass("bg-dark");
        }
        if($(".map").hasClass("mapSpook")){
            $(".map").removeClass("mapSpook");
            $(".map").addClass("mapP");
        }else if($(".map").hasClass("mapViking")){
            $(".map").removeClass("mapViking");
            $(".map").addClass("mapP");
        }
    });
    $("#bgyellow").click(function(){
        if($("#gamePage").hasClass("bg-info")){
            $("#gamePage").removeClass("bg-info");
            $("#gamePage").addClass("bg-warning");
        }else if($("#gamePage").hasClass("bg-dark")){
            $("#gamePage").removeClass("bg-dark");
            $("#gamePage").addClass("bg-warning");
        }else if($("#gamePage").hasClass("bg-danger")){
            $("#gamePage").removeClass("bg-danger");
            $("#gamePage").addClass("bg-warning");
        }else if($("#gamePage").hasClass("vikingMetal")){
            $("#gamePage").removeClass("vikingMetal");
            $("#gamePage").addClass("bg-warning");
        }else if($("#gamePage").hasClass("pirateG")){
            $("#gamePage").removeClass("pirateG");
            $("#gamePage").addClass("bg-warning");
        }else if($("#gamePage").hasClass("pirateSpook")){
            $("#gamePage").removeClass("pirateSpook");
            $("#gamePage").addClass("bg-warning");
        }else if($("#gamePage").hasClass("belowDeck")){
            $("#gamePage").removeClass("belowDeck");
            $("#gamePage").addClass("bg-warning");
        }
        if($(".map").hasClass("mapSpook")){
            $(".map").removeClass("mapSpook");
            $(".map").addClass("mapP");
        }else if($(".map").hasClass("mapViking")){
            $(".map").removeClass("mapViking");
            $(".map").addClass("mapP");
        }
    });
    $("#bgblue").click(function(){
        if($("#gamePage").hasClass("bg-danger")){
            $("#gamePage").removeClass("bg-danger");
            $("#gamePage").addClass("bg-info");
        }else if($("#gamePage").hasClass("bg-dark")){
            $("#gamePage").removeClass("bg-dark");
            $("#gamePage").addClass("bg-info");
        }else if($("#gamePage").hasClass("bg-warning")){
            $("#gamePage").removeClass("bg-warning");
            $("#gamePage").addClass("bg-info");
        }else if($("#gamePage").hasClass("vikingMetal")){
            $("#gamePage").removeClass("vikingMetal");
            $("#gamePage").addClass("bg-info");
        }else if($("#gamePage").hasClass("pirateG")){
            $("#gamePage").removeClass("pirateG");
            $("#gamePage").addClass("bg-info");
        }else if($("#gamePage").hasClass("pirateSpook")){
            $("#gamePage").removeClass("pirateSpook");
            $("#gamePage").addClass("bg-info");
        }else if($("#gamePage").hasClass("belowDeck")){
            $("#gamePage").removeClass("belowDeck");
            $("#gamePage").addClass("bg-info");
        }
        if($(".map").hasClass("mapSpook")){
            $(".map").removeClass("mapSpook");
            $(".map").addClass("mapP");
        }else if($(".map").hasClass("mapViking")){
            $(".map").removeClass("mapViking");
            $(".map").addClass("mapP");
        }
    });
    $("#bgSP").click(function(){
        if($("#gamePage").hasClass("bg-info")){
            $("#gamePage").removeClass("bg-info");
            $("#gamePage").addClass("pirateSpook");
        }else if($("#gamePage").hasClass("bg-danger")){
            $("#gamePage").removeClass("bg-danger");
            $("#gamePage").addClass("pirateSpook");
        }else if($("#gamePage").hasClass("bg-dark")){
            $("#gamePage").removeClass("bg-dark");
            $("#gamePage").addClass("pirateSpook");
        }else if($("#gamePage").hasClass("bg-warning")){
            $("#gamePage").removeClass("bg-warning");
            $("#gamePage").addClass("pirateSpook");
        }else if($("#gamePage").hasClass("vikingMetal")){
            $("#gamePage").removeClass("vikingMetal");
            $("#gamePage").addClass("pirateSpook");
        }else if($("#gamePage").hasClass("pirateG")){
            $("#gamePage").removeClass("pirateG");
            $("#gamePage").addClass("pirateSpook");
        }else if($("#gamePage").hasClass("belowDeck")){
            $("#gamePage").removeClass("belowDeck");
            $("#gamePage").addClass("pirateSpook");
        }
        if($(".map").hasClass("mapP")){
            $(".map").removeClass("mapP");
            $(".map").addClass("mapSpook");
        }else if($(".map").hasClass("mapViking")){
            $(".map").removeClass("mapViking");
            $(".map").addClass("mapSpook");
        }
    });
    $("#bgBD").click(function(){
        if($("#gamePage").hasClass("bg-info")){
            $("#gamePage").removeClass("bg-info");
            $("#gamePage").addClass("belowDeck");
        }else if($("#gamePage").hasClass("bg-danger")){
            $("#gamePage").removeClass("bg-danger");
            $("#gamePage").addClass("pirateSpook");
        }else if($("#gamePage").hasClass("bg-dark")){
            $("#gamePage").removeClass("bg-dark");
            $("#gamePage").addClass("belowDeck");
        }else if($("#gamePage").hasClass("bg-warning")){
            $("#gamePage").removeClass("bg-warning");
            $("#gamePage").addClass("belowDeck");
        }else if($("#gamePage").hasClass("vikingMetal")){
            $("#gamePage").removeClass("vikingMetal");
            $("#gamePage").addClass("belowDeck");
        }else if($("#gamePage").hasClass("pirateG")){
            $("#gamePage").removeClass("pirateG");
            $("#gamePage").addClass("belowDeck");
        }else if($("#gamePage").hasClass("pirateSpook")){
            $("#gamePage").removeClass("pirateSpook");
            $("#gamePage").addClass("belowDeck");
        }
        if($(".map").hasClass("mapSpook")){
            $(".map").removeClass("mapSpook");
            $(".map").addClass("mapP");
        }else if($(".map").hasClass("mapViking")){
            $(".map").removeClass("mapViking");
            $(".map").addClass("mapP");
        }
    });
});