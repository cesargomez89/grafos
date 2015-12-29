class CreateArcs < ActiveRecord::Migration
  def change
    create_table :arcs do |t|
      t.integer :weight
      t.integer :heuristic_value
      t.references :node, index: true, foreign_key: true
      t.integer :next_id

      t.timestamps null: false
    end
  end
end
