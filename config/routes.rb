Rails.application.routes.draw do
  root to: 'home#index'
  namespace :api do
    resources :questions
  end
  get '*path', to: 'home#index'
end
