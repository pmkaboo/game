class Item < ActiveRecord::Base
	belongs_to :parent, class_name: Item, foreign_key: :parent_id
	has_many :children, class_name: Item, foreign_key: :parent_id

	def self_and_parents
		if parent_id
			[self, self.parent.self_and_parents].flatten
		else
			self
		end
	end

	def self.filtered_list text
		Item.where("name like '%#{text}%'").map do |i|
			i.self_and_parents
		end.flatten
	end
end