Rails.application.routes.draw do
  root 'home#index'

  resources :lists
  resources :nodes, only: [:create, :update, :destroy]
  resources :arcs, only: [:create, :update, :destroy]
  resources :algorithms, except: :all do
    collection do
      get :all_paths
      get :dijkstra
      get :a_star
    end
  end
end
