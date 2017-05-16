class AppliedUpgradesController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: AppliedUpgrade.all
  end

  def updateUpgrades
    puts params
    applied_upgrade = AppliedUpgrade.find(params[:id])
    applied_upgrade.upgrade_id = params[:upgrade_id]
    applied_upgrade.save
    upgrade = Upgrade.find(params[:upgrade_id])
    render json: {upgrade: upgrade}
  end

end