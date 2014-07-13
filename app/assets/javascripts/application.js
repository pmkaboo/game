// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require minerals
//= require variables
//= require callbacks
//= require_tree .

// load saved values
$(function() {
	for_visible_ores(init_tracked_values)
	money = parseInt($("#stats .money .value").text());
	save_game(ores["iron"]["amount"] == 0 ? "Cookie Created" : "Game Loaded")
});

// mining
for_visible_ores(init_mining);

// hiring
for_visible_ores(init_hiring);

// manual save
$(document).on("click", ".save_game.btn", function(e) {
	e.preventDefault();
	save_game()
});

// auto save
setInterval(function() {
	save_game()
}, auto_save_delay);

// cheats
$(document).on("click", ".money_cheat.btn", function(e){
	e.preventDefault();
	money += 5000;
	update_money();
});

// more stuff
function mine_ore(ore, random_pool_size, per_click, auto_bonus) {
	if(auto_bonus) {
		ores[ore]["amount"] += ores[ore]["miners"];
	}
	else {
		ores[ore]["amount"] += 1;
	}
	if(Math.floor(Math.random() * random_pool_size) < ores[ore]["chance"]) {
		ores[ore]["amount"] += per_click;
	};
	update_ore(ore);
}

function update_ore(ore) {
	$("#stats ." + ore + " .amount").text(ores[ore]["amount"]);
	$("#stats ." + ore + " .value").text(ores[ore]["amount"] * ores[ore]["value"]);
	var total = 0;
	$("#stats tr:not(.money) .value").each(function() {
		total += parseInt($(this).text())
	})
	$("#stats .money .total_value").text(total);	
}

function update_miners(ore) {
	$("#stats ." + ore + " .miners").text(ores[ore]["miners"]);
	update_money();
}

function update_money() {
	$("#stats .money .value").text(money);
}

function save_game(message) {
	$.ajax({
		type: "POST",
		url: "/home/save",
		data: {
			game_data: $.extend(ores, {money: money}),
			message: message
		},
		success: function(msg) {
			$("#notification").text(msg);
			$("#notification").show();
			setTimeout(function() {
		        $("#notification").fadeOut(500)
		    }, save_message_delay);
		}
	})
}

function for_visible_ores(callback) {
	$.each(ore_names, function( i, ore ) {
		if(!ores[ore]["visible"]) return true;
		callback(ore);
	})
}




