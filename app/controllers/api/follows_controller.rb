class Api::FollowsController < ApplicationController
  
  def create
    feed_id = params[:feed_id]
    user_id = current_user.id
    newfollow = FeedFollow.new({user_id: user_id, feed_id: feed_id})
    if newfollow.save
      render json: newfollow
    else
      render json: newfollow.errors, status: 422
    end
  end
  
  def destroy
    feed_id = params[:feed_id]
    user_id = current_user.id
    follow = FeedFollow.where(['feed_id = :feed AND user_id = :user', 
                               {feed: feed_id, user: user_id }])
    follow.first.destroy
    # follow.destroy
    render json: follow
  end
end