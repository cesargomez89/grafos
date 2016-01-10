require 'priority_queue'

module Algorithms
  class DijkstraService

    def initialize(list, start, finish)
      @nodes   = list.nodes
      @start  = @nodes.find(start)
      @finish = @nodes.find(finish)
      @queue = PriorityQueue.new
      @maxint = (2**(0.size * 8 -2) -1)
      @distances = {}
      @previous = {}

    end

    def process
      fill_queues
      calculate_path
    end

    def fill_queues
      @nodes.each do |node|
        if node.info == @start.info
          @distances[node.info] = 0
          @queue[node.info] = 0
        else
          @distances[node.info] = @maxint
          @queue[node.info] = @maxint
        end
        @previous[node.info] = nil
      end
    end

    def calculate_path
      while @queue
        smallest = @queue.delete_min_return_key

        if smallest == @finish.info
          path = []
          while @previous[smallest]
            path.push(smallest)
            smallest = @previous[smallest]
          end
          return path
        end

        if smallest == nil or @distances[smallest] == @maxint
          break
        end

        @nodes.find_by(info: smallest).arcs.each do |arc|
          alt = @distances[smallest] + arc.weight
          neighbor = arc.connection.info
          if alt < @distances[neighbor]
            @distances[neighbor] = alt
            @previous[neighbor] = smallest
            @queue[neighbor] = alt
          end
        end
      end
    end

  end
end
