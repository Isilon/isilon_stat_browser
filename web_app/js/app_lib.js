function dedupe_array(a) {
  // Returns an array containing hte unique items in the input array a.
  var hashes = {};
  var deduped = [];
  for (var i=0; i< a.length; i++) {
    if (!hashes[a[i]]) {
      hashes[a] = true
      deduped.push(a[i])
    }
  }
  return deduped
}


function sort_items(container_class, items_class, sort_attr, prepend) {
  /*
  Sorts items within a container according to an iteem attribute. Assumes the items
  are contained within a div within the container as is the case with Bootstrap:
  < div .row .container_class>
    <div .col>
      <div .items_class>
      <div .items_class>
  :param container_class: Class of the container holding the items to be sorted.
  :param items_class: Class of the items to be sorted
  :param sort_attr: Attr of the item for sort to be keyed on
  :param prepend: If true, items are prepended to the inner container. Else, append.
  */
  $(container_class).each(function(i, elem) {
    var items = $(elem).children('div').children(items_class)
    items.sort(function(a, b) {
      var cat_a = $(a).find(sort_attr).first().text()
      var cat_b = $(b).find(sort_attr).first().text()
      if (cat_a.toUpperCase() > cat_b.toUpperCase()) {
        return 1
      }
      else {
        return -1
      }
    });
    if (prepend) {
      items.detach().prependTo($(elem).children('div'))
    }
    else {
      items.detach().appendTo($(elem).children('div'))

    }
  });
}


function update_toggle_icons() {
  // Needs to be called anytime categories are hidden/shown other than
  // actual clicks on the toggle buttons
  var subcontents = $('div').find('.subcontents').each(function(index) {
    if ($(this).css('display') == 'none') {
      $(this).parent().find('.subcontents_toggle').first().html(show_icon);
    }
    else {
      $(this).parent().find('.subcontents_toggle').first().html(hide_icon);
    }
  });
}


function toggle_handler() {
  // Find the subcontents div to be toggled
  var subcontents = $(this).parentsUntil('.category_main').last().children('.category_subcontents').first();
  subcontents.fadeToggle(function () {
    update_toggle_icons();
  });
  return false
}


function toggle_key_detail() {
  var key_detail = $(this).parentsUntil('.key_main').find('.key-data').find('.key_extra_detail');
  var key_not_extra = $(key_detail).parent().children('.key_not_extra')
  var key_toggle = $(this).parentsUntil('.key_main').find('.key_detail_toggle')
  if (key_detail.css('display') == 'none') {
    $(key_toggle).text('less detail...');
  }
  else {
    $(key_toggle).text('more detail...');
  }
  key_detail.toggle();
  key_not_extra.toggle()

}


function key_filter_button() {
  var tag = $(this).text();
  var search_string = $('#text_filter').val()
  var search_terms = search_string.split(' ')
  // Don't add a tag multiple times
  if (search_terms.indexOf(tag) == -1) {
    $('#text_filter').val((search_string + ' ' + tag).trim())
    filter()
  }
}
