class CreateDecks < ActiveRecord::Migration
  def change
    create_table :decks do |t|
      t.string :name
      t.integer :height_px
      t.integer :width_px
      t.integer :border_radius_px
      t.boolean :rotation_matters, default: false

      t.timestamps null: false

      t.index :name
    end
  end
end
