module Algorithms
  class AStarService
    def initialize(list, start, finish)
      @nodes = list.nodes
      @start = @nodes.find(start)
      @finish = @nodes.find(finish)
      @paths = []
    end

    def process
      @path = { info: [@start.info], real: 0, heuristic: 0 }
      @paths.push(@path)
      walk_paths
      @path
    end

    def walk_paths
      loop do
        break if @path[:info].last == @finish.info
        @path = @paths.shift # verify shortest
        current_node = find_node_by_path
        update_paths_by current_node
        @paths.sort!{|x, y| x[:heuristic] <=> y[:heuristic]}
      end
    end

    def find_node_by_path
      @nodes.find_by(info: @path[:info].last)
    end

    def update_paths_by(node)
      node.to_arcs.each do |arc|
        current_path = @path.deep_dup
        current_path[:info].push(arc.connection.info)
        current_path[:real] += arc.weight
        current_path[:heuristic] = current_path[:real] + arc.heuristic_value
        @paths.push(current_path)
      end
    end

  end
end
