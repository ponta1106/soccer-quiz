class Question < ApplicationRecord
  belongs_to :user
  has_many :played_questions, dependent: :destroy
  has_many :correct_answers, dependent: :destroy
  enum category: { champions_league: 0, serieA: 1, premier_league: 2, la_liga: 3, others: 4 }

  with_options presence: true do
    validates :title
    validates :explanation
    validates :answer
    validates :category
    validates :choice1
    validates :choice2
    validates :choice3
    validates :choice4
  end

  validates :title, uniqueness: true
end
