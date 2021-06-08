$(document).ready(function(){
	$('#app1').click(function(){
		// je vais chercher le p qui est dans la div
		let p = $(this).find('p');

		// Si le p est en display none
		if($('#parap1').css('display') == 'none'){
			// On l'affiche
			p.slideDown();
		}
		// Sinon
		else{
			// On le cache
			p.slideUp();
		}

	});

    $('#app2').click(function(){
		// je vais chercher le p qui est dans la div
		let p = $(this).find('p');

		// Si le p est en display none
		if($('#parap2').css('display') == 'none'){
			// On l'affiche
			p.slideDown();
		}
		// Sinon
		else{
			// On le cache
			p.slideUp();
		}

	});

    $('#app3').click(function(){
		// je vais chercher le p qui est dans la div
		let p = $(this).find('p');

		// Si le p est en display none
		if($('#parap3').css('display') == 'none'){
			// On l'affiche
			p.slideDown();
		}
		// Sinon
		else{
			// On le cache
			p.slideUp();
		}

	});
    $('#app4').click(function(){
		// je vais chercher le p qui est dans la div
		let p = $(this).find('p');

		// Si le p est en display none
		if($('#parap4').css('display') == 'none'){
			// On l'affiche
			p.slideDown();
		}
		// Sinon
		else{
			// On le cache
			p.slideUp();
		}

	});


	$('#prehistoire').click(function(){
		$('#epoques_prehistory').css({'display': 'flex'});
		$('#epoques_revolution').css({'display': 'none'});
		$('epoques_electronic').css({'display': 'none'});
		$('epoques_futur').css({'display': 'none'});
	});

	$('#moyenage').click(function(){
		$('#epoques_prehistory').css({'display': 'none'});
		$('#epoques_revolution').css({'display': 'flex'});
		$('#epoques_electronic').css({'display': 'none'});
		$('#epoques_futur').css({'display': 'none'});
	});

	$('#Electronique').click(function(){
		$('#epoques_prehistory').css({'display': 'none'});
		$('#epoques_revolution').css({'display': 'none'});
		$('#epoques_electronic').css({'display': 'flex'});
		$('#epoques_futur').css({'display': 'none'});
	});

	$('#futur').click(function(){
		$('#epoques_prehistory').css({'display': 'none'});
		$('#epoques_revolution').css({'display': 'none'});
		$('#epoques_electronic').css({'display': 'none'});
		$('#epoques_futur').css({'display': 'flex'});
	});

	$('.container').click(function(){
		$("#lock").attr('src','./images/lock4.svg');
		setTimeout(function(){
			$('.background-img').addClass('cache');
			setTimeout(function(){
				$('#parefeu').css({'display': 'flex'});
				$('#refresh').css({'display': 'flex'});
				$('#password').css({'display': 'flex'});
				$('#save').css({'display': 'flex'});
				$('#publicity').css({'display': 'flex'});
				$('#malware').css({'display': 'flex'});
			},1000)
		}, 3000)
	})


	$('#app1').click(function() {
		$('#app1').css({'background' : 'none'});
		
	})

	$('#app2').click(function() {
		$('#app2').css({'background' : 'none'});
		
	})

	$('#app3').click(function() {
		$('#app3').css({'background' : 'none'});
		
	})

	$('#app4').click(function() {
		$('#app4').css({'background' : 'none'});	
	})

	$('.addition1').click(function() {
		$('#app1').css({'background' : 'url(../images/application1.jpg);'});
	})


	

	


});