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

class Play < ActiveRecord::Base
  belongs_to :card
  belongs_to :area

  belongs_to :holdable, polymorphic: true
end
