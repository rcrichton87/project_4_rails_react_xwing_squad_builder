class ShipsController < ApplicationController

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