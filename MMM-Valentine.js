/* Magic Mirror
 * Module: MMM-Saint-Patrick
 *
 * By Sergey Morozov and forked by schlachtkreuzer6
 * Based on https://github.com/MichMich/MMM-Snow
 * MIT Licensed.
 */

Module.register("MMM-Saint-Patrick",{

	defaults: {
		patricksCount: 50,
		patricksSize: 1.00
	},

	getStyles: function() {
		return [ "MMM-Saint-Patrick.css" ]
	},

	getDom: function() {
		var wrapper = document.createElement("div")
		wrapper.className = "patrick-wrapper"

		var patrick, jiggle, size, rotation;

		for(var i = 0; i < this.config.patricksCount; i++) {
			patrick = document.createElement("div")
			patrick.className = "saint-patrick"

			jiggle = document.createElement("div");
			jiggle.style.animationDelay = (Math.random() * 4) + "s";
			jiggle.style.animationDuration = ((Math.random() * 30) + 30) + "s";
			jiggle.className = "patrick" + (Math.round(Math.random() * 14) + 1);

			size = (Math.random() * 0.75) + 0.25 + this.config.patricksSize;
			rotation = (Math.floor(Math.random() * 81) - 40);
			jiggle.style.transform = "scale(" + size + ", " + size + ") rotate(" + rotation + "deg)";
			jiggle.style.opacity = size - this.config.patricksSize;

			patrick.appendChild(jiggle);
			patrick.style.left = ((Math.random() * 100) - 10) + "%";
			patrick.style.animationDelay = (Math.random() * 100) + "s";
			patrick.style.animationDuration = 100 - (Math.random() * 50 * (size - this.config.patricksSize)) + "s";

			wrapper.appendChild(patrick);
		}
		Log.log(wrapper);
		return wrapper;
	}

});
