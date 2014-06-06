$(window).load(function () {

    $(function () {

        //load lastest config 

        chrome.storage.sync.get(
            'autohidden', function (result) {
                // Notify that we loaded.
                console.log(result);

                // action depend on <off/on>
                if (result.autohidden == 'on') {
                    $("#comment-area").children('[id^="cid"]').each(function () {
                        var x = this.id.slice(4, this.id.length);
                        if (parseInt(x) % 2 == 0) {
                            //if meet commitment
                            $(".comment-body", this).toggle();
                            $(this).next(".indented").toggle();
                        }
                    });
                } else {
                    $("#comment-area").children('[id^="cid"]').each(function () {
                        var x = this.id.slice(4, this.id.length);
                        if (parseInt(x) % 2 == 0) {
                            //if meet commitment
                            $(".comment-body", this).show();
                            $(this).next(".indented").show();
                        }
                    });
                }
            });





    });


});