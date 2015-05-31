class TablesController < ApplicationController
  def index
    @tables = Table.all
  end

  def show
    @table = Table.find(params[:id])
    @game = {start_area: 'draw'}
    @deck = Deck.first
    @measurements = @deck.attributes.with_indifferent_access.slice(:name, :rotation_matters, :height_px, :width_px, :border_radius_px)
    @cards = @deck.playing_cards.main.select(:id, :name, :display_name, :extra)
    @areas = [
      {id: 1, name: 'draw', position_x: 260, position_y: 250, face_up: false},
      {id: 2, name: 'play', position_x: 380, position_y: 250, face_up: true},
    ]
    @players = [ # players.sort(:player_order) then rearrange so current user is first
      {user_id: 1, name: 'foo', play_order: 1,
        areas: [
          {id: 3, name: 'hand', face_up: false}
        ]
      },{user_id: 3, name: 'baz', play_order: 2,
        areas: [
          {id: 4, name: 'hand', face_up: false}
        ]
      },{user_id: 4, name: 'qux', play_order: 3,
        areas: [
          {id: 5, name: 'hand', face_up: false}
        ]
      },{user_id: 2, name: 'bar', play_order: 6,
        areas: [
          {id: 6, name: 'hand', face_up: false}
        ]
      },{user_id: 8, name: 'bbar', play_order: 5,
        areas: [
          {id: 7, name: 'hand', face_up: false}
        ]
      },{user_id: 9, name: 'ffoo', play_order: 4,
        areas: [
          {id: 8, name: 'hand', face_up: false}
        ]
      }
    ]

    @match = {
      game: @game,
      cards: @cards,
      measurements: @measurements,
      areas: @areas,
      players: @players,
      current_user: {id: 1}
    }.as_json
  end
end
