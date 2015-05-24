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

class Match < ActiveRecord::Base
  belongs_to :table
  belongs_to :game

  has_many :players
  has_many :users, through: :players

  has_many :plays, as: :holdable

  # has_many :areas # still working this out
end
