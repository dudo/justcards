class CreatePlays < ActiveRecord::Migration
  def change
    create_table :plays do |t|
      t.belongs_to :card
      t.belongs_to :area
      t.integer :holdable_id
      t.string  :holdable_type
      t.boolean :face_up, default: false

      t.timestamps null: false

      t.index :card_id
      t.index :area_id
      t.index :holdable_id
    end
  end
end
