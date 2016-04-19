var show_icon = '<i class="material-icons">add_circle_outline</i>'
var hide_icon = '<i class="material-icons">remove_circle_outline</i>'
var clear_icon = '<i class="material-icons" style="font-size: 16px">clear</i>'

var g_categories;

$( document ).ready(function() {
  // Collapse contens and update the toggle icons appropriately
  $('.key_extra_detail').hide()
  $('.subcontents').hide();
  $('.subcontents_toggle').html(show_icon);

  // Handle category show/hide
  $('.subcontents_toggle').click(toggle_handler);
  $('.category_head').click(toggle_handler);

  // Handle key extra detail show/hide
  $('.key_detail_toggle').click(toggle_key_detail);
  $('span.key-name').click(toggle_key_detail);

  // Handle filter tag buttons
  $('.btn-tag').click(key_filter_button);

  // Initialize drop-downs
  $('.dropdown-menu').dropdown()

  sort_items('.category_container', '.category_main', '.sort-key', true)
  sort_items('.key_container', '.key_main', '.sort-key', false)

  // Handle the filter box
  var options = {
    callback: filter,
    wait: 750,
    captureLength: 2
  }
  $('#text_filter').typeWatch(options)
});
