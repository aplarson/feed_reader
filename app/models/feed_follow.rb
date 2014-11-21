# == Schema Information
#
# Table name: feed_follows
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  feed_id    :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class FeedFollow < ActiveRecord::Base
  
  validates :user_id, :feed_id, presence: true
  validates :feed_id, uniqueness: {scope: :user_id}
  
  belongs_to :user
  belongs_to :feed
  
end
