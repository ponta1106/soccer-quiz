class Question < ApplicationRecord
  belongs_to :user
  has_many :played_questions, dependent: :destroy
  has_many :correct_answers, dependent: :destroy
  enum category: { champions_league: 0, serieA: 1, premier_league: 2 }
end
