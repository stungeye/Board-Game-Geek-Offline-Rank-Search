$boot(function(){
    var search_form_el = $id('search_form'),
        search_query_el  = $id('query');

    if (("standalone" in window.navigator) && window.navigator.standalone) {
        remove_install_instructions();
    }
    
    $on(search_form_el, 'submit', function(event) {
        event.preventDefault();
        remove_install_instructions();
       
        var query = search_query_el.value,
            found_games = find_game_by_name(query, board_games);

        display_games(found_games);
    });
});

function remove_install_instructions() {
    $html($id('install_instructions'), '');
}


function display_games(found_games) {
    var search_results_el = $id('search_results');
    $html(search_results_el, '');
    var games_ul_el = $new('ul', 'results', '');
    $style([games_ul_el, 'table-view']);
    $append(search_results_el, games_ul_el);
    $each(found_games, function(game) {
        var game_li = $new('li', false, '');
        $style([game_li, 'table-view-cell']);
        $append(game_li, $new('h2', false, game[0]));
        if (game[1] == 0) {
            $append(game_li, $new('p', false, 'Rank: No BoardGameGeek Ranking'));
            $append(game_li, $new('p', false, 'Average Rating: ' + game[2]));
        } else {
            $append(game_li, $new('p', false, 'Rank: ' + game[1]));
            $append(game_li, $new('p', false, 'Geek Rating: ' + game[2]));
        }
        $append(game_li, $new('p', false, 'Number of Voters: ' +  game[3]));
        $append(games_ul_el, game_li);
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
