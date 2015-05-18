class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.belongs_to :table
      t.belongs_to :game
      t.integer :duration

      t.timestamps null: false

      t.index :table_id
      t.index :game_id
    end
  end
end


