class HomeController < ApplicationController

	def index
		if cookies.signed[:game_data]
			@game_data = JSON.parse cookies.signed[:game_data]
			@money = @game_data.delete "money"
		else
			@game_data = {gold: {}, ruby: {}}
			@money = 0
		end
	end	

	def save
		cookies.signed.permanent[:game_data] = params[:game_data].symbolize_keys.to_json
		render text: "Game Saved"
	end

	def delete_cookies
		cookies.delete :game_data
		redirect_to :root
	end

end