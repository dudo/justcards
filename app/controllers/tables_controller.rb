class TablesController < ApplicationController
  def index
    @tables = Table.all
  end

  def show
    @table = Table.find(params[:id])
    @deck = Deck.first
    @measurements = @deck.attributes.with_indifferent_access.slice(:name, :rotation_matters, :height_px, :width_px, :border_radius_px).as_json
    @cards = @deck.playing_cards.main.order("RANDOM()").select(:id, :name, :display_name, :extra).as_json
  end
end
