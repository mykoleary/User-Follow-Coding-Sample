class RelationshipsController < ApplicationController
  
  def create
    @user = User.find(params[:relationship][:followed_id])
    @current_user = User.find(params[:relationship][:follower_id])
    @current_user.follow!(@user)
    redirect_to @current_user
  end

  def destroy
    @user = Relationship.find(params[:id]).followed
    @current_user = User.find(params[:relationship][:follower_id])
    @current_user.unfollow!(@user)
    redirect_to @current_user
  end
end