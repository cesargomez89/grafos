class Node < ActiveRecord::Base
  belongs_to :list
  has_many :arcs

  default_scope { order('id ASC') }
end
