Rails.application.routes.draw do
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'}
    
  scope path: "api" do
    resources :squads, defaults: {format: :json}
    resources :ships, defaults: {format: :json}
  end

  resources :users
  
end
