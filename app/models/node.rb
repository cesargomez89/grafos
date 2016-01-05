class Node < ActiveRecord::Base
  belongs_to :list
  has_many :arcs
end
