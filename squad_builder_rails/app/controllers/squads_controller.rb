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
            },
            applied_upgrades: {
              only: [:id],
              include: {
                upgrade: {
                  only: [:id, :name, :cost, :text]
                }
              }
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

  def show
    render json: Squad.find(params[:id]).as_json({
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
            },
            applied_upgrades: {
              only: [:id],
              include: {
                upgrade: {
                  only: [:id, :name, :cost, :text]
                }
              }
            }
          }
        }
      }
    })
  end

  def addShip
    pilotedShip = PilotedShip.create({squad_id: params[:id], pilot_id: params[:pilot_id], ship_id: params[:ship_id]})
    redirect_to "http://localhost:3000/#/squads/" + params[:id]
  end

  private
  def squad_params
    params.require(:squad).permit([:name, :faction, :user_id])
  end

end
