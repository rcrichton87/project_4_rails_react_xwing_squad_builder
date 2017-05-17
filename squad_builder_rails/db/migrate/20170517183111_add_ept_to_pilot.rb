class AddEptToPilot < ActiveRecord::Migration
  def change
    add_column :pilots, :ept, :boolean
  end
end
