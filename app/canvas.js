
pixel_studio.canvas = {

	screen:{
		width: 0,
		height: 0
	},

	pixel_dimension: 0,

	nb_pixel:{
		width: 0,
		height: 0

	},
	

	/**
	 * Préparation de la zone de dessin
	 * @param {string} div_id Nom de la div dans laquelle sera placé le canvas
	 * @param  {number} width          Largeur exact du canvas en pixel écran
	 * @param  {number} height         Hauteur maximum du canvas en pixel écran
	 * @param  {number} nb_pixel_width Nombre de pixel en largeur
	 */
	init: function(div_id, width, height, nb_pixel_width){

		//Calcul du pixel_dimension
		
		this.pixel_dimension = parseInt(width / nb_pixel_width);
		this.nb_pixel.height = parseInt(height / this.pixel_dimension);

		this.screen.width 	= this.pixel_dimension * nb_pixel_width;
		this.screen.height  = this.pixel_dimension * this.nb_pixel.height;
		this.nb_pixel_width = nb_pixel_width;


		// Creation du canvas
	
		var $c = $('<canvas></canvas>');
		$c.attr({
			'width': this.screen.width,
			'height':this.screen.height
		});

		this.$canvas = $c;
		this.$canvas.appendTo('#'+div_id);
 		
 		this.context = $c[0].getContext("2d");

		console.log('canvas is ready');

		$('#zone_dessin').on('click', 'canvas', function(e){
			let p_d = pixel_studio.canvas.pixel_dimension,
				coordx = parseInt(e.offsetX / p_d),
				coordy = parseInt(e.offsetY / p_d);

				truex = coordx + 1,
				truey = coordy + 1;

				console.log(coordx);
				console.log(coordy);

			let c = (pixel_studio.palette_tool.tool_selected.name == "pencil") ? pixel_studio.palette_color.color_selected : pixel_studio.palette_color.bg_color;
			pixel_studio.canvas.draw(truex, truey, c);
		});
	},

	

	
	/**
	 * Dessine un pixel sur la zone de dessin
	 * @param  {number} x     coordonnées horizontale du pixel
	 * @param  {number} y     coordonnées verticale du pixel
	 * @param  {Color} color  couleur du pixel : instance de Color
	 */
	draw: function(x,y,color){
		let px = (x-1) * this.pixel_dimension,
			py = (y-1) * this.pixel_dimension;

		this.context.fillStyle = color.to_string();
		this.context.fillRect(px, py, this.pixel_dimension, this.pixel_dimension);
	}

};