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

require 'spec_helper'

describe FeedFollow do
  pending "add some examples to (or delete) #{__FILE__}"
end
