class PlayingCard < ActiveRecord::Base
  belongs_to :deck

  has_many :cards
  has_many :tables, through: :cards
end
