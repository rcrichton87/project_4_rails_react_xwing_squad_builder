class SquadsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    squads = current_user.squads
    render :json => squads.to_json()
  end

  def create
    show = Squad.create( squad_params )
    render json: show, status: :created
  end


  private
  def squad_params
    params.require(:squad).permit([:name, :faction, :user_id])
  end

end
