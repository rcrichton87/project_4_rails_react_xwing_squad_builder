class CreatePilotedShips < ActiveRecord::Migration
  def change
    create_table :piloted_ships do |t|
      t.references :squad, index: true, foreign_key: true
      t.references :ship, index: true, foreign_key: true
      t.references :pilot, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
