# == Schema Information
#
# Table name: players
#
#  id         :integer          not null, primary key
#  match_id   :integer
#  user_id    :integer
#  rank       :integer
#  play_order :integer
#  dealer     :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Player < ActiveRecord::Base
  belongs_to :match
  belongs_to :user

  has_many :plays, as: :holdable
end
