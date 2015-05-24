# == Schema Information
#
# Table name: plays
#
#  id            :integer          not null, primary key
#  card_id       :integer
#  area_id       :integer
#  holdable_id   :integer
#  holdable_type :string
#  face_up       :boolean          default("f")
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class PlayTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
