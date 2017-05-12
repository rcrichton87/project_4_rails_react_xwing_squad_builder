class AppliedUpgrade < ActiveRecord::Base
  belongs_to :piloted_ship
  belongs_to :upgrade
end
