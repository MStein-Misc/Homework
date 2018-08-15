
(function () {
    'strict on'
    let c = false;
    $('input[type=button]').css('display', 'none');
    $('#cb').click(() => {
        if (c) {
            $('input[type=button]').css('display', 'none');
        } else {
            $('input[type=button]').css('display', 'inline');
        }
        c = !c;
    });
    // $('input[type=button]').click(() => $.post('example.php', $('#addressForm').serialize()));
    $('input[type=button]').click(() => {
        $('input[type=text]').each((i, e) => {
            $('#f').html($(e).html());
        });
    });

}());