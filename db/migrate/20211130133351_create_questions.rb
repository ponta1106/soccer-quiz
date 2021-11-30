class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.text :explanation
      t.string :answer, null: false
      t.integer :category, null: false
      t.string :choice1, null: false
      t.string :choice2, null: false
      t.string :choice3, null: false
      t.string :choice4, null: false

      t.timestamps
    end
  end
end
