class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.belongs_to :table
      t.belongs_to :playing_card

      t.timestamps null: false

      t.index :table_id
      t.index :playing_card_id
    end
  end
end
