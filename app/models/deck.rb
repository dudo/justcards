# == Schema Information
#
# Table name: decks
#
#  id               :integer          not null, primary key
#  name             :string
#  height_px        :integer
#  width_px         :integer
#  border_radius_px :integer
#  rotation_matters :boolean          default("f")
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Deck < ActiveRecord::Base
  has_many :playing_cards
  # TODO
  # has_many :faces
  # has_many :playing_cards, through: :faces

  has_and_belongs_to_many :games
end
