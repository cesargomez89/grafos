class AlgorithmsController < ApplicationController
  before_action :get_params

  def all_paths
    respond_to do |format|
      format.json do
        render json: Algorithms::AllPathsService.new(@list, @start, @finish).process
      end
    end
  end

  def dijkstra
    respond_to do |format|
      format.json do
        render json: Algorithms::DijkstraService.new(@list, @start, @finish).process
      end
    end
  end

  def a_star
    respond_to do |format|
      format.json do
        render json: Algorithms::AStarService.new(@list, @start, @finish).process
      end
    end
  end

  private

  def get_params
    @list   = List.find(params[:list_id])
   @start   = params[:start_id]
   @finish  = params[:finish_id]
  end

end
