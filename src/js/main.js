import './lib/lib';

$('button').on('click', function() {
    $(this).hide().show().toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findme'));
console.log($('.findme').siblings());

// console.log($('button').html('Hello'));