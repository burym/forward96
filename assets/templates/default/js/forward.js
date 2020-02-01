
var waitForFinalEvent = function(){var b={};return function(c,d,a){a||(a="Don't call this twice without a uniqueId");b[a]&&clearTimeout(b[a]);b[a]=setTimeout(c,d)}}();

//----------------------------------------------------------------------------------------
jQuery(document).ready(function($) {

  $('a[href="#"]').click(function(event){
    event.preventDefault();
  });
  
  $('a[href^="tel:"]').click(function(event){
    topGoal('click_button_tel');
  });
  
  
  // $('input.tel, input.phone').mask('+9 (999) 999-99-99',{placeholder:'…'});
  //$('input.tel, input.phone').mask('+9 (999) 999-99-99');

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    // $('.selectpicker').selectpicker('mobile');
  }
  
  $('.toggler-mmenu').on('click', function(){
    $('.mobile-menu').toggleClass('expand');
    return false;
  });

//----------------------------------------------------------------------------------------
    $(document).on('keypress', 'input:text, input.phone', function(event) {
  			if(event.which == 0) return true;
  			var trg = event.target;
  			var res = 0;
  			if($(trg).hasClass('digit')) if(!in_array(event.which,[8, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57])) res++;
  			if($(trg).hasClass('ceil')) if(!in_array(event.which,[8, 45, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57])) res++;
  			if($(trg).hasClass('positive')) if(!in_array(event.which,[8, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57])) res++;
  			if($(trg).hasClass('phone')) if(!in_array(event.which,[8, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 41, 40, 32, 45])) res++;
  			if(res > 0) {event.keyCode = 0; return false;}
		});

//----------------------------------------------------------------------------------------
    $(window).on('load', function(){
        $('.vis-marker .dw').text( $(window).width() );
       // $('.triangle').hide();
       //scrollAndLoad();
        waitForFinalEvent(function(){
           sizeAndLoad();
        }, 10, new Date().getTime());
        
    });

//----------------------------------------------------------------------------------------
    $(window).on('resize', function(){
       $('.vis-marker .dw').text( $(window).width() );
        waitForFinalEvent(function(){
          sizeAndLoad();
        }, 100, new Date().getTime());
    });

//----------------------------------------------------------------------------------------
    $(window).on('scroll', function () {
        waitForFinalEvent(function(){
          sizeAndLoad();
        }, 100, new Date().getTime());
    });

//----------------------------------------------------------------------------------------
 /* $('.file-input input[type="file"]').on('change', function(){
    var fileName = $(this).val().split('\\').pop();
    //var fileName = this.files[0].mozFullPath.split('\\').pop();
    $(this).parent().find('.file-name').text(fileName);
  });*/
//----------------------------------------------------------------------------------------
if ($('form').length) {
  $('form').each(function(i) {
    var frmId = $(this).attr('id');
    var firstInput = $(this).find('input.required').get(0);
    if (firstInput) {
      $(firstInput).keyup(function() {
        var preHuman = $('#' + frmId).find('input[name="ahuman"]');
        if (!($(preHuman).length)) {
          var hiHuman = '<input type="hidden" name="ahuman" value="' + frmId + '" />';
          $('#' + frmId).append(hiHuman);
        }
      });
      $(firstInput).mouseup(function() {
        var preHuman = $('#' + frmId).find('input[name="ahuman"]');
        if (!($(preHuman).length)) {
          var hiHuman = '<input type="hidden" name="ahuman" value="' + frmId + '" />';
          $('#' + frmId).append(hiHuman);
        }
      });
      $(firstInput).focus(function() {
        var preHuman = $('#' + frmId).find('input[name="ahuman"]');
        if (!($(preHuman).length)) {
          var hiHuman = '<input type="hidden" name="ahuman" value="' + frmId + '" />';
          $('#' + frmId).append(hiHuman);
        }
      });
    }
  });
}
//----------------------------------------------------------------------------------------
if( $('.about-docs').length ) {
		$('.about-docs').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-3d-unfold',
		  removalDelay: 500, //delay removal by X to allow out-animation
		  callbacks: {
			beforeOpen: function() {
			  // just a hack that adds mfp-anim class to markup 
			   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			  // this.st.mainClass = this.st.el.attr('data-effect');
			}
		  },
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				/*titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}*/
			}
		});  
}

if( $('.about-gallery').length ) {
		$('.about-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-3d-unfold',
		  removalDelay: 500, //delay removal by X to allow out-animation
		  callbacks: {
			beforeOpen: function() {
			  // just a hack that adds mfp-anim class to markup 
			   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			  // this.st.mainClass = this.st.el.attr('data-effect');
			}
		  },
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				/*titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}*/
			}
		});  
}
//----------------------------------------------------------------------------------------

