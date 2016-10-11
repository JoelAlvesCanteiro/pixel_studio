pixel_studio.palette_color = {

	colors: [],
	color_selected: null,

	select_color: function( color ){
		this.color_selected = color;

		this.bg_color = new Color('white', [255,255,255]);
	},

	init: function( color_list ){

		this.colors = color_list;

		// Création de la représentation de la palette
		
		let $colors = $('#colors'),
			$one = $colors.children('li').detach();

		for(let j=0; j<color_list.length; j++){

			let li 		= $one.clone(),
				color 	= this.colors[j];

			li.css('background-color', color.to_string())
			  .attr('title', color.name);
			$colors.append(li);
		}

		$('#colors').on('click', 'li', function(e){
			let cut = pixel_studio.palette_color;
			cut.select_color(cut.colors[$(this).index()]);
			console.log(cut.color_selected);
			$(".selected_color").toggleClass('selected_color');
			$(this).toggleClass('selected_color');
		})


		// Couleur par défaut
		
		this.select_color(this.colors[0]);
		$("#colors li").eq(0).toggleClass('selected_color');

		console.log('palette : colors ready');
	}
};