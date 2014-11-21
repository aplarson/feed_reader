class Api::FeedsController < ApplicationController
  def index
    render :json => Feed.all, include: :feed_follows
  end

  def show 
    render :json => Feed.find(params[:id]), include: :latest_entries
  end

  def create
    feed = Feed.find_or_create_by_url(feed_params[:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end
  
  def destroy
    feed = Feed.find(params[:id])
    feed.destroy
    render :json => feed
  end
  
  def followed
    followed_feeds = current_user.feeds
    render :json => followed_feeds
  end

  private

  def feed_params
    params.require(:feed).permit(:title, :url)
  end
end
