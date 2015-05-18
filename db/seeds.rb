# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Table.create

d = Deck.where(
  width_px: 185,
  height_px: 260,
  border_radius_px: 10,
  name: 'Playing Cards').first_or_create

%w(h d s c).each do |suit|
  %w(a k q j 10 9 8 7 6 5 4 3 2).each do |value|
    s = case suit
    when 'h' then 'Hearts'
    when 'd' then 'Diamonds'
    when 's' then 'Spades'
    when 'c' then 'Clubs'
    end
    v = case value
    when 'a' then 'Ace'
    when 'k' then 'King'
    when 'q' then 'Queen'
    when 'j' then 'Jack'
    else value
    end
    PlayingCard.where(name: "#{value}#{suit}", display_name: "#{v} of #{s}", deck: d).first_or_create
  end
end
PlayingCard.where(name: "jr", display_name: "Red Joker", deck: d, extra: true).first_or_create
PlayingCard.where(name: "jb", display_name: "Black Joker", deck: d, extra: true).first_or_create