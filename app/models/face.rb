class Face < ActiveRecord::Base
  belongs_to :deck
  belongs_to :playing_card
end
