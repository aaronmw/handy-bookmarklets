$.fn.reverse = [].reverse;
var i = 0;
var $posts = $('acronym[title^="Adult"], a:contains("nonnude")').parents('.thing');
var limit = parseInt(prompt('How many? (' + $posts.length + ' total)', 10)) || 0;
$posts.reverse();
$posts.each(function(index, element) {
  if (i++ >= limit) return;
  var $post = $(element);
  var link = $post.find('a.title').attr('href');

  setTimeout(function () {
    window.open(link);
    $post.find('.save-button a').trigger('click');
  }, 1000 * i);
});
