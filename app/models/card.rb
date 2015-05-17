class Card < ActiveRecord::Base
  has_many :plays
  has_many :cards, through: :plays

  belongs_to :table
  belongs_to :playing_card
end