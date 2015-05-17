class User < ActiveRecord::Base
  has_many :players
  has_many :matches, through: :players
end
