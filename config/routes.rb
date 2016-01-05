Rails.application.routes.draw do
  root 'home#index'

  resources :lists
  resources :nodes, only: [:create, :update, :destroy]
  resources :arcs, only: [:create, :update, :destroy]
end
