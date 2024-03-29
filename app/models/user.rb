# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)      not null
#  password_digest :string(255)      not null
#  session_token   :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
  attr_reader :password
  
  validates :username, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  
  has_many :feed_follows, dependent: :destroy
  has_many :feeds, through: :feed_follows, source: :feed
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
    nil
  end
  
  def generate_session_token
    SecureRandom.urlsafe_base64
  end
  
  def reset_session_token
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end
  
  def ensure_session_token
    self.session_token ||= generate_session_token 
  end
  
end
