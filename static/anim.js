
        $(document).ready(function() {

            var audio = new Audio();
            var theme = "";

            function changeBackground(image_file) {
                document.body.style.backgroundImage = "url('"+ image_file +"')";
            }

            function playMusic(music_file) {
                audio = new Audio(music_file);
                audio.play();
                audio.addEventListener('ended', function() {
                    this.currentTime = 0;
                    this.play();
                }, false);
            }

            function muteMusic() {
                audio.pause();
                return false;
            }

            function unmuteMusic() {
                audio.play();
                return false;
            }

            function mapMusic(mode) {
                console.log("Map Music" + mode);
                var musicFiles = {};
                musicFiles['Forest'] = "static/sounds/forest.mp3";
                musicFiles['Beach'] = "static/sounds/beach.mp3";
                musicFiles['Happy'] = "static/sounds/happy.mp3";
                musicFiles['Symphony'] = "http://www.mfiles.co.uk/mp3-downloads/mozart-symphony40-1.mp3";
                musicFiles['Rainy'] = "static/sounds/storm.mp3";
                musicFiles['PeacefulNight'] = "http://www.mfiles.co.uk/mp3-downloads/debussy-clair-de-lune.mp3";
                musicFiles['Sad'] = "static/sounds/sad.mp3";

                console.log("Result" + musicFiles[mode]);
                return musicFiles[mode];
            }

            function mapAlert(mode) {
                var alertFiles = {};
                alertFiles['Forest'] = "static/sounds/generic_alert.mp3";
                alertFiles['Beach'] = "static/sounds/generic_alert.mp3";
                alertFiles['Happy'] = "static/sounds/generic_alert.mp3";
                alertFiles['Symphony'] = "static/sounds/generic_alert.mp3";
                alertFiles['Rainy'] = "static/sounds/generic_alert.mp3";
                alertFiles['PeacefulNight'] = "static/sounds/generic_alert.mp3";
                alertFiles['Sad'] = "static/sounds/generic_alert.mp3";

                return alertFiles[mode];
            }

            function mapImage(mode) {
                var imageFiles = {};

                imageFiles['Forest'] = "static/images/forest.png";
                imageFiles['Beach'] = "static/images/beach.png";
                imageFiles['Happy'] = "static/images/happy.jpg";
                imageFiles['Symphony'] = "static/images/symphony.png";
                imageFiles['Rainy'] = "static/images/storm.png";
                imageFiles['PeacefulNight'] = "static/images/peacefulNight.png";
                imageFiles['Sad'] = "static/images/sad.png";

                return imageFiles[mode];
            }

            function changeTheme(mode) {
                mode = $.trim(mode);
                theme = mode;
                muteMusic();

                var musicFile = mapMusic(mode);
                var imageFile = mapImage(mode);

                changeBackground(imageFile);
                playMusic(musicFile);

            }

            $('a#beach').click(function(event) {
                changeTheme($('#beach').text());
            });

            $('a#forrest').click(function(event) {
                changeTheme($('#forrest').text());
            });

            $('a#happy').click(function(event) {
                changeTheme($('#happy').text());
            });

            $('a#sad').click(function(event) {
                changeTheme($('#sad').text());
            });

            $('a#symphony').click(function(event) {
                changeTheme($('#symphony').text());
            });

            $('a#storm').click(function(event) {
                changeTheme($('#storm').text());
            });

            $('a#muteMusic').click(function(event) {
                muteMusic();
            });

            $('a#unmuteMusic').click(function(event) {
                unmuteMusic();
            });
        });
