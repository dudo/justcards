class Play < ActiveRecord::Base
  belongs_to :card
  belongs_to :area

  belongs_to :holdable, polymorphic: true
end
