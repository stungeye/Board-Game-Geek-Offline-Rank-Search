require 'json'

geek_file = File.read('games.json', encoding: 'utf-8')

games = JSON.parse(geek_file);

single_average_games = games.map do |game|
  [
    game['name'],
    game['rank'].nil? ? 0 : game['rank'],
    game['geek_rating'].nil? ? game['average_rating'] : game['geek_rating'],
    game['number_of_voters']
  ]
end

puts games.first
puts single_average_games.first
puts games.last
puts single_average_games.last

File.open("board_games.js","w:utf-8") do |f|
    f.write(JSON.generate(single_average_games))
end
