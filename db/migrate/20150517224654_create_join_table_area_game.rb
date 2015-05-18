class CreateJoinTableAreaGame < ActiveRecord::Migration
  def change
    create_join_table :areas, :games do |t|
      t.index [:area_id, :game_id]
      t.index [:game_id, :area_id]
    end
  end
end
