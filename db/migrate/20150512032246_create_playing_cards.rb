class CreatePlayingCards < ActiveRecord::Migration
  def change
    create_table :playing_cards do |t|
      t.belongs_to :deck
      t.string :name
      t.string :display_name
      t.boolean :extra, default: false

      t.timestamps null: false

      t.index :deck_id
      t.index :name
    end
  end
end
