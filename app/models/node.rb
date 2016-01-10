class Node < ActiveRecord::Base
  belongs_to :list
  has_many :from_arcs, foreign_key: :to_id, class_name: 'Arc'
  has_many :to_arcs, foreign_key: :from_id, class_name: 'Arc'

  def arcs
    from_arcs + to_arcs
  end

  default_scope { order('id ASC') }
end
