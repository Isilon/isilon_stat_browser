function hide_keys() {
  // Need to select keys by ID -> find class for adequate JQuery selector perf
  var cat_mappings = keyDict['mappings']['categories']
  for (category in cat_mappings) {
    var category_id = '#' + cat_mappings[category];
    $(category_id).find('.key_main').hide()
  }
}

function hide_cats() {
  // Hide all category divs
  $('.category_main').hide()
}

function show_cat(category) {
  var cat_map = keyDict['mappings']['categories']
  var cat_id_selector = '#' + cat_map[category]
  $(cat_id_selector).show()
  var el_cat_subcontents = $(cat_id_selector).find('div.subcontents').first()
  $(el_cat_subcontents).show()
}

function no_results_warn(visible) {
  if (visible) {
    $('#no_results_warn').show()
  } else {
    $('#no_results_warn').hide()
  }
}

function cat_selector(category_name) {
  var cat_map = keyDict['mappings']['categories']
  var cat_id_selector = '#' + cat_map[category_name]
  return cat_id_selector
}


function parse_search_terms(text) {
  // Splits search query, normalizes case, drops emtpy search terms
  var raw_terms = text.toLowerCase().split(' ')
  var terms = []
  for (i in raw_terms) {
    if (raw_terms[i] != "" && raw_terms[i].length > 1) {
      terms.push(raw_terms[i])
    }
  }
  return terms
}


function match_key(key, search_terms) {
  // Checks whether a particular key matches all search terms (AND)
  var key_terms = key['search_terms']
  for (var i in search_terms) {
    var search_term_matched = false
    for (var j in key_terms) {
      if (key_terms[j].search(search_terms[i]) != -1) {
        search_term_matched = true
        break
      }
    }
    if (!search_term_matched) {
      return false
    }
  }
  return true
}

function parse_subsearches(search_terms) {
  // Splits the search on OR's
  var subsearches = []
  var subsearch = []
  while (search_terms.length > 0) {
    var term = search_terms.pop()
    if (term == 'or') {
      if (subsearch.length > 0) {
        subsearches.push(subsearch)
        var subsearch = []
      }
    }
    else if (term != 'and') {
      subsearch.push(term)
    }
  }
  if (subsearch.length > 0) {
    subsearches.push(subsearch)
  }
  return subsearches
}


function list_matching_keys(text, keys) {
  // Main logic for determing which keys match a search
  // Splits the search on 'OR' to get subsearches
  // Subsearches are implicitly 'AND'
  var key_matches = []
  var search_terms = parse_search_terms(text)
  var subsearches = parse_subsearches(search_terms)
  for (i in subsearches) {
    var subsearch = subsearches[i]
    for (var key in keys) {
      if (match_key(keys[key], subsearch)){
        key_matches.push(key);
      }
    }
  }
  // Dedupe the list since key may be matched in multiple ways
  return dedupe_array(key_matches);
}
