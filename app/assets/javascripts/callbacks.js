function init_tracked_values(ore) {
	$.each(tracked_values, function( i, value) {
		ores[ore][value] = parseInt($("#stats ." + ore + " ." + value).text());	
	})
	update_ore(ore)
}

function init_hiring(ore) {
	$(document).on("click", "." + ore + " .hire", function(e) {
		e.preventDefault();
		if(money > ores[ore]["miner_cost"] && ores[ore]["miners"] < ores[ore]["max_miners"]) {
			ores[ore]["miners"] += 1;
			money -= ores[ore]["miner_cost"];
			update_miners(ore);
		}
	})
}

function init_mining(ore) {
	// manual
	$(document).on("click", ".ore." + ore, function(){
		mine_ore(ore, manual_random_pool_size, ores[ore]["per_click"]);
	});

	// auto 
	setInterval(function() {
		mine_ore(
			ore, 
			auto_random_pool_size - (ores[ore]["miners"] * 10), 
			ores[ore]["per_auto_click"] * ores[ore]["miners"],
			true
		);
	}, ores[ore]["automine_delay"]);
}