NewsReader::Application.routes.draw do
  namespace :api do
    
    resources :feeds, only: [:index, :create, :show, :destroy] do
      collection do
        get 'followed'
      end
      resources :entries, only: [:index]
      resources :follows, only: [:create] do
        collection do
          delete 'destroy'
        end
      end
    end
  end
  
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  root to: "static_pages#index"
end
