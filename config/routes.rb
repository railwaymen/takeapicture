Rails.application.routes.draw do
  root to: 'home#index'
  resource :pictures, only: %w[create]
end
