class CreateAppliedUpgrades < ActiveRecord::Migration
  def change
    create_table :applied_upgrades do |t|
      t.references :piloted_ship, index: true, foreign_key: true
      t.references :upgrade, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
