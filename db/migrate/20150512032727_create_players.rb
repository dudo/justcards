class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.belongs_to :match
      t.belongs_to :user
      t.integer :rank
      t.integer :play_order
      t.boolean :dealer

      t.timestamps null: false

      t.index :match_id
      t.index :user_id
      t.index :rank
    end
  end
end
