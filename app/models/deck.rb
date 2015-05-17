class Deck < ActiveRecord::Base
  has_many :playing_cards

  has_and_belongs_to_many :games
end
