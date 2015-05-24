# == Schema Information
#
# Table name: areas
#
#  id         :integer          not null, primary key
#  name       :string
#  face_up    :boolean          default("f")
#  position_x :integer
#  position_y :integer
#  layout     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

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
