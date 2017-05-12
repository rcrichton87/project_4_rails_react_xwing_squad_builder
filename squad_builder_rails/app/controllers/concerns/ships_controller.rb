class ShipsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: Ship.all.as_json({
      only: [:id, :name, :cost, :faction, :stats, :upgrade_slots],
      include: {
        pilots: {
          only: [:id, :name, :cost, :pilot_skill, :ability]
        }
      }
    })
  end

end