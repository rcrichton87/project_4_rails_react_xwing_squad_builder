class AppliedUpgradesController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: AppliedUpgrade.all
  end

  def updateUpgrades
    applied_upgrade = AppliedUpgrade.find(params[:id])
    applied_upgrade.upgrade_id = params[:upgrade_id]
    applied_upgrade.save
    upgrade = Upgrade.find(params[:upgrade_id])
    render json: {upgrade: upgrade}
  end

  def create
    AppliedUpgrade.create({upgrade_id: params[:upgrade_id], piloted_ship_id: params[:piloted_ship_id]})
    upgrade = Upgrade.find(params[:upgrade_id])
    render json: {upgrade: upgrade}
  end

end