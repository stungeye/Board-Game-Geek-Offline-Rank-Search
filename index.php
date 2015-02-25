<!doctype html>
<html lang="en" manifest="cache.manifest">
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="msapplication-TileColor" content="#ffc40d">
    <meta name="msapplication-TileImage" content="mstile.png">
    <link rel="icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="stylesheet" href="ratchet.min.css">
    <link rel="stylesheet" href="main.css">
    <title>BoardRank</title>
</head>
<body>
    <header class="bar bar-nav">
      <h1 class="title">BoardRank</h1>
    </header>

    <div class="bar bar-standard bar-header-secondary">
        <form id="search_form">
            <input type="search" name="query" id="query" placeholder="Search">
        </form>
    </div>

    <div class="content">
        <div id="install_instructions" class="hidden">
            <p class="content-padded"><a target="_blank" href="http://www.howtogeek.com/196087/how-to-add-websites-to-the-home-screen-on-any-smartphone-or-tablet/">Add to Homescreen for Offline use.</a> Use homescreen app once online before using it offline.</p>
        </div>
        <div id="debug"></div>
        <div id="search_results">
        </div>
    </div>
    <script type="text/javascript" src="jzed.js"></script>
    <script type="text/javascript" src="main.js"></script>
    <script type="text/javascript" src="board_games.js"></script>
</body>
</html>
