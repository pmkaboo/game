
var money = 0;

var ore_names = $.map(ores, function(element, key) {return key});

var tracked_values = ["amount", "miners", "max_miners"];

var manual_random_pool_size = 100;
var auto_random_pool_size = 1000;

var auto_save_delay = 30000; // ms
var save_message_delay = 4500; // ms
