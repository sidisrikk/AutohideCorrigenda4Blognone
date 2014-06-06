$(window).load(function () {

    $(function () {


        //load lastest config 
        var valX = "";
        chrome.storage.sync.get(
            'autohidden', function (result) {
                // Notify that we loaded.
                console.log(result);
                $('input:radio[name="autohidden"][value="' + result.autohidden + '"]').prop('checked', true);
            });


        /// onChanged event
        $('input:radio[name="autohidden"]').change(
            function () {
                console.log('changed to: ' + $(this).val());

                chrome.storage.sync.set({
                    'autohidden': $(this).val()
                }, function () {
                    // Notify that we saved.
                    console.log('Settings saved :');
                });
            }
        );


    });


});