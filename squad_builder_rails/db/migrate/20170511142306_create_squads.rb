class CreateSquads < ActiveRecord::Migration
  def change
    create_table :squads do |t|
      t.string :name
      t.string :faction
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
