ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

require "vcr"
require "faraday"

VCR.configure do |c|
  c.cassette_library_dir = 'test/cassettes'
  c.hook_into :faraday

  c.before_record do |i|
    i.response.body.force_encoding('UTF-8')
  end
end

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
end
