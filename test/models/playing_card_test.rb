# == Schema Information
#
# Table name: playing_cards
#
#  id           :integer          not null, primary key
#  deck_id      :integer
#  name         :string
#  display_name :string
#  extra        :boolean          default("f")
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class PlayingCardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
