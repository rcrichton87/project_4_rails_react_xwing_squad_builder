class DropPilotedShip < ActiveRecord::Migration
  def change
    drop_table :piloted_ships
  end
end
