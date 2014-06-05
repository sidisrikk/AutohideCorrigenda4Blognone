//such a filter
$('[id^="cid"]').each(function () {
    $(".comment-body", this).show();
    $(this).next(".indented").show();    
});