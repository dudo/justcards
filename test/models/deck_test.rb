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

require 'test_helper'

class DeckTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
