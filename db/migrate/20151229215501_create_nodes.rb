class CreateNodes < ActiveRecord::Migration
  def change
    create_table :nodes do |t|
      t.string :info
      t.references :list, index: true, foreign_key: true
      t.integer :next_id

      t.timestamps null: false
    end
  end
end