if( $('.cars-infocard').length ) {
 /* $('.cars-hover').on('click', function(){
     $('.cars-infocard').removeClass('expand').css('max-height', '20px');
     $(this).css('*zoom', 1);
     $('.cars-info-image').html('<img src="'+$(this).data('image')+'" alt="" class="img-fluid">');
     $('.cars-info-title').text( $(this).data('title') );
     $('.cars-info-body').html( $(this).find('.cars-content').eq(0).html() );
     
     $('.cars-infocard').addClass('expand').css('max-height', '800px');
     $('body, html').scrollTo( ($('.cars-infocard').offset().top)+'px' , 500 );
  });
  
  $('.cars-info-close').on('click', function(){
    $('.cars-infocard').removeClass('expand').css('max-height', '0px');
  });

    $('#cars-tiles').mixitup({
        filterSelector : '.cars-filter',
        layoutMode: 'list',
        //targetDisplayGrid : 'block',
        //targetDisplayList: 'block',        
        'onMixStart': function (config) {
            $('.cars-infocard').removeClass('expand').css('max-height', '0px');
        }
    });  */
    
    $('.cars-filter').on('click', function(){
       $('.cars-filter').removeClass('active');
       $(this).addClass('active');
       var thFilter = $(this).data('filter');
       if(thFilter == 'all') {
         $('.cars-tiles .mix').show(200);
       } else {
         //$('.cars-tiles .mix').hide(200);
         $('.cars-tiles .mix.'+thFilter).show(200);
         thFilter = (thFilter == 'akpp') ? 'mkkp' : 'akpp';
//         console.log('hide = '+thFilter);
         $('.cars-tiles .mix.'+thFilter).hide(200);         
       }

    });
    
}
//----------------------------------------------------------------------------------------
if($('.flamp-widget-wrap').length) {
    $.getScript( "https://widget.flamp.ru/loader.js" )
      .done(function( script, textStatus ) {
        //console.log( 'getScript = ' + textStatus );
      })
      .fail(function( jqxhr, settings, exception ) {
        $('.flamp-widget-wrap').hide();
    });  
}

//----------------------------------------------------------------------------------------
if($('.index-map-row').length) {
  
  var myMap = false;
  var pnt1Placemark, pnt2Placemark;
  // 56.8340626!4d60.6212968  Энгельса
  // 56.8409744!4d60.6102707  Карла
function map_show() {
    if (!myMap) {
        myMap = new ymaps.Map("map", {
            center: [56.8377, 60.6160],
            zoom: 15,
            controls: ['smallMapDefaultSet']
        });
        myMap.behaviors.disable('scrollZoom');

        // Создание метки
        pnt1Placemark = new ymaps.Placemark([56.8340626, 60.6212968], {
            balloonContent: 'ул. Энгельса, 36, офис 533'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [29, 40]],
            iconImageHref: 'assets/map-icon.png',
            iconImageSize: [29, 40],
            iconImageOffset: [-14, -30],
        }),        
        // Добавление метки на карту
        myMap.geoObjects.add(pnt1Placemark);

        // Создание метки
        pnt2Placemark = new ymaps.Placemark([56.8409744, 60.6102707], {
            balloonContent: 'ул. Карла Либкнехта, 27, оф. 3/5'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [29, 40]],
            iconImageHref: 'assets/map-icon.png',
            iconImageSize: [29, 40],
            iconImageOffset: [-14, -30],
        }),         
        // Добавление метки на карту
        myMap.geoObjects.add(pnt2Placemark);
          
/*    myMap.events.add('click', function (e) {
        if (!myMap.balloon.isOpen()) {
            var coords = e.get('coords');
            myMap.balloon.open(coords, {
                contentHeader:'Событие!',
                contentBody:'<p>Кто-то щелкнул по карте.</p>' +
                    '<p>Координаты щелчка: ' + [
                    coords[0].toPrecision(6),
                    coords[1].toPrecision(6)
                    ].join(', ') + '</p>',
                contentFooter:'<sup>Щелкните еще раз</sup>'
            });
        }
        else {
            myMap.balloon.close();
        }
    });     */    

    }  
}
    //ymaps.ready(map_show);
    // load ,map.addon.balloon
    var mapi = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=06ad7376-a9ee-4cd3-be82-bae5a828a56c&amp;load=Map,Placemark&amp;mode=release";
    
    $.getScript( mapi )
      .done(function( script, textStatus ) {
        //console.log( 'getScript = ' + textStatus );
        ymaps.ready(map_show);
      })
      .fail(function( jqxhr, settings, exception ) {
        //$( "div.log" ).text( "Triggered ajaxError handler." );
        $('.index-map-row').hide();
    });    
    
    /*
$.ajaxSetup({
  cache: true,
  async: false
});    
    
$.getScript(mapi, function () {
   ymaps.ready(map_show);
});*/

}
//----------------------------------------------------------------------------------------
if($('.actions-slider').length ) {
  var actSlider = $('.actions-slider');
    actSlider.owlCarousel({
      autoPlay: false,
      slideSpeed: 500,
      paginationSpeed: 800,
      items: 3,
      autoWidth: false,
      singleItem: false,
        
        itemsDesktop : [1800,3],
        itemsDesktopSmall : [1100,2],
        itemsTablet: [880,1],
        itemsTabletSmall: [650,1],
        itemsMobile : [400,1],
          
      //itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
          navigation: true,
          navigationText: ["<span></span>", "<span></span>"],
          rewindNav: true,      
      autoHeight: false,
      loop: false,
      pagination: false,
      itemsScaleUp: true,
      rewindNav : true,
      stopOnHover: true,
      responsive: true,
      //animateOut: 'fadeOut',
      //animateIn: 'fadeIn',
      //transitionStyle: "fade"
   });  
  
}  
//----------------------------------------------------------------------------------------
if($('#da-slider').length ) {
  // $('#da-slider').cslider();
  
  var indxSlider = $('#da-slider .container');
    indxSlider.owlCarousel({
      autoPlay: false,
      slideSpeed: 500,
      paginationSpeed: 800,
      items: 1,
      autoWidth: true,
      singleItem: true,
        /*
        itemsDesktop : [1800,5],
        itemsDesktopSmall : [1100,4],
        itemsTablet: [880,3],
        itemsTabletSmall: [650,2],
        itemsMobile : [400,1],
          */
      //itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
          navigation: true,
          navigationText: ["<", ">"],
          rewindNav: true,      
      autoHeight: true,
      loop: true,
      pagination: true,
      itemsScaleUp: true,
      rewindNav : true,
      stopOnHover: true,
      responsive: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      transitionStyle: "fade"
   });
  
}
//----------------------------------------------------------------------------------------
    //Get width of container
 /*   var containerWidth = $('.section .container').width();
    //Resize animated triangle
    $(".triangle").css({
        "border-left": containerWidth / 2 + 'px outset transparent',
        "border-right": containerWidth / 2 + 'px outset transparent'
    });
    $(window).resize(function () {
        containerWidth = $('.container').width();
        $(".triangle").css({
            "border-left": containerWidth / 2 + 'px outset transparent',
            "border-right": containerWidth / 2 + 'px outset transparent'
        });
    });*/
    
    //Animate triangles
  /*  $('.triangle').on('inview', function (event, isInView) {
        if (isInView) {
          $(this).addClass("animated fadeInDown");
        } else {
          $(this).removeClass("animated fadeInDown");
        }
    });    */
