class Match < ActiveRecord::Base
  belongs_to :table
  belongs_to :game

  has_many :players
  has_many :users, through: :players

  has_many :plays, as: :playable
end
