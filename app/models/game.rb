# == Schema Information
#
# Table name: games
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Game < ActiveRecord::Base
  has_many :matches
  has_many :tables, through: :matches

  has_and_belongs_to_many :decks
  has_and_belongs_to_many :areas
end
