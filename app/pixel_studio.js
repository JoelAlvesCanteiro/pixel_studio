
var pixel_studio = {

	init: function(){

		// couleurs de la palette
		
		let colors = [
			new Color('english red', [247,35,12]),
			new Color('cyan', [0,0,255]),
			new Color('banana', [209,182,6]),
			new Color('bordeaux', [109,7,26]),
			new Color('lilas', [151,146,197])

		];
		this.palette.init_colors( colors );

		console.log("Pixel studio is initiated and  ready");
	}
};
