class Arc < ActiveRecord::Base
  belongs_to :node

  default_scope { order('id ASC') }
end
