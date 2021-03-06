Rails.application.routes.draw do
  
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'}
  resources :users
  
  scope path: "api" do
    resources :squads, defaults: {format: :json}
    resources :ships, defaults: {format: :json}
    resources :upgrades, defaults: {format: :json}
    resources :applied_upgrades, defaults: {format: :json}
    post 'squads/:id/add_ship' => 'squads#addShip'
    delete 'squads/:id/delete_ship/:piloted_ship_id' => 'squads#deleteShip'
    post 'applied_upgrades/edit/:piloted_ship_id/:id' => 'applied_upgrades#updateUpgrades'
    delete 'applied_upgrades/:piloted_ship_id/:id' => 'applied_upgrades#destroy'
  end



  
end
