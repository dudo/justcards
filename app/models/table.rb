# == Schema Information
#
# Table name: tables
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Table < ActiveRecord::Base
  has_many :matches
  has_many :games, through: :matches

  has_many :cards
  has_many :playing_cards, through: :cards
end
