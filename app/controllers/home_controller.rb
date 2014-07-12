class HomeController < ApplicationController

	def index
		puts "!!!!!!"
		puts (cookies.signed[:gold] || 0).class
		@gold = cookies.signed[:gold] || 0
		@gold_miners = cookies.signed[:gold_miners] || 0
		@rubies = cookies.signed[:rubies] || 0
		@ruby_miners = cookies.signed[:ruby_miners] || 0
		@money = cookies.signed[:money] || 0
	end	

	def save
		[:gold, :gold_miners, :rubies, :ruby_miners, :money].each do |param|
			cookies.signed.permanent[param] = params[param.to_s] || 0
		end	
		# cookies.signed.permanent[:gold] = params["gold"]
		# # cookies.signed.permanent[:gold_miners] = params["gold_miners"]
		# cookies.signed.permanent[:rubies] = params["rubies"]
		# # cookies.signed.permanent[:ruby_miners] = params["ruby_miners"]
		# cookies.signed.permanent[:money] = params["money"]
		render text: cookies.signed[:gold]
	end

	def delete_cookies
		cookies.delete :gold
		cookies.delete :gold_miners
		cookies.delete :rubies
		cookies.delete :ruby_miners
		cookies.delete :money
		render nothing: true
	end

end