class Arc < ActiveRecord::Base
  belongs_to :node, foreign_key: :from_id
  belongs_to :connection, foreign_key: :to_id, class_name: 'Node'

  default_scope { order('id ASC') }
end
