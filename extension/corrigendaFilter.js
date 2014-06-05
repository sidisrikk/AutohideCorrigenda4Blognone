//such a filter
$("#comment-area").children('[id^="cid"]').each(function () {
    var x = this.id.slice(4, this.id.length);
    if (parseInt(x) % 2 == 0) {
        //if meet commitment
        $(".comment-body", this).toggle();
        $(this).next(".indented").toggle();
    }
});