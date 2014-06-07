$(window).load(function () {

    $(function () {

        //load lastest config 

        chrome.storage.sync.get(
            'autohidden', function (result) {
                // Notify that we loaded.
                //console.log(result);

                // action depend on <off/on>
                if (result.autohidden == 'on') {
                    $("#comment-area").children('[id^="cid"]').each(function () {
                        if (isCC(this)) {
                            $(".comment-body", this).toggle();
                            $(this).next(".indented").toggle();
                        }
                    });
                } else {
                    // back to original view
                    $("#comment-area").children('[id^="cid"]').each(function () {
                        $(".comment-body", this).show();
                        $(this).next(".indented").show();
                    });
                }
            });


    });

    // is Corrigenda Comment?
    function isCC(AComment) {
        //console.log(AComment);

        //var x = AComment.id.slice(4, AComment.id.length);
        //console.log(x);
        var y = xml2string(AComment.childNodes[3].childNodes[3].childNodes[1]);
        var lenghtStr = y.length-4
        var y2 = y.slice(40,lenghtStr);
        
        
        var xc = AComment.childNodes[3].childNodes[3].textContent.trim();
        //console.log(xc);                            
        var score = 0;
        //determine which particle is corrigenda factor
        
        
        for(i=0;i<xc.length;i++){
            ///console.log(y2.charCodeAt(i));   
            if(xc.charCodeAt(i)==62){
                console.log('find ">" in comment-id : ' + AComment.id.slice(4, AComment.id.length));
                score = 100;
            }
        }
        
        
        
        // if score > 50    consider as corrigenda
        //score = Math.random()*100%100;        
        //console.log(score);        
        if (score > 50) {
            return true;
        } else {
            return false;
        }

    }

    function xml2string(node) {
        if (typeof (XMLSerializer) !== 'undefined') {
            var serializer = new XMLSerializer();
            return serializer.serializeToString(node);
        } else if (node.xml) {
            return node.xml;
        }
    }

});