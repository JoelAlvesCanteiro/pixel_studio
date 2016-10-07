
pixel_studio.palette = {

	colors: [],
	color_selected: null,

	select_color: function( color ){
		this.color_selected = color;
	},

	init_colors: function( color_list ){

		this.colors = color_list;

		// Création de représentation de la palette
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
			var sel = pixel_studio.palette;
			sel.select_color(sel.colors[$(this).index()]);
			console.log(sel.color_selected);
			$(".sel_color").toggleClass('sel_color');
			$(this).toggleClass('sel_color');
		})

		// couleur par défaut
		
		this.select_color(this.colors[0]);
		
		console.log('palette : colors ready');
	}
};
