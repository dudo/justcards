class CreatePlayingCards < ActiveRecord::Migration
  def change
    create_table :playing_cards do |t|

      t.timestamps null: false
    end
  end
end
