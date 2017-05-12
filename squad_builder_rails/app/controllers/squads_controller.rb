class SquadsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: Squad.where(user: current_user[:id]).as_json({
      only: [:id, :name, :faction],
      include: {
        piloted_ships: {
          only: [:id],
          include: {
            pilot: {
              only: [:id, :name, :cost, :pilot_skill, :ability]
              },
            ship: {
              only: [:id, :name, :cost, :faction, :stats, :upgrade_slots]
            }
          }
        }
      }
      })
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
