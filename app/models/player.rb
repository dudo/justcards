class Player < ActiveRecord::Base
  belongs_to :match
  belongs_to :user

  has_many :plays, as: :playable
end
