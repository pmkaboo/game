module ApplicationHelper

	def count_value amount, multiplier
		amount ||= 0
		multipliers = {
			gold: 5,
			ruby: 50
		} 
		amount.to_i * multipliers[multiplier]
	end

end
