class CreateGameDecks < ActiveRecord::Migration
  def change
    create_table :game_decks do |t|

      t.timestamps null: false
    end
  end
end