//----------------------------------------------------------------------------------------
    //Animate contact form
  /*  $('.inline-form-wrap').on('inview', function (event, isInView) {
        if (isInView) {
            $('.inline-form-wrap').addClass("animated bounceIn");
        } else {
            $('.inline-form-wrap').removeClass("animated bounceIn");
        }
    }); */

		$('#enroll-form').validate({ // форма записаться
  			rules: {
  				name: "required",        
  				contact: "required"
  			},
  			messages: {
  				name: "Укажите имя",      
  				contact: "Укажите телефон"      
  			},
  			errorPlacement: function($error, $element) {
  				// $element.parent().find('code.err').eq(0).text( $error.text() ).css('display', 'inline-block');
  			},
  			highlight: function(element, errorClass, validClass) {
  				$(element).closest('div, label').addClass('error').removeClass('success');
  				$(element).addClass('error').removeClass('success');
  			},
  			unhighlight: function(element, errorClass, validClass) {
  				$(element).closest('div, label').addClass('success').removeClass('error');
  				$(element).addClass('success').removeClass('error');
					$(element).closest('div, label').find('.err').hide(120);
  			}

  	}); // форма записаться
    
		$('#enroll-form').validate({ // форма контактов
  			rules: {
  				name: "required",        
  				contact: "required",
  				message: "required"
  			},
  			messages: {
  				name: "Укажите имя",      
  				contact: "Укажите телефон",      
  				message: "Введите текст сообщения"      
  			},
  			errorPlacement: function($error, $element) {
  				// $element.parent().find('code.err').eq(0).text( $error.text() ).css('display', 'inline-block');
  			},
  			highlight: function(element, errorClass, validClass) {
  				$(element).closest('div, label').addClass('error').removeClass('success');
  				$(element).addClass('error').removeClass('success');
  			},
  			unhighlight: function(element, errorClass, validClass) {
  				$(element).closest('div, label').addClass('success').removeClass('error');
  				$(element).addClass('success').removeClass('error');
					$(element).closest('div, label').find('.err').hide(120);
  			}

  	}); // форма контактов    
    
		$('#review-form').validate({ // оставить отзыв
  			rules: {
  				name: "required",        
  				contact:  {
              required: true,
              email: true
          },          
  				message: "required"
  			},
  			messages: {
  				name: "Укажите имя",      
  				contact:  {
              required: "Укажите электронную почту",
              email: "Проверьте эл.адрес"
          },             
  				message: "Введите текст отзыва"      
  			},
  			errorPlacement: function($error, $element) {
  				// $element.parent().find('code.err').eq(0).text( $error.text() ).css('display', 'inline-block');
  			},
  			highlight: function(element, errorClass, validClass) {
  				$(element).closest('div, label').addClass('error').removeClass('success');
  				$(element).addClass('error').removeClass('success');
  			},
  			unhighlight: function(element, errorClass, validClass) {
  				$(element).closest('div, label').addClass('success').removeClass('error');
  				$(element).addClass('success').removeClass('error');
					$(element).closest('div, label').find('.err').hide(120);
  			}

  	}); // оставить отзыв
         
    
		$('#requisit-form').validate({ // оставить заявку
  			rules: {
  				name: "required",        
  				contact: "required"
  			},
  			messages: {
  				name: "Укажите имя",      
  				contact: "Укажите телефон"     
  			},
  			errorPlacement: function($error, $element) {
  				// $element.parent().find('code.err').eq(0).text( $error.text() ).css('display', 'inline-block');
  			},
  			highlight: function(element, errorClass, validClass) {
  				$(element).closest('div, label').addClass('error').removeClass('success');
  				$(element).addClass('error').removeClass('success');
  			},
  			unhighlight: function(element, errorClass, validClass) {
  				$(element).closest('div, label').addClass('success').removeClass('error');
  				$(element).addClass('success').removeClass('error');
					$(element).closest('div, label').find('.err').hide(120);
  			}

  	}); // оставить заявку
        
		$('#modalRequisit-form').validate({ // записаться на обучение
  			rules: {
  				name: "required",        
  				contact: "required"
  			},
  			messages: {
  				name: "Укажите имя",      
  				contact: "Укажите телефон"     
  			},
  			errorPlacement: function($error, $element) {
  				// $element.parent().find('code.err').eq(0).text( $error.text() ).css('display', 'inline-block');
  			},
  			highlight: function(element, errorClass, validClass) {
  				$(element).closest('div, label').addClass('error').removeClass('success');
  				$(element).addClass('error').removeClass('success');
  			},
  			unhighlight: function(element, errorClass, validClass) {
  				$(element).closest('div, label').addClass('success').removeClass('error');
  				$(element).addClass('success').removeClass('error');
					$(element).closest('div, label').find('.err').hide(120);
  			}

  	}); // записаться на обучение
    
		$('#contact-form').validate({ // форма контактов
  			rules: {
  				name: "required",        
  				contact: "required",
  				message: "required",
  				irobot: { required: true },
  				process: "required"
  			},
  			messages: {
  				name: "Укажите имя",      
  				contact: "Укажите телефон",
  				message: "Введите текст сообщения",     
  				irobot: "Отметьтесь как чаловек",
  				process: "Необходимо согласие на обработку"
  			},
  			errorPlacement: function($error, $element) {
  				// $element.parent().find('code.err').eq(0).text( $error.text() ).css('display', 'inline-block');
  			},
  			highlight: function(element, errorClass, validClass) {
  				$(element).closest('div, label').addClass('error').removeClass('success');
  				$(element).addClass('error').removeClass('success');
  			},
  			unhighlight: function(element, errorClass, validClass) {
  				$(element).closest('div, label').addClass('success').removeClass('error');
  				$(element).addClass('success').removeClass('error');
					$(element).closest('div, label').find('.err').hide(120);
  			}

  	}); // форма контактов    
    
        
		$('#modalSimpleOrder-form ').validate({ // оставить заявку
  			rules: {
  				name: "required",        
  				contact: "required"
  			},
  			messages: {
  				name: "Укажите имя",      
  				contact: "Укажите телефон"     
  			},
  			errorPlacement: function($error, $element) {
  				// $element.parent().find('code.err').eq(0).text( $error.text() ).css('display', 'inline-block');
  			},
  			highlight: function(element, errorClass, validClass) {
  				$(element).closest('div, label').addClass('error').removeClass('success');
  				$(element).addClass('error').removeClass('success');
  			},
  			unhighlight: function(element, errorClass, validClass) {
  				$(element).closest('div, label').addClass('success').removeClass('error');
  				$(element).addClass('success').removeClass('error');
					$(element).closest('div, label').find('.err').hide(120);
  			}

  	}); // оставить заявку
    
   
    
  AjaxForm.Message.success = function() {};
  $(document).on('af_complete', function(event, response) {
      var form = response.form;
       //console.log('send form = '+form.attr('id'));
       topGoal('click_button_send');    
  
      if (form.attr('id') == 'modalRequisit-form') {
        $('#popupRequisit').modal('hide');
      }
      if (form.attr('id') == 'modalSimpleOrder-form') {
        $('#popupSimpleOrder').modal('hide');
      }    
      if (form.attr('id') == 'writeus-form') {
         // $('#modalWriteus').modal('hide');
      }    
      
      if(response.success && response.message != '') {
        $('#modalPostmess .postmessage').html(response.message);
        $('#modalPostmess').modal('show');
      }
  }); 
  
  $('[data-target="#popupSimpleOrder"]').on('click', function(){
     var thSubj = $(this).data('subject');
     var thForm = $(this).data('target');
     $(thForm).find('input[name="subj"]').val(thSubj);
     topGoal('click_button_sign_up');
     //console.log(thSubj);
  });
  
  $('.go-top').on('click', function(e){
    $('body, html').scrollTo('0px', 500 );
    e.preventDefault();
		return false;     
  });
  
  $('input.tel, input.phone').mask('+9 (999) 999-99-99');

}); // -------- document.ready ----------

 


