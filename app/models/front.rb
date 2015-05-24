# == Schema Information
#
# Table name: faces
#
#  id              :integer          not null, primary key
#  deck_id         :integer
#  playing_card_id :integer
#  image           :string
#  type            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Front < Face
end
