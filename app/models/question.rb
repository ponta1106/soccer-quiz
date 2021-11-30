class Question < ApplicationRecord
  has_many :played_questions, dependent: :destroy
  has_many :correct_answers, dependent: :destroy
end
