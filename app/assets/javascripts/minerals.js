/*
	mineral template: {
		visible: false, 		// upgradable
		amount: 0,
		miners: 0,
		max_miners: 10,			// upgradable
		miner_cost: 250,
		value: 5, 				// modified by market
		chance: 90, 			// % per click (/10 for miners), upgradable
		automine_delay: 1000, 	// ms
		per_click: 1, 			// upgradable
		per_auto_click: 1, 		// upgradable
	}

	minerals list:
	iron
	copper
	silver
	gold
	diamond
	platinum
	obsidian
	emerald
	sapphire
	ruby
*/

var ores = {

	iron: {
		visible: true,
		amount: 0,
		miners: 0,
		max_miners: 10,
		miner_cost: 250,
		value: 5,
		chance: 90, // %
		automine_delay: 1000, // ms
		per_click: 1,
		per_auto_click: 1,
	},

	copper: {
		visible: true,
		amount: 0,
		miners: 0,
		max_miners: 0,
		miner_cost: 1000,
		value: 10,
		chance: 85, // %
		automine_delay: 1100, // ms
		per_click: 1,
		per_auto_click: 1,
	},

	silver: {
		visible: false,  
		amount: 0,
		miners: 0,
		max_miners: 0,
		miner_cost: 3000,
		value: 20,
		chance: 80, // %
		automine_delay: 1200, // ms
		per_click: 1,
		per_auto_click: 1,
	},

	gold: {
		visible: false,
		amount: 0,
		miners: 0,
		max_miners: 0,
		miner_cost: 10000,
		value: 50,
		chance: 70, // %
		automine_delay: 1300, // ms
		per_click: 1,
		per_auto_click: 1,
	},

	diamond: {
		visible: false,
		amount: 0,
		miners: 0,
		max_miners: 0,
		miner_cost: 25000,
		value: 100,
		chance: 60, // %
		automine_delay: 1400, // ms
		per_click: 1,
		per_auto_click: 1,
	},

	platinum: {
		visible: false,
		amount: 0,
		miners: 0,
		max_miners: 0,
		miner_cost: 60000,
		value: 200,
		chance: 55, // %
		automine_delay: 1500, // ms
		per_click: 1,
		per_auto_click: 1,
	},

	obsidian: {
		visible: false,
		amount: 0,
		miners: 0,
		max_miners: 0,
		miner_cost: 87500,
		value: 250,
		chance: 50, // %
		automine_delay: 1600, // ms
		per_click: 1,
		per_auto_click: 1,
	},

	emerald: {
		visible: false,
		amount: 0,
		miners: 0,
		max_miners: 0,
		miner_cost: 200000,
		value: 500,
		chance: 40, // %
		automine_delay: 1700, // ms
		per_click: 1,
		per_auto_click: 1,
	},
	sapphire: {
		visible: false,
		amount: 0,
		miners: 0,
		max_miners: 0,
		miner_cost: 450000,
		value: 1000,
		chance: 30, // %
		automine_delay: 1800, // ms
		per_click: 1,
		per_auto_click: 1,
	},

	ruby: {
		visible: false,
		amount: 0,
		miners: 0,
		max_miners: 0,
		miner_cost: 2500000,
		value: 5000,
		chance: 20, // %
		automine_delay: 2000, // ms
		per_click: 1,
		per_auto_click: 1,
	}
};