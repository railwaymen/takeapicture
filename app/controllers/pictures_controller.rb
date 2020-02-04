class PicturesController < ApplicationController
  def create
  end

  def create
    picture = Picture.new(picture_params)
    picture.image.attach(data: image_params[:image], filename: SecureRandom.uuid)
    picture.save
    redirect_to root_path
  end

  private

  def picture_params
    params.require(:picture).permit(:title)
  end

  def image_params
    params.require(:picture).permit(:image)
  end
end
