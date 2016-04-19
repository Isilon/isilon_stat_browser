var cluster_ip = null
var clicked_link = null

$(document).ready(function () {
  $('.papi_demo').click(papi_link_clicked)
  $('#modal_cluster_save').click(save_cluster_ip)
  $('#modal_cluster').on('shown.bs.modal', function () {$('#text_cluster').focus()})
  cluster_ip = keyDict['cluster']['host']
  if (cluster_ip != null) {
    // Populate PAPI links if IP is known
    update_papi_links(keyDict['cluster']['host'])
  }
});

function papi_link_clicked() {
  if (cluster_ip == null) {
    clicked_link = $(this)
    $('#modal_cluster').modal()
    return false
  }
}

function save_cluster_ip() {
  cluster_ip = $('#text_cluster').val()
  $('#modal_cluster').modal('hide')
  update_papi_links(cluster_ip)
  window.open($(clicked_link).attr('href'), '_blank')
}

function update_papi_links() {
  $('.papi_demo_current').each(update_papi_link, ['current'])
  $('.papi_demo_history').each(update_papi_link, ['history'])

}

function update_papi_link(endpoint) {
  key = $(this).parentsUntil('.key_main').find('span.key-name').text()
  link = papi_stat_link(key, endpoint, 3)
  $(this).attr('href', link)
  $(this).text(link)
}


function antisquash_key(key) {
  // If a key ends in .N, convert the N to 1
  if (key.endsWith('.N')) {
    key =  key.replace(/\.N$/, '.1')
  }
  return key
}

function papi_stat_link(key, endpoint, papi_vers) {
  key = antisquash_key(key)
  server = 'https://' + cluster_ip + ':8080'
  uri = '/platform/' + papi_vers + '/statistics/'
  uri += endpoint + '?keys=' + key
  link = server + encodeURI(uri)
  return link
}
