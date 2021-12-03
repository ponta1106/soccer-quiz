Rails.application.routes.draw do
  root to: 'home#index'
  resources :users
  get '*path', to: 'home#index'
end
