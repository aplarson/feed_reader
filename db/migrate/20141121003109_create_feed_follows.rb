class CreateFeedFollows < ActiveRecord::Migration
  def change
    create_table :feed_follows do |t|
      t.integer :user_id, null: false
      t.integer :feed_id, null: false
      t.timestamps
    end
    
    add_index :feed_follows, :user_id
    add_index :feed_follows, :feed_id
    add_index :feed_follows, [:user_id, :feed_id], unique: true
  end
end
