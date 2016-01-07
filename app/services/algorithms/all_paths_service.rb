module Algorithms
  class AllPathsService
    def initialize(list, start, finish)
      @list   = list
      @start  = @list.nodes.find(start)
      @finish = @list.nodes.find(finish)
      @paths  = []
      @complete_paths  = []
    end

    def process
      @path = { @start.info => '0' }
      @paths.push(@path)
      walk_paths
      find_path_alternatives
    end

    private

    def walk_paths
      loop do
        break if @paths.empty?
        @path = @paths.pop
        current_node = find_node_by_path
        @complete_paths.push(@path) if current_node.to_arcs.empty? || current_node == @finish
        next if current_node == @finish

        update_paths_by current_node
      end
    end

    def update_paths_by(node)
      node.to_arcs.each do |arc|
        current_path = @path.merge({ arc.connection.info => arc.weight })
        @paths.push(current_path)
      end
    end

    def find_node_by_path
      Node.find_by(info: @path.keys.last)
    end

    def find_path_alternatives
      @complete_paths.select{|path| path.keys.include?(@finish.info) }
    end
  end
end
