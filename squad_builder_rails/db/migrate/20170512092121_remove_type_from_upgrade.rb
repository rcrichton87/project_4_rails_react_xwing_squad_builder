class RemoveTypeFromUpgrade < ActiveRecord::Migration
  def change
    remove_column :upgrades, :type
    add_column :upgrades, :slot, :string
  end
end
