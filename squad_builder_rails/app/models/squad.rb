class Squad < ActiveRecord::Base
  belongs_to :user
  has_many :piloted_ships
end
