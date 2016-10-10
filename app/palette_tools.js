pixel_studio.palette_tool = {

	tools: [],
	tool_selected:null,

	select_tool: function( tools ){
		this.tool_selected = tools;
	},

	init: function( tools ){
		this.tools = tools;

		let $tools = $('#tools'),
			$one 	= $tools.children('li').detach();

		for(let j=0; j<tools.length; j++){

			let li 		= $one.clone(),
				tool 	= this.tools[j];

			tool.id 	= j;

			li.css('background-image', "url("+tool.icon_file+")")
			  .attr('title', tool.name);
			$tools.append(li);
		}

		$('#tools').on('click', 'li', function(e){
			let cut = pixel_studio.palette_tool;
			cut.select_tool(cut.tools[$(this).index()]);
			console.log(cut.tool_selected);
			$(".selected_tool").toggleClass('selected_tool');
			$(this).toggleClass('selected_tool');
		})

		// Outil par défaut
		
		this.select_tool(this.tools[0]);
		$("#tools li").eq(0).toggleClass('selected_tool');

		console.log('palette : tools ready');
	}
};