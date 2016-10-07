
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
		// couleur par défaut
		
		this.select_color(this.colors[0]);
		console.log('palette : colors ready');
	}
};
