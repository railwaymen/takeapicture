# frozen_string_literal: true
class Picture < ApplicationRecord
  include ActiveStorageSupport::SupportForBase64

  has_one_base64_attached :image
end