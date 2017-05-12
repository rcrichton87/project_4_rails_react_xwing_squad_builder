class UpgradesController < ApplicationController

  def index
    render json: Upgrade.all.as_json({
      only: [:id, :name, :cost, :slot, :text],
    })
  end

end