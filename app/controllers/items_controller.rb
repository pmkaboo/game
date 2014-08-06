class ItemsController < ApplicationController

	def index
		if params[:search]
			@filtered_items = Item.filtered_list(params[:search])
			puts @filtered_items
		end
		@root_items = Item.where(parent_id: nil)
	end	

end