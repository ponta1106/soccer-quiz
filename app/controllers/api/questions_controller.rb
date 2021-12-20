class Api::QuestionsController < ApplicationController
  # before_action :authenticate!
  before_action :set_question, only: [:show, :update, :destroy]

  def index
    @questions = Question.all.includes(:user)
    render json: @questions
  end

  def show
    render json: @question
  end

  def create
    @question = current_user.questions.build(question_params)

    if @question.save
      render json: @question
    else
      render json: @question.errors, status: :bad_request
    end
  end

  def update
    if @question.update(question_params)
      render json: @question
    else
      render json: @question.errors, status: :bad_request
    end
  end

  def destroy
    @question.destroy!
    render json: @question
  end

  private
  def set_question
    @question = Question.find(params[:id])
  end

  def question_params
    params.require(:question).permit(:title, :explanation, :answer, :category, :choice1, :choice2, :choice3, :choice4, :user_id)
  end
end
