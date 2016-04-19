var tooltips = {
  'key_current_link': 'Opens a new window/tab to the statistics current URI for this key.',
  'key_history_link': 'Opens a new window/tab to the statistics history URI for this key.',
  'key_type': 'Data type of key values.',
  'key_units': 'Units of key values.',
  'key_interval_detail': 'The resolution and retention period for historic data.',
  'key_aggregation_type': 'Type of aggregation used in down-sampling.',
  'key_policy_cache_time': 'Configured time in seconds system will used cached values.',
  'key_default_cache_time': 'Default time in seconds system will used cached values.',
  'key_scope': 'Node or cluster.'
}


$( document ).ready(function() {
  for (var field in tooltips) {
    field_el = $('.' + field).children('td')
    field_el.attr('data-toggle', 'tooltip')
    field_el.attr('title', tooltips[field])
    field_el.tooltip({container: 'body'})
  }

});
