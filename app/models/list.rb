class List < ActiveRecord::Base
  has_many :nodes
  has_many :arcs
end
