class CreateGameAreas < ActiveRecord::Migration
  def change
    create_table :game_areas do |t|

      t.timestamps null: false
    end
  end
end
