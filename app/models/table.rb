class Table < ActiveRecord::Base
  has_many :matches
  has_many :games, through: :matches

  has_many :cards
  has_many :playing_cards, through: :cards
end
