class CreateShips < ActiveRecord::Migration
  def change
    create_table :ships do |t|
      t.string :name
      t.string :faction
      t.string :stats
      t.integer :cost
      t.string :upgrade_slots

      t.timestamps null: false
    end
  end
end
