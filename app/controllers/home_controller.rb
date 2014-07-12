class HomeController < ApplicationController

	def index
		#TODO optimize for infinite amount of ores
		@gold = cookies.signed[:gold].to_i
		@gold_miners = cookies.signed[:gold_miners].to_i
		@rubies = cookies.signed[:rubies].to_i
		@ruby_miners = cookies.signed[:ruby_miners].to_i
		@money = cookies.signed[:money].to_i
	end	

	def save
		params[:game_data].each_pair do |k, v|
			cookies.signed.permanent[k.to_sym] = v
		end	
		render text: "Game Saved"
	end

	def delete_cookies
		#TODO optimize for infinite amount of ores
		cookies.delete :gold
		cookies.delete :gold_miners
		cookies.delete :rubies
		cookies.delete :ruby_miners
		cookies.delete :money
		redirect_to :root
	end

end