function sizeAndLoad() {
    currentScroll = $(window).scrollTop();
    if(currentScroll > 400 ) {
      $('.go-top').fadeIn();
    } else {
      $('.go-top').fadeOut();
    }
      
  var ftHeight = $('.footer').height();
  $('.footer').css('margin-top', '-'+ftHeight+'px');
  $('.prefooter').css('padding-bottom', ftHeight+'px');
  
}

//----------------------------------------------------------------------------------------
// masked input 
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{if(typeof exports==="object"){a(require("jquery"))}else{a(jQuery)}}}(function(e){var d=navigator.userAgent,c=/iphone/i.test(d),a=/chrome/i.test(d),b=/android/i.test(d),f;e.mask={definitions:{"9":"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:true,dataName:"rawMaskFn",placeholder:"_"};e.fn.extend({caret:function(i,g){var h;if(this.length===0||this.is(":hidden")||this.get(0)!==document.activeElement){return}if(typeof i=="number"){g=(typeof g==="number")?g:i;return this.each(function(){if(this.setSelectionRange){this.setSelectionRange(i,g)}else{if(this.createTextRange){h=this.createTextRange();h.collapse(true);h.moveEnd("character",g);h.moveStart("character",i);h.select()}}})}else{if(this[0].setSelectionRange){i=this[0].selectionStart;g=this[0].selectionEnd}else{if(document.selection&&document.selection.createRange){h=document.selection.createRange();i=0-h.duplicate().moveStart("character",-100000);g=i+h.text.length}}return{begin:i,end:g}}},unmask:function(){return this.trigger("unmask")},mask:function(q,j){var n,k,h,i,p,g,l,o;if(!q&&this.length>0){n=e(this[0]);var m=n.data(e.mask.dataName);return m?m():undefined}j=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},j);k=e.mask.definitions;h=[];i=l=q.length;p=null;q=String(q);e.each(q.split(""),function(r,s){if(s=="?"){l--;i=r}else{if(k[s]){h.push(new RegExp(k[s]));if(p===null){p=h.length-1}if(r<i){g=h.length-1}}else{h.push(null)}}});return this.trigger("unmask").each(function(){var F=e(this),w=e.map(q.split(""),function(J,I){if(J!="?"){return k[J]?E(I):J}}),B=w.join(""),H=F.val();function s(){if(!j.completed){return}for(var I=p;I<=g;I++){if(h[I]&&w[I]===E(I)){return}}j.completed.call(F)}function E(I){if(I<j.placeholder.length){return j.placeholder.charAt(I)}return j.placeholder.charAt(0)}function D(I){while(++I<l&&!h[I]){}return I}function y(I){while(--I>=0&&!h[I]){}return I}function v(L,I){var K,J;if(L<0){return}for(K=L,J=D(I);K<l;K++){if(h[K]){if(J<l&&h[K].test(w[J])){w[K]=w[J];w[J]=E(J)}else{break}J=D(J)}}C();F.caret(Math.max(p,L))}function r(M){var K,L,I,J;for(K=M,L=E(M);K<l;K++){if(h[K]){I=D(K);J=w[K];w[K]=L;if(I<l&&h[I].test(J)){L=J}else{break}}}}function A(L){var J=F.val();var M=F.caret();if(o&&o.length&&o.length>J.length){u(true);while(M.begin>0&&!h[M.begin-1]){M.begin--}if(M.begin===0){while(M.begin<p&&!h[M.begin]){M.begin++}}F.caret(M.begin,M.begin)}else{var I=u(true);var K=J.charAt(M.begin);if(M.begin<l){if(!h[M.begin]){M.begin++;if(h[M.begin].test(K)){M.begin++}}else{if(h[M.begin].test(K)){M.begin++}}}F.caret(M.begin,M.begin)}s()}function x(I){u();if(F.val()!=H){F.change()}}function z(L){if(F.prop("readonly")){return}var J=L.which||L.keyCode,M,K,I;o=F.val();if(J===8||J===46||(c&&J===127)){M=F.caret();K=M.begin;I=M.end;if(I-K===0){K=J!==46?y(K):(I=D(K-1));I=J===46?D(I):I}t(K,I);v(K,I-1);L.preventDefault()}else{if(J===13){x.call(this,L)}else{if(J===27){F.val(H);F.caret(0,u());L.preventDefault()}}}}function G(M){if(F.prop("readonly")){return}var I=M.which||M.keyCode,O=F.caret(),L,N,K;if(M.ctrlKey||M.altKey||M.metaKey||I<32){return}else{if(I&&I!==13){if(O.end-O.begin!==0){t(O.begin,O.end);v(O.begin,O.end-1)}L=D(O.begin-1);if(L<l){N=String.fromCharCode(I);if(h[L].test(N)){r(L);w[L]=N;C();K=D(L);if(b){var J=function(){e.proxy(e.fn.caret,F,K)()};setTimeout(J,0)}else{F.caret(K)}if(O.begin<=g){s()}}}M.preventDefault()}}}function t(K,I){var J;for(J=K;J<I&&J<l;J++){if(h[J]){w[J]=E(J)}}}function C(){F.val(w.join(""))}function u(J){var N=F.val(),M=-1,I,L,K;for(I=0,K=0;I<l;I++){if(h[I]){w[I]=E(I);while(K++<N.length){L=N.charAt(K-1);if(h[I].test(L)){w[I]=L;M=I;break}}if(K>N.length){t(I+1,l);break}}else{if(w[I]===N.charAt(K)){K++}if(I<i){M=I}}}if(J){C()}else{if(M+1<i){if(j.autoclear||w.join("")===B){if(F.val()){F.val("")}t(0,l)}else{C()}}else{C();F.val(F.val().substring(0,M+1))}}return(i?I:p)}F.data(e.mask.dataName,function(){return e.map(w,function(J,I){return h[I]&&J!=E(I)?J:null}).join("")});F.one("unmask",function(){F.off(".mask").removeData(e.mask.dataName)}).on("focus.mask",function(){if(F.prop("readonly")){return}clearTimeout(f);var I;H=F.val();I=u();f=setTimeout(function(){if(F.get(0)!==document.activeElement){return}C();if(I==q.replace("?","").length){F.caret(0,I)}else{F.caret(I)}},10)}).on("blur.mask",x).on("keydown.mask",z).on("keypress.mask",G).on("input.mask paste.mask",function(){if(F.prop("readonly")){return}setTimeout(function(){var I=u(true);F.caret(I);s()},0)});if(a&&b){F.off("input.mask").on("input.mask",A)}u()})}})}));

//----------------------------------------------------------------------------------------
//  ScrollTo
// ;(function(k){'use strict';k(['jquery'],function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:!0};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=win?$(targ):$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||typeof a=='object'?a:{top:a,left:a}}return j})}(typeof define==='function'&&define.amd?define:function(a,b){if(typeof module!=='undefined'&&module.exports){module.exports=b(require('jquery'))}else{b(jQuery)}}));
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});


//----------------------------------------------------------------------------------------
function in_array(what, where) {
    for(var i=0; i<where.length; i++)
        if(what == where[i])
            return true;
    return false;
}    
    
//----------------------------------------------------------------------------------------
/**
* jquery.matchHeight.js master
* http://brm.io/jquery-match-height/
* License: MIT
*  $(function() {
*  	$('.item').matchHeight(options);
*  });
*/
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{if(typeof module!=="undefined"&&module.exports){module.exports=a(require("jquery"))}else{a(jQuery)}}})(function(h){var b=-1,g=-1;var e=function(i){return parseFloat(i)||0};var f=function(m){var i=1,k=h(m),j=null,l=[];k.each(function(){var n=h(this),p=n.offset().top-e(n.css("margin-top")),o=l.length>0?l[l.length-1]:null;if(o===null){l.push(n)}else{if(Math.floor(Math.abs(j-p))<=i){l[l.length-1]=o.add(n)}else{l.push(n)}}j=p});return l};var d=function(i){var j={byRow:true,property:"height",target:null,remove:false};if(typeof i==="object"){return h.extend(j,i)}if(typeof i==="boolean"){j.byRow=i}else{if(i==="remove"){j.remove=true}}return j};var a=h.fn.matchHeight=function(i){var k=d(i);if(k.remove){var j=this;this.css(k.property,"");h.each(a._groups,function(l,m){m.elements=m.elements.not(j)});return this}if(this.length<=1&&!k.target){return this}a._groups.push({elements:this,options:k});a._apply(this,k);return this};a.version="master";a._groups=[];a._throttle=80;a._maintainScroll=false;a._beforeUpdate=null;a._afterUpdate=null;a._rows=f;a._parse=e;a._parseOptions=d;a._apply=function(o,k){var m=d(k),l=h(o),n=[l];var p=h(window).scrollTop(),j=h("html").outerHeight(true);var i=l.parents().filter(":hidden");i.each(function(){var q=h(this);q.data("style-cache",q.attr("style"))});i.css("display","block");if(m.byRow&&!m.target){l.each(function(){var q=h(this),r=q.css("display");if(r!=="inline-block"&&r!=="flex"&&r!=="inline-flex"){r="block"}q.data("style-cache",q.attr("style"));q.css({display:r,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})});n=f(l);l.each(function(){var q=h(this);q.attr("style",q.data("style-cache")||"")})}h.each(n,function(s,t){var r=h(t),q=0;if(!m.target){if(m.byRow&&r.length<=1){r.css(m.property,"");return}r.each(function(){var u=h(this),w=u.css("display");if(w!=="inline-block"&&w!=="flex"&&w!=="inline-flex"){w="block"}var v={display:w};v[m.property]="";u.css(v);if(u.outerHeight(false)>q){q=u.outerHeight(false)}u.css("display","")})}else{q=m.target.outerHeight(false)}r.each(function(){var v=h(this),u=0;if(m.target&&v.is(m.target)){return}if(v.css("box-sizing")!=="border-box"){u+=e(v.css("border-top-width"))+e(v.css("border-bottom-width"));u+=e(v.css("padding-top"))+e(v.css("padding-bottom"))}v.css(m.property,(q-u)+"px")})});i.each(function(){var q=h(this);q.attr("style",q.data("style-cache")||null)});if(a._maintainScroll){h(window).scrollTop((p/j)*h("html").outerHeight(true))}return this};a._applyDataApi=function(){var i={};h("[data-match-height], [data-mh]").each(function(){var k=h(this),j=k.attr("data-mh")||k.attr("data-match-height");if(j in i){i[j]=i[j].add(k)}else{i[j]=k}});h.each(i,function(){this.matchHeight(true)})};var c=function(i){if(a._beforeUpdate){a._beforeUpdate(i,a._groups)}h.each(a._groups,function(){a._apply(this.elements,this.options)});if(a._afterUpdate){a._afterUpdate(i,a._groups)}};a._update=function(k,j){if(j&&j.type==="resize"){var i=h(window).width();if(i===b){return}b=i}if(!k){c(j)}else{if(g===-1){g=setTimeout(function(){c(j);g=-1},a._throttle)}}};h(a._applyDataApi);h(window).bind("load",function(i){a._update(false,i)});h(window).bind("resize orientationchange",function(i){a._update(true,i)})});
  
  
/* ------------------------------------------------------------------------------------------------------------------- */  
// maskedInput
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{if(typeof exports==="object"){a(require("jquery"))}else{a(jQuery)}}}(function(e){var d=navigator.userAgent,c=/iphone/i.test(d),a=/chrome/i.test(d),b=/android/i.test(d),f;e.mask={definitions:{"9":"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:true,dataName:"rawMaskFn",placeholder:"_"};e.fn.extend({caret:function(i,g){var h;if(this.length===0||this.is(":hidden")||this.get(0)!==document.activeElement){return}if(typeof i=="number"){g=(typeof g==="number")?g:i;return this.each(function(){if(this.setSelectionRange){this.setSelectionRange(i,g)}else{if(this.createTextRange){h=this.createTextRange();h.collapse(true);h.moveEnd("character",g);h.moveStart("character",i);h.select()}}})}else{if(this[0].setSelectionRange){i=this[0].selectionStart;g=this[0].selectionEnd}else{if(document.selection&&document.selection.createRange){h=document.selection.createRange();i=0-h.duplicate().moveStart("character",-100000);g=i+h.text.length}}return{begin:i,end:g}}},unmask:function(){return this.trigger("unmask")},mask:function(q,j){var n,k,h,i,p,g,l,o;if(!q&&this.length>0){n=e(this[0]);var m=n.data(e.mask.dataName);return m?m():undefined}j=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},j);k=e.mask.definitions;h=[];i=l=q.length;p=null;q=String(q);e.each(q.split(""),function(r,s){if(s=="?"){l--;i=r}else{if(k[s]){h.push(new RegExp(k[s]));if(p===null){p=h.length-1}if(r<i){g=h.length-1}}else{h.push(null)}}});return this.trigger("unmask").each(function(){var F=e(this),w=e.map(q.split(""),function(J,I){if(J!="?"){return k[J]?E(I):J}}),B=w.join(""),H=F.val();function s(){if(!j.completed){return}for(var I=p;I<=g;I++){if(h[I]&&w[I]===E(I)){return}}j.completed.call(F)}function E(I){if(I<j.placeholder.length){return j.placeholder.charAt(I)}return j.placeholder.charAt(0)}function D(I){while(++I<l&&!h[I]){}return I}function y(I){while(--I>=0&&!h[I]){}return I}function v(L,I){var K,J;if(L<0){return}for(K=L,J=D(I);K<l;K++){if(h[K]){if(J<l&&h[K].test(w[J])){w[K]=w[J];w[J]=E(J)}else{break}J=D(J)}}C();F.caret(Math.max(p,L))}function r(M){var K,L,I,J;for(K=M,L=E(M);K<l;K++){if(h[K]){I=D(K);J=w[K];w[K]=L;if(I<l&&h[I].test(J)){L=J}else{break}}}}function A(L){var J=F.val();var M=F.caret();if(o&&o.length&&o.length>J.length){u(true);while(M.begin>0&&!h[M.begin-1]){M.begin--}if(M.begin===0){while(M.begin<p&&!h[M.begin]){M.begin++}}F.caret(M.begin,M.begin)}else{var I=u(true);var K=J.charAt(M.begin);if(M.begin<l){if(!h[M.begin]){M.begin++;if(h[M.begin].test(K)){M.begin++}}else{if(h[M.begin].test(K)){M.begin++}}}F.caret(M.begin,M.begin)}s()}function x(I){u();if(F.val()!=H){F.change()}}function z(L){if(F.prop("readonly")){return}var J=L.which||L.keyCode,M,K,I;o=F.val();if(J===8||J===46||(c&&J===127)){M=F.caret();K=M.begin;I=M.end;if(I-K===0){K=J!==46?y(K):(I=D(K-1));I=J===46?D(I):I}t(K,I);v(K,I-1);L.preventDefault()}else{if(J===13){x.call(this,L)}else{if(J===27){F.val(H);F.caret(0,u());L.preventDefault()}}}}function G(M){if(F.prop("readonly")){return}var I=M.which||M.keyCode,O=F.caret(),L,N,K;if(M.ctrlKey||M.altKey||M.metaKey||I<32){return}else{if(I&&I!==13){if(O.end-O.begin!==0){t(O.begin,O.end);v(O.begin,O.end-1)}L=D(O.begin-1);if(L<l){N=String.fromCharCode(I);if(h[L].test(N)){r(L);w[L]=N;C();K=D(L);if(b){var J=function(){e.proxy(e.fn.caret,F,K)()};setTimeout(J,0)}else{F.caret(K)}if(O.begin<=g){s()}}}M.preventDefault()}}}function t(K,I){var J;for(J=K;J<I&&J<l;J++){if(h[J]){w[J]=E(J)}}}function C(){F.val(w.join(""))}function u(J){var N=F.val(),M=-1,I,L,K;for(I=0,K=0;I<l;I++){if(h[I]){w[I]=E(I);while(K++<N.length){L=N.charAt(K-1);if(h[I].test(L)){w[I]=L;M=I;break}}if(K>N.length){t(I+1,l);break}}else{if(w[I]===N.charAt(K)){K++}if(I<i){M=I}}}if(J){C()}else{if(M+1<i){if(j.autoclear||w.join("")===B){if(F.val()){F.val("")}t(0,l)}else{C()}}else{C();F.val(F.val().substring(0,M+1))}}return(i?I:p)}F.data(e.mask.dataName,function(){return e.map(w,function(J,I){return h[I]&&J!=E(I)?J:null}).join("")});F.one("unmask",function(){F.off(".mask").removeData(e.mask.dataName)}).on("focus.mask",function(){if(F.prop("readonly")){return}clearTimeout(f);var I;H=F.val();I=u();f=setTimeout(function(){if(F.get(0)!==document.activeElement){return}C();if(I==q.replace("?","").length){F.caret(0,I)}else{F.caret(I)}},10)}).on("blur.mask",x).on("keydown.mask",z).on("keypress.mask",G).on("input.mask paste.mask",function(){if(F.prop("readonly")){return}setTimeout(function(){var I=u(true);F.caret(I);s()},0)});if(a&&b){F.off("input.mask").on("input.mask",A)}u()})}})}));

  
  
//----------------------------------------------------------------------------------------
	function topGoal(cod) {  
		try {
			//yaCounter52949875.reachGoal(cod);
       ym(52949875, 'reachGoal', cod);
       //console.log('reachGoal ' + cod);
			return true;
		} catch(e) {
			console.log(e);
		}
			return true;
	}

//----------------------------------------------------------------------------------------
function number_format( number, decimals, dec_point, thousands_sep ) {  // Format a number with grouped thousands
    //
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     bugfix by: Michael White (http://crestidg.com)

    var i, j, kw, kd, km;

    // input sanitation & defaults
    if( isNaN(decimals = Math.abs(decimals)) ){
        decimals = 0;
    }
    if( dec_point == undefined ){
        dec_point = ",";
    }
    if( thousands_sep == undefined ){
        thousands_sep = ".";
    }

    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

    if( (j = i.length) > 3 ){
        j = j % 3;
    } else{
        j = 0;
    }

    km = (j ? i.substr(0, j) + thousands_sep : "");
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
    //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


    return km + kw + kd;
}
//----------------------------------------------------------------------------------------
// helper
function objToString(o) {
    var s = '{\n';
    for (var p in o)
        s += '    "' + p + '": "' + o[p] + '"\n';
    return s + '}';
}
//----------------------------------------------------------------------------------------
// helper
function elementToString(n, useRefs) {
    var attr = "", nest = "", a = n.attributes;
    for (var i=0; a && i < a.length; i++)
        attr += ' ' + a[i].nodeName + '="' + a[i].nodeValue + '"';

    if (n.hasChildNodes == false)
        return "<" + n.nodeName + "\/>";

    for (var i=0; i < n.childNodes.length; i++) {
        var c = n.childNodes.item(i);
        if (c.nodeType == 1)       nest += elementToString(c);
        else if (c.nodeType == 2)  attr += " " + c.nodeName + "=\"" + c.nodeValue + "\" ";
        else if (c.nodeType == 3)  nest += c.nodeValue;
    }
    var s = "<" + n.nodeName + attr + ">" + nest + "<\/" + n.nodeName + ">";
    return useRefs ? s.replace(/</g,'&lt;').replace(/>/g,'&gt;') : s;
};


//----------------------------------------------------------------------------------------
function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires; // || 0; // 2592000; // options.expires;
	options.domain = '.sitename.com';
	options.path = '/';

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires*1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
  	options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for(var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
     }
  }

  document.cookie = updatedCookie;
}

//----------------------------------------------------------------------------------------
function deleteCookie(name) {
  setCookie(name, "", { expires: -1 })
}


//----------------------------------------------------------------------------------------
