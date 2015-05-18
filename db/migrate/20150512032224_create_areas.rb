class CreateAreas < ActiveRecord::Migration
  def change
    create_table :areas do |t|
      t.string :name
      t.boolean :face_up, default: false
      t.integer :position_x
      t.integer :position_y
      t.string :layout

      t.timestamps null: false

      t.index :name
    end
  end
end
