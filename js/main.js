//COLORES
	
	var fondo = 'white';
	var letras = 'black';

	var color1 = color2 = color3 = color4 = color5 ='#FFD6AA';
	/*
	var color2 = '#F0A878';
	var color3 = '#90C0D8';
	var color4 = '#4890A8';
	var color5 = '#186078';
	*/

window.onscroll = function () {

     window.scrollTo(0,0);
}

	$(document).ready(function(){

		$('.grid').packery({
		  itemSelector: '.grid-item'
		});
		$('.equipo-grid').packery({
		  itemSelector: '.equipo-grid-item'
		});
		var altura = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;

$('.seccion').css("height", altura);

		var miCarousel = $('#contenedor');
		miCarousel.slick({
		  	centerMode: true,
		  	infinite: false,
		  	slidesToShow: 1,
		  	slidesToScroll: 1,
		  	 dots: true,
		  	 arrows: false,
		  	 appendDots: '#navegacion',
		  	 draggable : false,
		  	 dotsClass: 'navegacion',
		  	 accessibility: true,

		  });
		miCarousel.mousewheel(function(e) {
			  if (e.deltaY < 0) {
			    if($(this).slick('slickCurrentSlide') == 4) {
			      return
			    }
			    e.preventDefault()
			    $(this).slick('slickNext')
			  } else {
			    if($(this).slick('slickCurrentSlide') == 0) {
			      return
			    }			    
			    e.preventDefault()
			    $(this).slick('slickPrev')
			  }
			});


		$('.navegacion li button').each( function(index) {
			if(index == 0){
				$(this).html("Inicio");
				$(this).addClass('waves-effect waves-light butn');
				//$(this).css('background-color', color1)
			}
			if(index == 1){
				$(this).html("Conócenos");
				$(this).addClass('waves-effect waves-light butn');
				//$(this).css('background-color', color2)
			}
			if(index == 2){
				$(this).html("Contacto");
				$(this).addClass('waves-effect waves-light butn');
				//$(this).css('background-color', color3)
			}
			if(index == 3){
				$(this).html("Ubícanos");
				$(this).addClass('waves-effect waves-light butn');
				//$(this).css('background-color', color4)
			}
			if(index == 4){
				$(this).html("Servicios");
				$(this).addClass('waves-effect waves-light butn');
				//$(this).css('background-color', color5)
			}
			if(index == 5){
				$(this).remove();
			}
			if(index == 6){
				$(this).remove();
			}
		});
/*
		$("body").css('background-color', fondo);
		$("body").css('color', letras);
		$(".btn").css('color', letras);

		$('#inicio').css('background-color', color1);
		$('#primer').css('background-color', "red");
		$('#quienesSomos').css('background-color', color2);
		$('#contactoRedesSociales').css('background-color', color3);
		$('#ubicacion').css('background-color', color4);
		$('#servicios').css('background-color', color5);
		$('#ultimo').css('background-color', color5);
		*/
	});
