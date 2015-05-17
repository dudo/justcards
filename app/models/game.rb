class Game < ActiveRecord::Base
  has_many :matches
  has_many :tables, through: :matches

  has_and_belongs_to_many :decks
  has_and_belongs_to_many :areas
end
