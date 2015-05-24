# == Schema Information
#
# Table name: matches
#
#  id         :integer          not null, primary key
#  table_id   :integer
#  game_id    :integer
#  duration   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class MatchTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
