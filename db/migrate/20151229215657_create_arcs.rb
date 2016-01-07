class CreateArcs < ActiveRecord::Migration
  def change
    create_table :arcs do |t|
      t.integer :weight
      t.integer :heuristic_value
      t.integer :from_id
      t.integer :to_id
      t.integer :list_id
      t.integer :next_id

      t.timestamps null: false
    end
  end
end
