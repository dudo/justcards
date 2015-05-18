class Deck < ActiveRecord::Base
  has_many :playing_cards
  # TODO
  # has_many :faces
  # has_many :playing_cards, through: :faces

  has_and_belongs_to_many :games
end
