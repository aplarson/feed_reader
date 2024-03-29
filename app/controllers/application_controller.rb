class ApplicationController < ActionController::Base
  protect_from_forgery
  
  helper_method :current_user
  
  def current_user
    User.find_by(session_token: session[:session_token])
  end
  
  def login(user)
    session[:session_token] = user.reset_session_token
  end
  
  def logout
    current_user.reset_session_token
    session[:session_token] = nil
  end
  
  def ensure_current_user
    redirect_to new_session_url unless current_user
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
  
end
