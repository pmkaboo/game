require "rails_helper" 

describe HomeController do

  describe "GET index" do
    it "returns http success" do
      get :index
      expect(response).to render_template("index")      
    end   

    it "evaluates variables" do
      get :index
      expect(assigns[:game_data]).to be_a Hash
      expect(assigns[:money]).to be_a Integer	
    end 	
  end

  context "POSTS delete_cookies" do
  	it "redirects after deleting cookies" do
  	  post :delete_cookies
  	  expect(response).to redirect_to("/")	
  	end	
  end	

end