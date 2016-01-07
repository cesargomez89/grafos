class Node < ActiveRecord::Base
  belongs_to :list
  has_many :from_arcs, foreign_key: :to_id, class_name: 'Arc'
  has_many :to_arcs, foreign_key: :from_id, class_name: 'Arc'

  def from_nodes
    Node.where(to_id: id)
  end

  def to_nodes
    Node.where(from_id: id)
  end

  default_scope { order('id ASC') }
end
