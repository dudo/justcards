# == Schema Information
#
# Table name: cards
#
#  id              :integer          not null, primary key
#  table_id        :integer
#  playing_card_id :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Card < ActiveRecord::Base
  has_many :plays
  has_many :areas, through: :plays

  belongs_to :table
  belongs_to :playing_card
end
