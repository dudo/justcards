class CreateJoinTableDeckGame < ActiveRecord::Migration
  def change
    create_join_table :decks, :games do |t|
      t.index [:deck_id, :game_id]
      t.index [:game_id, :deck_id]
    end
  end
end
