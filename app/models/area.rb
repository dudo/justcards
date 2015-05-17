class Area < ActiveRecord::Base
  has_and_belongs_to_many :games

  has_many :plays
  has_many :cards, through: :plays

  # dealer
  # draw
  # play
  # discard
  # hand
end
