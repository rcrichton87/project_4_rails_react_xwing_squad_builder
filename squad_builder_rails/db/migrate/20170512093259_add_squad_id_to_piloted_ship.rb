class AddSquadIdToPilotedShip < ActiveRecord::Migration
  def change
    add_foreign_key :piloted_ships, :squads
  end
end
