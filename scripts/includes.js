window.lateIncludes = function () {
	//This late loads are need to be activated only after (upon) Bing maps SDK callback is fired
	
	var loadScript = function(scriptUrl) {
		var scriptToInject = document.createElement("script")
		scriptToInject.type = "text/javascript"
		scriptToInject.src = scriptUrl
		scriptToInject.async = false
		scriptToInject.defer = false		
		document.head.appendChild(scriptToInject)	
		return;
	}
	
	loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js")
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js")
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/jQuery.dotdotdot/3.1.0/jquery.dotdotdot.js")
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/rxjs/4.0.5/rx.js")
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/rxjs/4.0.5/rx.binding.js")
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/rxjs-jquery/1.1.6/rx.jquery.js")
    loadScript("scripts/external/d3.js")
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery.nanoscroller/0.8.7/javascripts/jquery.nanoscroller.min.js")
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js")
    
	loadScript("scripts/jquery.plugins.js")
    loadScript("scripts/plugins.js")
    
	loadScript("scripts/settings.js")
    loadScript("scripts/utility.js")
    loadScript("scripts/request.js")
    loadScript("scripts/client-state.js")
    
	loadScript("scripts/main.js")
    loadScript("scripts/geography.js")
    loadScript("scripts/layers.js")
    loadScript("scripts/time.js")
    loadScript("scripts/results.js")
    loadScript("scripts/export.js")
    loadScript("scripts/map.js")
    
	loadScript("scripts/controls/area-selection.js")
    loadScript("scripts/controls/const-line-plot.js")
    loadScript("scripts/controls/area-plot.js")
    loadScript("scripts/controls/provenance-palette.js")
    loadScript("scripts/controls/data-info-control.js")
    loadScript("scripts/controls/time-chart-control.js")
    loadScript("scripts/controls/panels.js")
    loadScript("scripts/controls/tiles.js")
    loadScript("scripts/controls/time-section-controls-panel.js")
    loadScript("scripts/controls/layers-selection-panel.js")
    loadScript("scripts/controls/time-selectors.js")	   
}