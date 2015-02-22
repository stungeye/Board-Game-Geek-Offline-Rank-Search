$boot(function(){
    var search_button = $id('search_button'),
        search_query  = $id('query');
    
    $on(search_button, 'click', function(event) {
        event.preventDefault();
       
        var query = search_query.value,
            found_games = find_game_by_name(query, board_games);

        display_games(found_games);
    });
});


function display_games(found_games) {
    var search_results_element = $id('search_results');
    $html(search_results_element, '');
    $each(found_games, function(game) {
        var game_div = $new('div', false, '');
        $append(game_div, $new('h2', false, game[0]));
        $append(game_div, $new('p', false, 'Rank: ' + game[1]));
        $append(game_div, $new('p', false, 'Geek Rating: ' + game[2]));
        $append(game_div, $new('p', false, 'Number of Voters: ' +  game[3]));
        $append(search_results_element, game_div);
    });
}

function find_game_by_name(name_query, games) {
    var matches = [];
    
    $each(games, function(game) {
        if (game[0].match( name_query)) {
            matches.push(game);
        }
    });
    
    return matches;
}

function debug(msg) {
   var debug_element = $id("debug");
   $append(debug_element, $new('p', false, msg));
}
