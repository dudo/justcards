class TablesController < ApplicationController
  def index
    @tables = Table.all
  end

  def show
    @table = Table.find(params[:id])
    @cards = Deck.first.playing_cards.main_cards.order("RANDOM()").select(:id, :name, :display_name, :extra).as_json
  end
end
