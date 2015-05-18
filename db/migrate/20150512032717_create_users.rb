class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :remember_token
      t.string :password_digest
      t.string :password_reset_token
      t.datetime :password_reset_sent_at
      t.boolean :admin, default: false

      t.timestamps null: false

      t.index :email
      t.index :remember_token
      t.index :password_reset_token
    end
  end
end
