class ProductsController < ApplicationController
  
  def index
    products = Product.all
    render json: products, include: :reviews
  end

  def show
    product = Product.find(params[:id])
    render json: product, include: :reviews
  end
end
