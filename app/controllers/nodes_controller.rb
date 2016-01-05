class NodesController < ApplicationController
  def create
    @node = Node.new(node_params)
    respond_to do |format|
      if @node.save
        format.json {render json: @node, status: :ok}
      else
        format.json {render json: @node.errors}
      end
    end
  end

  def update
    @node = Node.find(params[:id])
    respond_to do |format|
      if @node.update(node_params)
        format.json {render json: @node, status: :ok}
      else
        format.json {render json: @node.errors}
      end
    end
  end

  def destroy
    @node = Node.find(params[:id])
    respond_to do |format|
      if @node.destroy
        format.json { render json: { message: 'Node deleted correctly'} , status: :ok }
      else
        format.json { render json: { message: 'There was an error deleting the Node'} , status: :unprocessable_entity }
      end
    end
  end

  private

  def node_params
    params.require(:node).permit(:info, :list_id, :next_id)
  end
end
