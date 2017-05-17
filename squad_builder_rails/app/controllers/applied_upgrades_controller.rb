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
    applied_upgrades = AppliedUpgrade.where(piloted_ship_id: params[:piloted_ship_id]).as_json({
          only: [:id],
          include: {
            upgrade: {
              only: [:id, :name, :cost, :text, :slot]
            }
          }}
        )
    render json: {upgrade: upgrade, applied_upgrades: applied_upgrades}
  end

  def create
    AppliedUpgrade.create({upgrade_id: params[:upgrade_id], piloted_ship_id: params[:piloted_ship_id]})
    upgrade = Upgrade.find(params[:upgrade_id])
    applied_upgrades = AppliedUpgrade.where(piloted_ship_id: params[:piloted_ship_id]).as_json({
      only: [:id],
      include: {
        upgrade: {
          only: [:id, :name, :cost, :text, :slot]
        }
      }}
    )
    render json: {upgrade: upgrade, applied_upgrades: applied_upgrades}
  end

  def destroy
    AppliedUpgrade.destroy(params[:id])
    applied_upgrades = AppliedUpgrade.where(piloted_ship_id: params[:piloted_ship_id]).as_json({
      only: [:id],
      include: {
        upgrade: {
          only: [:id, :name, :cost, :text, :slot]
        }
      }}
    )
    render json:{status: :deleted, applied_upgrades: applied_upgrades}
  end

end