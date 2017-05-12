Rails.application.routes.draw do
  
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'}
  resources :users
  
  scope path: "api" do
    resources :squads, defaults: {format: :json}
    resources :ships, defaults: {format: :json}
    resources :upgrades, defaults: {format: :json}
  end


  
end
