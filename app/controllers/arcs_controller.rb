class ArcsController < ApplicationController
  def create
    @arc = Arc.new(arc_params)
    respond_to do |format|
      if @arc.save
        format.json {render json: @arc, status: :ok}
      else
        format.json {render json: @arc.errors}
      end
    end
  end

  def update
    @arc = Arc.find(params[:id])
    respond_to do |format|
      if @arc.update(arc_params)
        format.json {render json: @arc, status: :ok}
      else
        format.json {render json: @arc.errors}
      end
    end
  end

  def destroy
    @arc = Arc.find(params[:id])
    respond_to do |format|
      if @arc.destroy
        format.json { render json: { message: 'Arc deleted correctly'} , status: :ok }
      else
        format.json { render json: { message: 'There was an error deleting the Arc'} , status: :unprocessable_entity }
      end
    end
  end

  private

  def arc_params
    params.require(:arc).permit(:weight, :heuristic_value, :from_id, :to_id, :next_id, :list_id)
  end
end
