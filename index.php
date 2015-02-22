<!doctype html>
<html lang="en" manifest="cache.manifest">
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="icon" sizes="180x180" href="apple-touch-icon.png">
    <meta name="msapplication-TileColor" content="#ffc40d">
    <meta name="msapplication-TileImage" content="mstile.png">
    <title>Board Game Search</title>
</head>
<body>
    <form id="search">
        <input name="query" id="query">
        <input type="submit" id="search_button" value="search">
    </form>
    <div id="debug"></div>
    <div id="search_results">
        <p>Add To Homescreen For Offline Use: <a target="_blank" href="http://www.howtogeek.com/196087/how-to-add-websites-to-the-home-screen-on-any-smartphone-or-tablet/">Instructions</a></p>
    </div>
    <script type="text/javascript" src="jzed.js"></script>
    <script type="text/javascript" src="main.js"></script>
    <script type="text/javascript" src="board_games.js"></script>
</body>
</html>
