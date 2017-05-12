class CreatePilots < ActiveRecord::Migration
  def change
    create_table :pilots do |t|
      t.string :name
      t.integer :cost
      t.integer :pilot_skill
      t.string :ability
      t.references :ship, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
