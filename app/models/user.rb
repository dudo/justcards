# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  name                   :string
#  email                  :string
#  remember_token         :string
#  password_digest        :string
#  password_reset_token   :string
#  password_reset_sent_at :datetime
#  admin                  :boolean          default("f")
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

class User < ActiveRecord::Base
  has_many :players
  has_many :matches, through: :players
end
