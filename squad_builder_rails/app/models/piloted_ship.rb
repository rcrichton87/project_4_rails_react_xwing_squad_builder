class PilotedShip < ActiveRecord::Base
  belongs_to :squad
  belongs_to :ship
  belongs_to :pilot
  has_many :applied_upgrades
end
