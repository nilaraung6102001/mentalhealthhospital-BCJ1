$(document).ready(function(){
	// console.log('hay i am working')

     // Start Header Section 

     // Start Banner Section 



     // End Bannner Section 

     // End Header Section 


     // Start info Section 
     $(window).scroll(function(){
     	let getscrollpoint = $(this).scrollTop();
     	// console.log(getscrollpoint);

     	if(getscrollpoint >= 220){
     		$('.infotexts').addClass('fromlefts');
     		$('.infopics').addClass('fromrights');
     	}else{
     		$('.infotexts').removeClass('fromlefts');
     		$('.infopics').removeClass('fromrights');
     	}
     });

     // End info Section 


     // Start Premises Section

     $('#lightslider').lightSlider({
        item:4,
        loop:true,
        // auto:true,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:300
     }).play();
     // End Premises Section


     // Start Pricing Section

     $(window).scroll(function(){
        let getscroll = $(this).scrollTop();
        // console.log(getscroll);

        if(getscroll >=2450 ){
            $(".cardones").addClass("moveleft");
            $(".cardtwos").addClass("movebottom");
            $(".cardthrees").addClass("moveright");
        }else{
            $(".cardones").removeClass("moveleft");
            $(".cardtwos").removeClass("movebottom");
            $(".cardthrees").removeClass("moveright");
        }
     });

     // End Pricing Section


     // Start Join Us Section

     $("#accordion").accordion();

     // End Join Us Section


     // start footer section

     $("#getyear").text(new Date().getUTCFullYear());
     // end footer section


     // start progress 

     // $(window).scroll(function(){
      // var getprogress = $("#progresses");
      // var getprogressvalue = $("#progressvalues");
       // var getscrolltop = $(this).scrollTop();
       // console.log(getscrolltop);

       // var scrollheight = $(document).height();
       // console.log(scrollheight);
       // var clientheight = $(window).height();
       // console.log(clientheight);
       // var calculateheight = scrollheight - clientheight;
       // console.log(calculateheight);

       // var finalheight = Math.round(scrollheight * 100 / calculateheight);
       // console.log(finalheight);

       // getprogressvalue.text(`${finalheight}%`);





       // scrolltop *100 /(project hieght - client view height)
     // });

     // end progress

	
});