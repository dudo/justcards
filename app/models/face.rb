# == Schema Information
#
# Table name: faces
#
#  id              :integer          not null, primary key
#  deck_id         :integer
#  playing_card_id :integer
#  image           :string
#  type            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Face < ActiveRecord::Base
  belongs_to :deck
  belongs_to :playing_card
end
