class CreateCorrectAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :correct_answers do |t|
      t.references :user, null: false, index: true,  foreign_key: true
      t.references :question, null: false, index: true, foreign_key: true

      t.timestamps
    end
  end
end
