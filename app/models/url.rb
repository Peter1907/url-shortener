class Url < ApplicationRecord
  validates :target, presence: true, uniqueness: true
  validates :alias, presence: true, uniqueness: true
end
