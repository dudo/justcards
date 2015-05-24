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

require 'test_helper'

class AreaTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
