Rails.application.routes.draw do
  get 'static_pages/home'
  get 'static_pages/help'
  get 'static_pages/about'
  devise_for :users

  scope '/admin' do
    devise_for :employees, class_name: "Admin::Employee"
  end
end
