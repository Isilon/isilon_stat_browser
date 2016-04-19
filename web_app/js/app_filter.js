function filter() {
  // Called when text in filter box changes
  var text = $("#text_filter").val().trim();
  if (text.length < 2) {
    // Dont filter for 2 characters, it's of little value and makes the UI lag
    $('.subcontents').hide();
    $('.key_main').show()
    $('.category_main').show()
    update_toggle_icons()
    return
  }
  var keys = keyDict['keys']
  // Retreive a list of keys that match the query
  var deduped_key_matches = list_matching_keys(text, keys)

  // Hide everything, then display only matching keys and their containing cats
  $('.subcontents').hide();
  hide_keys()
  hide_cats()
  var category_map = keyDict['mappings']['categories']
  var key_map = keyDict['mappings']['keys']
  for (i in deduped_key_matches) {
    var key = deduped_key_matches[i]
    var supercat = keys[key]['super']
    var subcat = supercat + '-' + keys[key]['sub']
    var subsubcat = subcat + '-' + keys[key]['subsub']
    show_cat(supercat)
    show_cat(subcat)
    show_cat(subsubcat)
    console.log('Showing: ' + supercat + ' ' + subcat + ' ' + subsubcat)

    var supercat_subcontents = $('#' + category_map[supercat]).find('div.subcontents').first()
    $(supercat_subcontents).show()
    var subcat_subcontents = $('#' + category_map[supercat + '-' + subcat]).find('div.subcontents').first()
    $(subcat_subcontents).show()
    var subsubcat_subcontents = $('#' + category_map[supercat + '-' + subcat + '-' + subsubcat]).find('div.subcontents').first()
    $(subsubcat_subcontents).show()
    var key_id = '#' + key_map[key]
    $(key_id).show()
  }
  update_toggle_icons()
}
