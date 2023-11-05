class CreateUrls < ActiveRecord::Migration[7.1]
  def change
    create_table :urls, id: :uuid do |t|
      t.string :target, null: false, index: { unique: true }
      t.string :alias, null: false, index: { unique: true }

      t.timestamps
    end
  end
end
