module ItemsHelper

	def filtered_subtree(item)
		if @filtered_items
			subtree(item) if @filtered_items.include? item
		else
			subtree(item)	
		end
	end

	def subtree(item)
		ret = "<li>#{item.name}"
		item.children.each do |child|
			ret += "<ul>#{filtered_subtree(child)}</ul>"
		end if item.children
		ret += "</li>"
		ret.html_safe
	end

end