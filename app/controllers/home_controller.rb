class HomeController < ApplicationController

	def index
		if cookies.signed[:game_data]
			@game_data = JSON.parse cookies.signed[:game_data]
			@money = @game_data.delete "money"
		else
			@game_data = {iron: {"max_miners" => 10}, copper: {}, silver: {}, gold: {}, diamond: {}, platinum: {}, obsidian: {}, emerald: {}, sapphire: {}, ruby: {}}
			@money = 0
		end
	end

	def save
		cookies.signed.permanent[:game_data] = params[:game_data].symbolize_keys.to_json
		render text: params[:message] || "Game Saved"
	end

	def delete_cookies
		cookies.delete :game_data
		redirect_to :root
	end

end