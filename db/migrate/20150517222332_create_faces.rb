class CreateFaces < ActiveRecord::Migration
  def change
    create_table :faces do |t|
      t.belongs_to :deck
      t.belongs_to :playing_card
      t.string :image
      t.string :type

      t.timestamps null: false

      t.index :deck_id
      t.index :playing_card_id
    end
  end
end
