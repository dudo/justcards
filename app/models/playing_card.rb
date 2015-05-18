class PlayingCard < ActiveRecord::Base
  belongs_to :deck

  has_many :cards
  has_many :tables, through: :cards

  has_many :faces
  has_many :decks, through: :faces

  def self.main_cards
    where(extra: false)
  end
end
