var pixel_studio = {

	init: function(){

		// couleur de la palette
		
		let colors = [
			new Color('green', [56,187,136]),
			new Color('purple', [135,35,111]),
			new Color('sand', [220,194,140]),
			new Color('lilas', [151,156,197]),
			new Color('cadetblue', [95,158,160]),
			new Color('firebrick', [178,34,34]),
			new Color('palegoldenrod', [238,232,170]),
		];

		this.palette_color.init( colors );

		// outil de la palette 
		// 
		let tools = [
			new Pencil(),
			new Eraser()
		];
		
		this.palette_tool.init( tools );

		//canvas
		this.canvas.init("zone_dessin", window.innerWidth - 125, window.innerHeight - 5,100);

		console.log('Pixel studio is initiated and ready');
	}
};

