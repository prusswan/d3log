require 'httparty'

url = 'https://tw.api.battle.net/d3/profile/prusswan-1465/hero/44062537?locale=en_US&apikey=qxthahes9tk2jggb32bqqyv2weyq8nk4'
response = HTTParty.get url

current_time = Time.now.utc
filename = current_time.strftime "%Y-%m-%d_%H%M"

path_to_file = "/home/prusswan/Projects/d3log/json/#{filename}.json"

File.open(path_to_file, "w") { |f| f.write(response.to_json) }
