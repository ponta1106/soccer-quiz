class User < ActiveRecord::Base
  include JwtToken
  authenticates_with_sorcery!

  has_many :questions, dependent: :destroy
  has_many :played_questions, dependent: :destroy
  has_many :correct_answers, dependent: :destroy

  validates :password, length: { minimum: 3 }, if: -> { new_record? || changes[:crypted_password] }
  validates :password, confirmation: true, if: -> { new_record? || changes[:crypted_password] }
  validates :password_confirmation, presence: true, if: -> { new_record? || changes[:crypted_password] }

  validates :email, uniqueness: true, presence: true
  validates :name, uniqueness: true, presence: true
end