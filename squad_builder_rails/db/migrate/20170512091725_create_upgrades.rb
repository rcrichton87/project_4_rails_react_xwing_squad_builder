class CreateUpgrades < ActiveRecord::Migration
  def change
    create_table :upgrades do |t|
      t.string :name
      t.string :type
      t.integer :cost
      t.string :text

      t.timestamps null: false
    end
  end
end
