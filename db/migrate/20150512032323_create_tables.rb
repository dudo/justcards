class CreateTables < ActiveRecord::Migration
  def change
    create_table :tables do |t|
      t.string :name

      t.timestamps null: false

      t.index :name
    end
  end
end
