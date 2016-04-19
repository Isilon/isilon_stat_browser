var keyDict = {
  "keys": {
    "node.ifs.cache.l2.meta.read.start": {
      "sub": "L2 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ifs", 
        "read", 
        "meta-data", 
        "cache", 
        "start", 
        "meta", 
        "l2", 
        "starts", 
        "(bytes/sec)", 
        "node.ifs.cache.l2.meta.read.start"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l2.meta.read.start", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L2 meta-data cache read starts (bytes/sec)"
    }, 
    "node.net.ext.packets.out.rate": {
      "sub": "External", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "tags": [
        "ext_network", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "ext_network", 
        "for", 
        "second", 
        "interfaces", 
        "packets", 
        "rate", 
        "per", 
        "ext", 
        "node's", 
        "external", 
        "output", 
        "net", 
        "insightiq", 
        "node.net.ext.packets.out.rate", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.ext.packets.out.rate", 
      "units": "packets per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Output packets per second for a node's external interfaces"
    }, 
    "node.disk.access.write.hist3.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "write", 
        "node.disk.access.write.hist3.n", 
        "of", 
        "hist3", 
        "accesses", 
        "n", 
        "access", 
        "3", 
        "no:", 
        "in", 
        "bin", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.write.hist3.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of write accesses in bin 3 N"
    }, 
    "node.disk.access.write.hist1.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "write", 
        "hist1", 
        "of", 
        "accesses", 
        "n", 
        "access", 
        "1", 
        "node.disk.access.write.hist1.n", 
        "no:", 
        "in", 
        "bin", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.write.hist1.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of write accesses in bin 1 N"
    }, 
    "node.nfs.cache_stats.ccb.negative_hits": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "cache", 
        "cache_stats", 
        "negative", 
        "nfs", 
        "negative_hits", 
        "node.nfs.cache_stats.ccb.negative_hits", 
        "ccb"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.ccb.negative_hits", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "CCB cache negative hits"
    }, 
    "node.sensor.volt.volts.nv1Vcur": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "10", 
        "electric", 
        "volts", 
        "of", 
        "node.sensor.volt.volts.nv1vcur", 
        "number", 
        "volt", 
        "nv1vcur", 
        "potential", 
        "in", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.volt.volts.10", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.nv1Vcur", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 10"
    }, 
    "node.clientstats.proto.nfs4": {
      "sub": "Top-N Clients", 
      "super": "Client", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "client", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "node.clientstats.proto.nfs4", 
        "for", 
        "proto", 
        "clientstats", 
        "per", 
        "client", 
        "client-protocol-class", 
        "nfs4", 
        "performance", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.proto.nfs4", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_client_proto_list_v2", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Per client-protocol-class performance statistics for NFS4"
    }, 
    "node.memory.used": {
      "sub": "Memory and Internal Cache Usage", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.memory", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "use", 
        "used", 
        "that", 
        "of", 
        "in", 
        "bytes", 
        "system", 
        "are", 
        "memory", 
        "node.memory.used", 
        "physical"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.memory.used", 
      "units": "bytes", 
      "scope": "node", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Bytes of physical system memory that are in use"
    }, 
    "node.ifs.ssd.bytes.used": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.space", 
      "tags": [
        "ifs"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "used", 
        "ifs", 
        "of", 
        "bytes", 
        "number", 
        "on/ifs", 
        "ssds", 
        "ssd", 
        "the", 
        "node.ifs.ssd.bytes.used"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "node.ifs.ssd.bytes.used", 
      "units": "bytes", 
      "scope": "node", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Number of used bytes on SSDs on/ifs on the node"
    }, 
    "node.ifs.cache.l1.meta.read.miss": {
      "sub": "L1 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ifs", 
        "read", 
        "meta-data", 
        "cache", 
        "misses", 
        "meta", 
        "l1", 
        "(bytes/sec)", 
        "miss", 
        "node.ifs.cache.l1.meta.read.miss"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l1.meta.read.miss", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L1 meta-data cache read misses (bytes/sec)"
    }, 
    "node.disk.bytes.in.rate.all": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": "node.disk.perfs", 
      "tags": [
        "disk", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "for", 
        "second", 
        "disks", 
        "bytes", 
        "written", 
        "per", 
        "rate", 
        "node.disk.bytes.in.rate.all", 
        "in", 
        "disk", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.bytes.in.rate.all", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_node_disk_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Bytes written per second for all disks"
    }, 
    "node.cpu.sys.avg": {
      "sub": "Node", 
      "super": "CPU", 
      "aggregation_type": "average", 
      "base_name": "node.cpu.usage", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "of", 
        "average", 
        "percent", 
        "system", 
        "sys", 
        "in", 
        "usage", 
        "avg", 
        "cpu", 
        "tenths", 
        "node.cpu.sys.avg"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.cpu.sys.avg", 
      "units": "permil", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Node average of system CPU usage in tenths of a percent"
    }, 
    "node.cpu.nice.max": {
      "sub": "Node", 
      "super": "CPU", 
      "aggregation_type": "maximum", 
      "base_name": "node.cpu.usage", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "percent", 
        "max", 
        "average", 
        "in", 
        "node.cpu.nice.max", 
        "maximum", 
        "of", 
        "usage", 
        "cpu", 
        "tenths", 
        "nice"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.cpu.nice.max", 
      "units": "permil", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Maximum node average of nice CPU usage in tenths of a percent"
    }, 
    "cluster.net.int.errors.out.rate": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.net.int.errors.out.rate", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "all", 
        "errors", 
        "for", 
        "int", 
        "interfaces", 
        "cluster.net.int.errors.out.rate", 
        "second", 
        "per", 
        "cluster", 
        "rate", 
        "internal", 
        "output", 
        "net", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Cluster", 
      "key": "cluster.net.int.errors.out.rate", 
      "units": "errors per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": null, 
      "description": "Output errors per second for all internal interfaces"
    }, 
    "cluster.net.int.packets.in.rate": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.net.int.packets.in.rate", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "all", 
        "for", 
        "int", 
        "interfaces", 
        "packets", 
        "second", 
        "per", 
        "cluster.net.int.packets.in.rate", 
        "cluster", 
        "rate", 
        "internal", 
        "in", 
        "input", 
        "net"
      ], 
      "real_name": null, 
      "subsub": "Cluster", 
      "key": "cluster.net.int.packets.in.rate", 
      "units": "packets per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": null, 
      "description": "Input packets per second for all internal interfaces"
    }, 
    "node.protostats.http.total": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.http", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "statistics", 
        "http", 
        "protostats", 
        "for", 
        "node.protostats.http.total", 
        "per", 
        "performance", 
        "protocol", 
        "total"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.http.total", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol performance statistics for HTTP"
    }, 
    "node.disk.xfers.in.rate.sum": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "total", 
        "disks", 
        "for", 
        "sum", 
        "xfers", 
        "transfers", 
        "second", 
        "per", 
        "rate", 
        "in", 
        "node.disk.xfers.in.rate.sum", 
        "input", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfers.in.rate.sum", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Total input transfers per second for all disks"
    }, 
    "node.ifs.heat.link.total": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.heat.link", 
      "tags": [
        "ifs_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.ifs.heat.link.total", 
        "on", 
        "ifs", 
        "this", 
        "of", 
        "rate", 
        "heat", 
        "link", 
        "ifs_heat", 
        "total", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.link.total", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Total rate of link events on this node"
    }, 
    "cluster.net.int.errors.in.rate": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.net.int.errors.in.rate", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "all", 
        "errors", 
        "for", 
        "int", 
        "interfaces", 
        "second", 
        "per", 
        "cluster", 
        "rate", 
        "internal", 
        "in", 
        "cluster.net.int.errors.in.rate", 
        "input", 
        "net"
      ], 
      "real_name": null, 
      "subsub": "Cluster", 
      "key": "cluster.net.int.errors.in.rate", 
      "units": "errors per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": null, 
      "description": "Input errors per second for all internal interfaces"
    }, 
    "node.sensor.misc.data.addrps2": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "reading", 
        "(as", 
        "int)", 
        "data", 
        "addrps2", 
        "misc", 
        "miscellaneous", 
        "number", 
        "4", 
        "of", 
        "sensors", 
        "node.sensor.misc.data.addrps2", 
        "sensor"
      ], 
      "real_name": "node.sensor.misc.data.4", 
      "subsub": null, 
      "key": "node.sensor.misc.data.addrps2", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number 4"
    }, 
    "node.disk.access.slow.avg": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "avg", 
        "for", 
        "average", 
        "disks", 
        "accesses", 
        "access", 
        "second", 
        "slow", 
        "per", 
        "node.disk.access.slow.avg", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.slow.avg", 
      "units": "cents", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Average slow accesses per second for all disks"
    }, 
    "node.ifs.cache.l1.data.read.miss": {
      "sub": "L1 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ifs", 
        "read", 
        "miss", 
        "cache", 
        "misses", 
        "l1", 
        "(bytes/sec)", 
        "data", 
        "node.ifs.cache.l1.data.read.miss"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l1.data.read.miss", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L1 data cache read misses (bytes/sec)"
    }, 
    "node.ifs.ops.out.rate": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.ops.out", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "ifs", 
        "ops", 
        "/ifs", 
        "node.ifs.ops.out.rate", 
        "(ops/sec)", 
        "to", 
        "rate", 
        "output", 
        "operation", 
        "the", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "node.ifs.ops.out.rate", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Operation output rate to /ifs on the node (ops/sec)"
    }, 
    "node.clientstats.proto.irp": {
      "sub": "Top-N Clients", 
      "super": "Client", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "for", 
        "node.clientstats.proto.irp", 
        "irp", 
        "proto", 
        "clientstats", 
        "per", 
        "client-protocol-class", 
        "irps", 
        "performance"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.proto.irp", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_client_proto_list_v2", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Per client-protocol-class performance statistics for IRPs"
    }, 
    "node.nfs.cache_stats.replay_udp.misses": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.nfs.cache_stats.replay_udp.misses", 
        "udp", 
        "cache", 
        "replay_udp", 
        "cache_stats", 
        "misses", 
        "replay", 
        "nfs"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.replay_udp.misses", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Replay UDP cache misses"
    }, 
    "node.ifs.cache.l1.meta.prefetch.start": {
      "sub": "L1 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ifs", 
        "starts", 
        "meta-data", 
        "cache", 
        "start", 
        "node.ifs.cache.l1.meta.prefetch.start", 
        "meta", 
        "prefetch", 
        "l1", 
        "(bytes/sec)"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l1.meta.prefetch.start", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L1 meta-data cache prefetch starts (bytes/sec)"
    }, 
    "node.disk.latencies": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "custom", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "and", 
        "all", 
        "of", 
        "iosched", 
        "disks", 
        "latencies", 
        "access", 
        "node.disk.latencies", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.latencies", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_disk_latencies", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Iosched and access latencies of all disks"
    }, 
    "node.protostats.cifs.total": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.cifs", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "per", 
        "smb1", 
        "performance", 
        "node.protostats.cifs.total", 
        "total", 
        "cifs"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.cifs.total", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol performance statistics for SMB1"
    }, 
    "node.uma.stats": {
      "sub": "Memory and Internal Cache Usage", 
      "super": "System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "(universal", 
        "statistics", 
        "stats", 
        "allocator)", 
        "uma", 
        "memory", 
        "node.uma.stats"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.uma.stats", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_uma_stats", 
      "policies": null, 
      "description": "UMA (Universal Memory Allocator) statistics"
    }, 
    "node.sensor.curr.amps.cacps2": {
      "sub": "Current (Amperage)", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "1", 
        "curr", 
        "electric", 
        "of", 
        "in", 
        "number", 
        "current", 
        "amps", 
        "cacps2", 
        "sensors", 
        "reading", 
        "sensor", 
        "node.sensor.curr.amps.cacps2"
      ], 
      "real_name": "node.sensor.curr.amps.1", 
      "subsub": null, 
      "key": "node.sensor.curr.amps.cacps2", 
      "units": "amps", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Amps of electric current sensor number 1"
    }, 
    "node.sysfs.var.percent.used": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.var.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "used", 
        "capacity", 
        "/var", 
        "sysfs", 
        "percent", 
        "as", 
        "a", 
        "node.sysfs.var.percent.used", 
        "filesystem", 
        "var", 
        "the", 
        "percentage"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.var.percent.used", 
      "units": "percent", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Used capacity on the /var filesystem as a percentage"
    }, 
    "node.sensor.misc.data.PwrGood2": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "pwrgood2", 
        "(as", 
        "int)", 
        "data", 
        "misc", 
        "miscellaneous", 
        "number", 
        "2", 
        "of", 
        "node.sensor.misc.data.pwrgood2", 
        "reading", 
        "sensor", 
        "sensors"
      ], 
      "real_name": "node.sensor.misc.data.2", 
      "subsub": null, 
      "key": "node.sensor.misc.data.PwrGood2", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number 2"
    }, 
    "node.sensor.curr.amps.N": {
      "sub": "Current (Amperage)", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "node.sensor.curr.amps.n", 
        "curr", 
        "electric", 
        "of", 
        "number", 
        "n", 
        "current", 
        "in", 
        "amps", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.curr.amps.N", 
      "units": "amps", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Amps of electric current sensor number N"
    }, 
    "node.disk.access.read.hist4.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "bin", 
        "node.disk.access.read.hist4.n", 
        "read", 
        "of", 
        "hist4", 
        "accesses", 
        "n", 
        "access", 
        "4", 
        "no:", 
        "in", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.read.hist4.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of read accesses in bin 4 N"
    }, 
    "node.disk.access.read.hist6.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hist6", 
        "no:", 
        "read", 
        "of", 
        "6", 
        "accesses", 
        "n", 
        "access", 
        "node.disk.access.read.hist6.n", 
        "in", 
        "bin", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.read.hist6.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of read accesses in bin 6 N"
    }, 
    "node.ifs.cache.l2.meta.read.miss": {
      "sub": "L2 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "(bytes/sec)", 
        "ifs", 
        "read", 
        "meta-data", 
        "cache", 
        "misses", 
        "meta", 
        "l2", 
        "node.ifs.cache.l2.meta.read.miss", 
        "miss"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l2.meta.read.miss", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L2 meta-data cache read misses (bytes/sec)"
    }, 
    "node.sensor.fan.count": {
      "sub": "Fans", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "count", 
        "on", 
        "this", 
        "of", 
        "number", 
        "fan", 
        "sensors", 
        "sensor", 
        "node.sensor.fan.count"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.fan.count", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of fan sensors on this node"
    }, 
    "node.ifs.cache.l3.data.prefetch.start": {
      "sub": "L3 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.ifs.cache.l3.data.prefetch.start", 
        "ifs", 
        "starts", 
        "cache", 
        "start", 
        "insightiq", 
        "prefetch", 
        "(bytes/sec)", 
        "data", 
        "l3"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l3.data.prefetch.start", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L3 data cache prefetch starts (bytes/sec)"
    }, 
    "node.clientstats.proto.nfs3": {
      "sub": "Top-N Clients", 
      "super": "Client", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "client", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "node.clientstats.proto.nfs3", 
        "for", 
        "proto", 
        "clientstats", 
        "per", 
        "client", 
        "nfs3", 
        "statistics", 
        "client-protocol-class", 
        "performance", 
        "insightiq"
      ], 
      "real_name": "node.clientstats.proto.nfs", 
      "subsub": null, 
      "key": "node.clientstats.proto.nfs3", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_client_proto_list_v2", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Per client-protocol-class performance statistics for NFS3"
    }, 
    "node.net.ext.bytes.in.rate": {
      "sub": "External", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "tags": [
        "ext_network", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "for", 
        "second", 
        "interfaces", 
        "bytes", 
        "rate", 
        "per", 
        "ext", 
        "node's", 
        "external", 
        "in", 
        "node.net.ext.bytes.in.rate", 
        "input", 
        "net", 
        "insightiq", 
        "ext_network"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.ext.bytes.in.rate", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Input bytes per second for a node's external interfaces"
    }, 
    "node.disk.access.read.hist0.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.disk.access.read.hist0.n", 
        "read", 
        "hist0", 
        "in", 
        "accesses", 
        "n", 
        "access", 
        "0", 
        "no:", 
        "of", 
        "bin", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.read.hist0.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of read accesses in bin 0 N"
    }, 
    "node.net.iface.errors.in.rate.N": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "tags": [
        "ext_interface", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ext_interface", 
        "iface", 
        "for", 
        "second", 
        "per", 
        "n", 
        "node.net.iface.errors.in.rate.n", 
        "rate", 
        "errors", 
        "in", 
        "interface", 
        "input", 
        "net", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.iface.errors.in.rate.N", 
      "units": "errors per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Input errors per second for interface N"
    }, 
    "node.nfs.cache_stats.replay_tcp.misses": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.nfs.cache_stats.replay_tcp.misses", 
        "replay_tcp", 
        "cache", 
        "cache_stats", 
        "tcp", 
        "misses", 
        "replay", 
        "nfs"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.replay_tcp.misses", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Replay TCP cache misses"
    }, 
    "node.net.iface.errors.out.rate.N": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "tags": [
        "ext_interface", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ext_interface", 
        "iface", 
        "for", 
        "second", 
        "per", 
        "n", 
        "rate", 
        "errors", 
        "node.net.iface.errors.out.rate.n", 
        "interface", 
        "output", 
        "net", 
        "insightiq", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.iface.errors.out.rate.N", 
      "units": "errors per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Output errors per second for interface N"
    }, 
    "node.nfs.cache_stats.replay_udp.current_size": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "udp", 
        "cache", 
        "current_size", 
        "replay_udp", 
        "cache_stats", 
        "current", 
        "replay", 
        "nfs", 
        "node.nfs.cache_stats.replay_udp.current_size", 
        "size"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.replay_udp.current_size", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Replay UDP cache current size"
    }, 
    "cluster.protostats.nlm": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.nlm", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "protostats", 
        "for", 
        "nlm", 
        "cluster.protostats.nlm", 
        "cluster", 
        "performance", 
        "per-operation", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.nlm", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled per-operation performance statistics for NLM"
    }, 
    "node.sensor.fan.rpms.N": {
      "sub": "Fans", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "number", 
        "of", 
        "rpms", 
        "node.sensor.fan.rpms.n", 
        "n", 
        "fan", 
        "in", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.fan.rpms.N", 
      "units": "rpms", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading in RPMS of fan sensor number N"
    }, 
    "cluster.dedupe.estimated.deduplicated.bytes": {
      "sub": null, 
      "super": "Deduplication", 
      "aggregation_type": "last", 
      "base_name": "cluster.dedupe", 
      "tags": [
        "dedupe", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "estimated", 
        "deduplicated", 
        "bytes", 
        "cluster", 
        "bytes.", 
        "cluster.dedupe.estimated.deduplicated.bytes", 
        "dedupe", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.dedupe.estimated.deduplicated.bytes", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Estimated deduplicated bytes."
    }, 
    "cluster.disk.bytes.out.rate": {
      "sub": "Cluster", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.bytes.out.rate.sum", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "all", 
        "for", 
        "read", 
        "disks", 
        "bytes", 
        "second", 
        "per", 
        "cluster", 
        "rate", 
        "cluster.disk.bytes.out.rate", 
        "disk", 
        "out"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.disk.bytes.out.rate", 
      "units": "bytes per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Bytes read per second for all disks"
    }, 
    "cluster.node.list.diskless": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "cluster.group", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "accelerator", 
        "lnns", 
        "diskless", 
        "of", 
        "list", 
        "as", 
        "cluster", 
        "cluster.node.list.diskless", 
        "comma-separated"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.node.list.diskless", 
      "units": "none", 
      "scope": "cluster", 
      "type": "string", 
      "policies": null, 
      "description": "List of accelerator lnns as a comma-separated list"
    }, 
    "node.protostats.nfs3.total": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.nfs", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "per", 
        "nfs3", 
        "performance", 
        "total", 
        "node.protostats.nfs3.total"
      ], 
      "real_name": "node.protostats.nfs.total", 
      "subsub": null, 
      "key": "node.protostats.nfs3.total", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol performance statistics for NFS3"
    }, 
    "node.net.ext.packets.in.rate": {
      "sub": "External", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "tags": [
        "ext_network", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "node.net.ext.packets.in.rate", 
        "for", 
        "second", 
        "interfaces", 
        "packets", 
        "rate", 
        "per", 
        "ext", 
        "node's", 
        "external", 
        "in", 
        "input", 
        "net", 
        "insightiq", 
        "ext_network"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.ext.packets.in.rate", 
      "units": "packets per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Input packets per second for a node's external interfaces"
    }, 
    "node.ifs.heat.write": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "ifs_file_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "on", 
        "for", 
        "ifs", 
        "this", 
        "/ifs", 
        "events", 
        "write", 
        "entities", 
        "heat", 
        "hottest", 
        "ifs_file_heat", 
        "node.ifs.heat.write"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.write", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_heat_list", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Hottest /ifs entities for write events on this node"
    }, 
    "cluster.net.int.bytes.out.rate": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.net.int.bytes.out.rate", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "cluster.net.int.bytes.out.rate", 
        "all", 
        "for", 
        "int", 
        "interfaces", 
        "bytes", 
        "second", 
        "per", 
        "cluster", 
        "rate", 
        "internal", 
        "output", 
        "net", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Cluster", 
      "key": "cluster.net.int.bytes.out.rate", 
      "units": "bytes per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": null, 
      "description": "Output bytes per second for all internal interfaces"
    }, 
    "node.net.iface.bytes.out.rate.N": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "tags": [
        "ext_interface", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ext_interface", 
        "iface", 
        "for", 
        "second", 
        "bytes", 
        "node.net.iface.bytes.out.rate.n", 
        "per", 
        "n", 
        "rate", 
        "interface", 
        "output", 
        "net", 
        "insightiq", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.iface.bytes.out.rate.N", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Output bytes per second for interface N"
    }, 
    "node.clientstats.connected.siq": {
      "sub": "Connected", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.connected", 
      "tags": [
        "client_connected", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "siq", 
        "of", 
        "clients", 
        "clientstats", 
        "number", 
        "node.clientstats.connected.siq", 
        "connected", 
        "client_connected", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.connected.siq", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Number of connected SIQ clients"
    }, 
    "node.ifs.bytes.free": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.space", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "ifs", 
        "of", 
        "bytes", 
        "number", 
        "free", 
        "node.ifs.bytes.free", 
        "/ifs", 
        "the"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "node.ifs.bytes.free", 
      "units": "bytes", 
      "scope": "node", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Number of free bytes on /ifs on the node"
    }, 
    "node.nvram.battery.status.N": {
      "sub": "NVRAM", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "status", 
        "battery", 
        "node.nvram.battery.status.n", 
        "due", 
        "paused", 
        "15", 
        "index", 
        "temperature", 
        "nvram", 
        "charge", 
        "unknown,", 
        "1", 
        "0", 
        "3", 
        "unable", 
        "5", 
        "4", 
        "7", 
        "6", 
        "9", 
        "8", 
        "=", 
        "charging", 
        "node", 
        "good,", 
        "to", 
        "charge,", 
        "communicate", 
        "failed,", 
        "removed,", 
        "operate,", 
        "accept", 
        "2", 
        "disconnected,", 
        "with", 
        "c/10", 
        "11", 
        "10", 
        "13", 
        "12", 
        "tray", 
        "14", 
        "n.", 
        "of", 
        "charger,", 
        "n", 
        "overcharged", 
        "circuit", 
        "charger", 
        "normally,", 
        "shutdown,", 
        "error,", 
        "pack"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nvram.battery.status.N", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Status of battery with index N. 0 = Unknown, 1 = Unable to communicate with battery charger, 2 = Charger unable to operate, 3 = Battery pack disconnected, 4 = Charge paused due to temperature error, 5 = Charge C/10 paused due to temperature error, 6 = Good, 7 = Battery unable to accept charge, 8 = Battery charging normally, 9 = Good, 10 = Good, 11 = Battery charge circuit shutdown, 12 = Good, 13 = Battery tray removed, 14 = Battery failed, 15 = Battery overcharged"
    }, 
    "node.disk.access.write.hist4.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "write", 
        "of", 
        "hist4", 
        "accesses", 
        "n", 
        "access", 
        "node.disk.access.write.hist4.n", 
        "4", 
        "no:", 
        "in", 
        "bin", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.write.hist4.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of write accesses in bin 4 N"
    }, 
    "cluster.protostats.hdfs": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.hdfs", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "hdfs", 
        "statistics", 
        "protostats", 
        "for", 
        "cluster", 
        "performance", 
        "cluster.protostats.hdfs", 
        "per-operation", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.hdfs", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled per-operation performance statistics for HDFS"
    }, 
    "cluster.node.count.diskless": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "cluster.group", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "count", 
        "accelerator", 
        "diskless", 
        "of", 
        "configured", 
        "number", 
        "/", 
        "cluster", 
        "nodes", 
        "cluster.node.count.diskless"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.node.count.diskless", 
      "units": "none", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of configured diskless / accelerator nodes"
    }, 
    "node.protostats.papi.total": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.papi", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "statistics", 
        "papi", 
        "protostats", 
        "for", 
        "per", 
        "performance", 
        "node.protostats.papi.total", 
        "protocol", 
        "total"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.papi.total", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol performance statistics for PAPI"
    }, 
    "node.nfs.cache_stats.sec_principal.timeout_period": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "sec_principal", 
        "node.nfs.cache_stats.sec_principal.timeout_period", 
        "cache", 
        "cache_stats", 
        "period", 
        "timeout_period", 
        "nfs", 
        "timeout", 
        "security", 
        "principal"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_principal.timeout_period", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security principal cache timeout period"
    }, 
    "node.audit.events.logged.total": {
      "sub": null, 
      "super": "Audit", 
      "aggregation_type": "sum", 
      "base_name": null, 
      "policy_cache_time": 7, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "audit", 
        "of", 
        "isi_audit_d", 
        "logged", 
        "number", 
        "per", 
        "by", 
        "node.audit.events.logged.total", 
        "total", 
        "events"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.audit.events.logged.total", 
      "units": "operations", 
      "scope": "node", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per node total number of events logged by isi_audit_d"
    }, 
    "cluster.cpu.user.max": {
      "sub": "Cluster", 
      "super": "CPU", 
      "aggregation_type": "maximum", 
      "base_name": "node.cpu.user.max", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "a", 
        "cluster.cpu.user.max", 
        "max", 
        "average", 
        "in", 
        "percent", 
        "maximum", 
        "cluster", 
        "user", 
        "of", 
        "usage", 
        "cpu", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.cpu.user.max", 
      "units": "permil", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Maximum cluster average of user CPU usage in tenths of a percent"
    }, 
    "node.disk.xfers.in.rate.all": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": "node.disk.perfs", 
      "tags": [
        "disk", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "disks", 
        "for", 
        "transfers", 
        "xfers", 
        "node.disk.xfers.in.rate.all", 
        "second", 
        "per", 
        "rate", 
        "in", 
        "input", 
        "disk", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfers.in.rate.all", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_node_disk_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Input transfers per second for all disks"
    }, 
    "cluster.dedupe.total.physical.bytes": {
      "sub": null, 
      "super": "Deduplication", 
      "aggregation_type": "last", 
      "base_name": "cluster.dedupe", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "available", 
        "on", 
        "dedupe", 
        "cluster.", 
        "bytes", 
        "cluster", 
        "cluster.dedupe.total.physical.bytes", 
        "the", 
        "total", 
        "physical"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.dedupe.total.physical.bytes", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "The total physical bytes available on the cluster."
    }, 
    "node.disk.access.unfilt.read.hist3.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.disk.access.unfilt.read.hist3.n", 
        "unfiltered", 
        "read", 
        "of", 
        "hist3", 
        "accesses", 
        "n", 
        "access", 
        "bin", 
        "3", 
        "no:", 
        "in", 
        "unfilt", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.unfilt.read.hist3.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of unfiltered accesses in bin 3 N"
    }, 
    "node.protostats.smb1": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "protocol"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "per", 
        "smb1", 
        "node.protostats.smb1", 
        "performance", 
        "protocol-operation"
      ], 
      "real_name": "node.protostats.cifs", 
      "subsub": null, 
      "key": "node.protostats.smb1", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol-operation performance statistics for SMB1"
    }, 
    "node.cpu.sys.max": {
      "sub": "Node", 
      "super": "CPU", 
      "aggregation_type": "maximum", 
      "base_name": "node.cpu.usage", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.cpu.sys.max", 
        "max", 
        "average", 
        "in", 
        "percent", 
        "maximum", 
        "system", 
        "sys", 
        "a", 
        "of", 
        "usage", 
        "cpu", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.cpu.sys.max", 
      "units": "permil", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Maximum node average of system CPU usage in tenths of a percent"
    }, 
    "node.sensor.volt.volts.vacps1": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "electric", 
        "vacps1", 
        "in", 
        "number", 
        "node.sensor.volt.volts.vacps1", 
        "volt", 
        "of", 
        "volts", 
        "sensors", 
        "reading", 
        "sensor", 
        "potential", 
        "14"
      ], 
      "real_name": "node.sensor.volt.volts.14", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.vacps1", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 14"
    }, 
    "node.clientstats.proto.hdfs": {
      "sub": "Top-N Clients", 
      "super": "Client", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "client", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "hdfs", 
        "statistics", 
        "for", 
        "proto", 
        "clientstats", 
        "per", 
        "client", 
        "client-protocol-class", 
        "performance", 
        "node.clientstats.proto.hdfs", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.proto.hdfs", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_client_proto_list_v2", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Per client-protocol-class performance statistics for HDFS"
    }, 
    "node.ifs.num.lookups": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "on", 
        "lookups", 
        "num", 
        "ifs", 
        "of", 
        "since", 
        "boot", 
        "number", 
        "node.ifs.num.lookups", 
        "/ifs"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "node.ifs.num.lookups", 
      "units": "operations", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Number of lookups on /ifs since node boot"
    }, 
    "cluster.protostats.irp": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.irp", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "protostats", 
        "for", 
        "irp", 
        "cluster", 
        "cluster.protostats.irp", 
        "irps", 
        "performance", 
        "per-operation", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.irp", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled per-operation performance statistics for IRPs"
    }, 
    "node.protostats.http": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "protocol"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "http", 
        "protostats", 
        "for", 
        "per", 
        "protocol", 
        "performance", 
        "protocol-operation", 
        "node.protostats.http"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.http", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol-operation performance statistics for HTTP"
    }, 
    "node.cpu.intr.N": {
      "sub": "Node", 
      "super": "CPU", 
      "aggregation_type": "average", 
      "base_name": "node.cpu.usage", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "for", 
        "index", 
        "of", 
        "in", 
        "percent", 
        "node.cpu.intr.n", 
        "n", 
        "usage", 
        "intr", 
        "interrupt", 
        "with", 
        "cpu", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.cpu.intr.N", 
      "units": "permil", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Interrupt CPU usage in tenths of a percent for CPU with index N"
    }, 
    "node.nfs.cache_stats.v4_dircache.timeout_period": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "cache", 
        "cache_stats", 
        "period", 
        "timeout_period", 
        "nfs", 
        "timeout", 
        "v4_dircache", 
        "directory", 
        "v4", 
        "node.nfs.cache_stats.v4_dircache.timeout_period"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.v4_dircache.timeout_period", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "V4 directory cache cache timeout period"
    }, 
    "node.disk.name.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "index", 
        "name", 
        "of", 
        "bay", 
        "node.disk.name.n", 
        "n", 
        "disk", 
        "with"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.name.N", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Bay name of disk with index N"
    }, 
    "ifs.bytes.reserved.snapshots": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "reserved", 
        "for", 
        "space", 
        "ifs", 
        "bytes", 
        "snapshots", 
        "ifs.bytes.reserved.snapshots", 
        "snapshots,", 
        "in"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "ifs.bytes.reserved.snapshots", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "uint64", 
      "policies": null, 
      "description": "Space reserved for snapshots, in bytes"
    }, 
    "node.net.iface.packets.in.rate.N": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "tags": [
        "ext_interface", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ext_interface", 
        "iface", 
        "for", 
        "node.net.iface.packets.in.rate.n", 
        "packets", 
        "second", 
        "per", 
        "n", 
        "rate", 
        "in", 
        "interface", 
        "input", 
        "net", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.iface.packets.in.rate.N", 
      "units": "packets per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Input packets per second for interface N"
    }, 
    "node.ifs.cache.l3.meta.read.hit": {
      "sub": "L3 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "hit", 
        "ifs", 
        "read", 
        "meta-data", 
        "cache", 
        "node.ifs.cache.l3.meta.read.hit", 
        "meta", 
        "l3", 
        "(bytes/sec)", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l3.meta.read.hit", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L3 meta-data cache read hits (bytes/sec)"
    }, 
    "ifs.percent.used": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "ifs.fsspace", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "used", 
        "for", 
        "ifs", 
        "/ifs", 
        "filesystem", 
        "percent", 
        "storage", 
        "ifs.percent.used", 
        "of"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "ifs.percent.used", 
      "units": "percent", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Percent of /ifs filesystem used for storage"
    }, 
    "node.sensor.power.names": {
      "sub": "Power", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "power supplies", 
        "sensors", 
        "PSU"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "via", 
        "extra", 
        "attribute", 
        "one", 
        "tag", 
        "names", 
        "two", 
        "node.sensor.power.names", 
        "sensor", 
        "node", 
        "power supplies", 
        "added", 
        "power", 
        "key", 
        "sensors", 
        "(csv)", 
        "psu", 
        "on", 
        "name", 
        "defs.", 
        "this", 
        "of", 
        "list", 
        "arbitrary"
      ], 
      "real_name": null, 
      "xtra_attrs": {
        "Arbitrary detail one": "Extra arbitrary key attribute one added via tag defs.", 
        "Arbitrary detail two": "Extra arbitrary key attribute two added via tag defs."
      }, 
      "subsub": null, 
      "key": "node.sensor.power.names", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Name list (CSV) of power sensors on this node"
    }, 
    "node.disk.iosched.latency.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "latency", 
        "for", 
        "index", 
        "node.disk.iosched.latency.n", 
        "iosched", 
        "n", 
        "disk", 
        "with"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.iosched.latency.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "iosched latency for disk with index N"
    }, 
    "cluster.cpu.sys.max": {
      "sub": "Cluster", 
      "super": "CPU", 
      "aggregation_type": "maximum", 
      "base_name": "node.cpu.sys.max", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "cluster.cpu.sys.max", 
        "a", 
        "sytem", 
        "max", 
        "average", 
        "in", 
        "percent", 
        "maximum", 
        "sys", 
        "cluster", 
        "of", 
        "usage", 
        "cpu", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.cpu.sys.max", 
      "units": "permil", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Maximum cluster average of sytem CPU usage in tenths of a percent"
    }, 
    "node.clientstats.proto.smb2": {
      "sub": "Top-N Clients", 
      "super": "Client", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "client", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "node.clientstats.proto.smb2", 
        "for", 
        "proto", 
        "smb2", 
        "clientstats", 
        "per", 
        "client", 
        "client-protocol-class", 
        "performance", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.proto.smb2", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_client_proto_list_v2", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Per client-protocol-class performance statistics for SMB2"
    }, 
    "node.clientstats.proto.smb1": {
      "sub": "Top-N Clients", 
      "super": "Client", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "client", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "for", 
        "node.clientstats.proto.smb1", 
        "proto", 
        "clientstats", 
        "per", 
        "smb1", 
        "client", 
        "client-protocol-class", 
        "performance", 
        "insightiq"
      ], 
      "real_name": "node.clientstats.proto.cifs", 
      "subsub": null, 
      "key": "node.clientstats.proto.smb1", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_client_proto_list_v2", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Per client-protocol-class performance statistics for SMB1"
    }, 
    "node.protostats.irp": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "protostats", 
        "for", 
        "irp", 
        "per", 
        "node.protostats.irp", 
        "irps", 
        "performance", 
        "protocol-operation"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.irp", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol-operation performance statistics for IRPs"
    }, 
    "node.sensor.misc.data.Ocp1": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "reading", 
        "(as", 
        "int)", 
        "data", 
        "misc", 
        "miscellaneous", 
        "number", 
        "node.sensor.misc.data.ocp1", 
        "5", 
        "of", 
        "sensors", 
        "ocp1", 
        "sensor"
      ], 
      "real_name": "node.sensor.misc.data.5", 
      "subsub": null, 
      "key": "node.sensor.misc.data.Ocp1", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number 5"
    }, 
    "node.disk.xfers.out.rate.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "index", 
        "for", 
        "node.disk.xfers.out.rate.n", 
        "xfers", 
        "second", 
        "per", 
        "n", 
        "rate", 
        "transfers", 
        "output", 
        "disk", 
        "with", 
        "out"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfers.out.rate.N", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Output transfers per second for disk with index N"
    }, 
    "node.ifs.heat.blocked.total": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.heat.blocked", 
      "tags": [
        "ifs_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "ifs", 
        "this", 
        "of", 
        "rate", 
        "heat", 
        "node.ifs.heat.blocked.total", 
        "ifs_heat", 
        "total", 
        "events", 
        "blocked"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.blocked.total", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Total rate of blocked events on this node"
    }, 
    "node.clientstats.active.jobd": {
      "sub": "Active", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.proto.jobd", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "simultaneous", 
        "of", 
        "clients", 
        "number", 
        "clientstats", 
        "jobd", 
        "node.clientstats.active.jobd", 
        "active", 
        "using"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.active.jobd", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of simultaneous active clients using JOBD"
    }, 
    "node.nfs.cache_stats.replay_udp.timeout_count": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "count", 
        "udp", 
        "cache", 
        "timeout_count", 
        "replay_udp", 
        "cache_stats", 
        "replay", 
        "nfs", 
        "timeout", 
        "node.nfs.cache_stats.replay_udp.timeout_count"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.replay_udp.timeout_count", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Replay UDP cache timeout count"
    }, 
    "node.disk.iosched.queue.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "index", 
        "for", 
        "with", 
        "iosched", 
        "n", 
        "queue", 
        "length", 
        "disk", 
        "node.disk.iosched.queue.n"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.iosched.queue.N", 
      "units": "cents", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "iosched queue length for disk with index N"
    }, 
    "node.ifs.ssd.bytes.free": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.space", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.ifs.ssd.bytes.free", 
        "ifs", 
        "of", 
        "bytes", 
        "number", 
        "free", 
        "/ifs", 
        "ssds", 
        "ssd", 
        "the", 
        "on"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "node.ifs.ssd.bytes.free", 
      "units": "bytes", 
      "scope": "node", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Number of free bytes on SSDs on /ifs on the node"
    }, 
    "node.ifs.rbm.throttle_events": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "on", 
        "throttle", 
        "throttle_events", 
        "of", 
        "ifs", 
        "number", 
        "node.ifs.rbm.throttle_events", 
        "rbm", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "node.ifs.rbm.throttle_events", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Number of throttle events on RBM"
    }, 
    "node.disk.unhealthy.count": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.healths", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "count", 
        "ok", 
        "unhealthy", 
        "that", 
        "not", 
        "of", 
        "node.disk.unhealthy.count", 
        "are", 
        "disks/bays", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.unhealthy.count", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Count of disks/bays that are not OK"
    }, 
    "node.sensor.fan.desc.N": {
      "sub": "Fans", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "description", 
        "node.sensor.fan.desc.n", 
        "number", 
        "n", 
        "fan", 
        "of", 
        "sensors", 
        "sensor", 
        "speed", 
        "desc"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.fan.desc.N", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Description of fan speed sensor number N"
    }, 
    "node.disk.iosched.latency.all": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": "node.disk.perfs", 
      "tags": [
        "disk", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "latency", 
        "all", 
        "for", 
        "iosched", 
        "disks", 
        "node.disk.iosched.latency.all", 
        "disk", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.iosched.latency.all", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_node_disk_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Iosched latency for all disks"
    }, 
    "node.sensor.curr.count": {
      "sub": "Current (Amperage)", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "count", 
        "node.sensor.curr.count", 
        "curr", 
        "electric", 
        "on", 
        "this", 
        "of", 
        "number", 
        "current", 
        "sensors", 
        "sensor"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.curr.count", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of electric current sensors on this node"
    }, 
    "node.sensor.temp.desc.N": {
      "sub": "Temperature", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "temp", 
        "node.sensor.temp.desc.n", 
        "of", 
        "description", 
        "number", 
        "n", 
        "temperature", 
        "sensors", 
        "sensor", 
        "desc"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.temp.desc.N", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Description of temperature sensor number N"
    }, 
    "node.sysfs.varcrash.percent.free": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.varcrash.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "capacity", 
        "node.sysfs.varcrash.percent.free", 
        "sysfs", 
        "percent", 
        "free", 
        "as", 
        "a", 
        "filesystem", 
        "/var/crash", 
        "the", 
        "varcrash", 
        "percentage"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.varcrash.percent.free", 
      "units": "percent", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Free capacity on the /var/crash filesystem as a percentage"
    }, 
    "node.disk.lnum.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "index", 
        "number", 
        "lnum", 
        "of", 
        "node.disk.lnum.n", 
        "logical", 
        "n", 
        "disk", 
        "with"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.lnum.N", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Logical number of disk with index N"
    }, 
    "node.nfs.cache_stats.sec_sid.timeout_count": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.nfs.cache_stats.sec_sid.timeout_count", 
        "timeout_count", 
        "cache", 
        "cache_stats", 
        "nfs", 
        "timeout", 
        "sid", 
        "sec_sid", 
        "security", 
        "count"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_sid.timeout_count", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security SID cache timeout count"
    }, 
    "node.disk.busy.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "node.disk.busy.n", 
        "busy", 
        "for", 
        "index", 
        "of", 
        "percent", 
        "n", 
        "in", 
        "disk", 
        "with", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.busy.N", 
      "units": "permil", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Disk busy in tenths of a percent for disk with index N"
    }, 
    "cluster.protostats.ftp.total": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.ftp.total", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "ftp", 
        "statistics", 
        "protostats", 
        "for", 
        "cluster", 
        "cluster.protostats.ftp.total", 
        "performance", 
        "total", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.ftp.total", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled performance statistics for FTP"
    }, 
    "node.ifs.cache.l1.data.read.wait": {
      "sub": "L1 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ifs", 
        "read", 
        "cache", 
        "node.ifs.cache.l1.data.read.wait", 
        "waits", 
        "l1", 
        "(bytes/sec)", 
        "data", 
        "wait"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l1.data.read.wait", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L1 data cache read waits (bytes/sec)"
    }, 
    "node.sensor.temp.celsius.N": {
      "sub": "Temperature", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "temperature", 
        "temp", 
        "sensor", 
        "of", 
        "number", 
        "n", 
        "celsius", 
        "in", 
        "sensors", 
        "reading", 
        "node.sensor.temp.celsius.n"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.temp.celsius.N", 
      "units": "celsius", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Celsius of temperature sensor number N"
    }, 
    "node.sensor.volt.volts.vCore1": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "6", 
        "vcore1", 
        "electric", 
        "node.sensor.volt.volts.vcore1", 
        "in", 
        "number", 
        "volt", 
        "of", 
        "volts", 
        "sensors", 
        "reading", 
        "sensor", 
        "potential"
      ], 
      "real_name": "node.sensor.volt.volts.6", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.vCore1", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 6"
    }, 
    "node.sensor.misc.names": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "on", 
        "name", 
        "this", 
        "list", 
        "node.sensor.misc.names", 
        "misc", 
        "miscellaneous", 
        "(csv)", 
        "names", 
        "of", 
        "sensors", 
        "sensor"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.misc.names", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Name list (CSV) of miscellaneous sensors on this node"
    }, 
    "node.protostats.smb2.total": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.smb2", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "node.protostats.smb2.total", 
        "smb2", 
        "per", 
        "performance", 
        "total"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.smb2.total", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol performance statistics for SMB2"
    }, 
    "node.nfs.cache_stats.v4_dircache.timeout_count": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "count", 
        "timeout_count", 
        "node.nfs.cache_stats.v4_dircache.timeout_count", 
        "cache", 
        "cache_stats", 
        "nfs", 
        "timeout", 
        "v4_dircache", 
        "directory", 
        "v4"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.v4_dircache.timeout_count", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "V4 directory cache cache timeout count"
    }, 
    "node.sensor.volt.volts.vCore0": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "vcore0", 
        "electric", 
        "volts", 
        "of", 
        "number", 
        "volt", 
        "potential", 
        "5", 
        "in", 
        "sensors", 
        "reading", 
        "sensor", 
        "node.sensor.volt.volts.vcore0"
      ], 
      "real_name": "node.sensor.volt.volts.5", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.vCore0", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 5"
    }, 
    "node.sensor.volt.volts.N": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "electric", 
        "node.sensor.volt.volts.n", 
        "in", 
        "number", 
        "n", 
        "volt", 
        "of", 
        "volts", 
        "sensors", 
        "reading", 
        "sensor", 
        "potential"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.volt.volts.N", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number N"
    }, 
    "node.disk.ifs.inodes.used.all": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "custom", 
      "base_name": "node.disk.ifs.space", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "all", 
        "used", 
        "ifs", 
        "of", 
        "disks", 
        "node.disk.ifs.inodes.used.all", 
        "/ifs", 
        "disk", 
        "inodes"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.ifs.inodes.used.all", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_node_disk_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Used inodes of /ifs on all disks"
    }, 
    "cluster.protostats.cifs.total": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.cifs.total", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "smb1", 
        "protostats", 
        "for", 
        "cluster.protostats.cifs.total", 
        "cluster", 
        "performance", 
        "total", 
        "totaled", 
        "cifs"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.cifs.total", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled performance statistics for SMB1"
    }, 
    "node.disk.access.read.hist3.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "bin", 
        "read", 
        "of", 
        "hist3", 
        "in", 
        "accesses", 
        "n", 
        "access", 
        "3", 
        "no:", 
        "node.disk.access.read.hist3.n", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.read.hist3.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of read accesses in bin 3 N"
    }, 
    "ifs.bytes.out.rate.max": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "maximum", 
      "base_name": "node.ifs.bytes.out.rate", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "ifs", 
        "max", 
        "cumulative", 
        "bytes", 
        "maximum", 
        "per", 
        "/ifs", 
        "rate", 
        "of", 
        "throughput", 
        "second)", 
        "(bytes", 
        "ifs.bytes.out.rate.max", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Throughput", 
      "key": "ifs.bytes.out.rate.max", 
      "units": "bytes per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Cumulative maximum throughput rate (bytes per second) out of /ifs"
    }, 
    "node.sensor.misc.data.TempFail2": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "(as", 
        "number", 
        "14", 
        "int)", 
        "data", 
        "misc", 
        "tempfail2", 
        "miscellaneous", 
        "node.sensor.misc.data.tempfail2", 
        "of", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.misc.data.14", 
      "subsub": null, 
      "key": "node.sensor.misc.data.TempFail2", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number 14"
    }, 
    "cluster.protostats.smb2.total": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.smb2.total", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "protostats", 
        "for", 
        "smb2", 
        "cluster.protostats.smb2.total", 
        "cluster", 
        "performance", 
        "total", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.smb2.total", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled performance statistics for SMB2"
    }, 
    "node.clientstats.proto.cifs": {
      "sub": "Top-N Clients", 
      "super": "Client", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "node.clientstats.proto.cifs", 
        "cifs", 
        "for", 
        "proto", 
        "clientstats", 
        "per", 
        "smb1", 
        "client-protocol-class", 
        "performance"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.proto.cifs", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_client_proto_list_v2", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Per client-protocol-class performance statistics for SMB1"
    }, 
    "node.disk.xfer.size.out.avg": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "disk", 
        "node.disk.xfer.size.out.avg", 
        "transfer", 
        "average", 
        "size", 
        "bytes", 
        "in", 
        "output", 
        "xfer", 
        "avg", 
        "out"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfer.size.out.avg", 
      "units": "bytes", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Average output transfer size in bytes"
    }, 
    "node.ifs.heat.read": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "ifs_file_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "on", 
        "for", 
        "ifs", 
        "read", 
        "/ifs", 
        "this", 
        "node.ifs.heat.read", 
        "entities", 
        "heat", 
        "hottest", 
        "ifs_file_heat", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.read", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_heat_list", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Hottest /ifs entities for read events on this node"
    }, 
    "node.clientstats.active.nfs4": {
      "sub": "Active", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.proto.nfs4", 
      "tags": [
        "client_active", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "of", 
        "clients", 
        "number", 
        "node.clientstats.active.nfs4", 
        "clientstats", 
        "simultaneous", 
        "client_active", 
        "nfs4", 
        "active", 
        "using", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.active.nfs4", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Number of simultaneous active clients using NFS4"
    }, 
    "node.nfs.cache_stats.sec_sid.current_size": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "current_size", 
        "cache", 
        "cache_stats", 
        "current", 
        "nfs", 
        "node.nfs.cache_stats.sec_sid.current_size", 
        "sid", 
        "sec_sid", 
        "security", 
        "size"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_sid.current_size", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security SID cache current size"
    }, 
    "node.clientstats.active.ftp": {
      "sub": "Active", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.proto.ftp", 
      "tags": [
        "client_active", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ftp", 
        "of", 
        "clients", 
        "number", 
        "clientstats", 
        "simultaneous", 
        "client_active", 
        "active", 
        "using", 
        "node.clientstats.active.ftp", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.active.ftp", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Number of simultaneous active clients using FTP"
    }, 
    "node.protostats.smb1.total": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.cifs", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "node.protostats.smb1.total", 
        "per", 
        "smb1", 
        "performance", 
        "total"
      ], 
      "real_name": "node.protostats.cifs.total", 
      "subsub": null, 
      "key": "node.protostats.smb1.total", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol performance statistics for SMB1"
    }, 
    "node.ifs.heat.deadlocked.total": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.heat.deadlocked", 
      "tags": [
        "ifs_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "ifs", 
        "this", 
        "of", 
        "rate", 
        "heat", 
        "ifs_heat", 
        "deadlocked", 
        "total", 
        "events", 
        "node.ifs.heat.deadlocked.total"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.deadlocked.total", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Total rate of deadlocked events on this node"
    }, 
    "node.clientstats.connected.papi": {
      "sub": "Connected", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "client_connected", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 65534, 
      "search_terms": [
        "node", 
        "papi", 
        "of", 
        "clients", 
        "clientstats", 
        "number", 
        "connected", 
        "client_connected", 
        "node.clientstats.connected.papi", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.connected.papi", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Number of connected PAPI clients"
    }, 
    "node.ifs.bytes.in": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "ifs", 
        "/ifs", 
        "since", 
        "bytes", 
        "to", 
        "node.ifs.bytes.in", 
        "in", 
        "input", 
        "boot"
      ], 
      "real_name": null, 
      "subsub": "Throughput", 
      "key": "node.ifs.bytes.in", 
      "units": "bytes", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Bytes input to /ifs since node boot"
    }, 
    "cluster.protostats.nfs.total": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.nfs.total", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "protostats", 
        "for", 
        "cluster", 
        "nfs3", 
        "nfs", 
        "totaled", 
        "performance", 
        "total", 
        "cluster.protostats.nfs.total"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.nfs.total", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled performance statistics for NFS3"
    }, 
    "node.sensor.altitude.count": {
      "sub": "Altitude", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "altitude", 
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "count", 
        "process.", 
        "added", 
        "on", 
        "this", 
        "node.sensor.altitude.count", 
        "altitude", 
        "extra", 
        "number", 
        "an", 
        "note", 
        "of", 
        "during", 
        "sensors", 
        "sensor", 
        "is", 
        "tagging"
      ], 
      "real_name": null, 
      "xtra_attrs": {
        "Note": "This is an extra note added during tagging process."
      }, 
      "subsub": null, 
      "key": "node.sensor.altitude.count", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of altitude sensors on this node"
    }, 
    "node.disk.access.unfilt.read.hist4.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "bin", 
        "unfiltered", 
        "read", 
        "of", 
        "node.disk.access.unfilt.read.hist4.n", 
        "hist4", 
        "accesses", 
        "n", 
        "access", 
        "4", 
        "no:", 
        "in", 
        "unfilt", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.unfilt.read.hist4.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of unfiltered accesses in bin 4 N"
    }, 
    "node.clientstats.proto.lsass_out": {
      "sub": "Top-N Clients", 
      "super": "Client", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "for", 
        "proto", 
        "clientstats", 
        "per", 
        "lsass_out", 
        "client-protocol-class", 
        "performance", 
        "node.clientstats.proto.lsass_out"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.proto.lsass_out", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_client_proto_list_v2", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Per client-protocol-class performance statistics for LSASS_OUT"
    }, 
    "cluster.group": {
      "sub": "Cluster Info and Status", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 600, 
      "search_terms": [
        "cluster.group", 
        "cluster", 
        "group", 
        "description", 
        "string"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.group", 
      "units": "none", 
      "scope": "cluster", 
      "type": "string", 
      "policies": null, 
      "description": "Group description string"
    }, 
    "node.disk.ifs.bytes.free.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.ifs.space", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "ifs", 
        "of", 
        "bytes", 
        "free", 
        "n", 
        "index", 
        "node.disk.ifs.bytes.free.n", 
        "/ifs", 
        "disk", 
        "with"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.ifs.bytes.free.N", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Free bytes of /ifs on disk with index N"
    }, 
    "node.nfs.cache_stats.sec_username.positive_hits": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "username", 
        "sec_username", 
        "positive", 
        "cache", 
        "cache_stats", 
        "nfs", 
        "positive_hits", 
        "node.nfs.cache_stats.sec_username.positive_hits", 
        "security", 
        "hits"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_username.positive_hits", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security username cache positive hits"
    }, 
    "node.ifs.cache.l3.data.read.miss": {
      "sub": "L3 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.ifs.cache.l3.data.read.miss", 
        "ifs", 
        "read", 
        "miss", 
        "cache", 
        "misses", 
        "l3", 
        "(bytes/sec)", 
        "data", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l3.data.read.miss", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L3 data cache read misses (bytes/sec)"
    }, 
    "node.health": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "a", 
        "node.health", 
        "of", 
        "1", 
        "0", 
        "node:", 
        "health", 
        "healthy,", 
        "2", 
        "=", 
        "attention,", 
        "down"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.health", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Health of a node: 0 = Healthy, 1 = Attention, 2 = Down"
    }, 
    "node.ifs.cache.l2.meta.read.wait": {
      "sub": "L2 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ifs", 
        "read", 
        "meta-data", 
        "cache", 
        "node.ifs.cache.l2.meta.read.wait", 
        "meta", 
        "l2", 
        "waits", 
        "(bytes/sec)", 
        "wait"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l2.meta.read.wait", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L2 meta-data cache read waits (bytes/sec)"
    }, 
    "cluster.node.count.down": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "cluster.group", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "count", 
        "of", 
        "currently", 
        "number", 
        "down", 
        "cluster", 
        "cluster.node.count.down", 
        "nodes"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.node.count.down", 
      "units": "none", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of cluster nodes currently down"
    }, 
    "node.protostats.lsass_in": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "lsass_in", 
        "protostats", 
        "for", 
        "per", 
        "performance", 
        "protocol-operation", 
        "node.protostats.lsass_in"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.lsass_in", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol-operation performance statistics for LSASS_IN"
    }, 
    "node.nfs.cache_stats.v4_dircache.maximum_size": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "cache", 
        "v4", 
        "cache_stats", 
        "maximum", 
        "node.nfs.cache_stats.v4_dircache.maximum_size", 
        "v4_dircache", 
        "directory", 
        "nfs", 
        "maximum_size", 
        "size"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.v4_dircache.maximum_size", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "V4 directory cache cache maximum size"
    }, 
    "node.disk.access.slow.sum": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "slow", 
        "for", 
        "sum", 
        "disks", 
        "accesses", 
        "access", 
        "second", 
        "per", 
        "total", 
        "disk", 
        "node.disk.access.slow.sum"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.slow.sum", 
      "units": "cents", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Total slow accesses per second for all disks"
    }, 
    "node.net.int.bytes.in.rate": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "for", 
        "int", 
        "interfaces", 
        "bytes", 
        "second", 
        "node.net.int.bytes.in.rate", 
        "rate", 
        "internal", 
        "node's", 
        "per", 
        "in", 
        "input", 
        "net"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.int.bytes.in.rate", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Input bytes per second for a node's internal interfaces"
    }, 
    "node.disk.type.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "index", 
        "with", 
        "of", 
        "n", 
        "disk", 
        "type", 
        "node.disk.type.n"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.type.N", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Type of disk with index N"
    }, 
    "node.sensor.volt.volts.vacps2": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "15", 
        "electric", 
        "volts", 
        "of", 
        "node.sensor.volt.volts.vacps2", 
        "number", 
        "volt", 
        "potential", 
        "in", 
        "sensors", 
        "reading", 
        "sensor", 
        "vacps2"
      ], 
      "real_name": "node.sensor.volt.volts.15", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.vacps2", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 15"
    }, 
    "ifs.ssd.percent.free": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "ifs.fsspace", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "system", 
        "for", 
        "ifs", 
        "of", 
        "ifs.ssd.percent.free", 
        "percent", 
        "space", 
        "free", 
        "/ifs", 
        "filesystem", 
        "in", 
        "ssd", 
        "the"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "ifs.ssd.percent.free", 
      "units": "percent", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Percent of SSD space in /ifs filesystem free for the system"
    }, 
    "node.memory.free": {
      "sub": "Memory and Internal Cache Usage", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.memory", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "that", 
        "of", 
        "bytes", 
        "system", 
        "free", 
        "node.memory.free", 
        "are", 
        "memory", 
        "physical"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.memory.free", 
      "units": "bytes", 
      "scope": "node", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Bytes of physical system memory that are free"
    }, 
    "node.cpu.throttling": {
      "sub": "Node", 
      "super": "CPU", 
      "aggregation_type": "average", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "false", 
        "throttled,", 
        "throttling", 
        "cpus", 
        "are", 
        "node.cpu.throttling", 
        "otherwise", 
        "true", 
        "cpu", 
        "if"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.cpu.throttling", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "True if CPUs are throttled, false otherwise"
    }, 
    "node.cpu.user.avg": {
      "sub": "Node", 
      "super": "CPU", 
      "aggregation_type": "average", 
      "base_name": "node.cpu.usage", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "node.cpu.user.avg", 
        "of", 
        "average", 
        "percent", 
        "user", 
        "in", 
        "usage", 
        "avg", 
        "cpu", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.cpu.user.avg", 
      "units": "permil", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Node average of user CPU usage in tenths of a percent"
    }, 
    "node.sensor.misc.data.TempFail1": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "13", 
        "(as", 
        "int)", 
        "data", 
        "misc", 
        "miscellaneous", 
        "tempfail1", 
        "number", 
        "node.sensor.misc.data.tempfail1", 
        "of", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.misc.data.13", 
      "subsub": null, 
      "key": "node.sensor.misc.data.TempFail1", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number 13"
    }, 
    "node.cpu.idle.avg": {
      "sub": "Node", 
      "super": "CPU", 
      "aggregation_type": "average", 
      "base_name": "node.cpu.usage", 
      "tags": [
        "cpu", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "of", 
        "average", 
        "in", 
        "percent", 
        "idle", 
        "node.cpu.idle.avg", 
        "usage", 
        "avg", 
        "cpu", 
        "tenths", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.cpu.idle.avg", 
      "units": "permil", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Node average of idle CPU usage in tenths of a percent"
    }, 
    "node.ifs.cache.l3.data.read.wait": {
      "sub": "L3 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.ifs.cache.l3.data.read.wait", 
        "ifs", 
        "read", 
        "cache", 
        "waits", 
        "insightiq", 
        "l3", 
        "(bytes/sec)", 
        "data", 
        "wait"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l3.data.read.wait", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L3 data cache read waits (bytes/sec)"
    }, 
    "node.ifs.cache.l1.meta.prefetch.hit": {
      "sub": "L1 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.ifs.cache.l1.meta.prefetch.hit", 
        "hit", 
        "ifs", 
        "meta-data", 
        "cache", 
        "hits", 
        "meta", 
        "prefetch", 
        "l1", 
        "(bytes/sec)"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l1.meta.prefetch.hit", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L1 meta-data cache prefetch hits (bytes/sec)"
    }, 
    "node.sysfs.root.bytes.total": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.root.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "capacity", 
        "in", 
        "/root", 
        "sysfs", 
        "bytes", 
        "filesystem", 
        "node.sysfs.root.bytes.total", 
        "total", 
        "root", 
        "the"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.root.bytes.total", 
      "units": "bytes", 
      "scope": "node", 
      "type": "int64", 
      "policies": null, 
      "description": "Total capacity on the /root filesystem in bytes"
    }, 
    "node.sensor.power.count": {
      "sub": "Power", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "power supplies", 
        "sensors", 
        "PSU"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "via", 
        "node.sensor.power.count", 
        "extra", 
        "attribute", 
        "number", 
        "one", 
        "tag", 
        "two", 
        "sensor", 
        "node", 
        "power supplies", 
        "added", 
        "power", 
        "key", 
        "sensors", 
        "psu", 
        "count", 
        "on", 
        "defs.", 
        "this", 
        "of", 
        "arbitrary"
      ], 
      "real_name": null, 
      "xtra_attrs": {
        "Arbitrary detail one": "Extra arbitrary key attribute one added via tag defs.", 
        "Arbitrary detail two": "Extra arbitrary key attribute two added via tag defs."
      }, 
      "subsub": null, 
      "key": "node.sensor.power.count", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of power sensors on this node"
    }, 
    "cluster.protostats.siq.total": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.siq.total", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "siq", 
        "statistics", 
        "protostats", 
        "for", 
        "cluster.protostats.siq.total", 
        "cluster", 
        "performance", 
        "total", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.siq.total", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled performance statistics for SIQ"
    }, 
    "test.node.settable.int": {
      "sub": null, 
      "super": "Uncategorized", 
      "aggregation_type": "average", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "int", 
        "test:", 
        "settable", 
        "test", 
        "scope", 
        "with", 
        "test.node.settable.int"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "test.node.settable.int", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "TEST: settable int with node scope"
    }, 
    "node.disk.ifs.bytes.free.all": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "custom", 
      "base_name": "node.disk.ifs.space", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "all", 
        "ifs", 
        "of", 
        "disks", 
        "bytes", 
        "free", 
        "/ifs", 
        "disk", 
        "node.disk.ifs.bytes.free.all"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.ifs.bytes.free.all", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_node_disk_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Free bytes of /ifs on all disks"
    }, 
    "node.nfs.cache_stats.replay_tcp.positive_hits": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "replay_tcp", 
        "positive", 
        "cache", 
        "cache_stats", 
        "tcp", 
        "node.nfs.cache_stats.replay_tcp.positive_hits", 
        "replay", 
        "nfs", 
        "positive_hits"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.replay_tcp.positive_hits", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Replay TCP cache positive hits"
    }, 
    "node.sensor.volt.volts.12v": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "node.sensor.volt.volts.12v", 
        "electric", 
        "volts", 
        "of", 
        "number", 
        "volt", 
        "potential", 
        "12v", 
        "in", 
        "2", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.volt.volts.2", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.12v", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 2"
    }, 
    "node.sensor.misc.data.Ovp2": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "10", 
        "(as", 
        "int)", 
        "data", 
        "misc", 
        "miscellaneous", 
        "number", 
        "ovp2", 
        "of", 
        "sensors", 
        "reading", 
        "sensor", 
        "node.sensor.misc.data.ovp2"
      ], 
      "real_name": "node.sensor.misc.data.10", 
      "subsub": null, 
      "key": "node.sensor.misc.data.Ovp2", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number 10"
    }, 
    "node.sensor.volt.volts.5v": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "electric", 
        "node.sensor.volt.volts.5v", 
        "volts", 
        "5v", 
        "number", 
        "1", 
        "volt", 
        "of", 
        "in", 
        "sensors", 
        "reading", 
        "sensor", 
        "potential"
      ], 
      "real_name": "node.sensor.volt.volts.1", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.5v", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 1"
    }, 
    "node.ifs.cache.l3.data.prefetch.hit": {
      "sub": "L3 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "hit", 
        "ifs", 
        "cache", 
        "insightiq", 
        "node.ifs.cache.l3.data.prefetch.hit", 
        "prefetch", 
        "(bytes/sec)", 
        "data", 
        "l3"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l3.data.prefetch.hit", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L3 data cache prefetch hits (bytes/sec)"
    }, 
    "cluster.cpu.idle.max": {
      "sub": "Cluster", 
      "super": "CPU", 
      "aggregation_type": "maximum", 
      "base_name": "node.cpu.idle.max", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "a", 
        "cluster.cpu.idle.max", 
        "max", 
        "average", 
        "in", 
        "percent", 
        "maximum", 
        "cluster", 
        "idle", 
        "of", 
        "usage", 
        "cpu", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.cpu.idle.max", 
      "units": "permil", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Maximum cluster average of idle CPU usage in tenths of a percent"
    }, 
    "ifs.bytes.total": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "ifs.fsspace", 
      "tags": [
        "ifs_cluster"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "ifs", 
        "ifs_cluster", 
        "of", 
        "filesystem", 
        "ifs.bytes.total", 
        "number", 
        "/ifs", 
        "bytes", 
        "in", 
        "the", 
        "total"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "ifs.bytes.total", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "int64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Total number of bytes in the /ifs filesystem"
    }, 
    "node.clientstats.active.http": {
      "sub": "Active", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.proto.http", 
      "tags": [
        "client_active", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "http", 
        "of", 
        "node.clientstats.active.http", 
        "clients", 
        "clientstats", 
        "number", 
        "simultaneous", 
        "client_active", 
        "active", 
        "using", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.active.http", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Number of simultaneous active clients using HTTP"
    }, 
    "node.sysfs.varcrash.percent.avail": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.varcrash.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "available", 
        "capacity", 
        "on", 
        "sysfs", 
        "percent", 
        "avail", 
        "node.sysfs.varcrash.percent.avail", 
        "as", 
        "a", 
        "filesystem", 
        "/var/crash", 
        "the", 
        "varcrash", 
        "percentage"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.varcrash.percent.avail", 
      "units": "percent", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Available capacity on the /var/crash filesystem as a percentage"
    }, 
    "node.clientstats.active.lsass_out": {
      "sub": "Active", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.proto.lsass_out", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "of", 
        "clients", 
        "clientstats", 
        "number", 
        "node.clientstats.active.lsass_out", 
        "lsass_out", 
        "simultaneous", 
        "active", 
        "using"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.active.lsass_out", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Number of simultaneous active clients using LSASS_OUT"
    }, 
    "node.ifs.cache.l2.data.prefetch.start": {
      "sub": "L2 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.ifs.cache.l2.data.prefetch.start", 
        "ifs", 
        "starts", 
        "cache", 
        "start", 
        "l2", 
        "prefetch", 
        "(bytes/sec)", 
        "data"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l2.data.prefetch.start", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L2 data cache prefetch starts (bytes/sec)"
    }, 
    "node.net.ext.bytes.out.rate": {
      "sub": "External", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "tags": [
        "ext_network", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "ext_network", 
        "for", 
        "second", 
        "interfaces", 
        "bytes", 
        "rate", 
        "per", 
        "ext", 
        "node's", 
        "external", 
        "output", 
        "net", 
        "insightiq", 
        "node.net.ext.bytes.out.rate", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.ext.bytes.out.rate", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Output bytes per second for a node's external interfaces"
    }, 
    "cluster.node.count.all": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "cluster.group", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "count", 
        "all", 
        "of", 
        "configured", 
        "cluster.node.count.all", 
        "number", 
        "cluster", 
        "in", 
        "nodes", 
        "the"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.node.count.all", 
      "units": "none", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of configured nodes in the cluster"
    }, 
    "node.protostats.siq.total": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.siq", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "siq", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "per", 
        "node.protostats.siq.total", 
        "performance", 
        "total"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.siq.total", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol performance statistics for SIQ"
    }, 
    "ifs.percent.avail": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "ifs.fsspace", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "available", 
        "storage", 
        "for", 
        "ifs", 
        "of", 
        "filesystem", 
        "percent", 
        "avail", 
        "ifs.percent.avail", 
        "/ifs"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "ifs.percent.avail", 
      "units": "percent", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Percent of /ifs filesystem available for storage"
    }, 
    "ifs.ops.in": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "last", 
      "base_name": "node.ifs.ops.in", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "operations", 
        "cumulative", 
        "ifs", 
        "ifs.ops.in", 
        "of", 
        "into", 
        "ops", 
        "number", 
        "/ifs", 
        "in"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "ifs.ops.in", 
      "units": "operations", 
      "scope": "cluster", 
      "type": "uint64", 
      "policies": null, 
      "description": "Cumulative number of operations into /ifs"
    }, 
    "node.audit.cee.export.rate": {
      "sub": null, 
      "super": "Audit", 
      "aggregation_type": "average", 
      "base_name": "node.audit.cee.export.total", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "audit", 
        "cee", 
        "(events/sec)", 
        "of", 
        "node.audit.cee.export.rate", 
        "per", 
        "by", 
        "rate", 
        "export", 
        "exported", 
        "isi_audit_cee", 
        "events"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.audit.cee.export.rate", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per node rate of events exported by isi_audit_cee (events/sec)"
    }, 
    "node.nfs.cache_stats.v4_dircache.current_size": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.nfs.cache_stats.v4_dircache.current_size", 
        "current_size", 
        "cache", 
        "cache_stats", 
        "current", 
        "nfs", 
        "v4_dircache", 
        "directory", 
        "v4", 
        "size"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.v4_dircache.current_size", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "V4 directory cache cache current size"
    }, 
    "node.protostats.ftp": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "protocol"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "ftp", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "node.protostats.ftp", 
        "per", 
        "performance", 
        "protocol-operation"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.ftp", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol-operation performance statistics for FTP"
    }, 
    "node.sensor.fan.rpms.fisi2": {
      "sub": "Fans", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "node.sensor.fan.rpms.fisi2", 
        "of", 
        "rpms", 
        "number", 
        "1", 
        "fan", 
        "in", 
        "fisi2", 
        "reading", 
        "sensor", 
        "sensors"
      ], 
      "real_name": "node.sensor.fan.rpms.1", 
      "subsub": null, 
      "key": "node.sensor.fan.rpms.fisi2", 
      "units": "rpms", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading in RPMS of fan sensor number 1"
    }, 
    "node.sensor.fan.rpms.fisi1": {
      "sub": "Fans", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "of", 
        "rpms", 
        "node.sensor.fan.rpms.fisi1", 
        "number", 
        "0", 
        "fan", 
        "in", 
        "fisi1", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.fan.rpms.0", 
      "subsub": null, 
      "key": "node.sensor.fan.rpms.fisi1", 
      "units": "rpms", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading in RPMS of fan sensor number 0"
    }, 
    "cluster.cpu.intr.max": {
      "sub": "Cluster", 
      "super": "CPU", 
      "aggregation_type": "maximum", 
      "base_name": "node.cpu.intr.max", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "a", 
        "usage", 
        "in", 
        "cluster.cpu.intr.max", 
        "max", 
        "average", 
        "of", 
        "percent", 
        "maximum", 
        "cluster", 
        "intr", 
        "interrupt", 
        "cpu", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.cpu.intr.max", 
      "units": "permil", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Maximum cluster average of interrupt CPU usage in tenths of a percent"
    }, 
    "node.ifs.bytes.out.rate": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.bytes.out", 
      "tags": [
        "ifs_throughput"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ifs_throughput", 
        "from", 
        "ifs", 
        "/ifs", 
        "bytes", 
        "to", 
        "rate", 
        "output", 
        "node.ifs.bytes.out.rate", 
        "(bytes/sec)", 
        "the", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Throughput", 
      "key": "node.ifs.bytes.out.rate", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Output rate to /ifs from the node (bytes/sec)"
    }, 
    "node.ifs.heat.blocked": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "ifs_file_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "node.ifs.heat.blocked", 
        "ifs_file_heat", 
        "for", 
        "ifs", 
        "this", 
        "/ifs", 
        "entities", 
        "heat", 
        "hottest", 
        "on", 
        "events", 
        "blocked"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.blocked", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_heat_list", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Hottest /ifs entities for blocked events on this node"
    }, 
    "node.clientstats.connected.cifs": {
      "sub": "Connected", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.connected", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "cifs", 
        "of", 
        "clients", 
        "number", 
        "node.clientstats.connected.cifs", 
        "clientstats", 
        "connected", 
        "smb"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.connected.cifs", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Number of connected SMB clients"
    }, 
    "node.ifs.files.created.rate": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.files.created", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "files", 
        "(num/sec)", 
        "creation", 
        "created", 
        "/ifs", 
        "ifs", 
        "node.ifs.files.created.rate", 
        "rate", 
        "file", 
        "the", 
        "on"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "node.ifs.files.created.rate", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "File creation rate on /ifs on the node (num/sec)"
    }, 
    "node.ifs.bytes.in.rate": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.bytes.in", 
      "tags": [
        "ifs_throughput"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "ifs", 
        "/ifs", 
        "bytes", 
        "to", 
        "rate", 
        "in", 
        "input", 
        "node.ifs.bytes.in.rate", 
        "(bytes/sec)", 
        "the", 
        "ifs_throughput"
      ], 
      "real_name": null, 
      "subsub": "Throughput", 
      "key": "node.ifs.bytes.in.rate", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Input rate to /ifs on the node (bytes/sec)"
    }, 
    "node.sysfs.root.percent.avail": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.root.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "available", 
        "capacity", 
        "percentage", 
        "on", 
        "sysfs", 
        "percent", 
        "avail", 
        "node.sysfs.root.percent.avail", 
        "as", 
        "a", 
        "filesystem", 
        "the", 
        "root", 
        "/root"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.root.percent.avail", 
      "units": "percent", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Available capacity on the /root filesystem as a percentage"
    }, 
    "cluster.node.list.up": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "cluster.group", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "lnns", 
        "of", 
        "list", 
        "up", 
        "cluster", 
        "as", 
        "cluster.node.list.up", 
        "comma-separated"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.node.list.up", 
      "units": "none", 
      "scope": "cluster", 
      "type": "string", 
      "policies": null, 
      "description": "List of up lnns as a comma-separated list"
    }, 
    "node.ifs.cache.l2.prefetch.miss": {
      "sub": "L2 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "no", 
        "ifs", 
        "with", 
        "of", 
        "node.ifs.cache.l2.prefetch.miss", 
        "cache", 
        "purge", 
        "rate", 
        "l2", 
        "prefetch", 
        "(bytes/sec)", 
        "miss", 
        "pages"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l2.prefetch.miss", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Purge rate of L2 cache pages with no hits (bytes/sec)"
    }, 
    "cluster.alert.info": {
      "sub": "Cluster Info and Status", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "info", 
        "and", 
        "on", 
        "of", 
        "cluster.alert.info", 
        "alerts", 
        "summary", 
        "cluster", 
        "critical", 
        "above", 
        "the", 
        "alert"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.alert.info", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_alert_info", 
      "policies": null, 
      "description": "Summary of critical and above alerts on the cluster"
    }, 
    "ifs.bytes.out.rate": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.bytes.out.rate", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "ifs", 
        "of", 
        "cumulative", 
        "bytes", 
        "ifs.bytes.out.rate", 
        "per", 
        "/ifs", 
        "rate", 
        "throughput", 
        "second)", 
        "(bytes", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Throughput", 
      "key": "ifs.bytes.out.rate", 
      "units": "bytes per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Cumulative throughput rate (bytes per second) out of /ifs"
    }, 
    "node.sysfs.varcrash.bytes.free": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.varcrash.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "capacity", 
        "in", 
        "sysfs", 
        "bytes", 
        "free", 
        "filesystem", 
        "/var/crash", 
        "node.sysfs.varcrash.bytes.free", 
        "the", 
        "varcrash"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.varcrash.bytes.free", 
      "units": "bytes", 
      "scope": "node", 
      "type": "int64", 
      "policies": null, 
      "description": "Free capacity on the /var/crash filesystem in bytes"
    }, 
    "node.disk.ifs.bytes.used.all": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "custom", 
      "base_name": "node.disk.ifs.space", 
      "tags": [
        "disk_ifs", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "all", 
        "used", 
        "ifs", 
        "of", 
        "node.disk.ifs.bytes.used.all", 
        "disks", 
        "bytes", 
        "/ifs", 
        "disk_ifs", 
        "disk", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.ifs.bytes.used.all", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_node_disk_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Used bytes of /ifs on all disks"
    }, 
    "cluster.protostats.nlm.total": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.nlm.total", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "cluster.protostats.nlm.total", 
        "statistics", 
        "protostats", 
        "for", 
        "cluster", 
        "performance", 
        "total", 
        "nlm", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.nlm.total", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled performance statistics for NLM"
    }, 
    "node.clientstats.active.hdfs": {
      "sub": "Active", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.proto.hdfs", 
      "tags": [
        "client_active", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hdfs", 
        "of", 
        "clients", 
        "number", 
        "node.clientstats.active.hdfs", 
        "clientstats", 
        "simultaneous", 
        "client_active", 
        "active", 
        "using", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.active.hdfs", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Number of simultaneous active clients using HDFS"
    }, 
    "node.sysfs.var.percent.avail": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.var.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "available", 
        "capacity", 
        "/var", 
        "on", 
        "sysfs", 
        "percent", 
        "avail", 
        "as", 
        "a", 
        "filesystem", 
        "var", 
        "the", 
        "node.sysfs.var.percent.avail", 
        "percentage"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.var.percent.avail", 
      "units": "percent", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Available capacity on the /var filesystem as a percentage"
    }, 
    "node.nfs.cache_stats.ccb.current_size": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "current_size", 
        "cache", 
        "cache_stats", 
        "current", 
        "nfs", 
        "size", 
        "ccb", 
        "node.nfs.cache_stats.ccb.current_size"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.ccb.current_size", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "CCB cache current size"
    }, 
    "node.sysfs.var.percent.free": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.var.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "capacity", 
        "/var", 
        "sysfs", 
        "percent", 
        "free", 
        "node.sysfs.var.percent.free", 
        "as", 
        "a", 
        "filesystem", 
        "var", 
        "the", 
        "percentage"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.var.percent.free", 
      "units": "percent", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Free capacity on the /var filesystem as a percentage"
    }, 
    "node.ifs.heat.read.total": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.heat.read", 
      "tags": [
        "ifs_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "ifs", 
        "read", 
        "of", 
        "rate", 
        "this", 
        "heat", 
        "node.ifs.heat.read.total", 
        "ifs_heat", 
        "total", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.read.total", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Total rate of read events on this node"
    }, 
    "node.sensor.volt.volts.1.0vSFC": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "13", 
        "electric", 
        "0vsfc", 
        "in", 
        "number", 
        "1", 
        "volt", 
        "of", 
        "node.sensor.volt.volts.1.0vsfc", 
        "volts", 
        "sensors", 
        "reading", 
        "sensor", 
        "potential"
      ], 
      "real_name": "node.sensor.volt.volts.13", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.1.0vSFC", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 13"
    }, 
    "cluster.disk.bytes.in.rate": {
      "sub": "Cluster", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.bytes.in.rate.sum", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "all", 
        "for", 
        "second", 
        "disks", 
        "bytes", 
        "written", 
        "per", 
        "cluster", 
        "rate", 
        "in", 
        "disk", 
        "cluster.disk.bytes.in.rate"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.disk.bytes.in.rate", 
      "units": "bytes per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Bytes written per second for all disks"
    }, 
    "ifs.bytes.used": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "ifs.fsspace", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "used", 
        "ifs", 
        "of", 
        "ifs.bytes.used", 
        "filesystem", 
        "bytes", 
        "number", 
        "/ifs", 
        "in", 
        "the"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "ifs.bytes.used", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "int64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Number of used bytes in the /ifs filesystem"
    }, 
    "cluster.net.ext.packets.in.rate": {
      "sub": "External", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.net.ext.packets.in.rate", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "all", 
        "for", 
        "second", 
        "cluster.net.ext.packets.in.rate", 
        "interfaces", 
        "packets", 
        "rate", 
        "per", 
        "cluster", 
        "ext", 
        "external", 
        "in", 
        "input", 
        "net"
      ], 
      "real_name": null, 
      "subsub": "Cluster", 
      "key": "cluster.net.ext.packets.in.rate", 
      "units": "packets per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Input packets per second for all external interfaces"
    }, 
    "cluster.protostats.lsass_out": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.lsass_out", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "protostats", 
        "for", 
        "cluster", 
        "lsass_out", 
        "cluster.protostats.lsass_out", 
        "performance", 
        "per-operation", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.lsass_out", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled per-operation performance statistics for LSASS_OUT"
    }, 
    "node.sysfs.root.bytes.avail": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.root.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "available", 
        "capacity", 
        "in", 
        "on", 
        "node.sysfs.root.bytes.avail", 
        "sysfs", 
        "bytes", 
        "avail", 
        "filesystem", 
        "the", 
        "root", 
        "/root"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.root.bytes.avail", 
      "units": "bytes", 
      "scope": "node", 
      "type": "int64", 
      "policies": null, 
      "description": "Available capacity on the /root filesystem in bytes"
    }, 
    "node.sensor.altitude.name.N": {
      "sub": "Altitude", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "altitude", 
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "hardware", 
        "note", 
        "name", 
        "extra", 
        "this", 
        "of", 
        "altitude", 
        "process.", 
        "number", 
        "n", 
        "node.sensor.altitude.name.n", 
        "added", 
        "during", 
        "sensors", 
        "an", 
        "sensor", 
        "is", 
        "tagging"
      ], 
      "real_name": null, 
      "xtra_attrs": {
        "Note": "This is an extra note added during tagging process."
      }, 
      "subsub": null, 
      "key": "node.sensor.altitude.name.N", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Hardware name of altitude sensor number N"
    }, 
    "node.net.iface.packets.out.rate.N": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "tags": [
        "ext_interface", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ext_interface", 
        "iface", 
        "for", 
        "second", 
        "packets", 
        "node.net.iface.packets.out.rate.n", 
        "per", 
        "n", 
        "rate", 
        "interface", 
        "output", 
        "net", 
        "insightiq", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.iface.packets.out.rate.N", 
      "units": "packets per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Output packets per second for interface N"
    }, 
    "node.nfs.v4_error_stats": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "stats", 
        "v4_error_stats", 
        "rpc", 
        "nfs", 
        "node.nfs.v4_error_stats"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.v4_error_stats", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_nfs_v4_error_stats", 
      "policies": null, 
      "description": "NFS RPC stats"
    }, 
    "node.sensor.curr.amps.cacps1": {
      "sub": "Current (Amperage)", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "curr", 
        "electric", 
        "cacps1", 
        "node.sensor.curr.amps.cacps1", 
        "of", 
        "number", 
        "current", 
        "0", 
        "in", 
        "amps", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.curr.amps.0", 
      "subsub": null, 
      "key": "node.sensor.curr.amps.cacps1", 
      "units": "amps", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Amps of electric current sensor number 0"
    }, 
    "cluster.dedupe.estimated.saved.bytes": {
      "sub": null, 
      "super": "Deduplication", 
      "aggregation_type": "last", 
      "base_name": "cluster.dedupe", 
      "tags": [
        "dedupe", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "estimated", 
        "cluster.dedupe.estimated.saved.bytes", 
        "files.", 
        "bytes", 
        "cluster", 
        "savings", 
        "dedupelicating", 
        "dedupe", 
        "saved", 
        "by", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.dedupe.estimated.saved.bytes", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Estimated savings by dedupelicating files."
    }, 
    "node.clientstats.active.nfs": {
      "sub": "Active", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.proto.nfs", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "of", 
        "clients", 
        "clientstats", 
        "number", 
        "nfs3", 
        "simultaneous", 
        "nfs", 
        "node.clientstats.active.nfs", 
        "active", 
        "using"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.active.nfs", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Number of simultaneous active clients using NFS3"
    }, 
    "node.mds.cache.stats": {
      "sub": "Memory and Internal Cache Usage", 
      "super": "System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "node.mds.cache.stats", 
        "stats", 
        "(mds)", 
        "cache", 
        "mirrored", 
        "statistics", 
        "mds", 
        "data", 
        "structure"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.mds.cache.stats", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_mds_cache", 
      "policies": null, 
      "description": "Mirrored Data Structure (MDS) cache statistics"
    }, 
    "node.disk.iosched.latency.avg": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "latency", 
        "all", 
        "avg", 
        "for", 
        "iosched", 
        "disks", 
        "node.disk.iosched.latency.avg", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.iosched.latency.avg", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Avg iosched latency for all disks"
    }, 
    "ifs.ops.in.rate": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.ops.in.rate", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "ifs.ops.in.rate", 
        "ops", 
        "/ifs", 
        "into", 
        "cumulative", 
        "(ops/sec)", 
        "rate", 
        "ifs", 
        "in", 
        "operation"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "ifs.ops.in.rate", 
      "units": "operations per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Cumulative operation rate (ops/sec) into /ifs"
    }, 
    "node.disk.access.write.hist6.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "write", 
        "node.disk.access.write.hist6.n", 
        "of", 
        "6", 
        "accesses", 
        "n", 
        "access", 
        "no:", 
        "in", 
        "bin", 
        "disk", 
        "hist6"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.write.hist6.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of write accesses in bin 6 N"
    }, 
    "node.disk.access.unfilt.write.hist5.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "write", 
        "unfiltered", 
        "node.disk.access.unfilt.write.hist5.n", 
        "of", 
        "hist5", 
        "accesses", 
        "n", 
        "access", 
        "bin", 
        "5", 
        "no:", 
        "in", 
        "unfilt", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.unfilt.write.hist5.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of unfiltered accesses in bin 5 N"
    }, 
    "node.disk.xfer.size.in.all": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": "node.disk.perfs", 
      "tags": [
        "disk", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "disk", 
        "transfer", 
        "bytes", 
        "node.disk.xfer.size.in.all", 
        "insightiq", 
        "in", 
        "input", 
        "xfer", 
        "size"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfer.size.in.all", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_node_disk_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Input transfer size in bytes"
    }, 
    "node.disk.access.unfilt.write.hist3.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "write", 
        "unfiltered", 
        "of", 
        "hist3", 
        "accesses", 
        "n", 
        "access", 
        "bin", 
        "3", 
        "no:", 
        "in", 
        "unfilt", 
        "disk", 
        "node.disk.access.unfilt.write.hist3.n"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.unfilt.write.hist3.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of unfiltered accesses in bin 3 N"
    }, 
    "node.clientstats.proto.nlm": {
      "sub": "Top-N Clients", 
      "super": "Client", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "client", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "for", 
        "proto", 
        "clientstats", 
        "per", 
        "client", 
        "client-protocol-class", 
        "performance", 
        "node.clientstats.proto.nlm", 
        "nlm", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.proto.nlm", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_client_proto_list_v2", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Per client-protocol-class performance statistics for NLM"
    }, 
    "node.sensor.misc.desc.N": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "number", 
        "description", 
        "node.sensor.misc.desc.n", 
        "of", 
        "misc", 
        "miscellaneous", 
        "n", 
        "sensors", 
        "sensor", 
        "desc"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.misc.desc.N", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Description of miscellaneous sensor number N"
    }, 
    "node.disk.access.write.hist2.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "write", 
        "of", 
        "node.disk.access.write.hist2.n", 
        "hist2", 
        "accesses", 
        "n", 
        "access", 
        "2", 
        "no:", 
        "in", 
        "bin", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.write.hist2.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of write accesses in bin 2 N"
    }, 
    "node.sysfs.root.bytes.used": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.root.fsspace", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "used", 
        "capacity", 
        "in", 
        "node.sysfs.root.bytes.used", 
        "sysfs", 
        "bytes", 
        "filesystem", 
        "the", 
        "root", 
        "/root"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.root.bytes.used", 
      "units": "bytes", 
      "scope": "node", 
      "type": "int64", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 900
        }
      ], 
      "description": "Used capacity on the /root filesystem in bytes"
    }, 
    "node.disk.access.write.hist0.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "write", 
        "0", 
        "hist0", 
        "in", 
        "accesses", 
        "n", 
        "access", 
        "bin", 
        "no:", 
        "of", 
        "node.disk.access.write.hist0.n", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.write.hist0.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of write accesses in bin 0 N"
    }, 
    "cluster.cpu.sys.avg": {
      "sub": "Cluster", 
      "super": "CPU", 
      "aggregation_type": "average", 
      "base_name": "node.cpu.sys.avg", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "a", 
        "sytem", 
        "of", 
        "average", 
        "percent", 
        "sys", 
        "cluster", 
        "in", 
        "usage", 
        "cluster.cpu.sys.avg", 
        "avg", 
        "cpu", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.cpu.sys.avg", 
      "units": "permil", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Cluster average of sytem CPU usage in tenths of a percent"
    }, 
    "cluster.protostats.nfs4.total": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.nfs4.total", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "protostats", 
        "for", 
        "cluster", 
        "nfs4", 
        "performance", 
        "total", 
        "totaled", 
        "cluster.protostats.nfs4.total"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.nfs4.total", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled performance statistics for NFS4"
    }, 
    "node.nfs.cache_stats.replay_udp.timeout_period": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "udp", 
        "node.nfs.cache_stats.replay_udp.timeout_period", 
        "replay_udp", 
        "cache_stats", 
        "period", 
        "timeout_period", 
        "replay", 
        "nfs", 
        "cache", 
        "timeout"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.replay_udp.timeout_period", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Replay UDP cache timeout period"
    }, 
    "node.disk.ifs.inodes.used.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.ifs.space", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "used", 
        "ifs", 
        "of", 
        "node.disk.ifs.inodes.used.n", 
        "n", 
        "index", 
        "/ifs", 
        "disk", 
        "with", 
        "inodes"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.ifs.inodes.used.N", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Used inodes of /ifs on disk with index N"
    }, 
    "node.net.int.bytes.out.rate": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "for", 
        "int", 
        "interfaces", 
        "bytes", 
        "second", 
        "node.net.int.bytes.out.rate", 
        "rate", 
        "internal", 
        "node's", 
        "per", 
        "output", 
        "net", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.int.bytes.out.rate", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Output bytes per second for a node's internal interfaces"
    }, 
    "node.disk.access.latency.all": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": "node.disk.perfs", 
      "tags": [
        "disk", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "latency", 
        "all", 
        "for", 
        "disks", 
        "node.disk.access.latency.all", 
        "access", 
        "disk", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.latency.all", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_node_disk_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Access latency for all disks"
    }, 
    "node.ifs.cache.l2.meta.prefetch.start": {
      "sub": "L2 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ifs", 
        "meta-data", 
        "cache", 
        "start", 
        "meta", 
        "l2", 
        "prefetch", 
        "starts", 
        "node.ifs.cache.l2.meta.prefetch.start", 
        "(bytes/sec)"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l2.meta.prefetch.start", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L2 meta-data cache prefetch starts (bytes/sec)"
    }, 
    "cluster.protostats.lsass_out.total": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.lsass_out.total", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "protostats", 
        "for", 
        "cluster.protostats.lsass_out.total", 
        "cluster", 
        "lsass_out", 
        "performance", 
        "total", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.lsass_out.total", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled performance statistics for LSASS_OUT"
    }, 
    "node.ifs.cache.l2.data.read.hit": {
      "sub": "L2 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "hit", 
        "ifs", 
        "read", 
        "cache", 
        "l2", 
        "node.ifs.cache.l2.data.read.hit", 
        "(bytes/sec)", 
        "data"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l2.data.read.hit", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L2 data cache read hits (bytes/sec)"
    }, 
    "node.ifs.heat.contended": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "ifs_file_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "on", 
        "for", 
        "node.ifs.heat.contended", 
        "this", 
        "/ifs", 
        "ifs", 
        "events", 
        "entities", 
        "heat", 
        "hottest", 
        "ifs_file_heat", 
        "contended"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.contended", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_heat_list", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Hottest /ifs entities for contended events on this node"
    }, 
    "node.nfs.cache_stats.ccb.maximum_size": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "cache", 
        "node.nfs.cache_stats.ccb.maximum_size", 
        "cache_stats", 
        "maximum", 
        "nfs", 
        "maximum_size", 
        "size", 
        "ccb"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.ccb.maximum_size", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "CCB cache maximum size"
    }, 
    "node.clientstats.connected.ftp": {
      "sub": "Connected", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.connected", 
      "tags": [
        "client_connected", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ftp", 
        "of", 
        "clients", 
        "number", 
        "clientstats", 
        "connected", 
        "client_connected", 
        "node.clientstats.connected.ftp", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.connected.ftp", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Number of connected FTP clients"
    }, 
    "node.diskless": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "(boolean)", 
        "diskless", 
        "is", 
        "node.diskless", 
        "whether", 
        "the"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.diskless", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Whether the node is diskless (boolean)"
    }, 
    "node.protostats.hdfs.total": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.hdfs", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hdfs", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "per", 
        "node.protostats.hdfs.total", 
        "performance", 
        "total"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.hdfs.total", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol performance statistics for HDFS"
    }, 
    "ifs.ops.out.rate": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.ops.out.rate", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "ifs", 
        "ops", 
        "of", 
        "cumulative", 
        "ifs.ops.out.rate", 
        "(ops/sec)", 
        "rate", 
        "/ifs", 
        "operation", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "ifs.ops.out.rate", 
      "units": "operations per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Cumulative operation rate (ops/sec) out of /ifs"
    }, 
    "node.net.int.errors.in.rate": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "errors", 
        "for", 
        "int", 
        "interfaces", 
        "second", 
        "per", 
        "rate", 
        "node.net.int.errors.in.rate", 
        "node's", 
        "in", 
        "input", 
        "net", 
        "internal"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.int.errors.in.rate", 
      "units": "errors per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Input errors per second for a node's internal interfaces"
    }, 
    "node.ifs.heat.rename.total": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.heat.rename", 
      "tags": [
        "ifs_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "rename", 
        "on", 
        "node.ifs.heat.rename.total", 
        "ifs", 
        "this", 
        "of", 
        "rate", 
        "heat", 
        "ifs_heat", 
        "total", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.rename.total", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Total rate of rename events on this node"
    }, 
    "node.disk.access.unfilt.write.hist1.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "write", 
        "unfiltered", 
        "hist1", 
        "of", 
        "node.disk.access.unfilt.write.hist1.n", 
        "accesses", 
        "n", 
        "access", 
        "bin", 
        "1", 
        "no:", 
        "in", 
        "unfilt", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.unfilt.write.hist1.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of unfiltered accesses in bin 1 N"
    }, 
    "node.sensor.misc.count": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "count", 
        "on", 
        "this", 
        "of", 
        "miscellaneous", 
        "misc", 
        "number", 
        "node.sensor.misc.count", 
        "sensors", 
        "sensor"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.misc.count", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of miscellaneous sensors on this node"
    }, 
    "ifs.percent.free": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "ifs.fsspace", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "ifs.percent.free", 
        "for", 
        "ifs", 
        "/ifs", 
        "filesystem", 
        "percent", 
        "system", 
        "free", 
        "of", 
        "the"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "ifs.percent.free", 
      "units": "percent", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Percent of /ifs filesystem free for the system"
    }, 
    "cluster.disk.xfer.size.out": {
      "sub": "Cluster", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.xfer.size.in.avg", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "size", 
        "all", 
        "disk", 
        "for", 
        "cluster.disk.xfer.size.out", 
        "average", 
        "disks", 
        "cluster", 
        "transfer", 
        "input", 
        "xfer", 
        "out"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.disk.xfer.size.out", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "double", 
      "policies": null, 
      "description": "Average input transfer size for all disks"
    }, 
    "node.sensor.fan.name.N": {
      "sub": "Fans", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "name", 
        "of", 
        "number", 
        "n", 
        "hardware", 
        "fan", 
        "node.sensor.fan.name.n", 
        "sensors", 
        "sensor", 
        "speed"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.fan.name.N", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Hardware name of fan speed sensor number N"
    }, 
    "node.nfs.cache_stats.sec_principal.positive_hits": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "cache", 
        "sec_principal", 
        "positive", 
        "positive_hits", 
        "cache_stats", 
        "nfs", 
        "node.nfs.cache_stats.sec_principal.positive_hits", 
        "security", 
        "principal"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_principal.positive_hits", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security principal cache positive hits"
    }, 
    "node.nfs.cache_stats.sec_username.timeout_count": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "username", 
        "sec_username", 
        "timeout_count", 
        "cache", 
        "cache_stats", 
        "nfs", 
        "timeout", 
        "node.nfs.cache_stats.sec_username.timeout_count", 
        "security", 
        "count"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_username.timeout_count", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security username cache timeout count"
    }, 
    "node.ifs.cache.l3.data.read.start": {
      "sub": "L3 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ifs", 
        "read", 
        "starts", 
        "cache", 
        "start", 
        "node.ifs.cache.l3.data.read.start", 
        "l3", 
        "(bytes/sec)", 
        "data", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l3.data.read.start", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L3 data cache read starts (bytes/sec)"
    }, 
    "node.nfs.cache_stats.replay_udp.negative_hits": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "udp", 
        "cache", 
        "node.nfs.cache_stats.replay_udp.negative_hits", 
        "replay_udp", 
        "cache_stats", 
        "negative", 
        "replay", 
        "nfs", 
        "negative_hits", 
        "hits"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.replay_udp.negative_hits", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Replay UDP cache negative hits"
    }, 
    "node.ifs.heat.lock.total": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.heat.lock", 
      "tags": [
        "ifs_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "rate", 
        "ifs", 
        "this", 
        "lock", 
        "node.ifs.heat.lock.total", 
        "heat", 
        "ifs_heat", 
        "of", 
        "total", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.lock.total", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Total rate of lock events on this node"
    }, 
    "node.sensor.fan.rpms.fps11": {
      "sub": "Fans", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "of", 
        "rpms", 
        "number", 
        "node.sensor.fan.rpms.fps11", 
        "3", 
        "fan", 
        "in", 
        "sensors", 
        "reading", 
        "sensor", 
        "fps11"
      ], 
      "real_name": "node.sensor.fan.rpms.3", 
      "subsub": null, 
      "key": "node.sensor.fan.rpms.fps11", 
      "units": "rpms", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading in RPMS of fan sensor number 3"
    }, 
    "node.audit.events.logged.rate": {
      "sub": null, 
      "super": "Audit", 
      "aggregation_type": "average", 
      "base_name": "node.audit.events.logged.total", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "audit", 
        "(events/sec)", 
        "of", 
        "isi_audit_d", 
        "logged", 
        "node.audit.events.logged.rate", 
        "per", 
        "by", 
        "rate", 
        "events"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.audit.events.logged.rate", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per node rate of events logged by isi_audit_d (events/sec)"
    }, 
    "cluster.node.count.readonly": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "cluster.group", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "count", 
        "of", 
        "number", 
        "cluster.node.count.readonly", 
        "cluster", 
        "readonly", 
        "nodes", 
        "read-only"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.node.count.readonly", 
      "units": "none", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of read-only nodes"
    }, 
    "node.sysfs.varcrash.percent.used": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.varcrash.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "used", 
        "capacity", 
        "sysfs", 
        "percent", 
        "node.sysfs.varcrash.percent.used", 
        "as", 
        "a", 
        "filesystem", 
        "/var/crash", 
        "the", 
        "varcrash", 
        "percentage"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.varcrash.percent.used", 
      "units": "percent", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Used capacity on the /var/crash filesystem as a percentage"
    }, 
    "node.protostats.irp.total": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.irp", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "irp", 
        "per", 
        "irps", 
        "performance", 
        "node.protostats.irp.total", 
        "total"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.irp.total", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol performance statistics for IRPs"
    }, 
    "node.protostats.nlm": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "protocol"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "node.protostats.nlm", 
        "per", 
        "performance", 
        "protocol-operation", 
        "nlm"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.nlm", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol-operation performance statistics for NLM"
    }, 
    "node.disk.access.read.hist5.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "bin", 
        "read", 
        "node.disk.access.read.hist5.n", 
        "in", 
        "hist5", 
        "accesses", 
        "n", 
        "access", 
        "5", 
        "no:", 
        "of", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.read.hist5.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of read accesses in bin 5 N"
    }, 
    "ifs.bytes.avail": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "ifs.fsspace", 
      "tags": [
        "ifs_cluster"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "available", 
        "ifs", 
        "ifs_cluster", 
        "of", 
        "ifs.bytes.avail", 
        "bytes", 
        "number", 
        "/ifs", 
        "avail", 
        "filesystem", 
        "in", 
        "the"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "ifs.bytes.avail", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "int64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Number of available bytes in the /ifs filesystem"
    }, 
    "node.disk.bytes.out.rate.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "index", 
        "for", 
        "read", 
        "bytes", 
        "second", 
        "node.disk.bytes.out.rate.n", 
        "n", 
        "rate", 
        "per", 
        "disk", 
        "with", 
        "out"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.bytes.out.rate.N", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Bytes read per second for disk with index N"
    }, 
    "node.ifs.heat.unlink": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "ifs_file_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "on", 
        "ifs_file_heat", 
        "node.ifs.heat.unlink", 
        "for", 
        "ifs", 
        "this", 
        "/ifs", 
        "entities", 
        "heat", 
        "hottest", 
        "unlink", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.unlink", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_heat_list", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Hottest /ifs entities for unlink events on this node"
    }, 
    "node.net.ext.errors.out.rate": {
      "sub": "External", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "tags": [
        "ext_network", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "ext_network", 
        "errors", 
        "for", 
        "second", 
        "interfaces", 
        "rate", 
        "per", 
        "ext", 
        "node's", 
        "external", 
        "node.net.ext.errors.out.rate", 
        "output", 
        "net", 
        "insightiq", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.ext.errors.out.rate", 
      "units": "errors per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Output errors per second for a node's external interfaces"
    }, 
    "node.disk.xfers.in.rate.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.disk.xfers.in.rate.n", 
        "for", 
        "index", 
        "xfers", 
        "transfers", 
        "second", 
        "per", 
        "n", 
        "rate", 
        "in", 
        "input", 
        "disk", 
        "with"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfers.in.rate.N", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Input transfers per second for disk with index N"
    }, 
    "node.disk.access.read.hist1.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "bin", 
        "node.disk.access.read.hist1.n", 
        "read", 
        "of", 
        "accesses", 
        "n", 
        "access", 
        "hist1", 
        "1", 
        "no:", 
        "in", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.read.hist1.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of read accesses in bin 1 N"
    }, 
    "node.ifm.cache.stats": {
      "sub": "Memory and Internal Cache Usage", 
      "super": "System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "statistics", 
        "stats", 
        "format", 
        "cache", 
        "manager", 
        "ifm", 
        "(ifm)", 
        "node.ifm.cache.stats", 
        "inode"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifm.cache.stats", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_ifm_cache", 
      "policies": null, 
      "description": "Inode Format Manager (IFM) cache statistics"
    }, 
    "node.clientstats.active.siq": {
      "sub": "Active", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.proto.siq", 
      "tags": [
        "client_active", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "siq", 
        "of", 
        "clients", 
        "node.clientstats.active.siq", 
        "clientstats", 
        "number", 
        "simultaneous", 
        "client_active", 
        "active", 
        "using", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.active.siq", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Number of simultaneous active clients using SIQ"
    }, 
    "node.audit.cee.export.total": {
      "sub": null, 
      "super": "Audit", 
      "aggregation_type": "sum", 
      "base_name": null, 
      "policy_cache_time": 7, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "audit", 
        "cee", 
        "of", 
        "number", 
        "per", 
        "by", 
        "export", 
        "exported", 
        "node.audit.cee.export.total", 
        "isi_audit_cee", 
        "total", 
        "events"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.audit.cee.export.total", 
      "units": "operations", 
      "scope": "node", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per node total number of events exported by isi_audit_cee"
    }, 
    "cluster.net.ext.bytes.out.rate": {
      "sub": "External", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.net.ext.bytes.out.rate", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "all", 
        "for", 
        "second", 
        "interfaces", 
        "bytes", 
        "rate", 
        "per", 
        "cluster", 
        "ext", 
        "external", 
        "output", 
        "net", 
        "cluster.net.ext.bytes.out.rate", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Cluster", 
      "key": "cluster.net.ext.bytes.out.rate", 
      "units": "bytes per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Output bytes per second for all external interfaces"
    }, 
    "node.sensor.volt.volts.vDimmCPU0": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "electric", 
        "19", 
        "sensor", 
        "in", 
        "number", 
        "volt", 
        "of", 
        "volts", 
        "sensors", 
        "reading", 
        "node.sensor.volt.volts.vdimmcpu0", 
        "potential", 
        "vdimmcpu0"
      ], 
      "real_name": "node.sensor.volt.volts.19", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.vDimmCPU0", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 19"
    }, 
    "node.sensor.temp.celsius.tutCPU0": {
      "sub": "Temperature", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "temp", 
        "tutcpu0", 
        "node.sensor.temp.celsius.tutcpu0", 
        "of", 
        "number", 
        "0", 
        "celsius", 
        "in", 
        "sensors", 
        "reading", 
        "sensor", 
        "temperature"
      ], 
      "real_name": "node.sensor.temp.celsius.0", 
      "subsub": null, 
      "key": "node.sensor.temp.celsius.tutCPU0", 
      "units": "celsius", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Celsius of temperature sensor number 0"
    }, 
    "node.clientstats.proto.http": {
      "sub": "Top-N Clients", 
      "super": "Client", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "client", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "http", 
        "for", 
        "proto", 
        "clientstats", 
        "per", 
        "node.clientstats.proto.http", 
        "client", 
        "client-protocol-class", 
        "performance", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.proto.http", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_client_proto_list_v2", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Per client-protocol-class performance statistics for HTTP"
    }, 
    "node.clientstats.io.avg": {
      "sub": "Disk IO", 
      "super": "Client", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "stats", 
        "per-client", 
        "node.clientstats.io.avg", 
        "min", 
        "clientstats", 
        "(5", 
        "per-disk", 
        "io", 
        "avg", 
        "avg)"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.io.avg", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_client_io", 
      "policies": null, 
      "description": "Per-client per-disk IO stats (5 min avg)"
    }, 
    "node.sensor.curr.name.N": {
      "sub": "Current (Amperage)", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "current", 
        "curr", 
        "name", 
        "of", 
        "number", 
        "node.sensor.curr.name.n", 
        "n", 
        "hardware", 
        "sensors", 
        "sensor", 
        "electric"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.curr.name.N", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Hardware name of electric current sensor number N"
    }, 
    "node.ip.stats": {
      "sub": "TCP/IP", 
      "super": "System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "ip", 
        "statistics", 
        "stats", 
        "node.ip.stats"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ip.stats", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_ip_stats", 
      "policies": null, 
      "description": "IP statistics"
    }, 
    "node.cpu.nice.N": {
      "sub": "Node", 
      "super": "CPU", 
      "aggregation_type": "average", 
      "base_name": "node.cpu.usage", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "for", 
        "index", 
        "of", 
        "percent", 
        "n", 
        "tenths", 
        "in", 
        "usage", 
        "with", 
        "cpu", 
        "node.cpu.nice.n", 
        "nice"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.cpu.nice.N", 
      "units": "permil", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Nice CPU usage in tenths of a percent for CPU with index N"
    }, 
    "node.ifs.bytes.in.rate.max": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "maximum", 
      "base_name": "node.ifs.bytes.in", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "ifs", 
        "max", 
        "node.ifs.bytes.in.rate.max", 
        "bytes", 
        "maximum", 
        "/ifs", 
        "to", 
        "rate", 
        "in", 
        "input", 
        "the", 
        "(bytes/sec)"
      ], 
      "real_name": null, 
      "subsub": "Throughput", 
      "key": "node.ifs.bytes.in.rate.max", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Maximum input rate to /ifs on the node (bytes/sec)"
    }, 
    "ifs.bytes.out": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "last", 
      "base_name": "node.ifs.bytes.out", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "ifs", 
        "of", 
        "cumulative", 
        "bytes", 
        "number", 
        "/ifs", 
        "ifs.bytes.out", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Throughput", 
      "key": "ifs.bytes.out", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "uint64", 
      "policies": null, 
      "description": "Cumulative number of bytes out of /ifs"
    }, 
    "node.clientstats.connected.hdfs": {
      "sub": "Connected", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.connected", 
      "tags": [
        "client_connected", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hdfs", 
        "of", 
        "clients", 
        "number", 
        "clientstats", 
        "connected", 
        "client_connected", 
        "node.clientstats.connected.hdfs", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.connected.hdfs", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Number of connected HDFS clients"
    }, 
    "node.ifs.cache.l1.meta.read.wait": {
      "sub": "L1 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ifs", 
        "read", 
        "meta-data", 
        "cache", 
        "waits", 
        "meta", 
        "l1", 
        "(bytes/sec)", 
        "node.ifs.cache.l1.meta.read.wait", 
        "wait"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l1.meta.read.wait", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L1 meta-data cache read waits (bytes/sec)"
    }, 
    "node.protostats.siq": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "protocol"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "siq", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "per", 
        "node.protostats.siq", 
        "performance", 
        "protocol-operation"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.siq", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol-operation performance statistics for SIQ"
    }, 
    "node.sensor.power.name.N": {
      "sub": "Power", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "power supplies", 
        "sensors", 
        "PSU"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "via", 
        "extra", 
        "attribute", 
        "number", 
        "one", 
        "hardware", 
        "tag", 
        "node.sensor.power.name.n", 
        "two", 
        "sensor", 
        "node", 
        "power supplies", 
        "added", 
        "power", 
        "key", 
        "sensors", 
        "psu", 
        "name", 
        "defs.", 
        "of", 
        "n", 
        "arbitrary"
      ], 
      "real_name": null, 
      "xtra_attrs": {
        "Arbitrary detail one": "Extra arbitrary key attribute one added via tag defs.", 
        "Arbitrary detail two": "Extra arbitrary key attribute two added via tag defs."
      }, 
      "subsub": null, 
      "key": "node.sensor.power.name.N", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Hardware name of power sensor number N"
    }, 
    "node.sensor.volt.volts.nv2Vcur": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "11", 
        "potential", 
        "electric", 
        "volts", 
        "of", 
        "number", 
        "volt", 
        "node.sensor.volt.volts.nv2vcur", 
        "in", 
        "sensors", 
        "reading", 
        "sensor", 
        "nv2vcur"
      ], 
      "real_name": "node.sensor.volt.volts.11", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.nv2Vcur", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 11"
    }, 
    "node.stf.cache.stats": {
      "sub": "Memory and Internal Cache Usage", 
      "super": "System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "stf", 
        "tracking", 
        "stats", 
        "(stf)", 
        "cache", 
        "statistics", 
        "snapshot", 
        "file", 
        "node.stf.cache.stats"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.stf.cache.stats", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_stf_cache", 
      "policies": null, 
      "description": "Snapshot Tracking File (STF) cache statistics"
    }, 
    "node.nvram.charge.status": {
      "sub": "NVRAM", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "status", 
        "all", 
        "for", 
        "0", 
        "good,", 
        "3", 
        "caution,", 
        "1", 
        "nvram", 
        "charge", 
        "2", 
        "node.nvram.charge.status", 
        "combined", 
        "error", 
        "not", 
        "=", 
        "available,", 
        "batteries."
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nvram.charge.status", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Combined charge status for all batteries. 0 = Not available, 1 = Good, 2 = Caution, 3 = Error"
    }, 
    "node.sensor.volt.desc.N": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "description", 
        "sensors", 
        "of", 
        "number", 
        "n", 
        "volt", 
        "node.sensor.volt.desc.n", 
        "electric", 
        "sensor", 
        "potential", 
        "desc"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.volt.desc.N", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Description of electric potential sensor number N"
    }, 
    "node.sensor.temp.celsius.tFP": {
      "sub": "Temperature", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "temperature", 
        "temp", 
        "sensors", 
        "of", 
        "number", 
        "3", 
        "celsius", 
        "in", 
        "node.sensor.temp.celsius.tfp", 
        "reading", 
        "sensor", 
        "tfp"
      ], 
      "real_name": "node.sensor.temp.celsius.3", 
      "subsub": null, 
      "key": "node.sensor.temp.celsius.tFP", 
      "units": "celsius", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Celsius of temperature sensor number 3"
    }, 
    "node.sensor.misc.data.Uvp2": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "(as", 
        "number", 
        "int)", 
        "data", 
        "of", 
        "misc", 
        "miscellaneous", 
        "node.sensor.misc.data.uvp2", 
        "uvp2", 
        "8", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.misc.data.8", 
      "subsub": null, 
      "key": "node.sensor.misc.data.Uvp2", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number 8"
    }, 
    "node.dfm.cache.stats": {
      "sub": "Memory and Internal Cache Usage", 
      "super": "System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "statistics", 
        "stats", 
        "name", 
        "format", 
        "cache", 
        "dfm", 
        "manager", 
        "directory", 
        "(dfm)", 
        "node.dfm.cache.stats"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.dfm.cache.stats", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_dfm_cache", 
      "policies": null, 
      "description": "Directory Format Manager (DFM) name cache statistics"
    }, 
    "node.ifs.bytes.used": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.space", 
      "tags": [
        "ifs"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "used", 
        "ifs", 
        "node.ifs.bytes.used", 
        "bytes", 
        "number", 
        "/ifs", 
        "of", 
        "the"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "node.ifs.bytes.used", 
      "units": "bytes", 
      "scope": "node", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Number of used bytes on /ifs on the node"
    }, 
    "node.nfs.cache_stats.replay_udp.maximum_size": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "udp", 
        "cache", 
        "replay_udp", 
        "cache_stats", 
        "maximum", 
        "replay", 
        "node.nfs.cache_stats.replay_udp.maximum_size", 
        "nfs", 
        "maximum_size", 
        "size"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.replay_udp.maximum_size", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Replay UDP cache maximum size"
    }, 
    "node.sensor.volt.names": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "on", 
        "node.sensor.volt.names", 
        "name", 
        "this", 
        "(csv)", 
        "list", 
        "volt", 
        "potential", 
        "names", 
        "of", 
        "sensors", 
        "sensor", 
        "electric"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.volt.names", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Name list (CSV) of electric potential sensors on this node"
    }, 
    "node.protostats.nlm.total": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.nlm", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "per", 
        "node.protostats.nlm.total", 
        "performance", 
        "total", 
        "nlm"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.nlm.total", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol performance statistics for NLM"
    }, 
    "cluster.net.ext.errors.in.rate": {
      "sub": "External", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.net.ext.errors.in.rate", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "all", 
        "errors", 
        "for", 
        "second", 
        "interfaces", 
        "rate", 
        "per", 
        "cluster", 
        "ext", 
        "external", 
        "cluster.net.ext.errors.in.rate", 
        "in", 
        "input", 
        "net"
      ], 
      "real_name": null, 
      "subsub": "Cluster", 
      "key": "cluster.net.ext.errors.in.rate", 
      "units": "errors per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Input errors per second for all external interfaces"
    }, 
    "node.disk.access.unfilt.read.hist0.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "bin", 
        "unfiltered", 
        "node.disk.access.unfilt.read.hist0.n", 
        "read", 
        "hist0", 
        "in", 
        "accesses", 
        "n", 
        "access", 
        "0", 
        "no:", 
        "of", 
        "unfilt", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.unfilt.read.hist0.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of unfiltered accesses in bin 0 N"
    }, 
    "node.disk.access.unfilt.read.hist2.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "bin", 
        "unfiltered", 
        "read", 
        "of", 
        "hist2", 
        "accesses", 
        "n", 
        "access", 
        "2", 
        "no:", 
        "in", 
        "unfilt", 
        "disk", 
        "node.disk.access.unfilt.read.hist2.n"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.unfilt.read.hist2.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of unfiltered accesses in bin 2 N"
    }, 
    "node.clientstats.active.papi": {
      "sub": "Active", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.proto.papi", 
      "tags": [
        "client_active", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.clientstats.active.papi", 
        "papi", 
        "of", 
        "clients", 
        "clientstats", 
        "number", 
        "simultaneous", 
        "client_active", 
        "active", 
        "using", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.active.papi", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Number of simultaneous active clients using PAPI"
    }, 
    "node.net.iface.count": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "count", 
        "iface", 
        "network", 
        "of", 
        "configured", 
        "node.net.iface.count", 
        "number", 
        "net", 
        "interfaces"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.iface.count", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of configured network interfaces"
    }, 
    "node.disk.access.unfilt.read.hist6.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "bin", 
        "unfiltered", 
        "read", 
        "of", 
        "6", 
        "accesses", 
        "hist6", 
        "access", 
        "n", 
        "no:", 
        "in", 
        "unfilt", 
        "node.disk.access.unfilt.read.hist6.n", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.unfilt.read.hist6.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of unfiltered accesses in bin 6 N"
    }, 
    "node.sensor.misc.data.IMBVer": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "imbver", 
        "(as", 
        "node.sensor.misc.data.imbver", 
        "int)", 
        "data", 
        "misc", 
        "miscellaneous", 
        "number", 
        "0", 
        "of", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.misc.data.0", 
      "subsub": null, 
      "key": "node.sensor.misc.data.IMBVer", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number 0"
    }, 
    "node.ifs.cache.l2.data.read.wait": {
      "sub": "L2 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "(bytes/sec)", 
        "ifs", 
        "read", 
        "cache", 
        "waits", 
        "l2", 
        "node.ifs.cache.l2.data.read.wait", 
        "data", 
        "wait"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l2.data.read.wait", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L2 data cache read waits (bytes/sec)"
    }, 
    "node.nfs.cache_stats.sec_sid.negative_hits": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "cache", 
        "cache_stats", 
        "negative", 
        "node.nfs.cache_stats.sec_sid.negative_hits", 
        "nfs", 
        "sid", 
        "sec_sid", 
        "security", 
        "negative_hits"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_sid.negative_hits", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security SID cache negative hits"
    }, 
    "node.protostats.papi": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "protocol"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "papi", 
        "protostats", 
        "for", 
        "node.protostats.papi", 
        "per", 
        "protocol", 
        "performance", 
        "protocol-operation"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.papi", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol-operation performance statistics for PAPI"
    }, 
    "node.sysfs.var.bytes.used": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.var.fsspace", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "used", 
        "capacity", 
        "/var", 
        "in", 
        "sysfs", 
        "bytes", 
        "filesystem", 
        "var", 
        "node.sysfs.var.bytes.used", 
        "the"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.var.bytes.used", 
      "units": "bytes", 
      "scope": "node", 
      "type": "int64", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 900
        }
      ], 
      "description": "Used capacity on the /var filesystem in bytes"
    }, 
    "cluster.node.list.all": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "cluster.group", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "all", 
        "lnns", 
        "of", 
        "configured", 
        "list", 
        "cluster", 
        "as", 
        "comma-separated", 
        "cluster.node.list.all"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.node.list.all", 
      "units": "none", 
      "scope": "cluster", 
      "type": "string", 
      "policies": null, 
      "description": "List of configured lnns as a comma-separated list"
    }, 
    "node.ifs.bytes.total": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.space", 
      "tags": [
        "ifs"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "ifs", 
        "of", 
        "bytes", 
        "node.ifs.bytes.total", 
        "/ifs", 
        "the", 
        "total", 
        "size"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "node.ifs.bytes.total", 
      "units": "bytes", 
      "scope": "node", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Total size of /ifs on the node"
    }, 
    "node.ifs.rbm.pressure_count": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "count", 
        "ifs", 
        "node.ifs.rbm.pressure_count", 
        "pressure_count", 
        "pressure", 
        "rbm", 
        "on"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "node.ifs.rbm.pressure_count", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Pressure count on RBM"
    }, 
    "node.protostats.nfs4.total": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.nfs4", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "per", 
        "nfs4", 
        "performance", 
        "node.protostats.nfs4.total", 
        "total"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.nfs4.total", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol performance statistics for NFS4"
    }, 
    "node.nfs.cache_stats.ccb.misses": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "cache", 
        "cache_stats", 
        "node.nfs.cache_stats.ccb.misses", 
        "misses", 
        "nfs", 
        "ccb"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.ccb.misses", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "CCB cache misses"
    }, 
    "node.clientstats.io": {
      "sub": "Disk IO", 
      "super": "Client", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "stats", 
        "per-client", 
        "per-disk", 
        "clientstats", 
        "node.clientstats.io", 
        "io"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.io", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_client_io", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 600
        }
      ], 
      "description": "Per-client per-disk IO stats"
    }, 
    "node.nfs.cache_stats.v4_dircache.misses": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "cache", 
        "cache_stats", 
        "directory", 
        "misses", 
        "nfs", 
        "v4_dircache", 
        "node.nfs.cache_stats.v4_dircache.misses", 
        "v4"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.v4_dircache.misses", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "V4 directory cache cache misses"
    }, 
    "node.net.ext.errors.in.rate": {
      "sub": "External", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "tags": [
        "ext_network", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "errors", 
        "node.net.ext.errors.in.rate", 
        "second", 
        "interfaces", 
        "rate", 
        "per", 
        "for", 
        "ext", 
        "node's", 
        "external", 
        "in", 
        "input", 
        "net", 
        "insightiq", 
        "ext_network"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.ext.errors.in.rate", 
      "units": "errors per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Input errors per second for a node's external interfaces"
    }, 
    "node.nfs.cache_stats.sec_username.misses": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "username", 
        "sec_username", 
        "cache", 
        "node.nfs.cache_stats.sec_username.misses", 
        "cache_stats", 
        "misses", 
        "nfs", 
        "security"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_username.misses", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security username cache misses"
    }, 
    "node.ifs.rbm.pressure_count.rate": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.rbm.pressure_count", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "count", 
        "(num/sec)", 
        "ifs", 
        "rate", 
        "pressure_count", 
        "pressure", 
        "rbm", 
        "node.ifs.rbm.pressure_count.rate"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "node.ifs.rbm.pressure_count.rate", 
      "units": "none", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "RBM Pressure count (num/sec)"
    }, 
    "ifs.bytes.free": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "ifs.fsspace", 
      "tags": [
        "ifs_cluster"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "ifs", 
        "ifs_cluster", 
        "of", 
        "filesystem", 
        "bytes", 
        "number", 
        "free", 
        "/ifs", 
        "ifs.bytes.free", 
        "in", 
        "the"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "ifs.bytes.free", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "int64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Number of free bytes in the /ifs filesystem"
    }, 
    "node.net.iface.status.N": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "status", 
        "iface", 
        "for", 
        "number", 
        "node.net.iface.status.n", 
        "n", 
        "interface", 
        "net"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.iface.status.N", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Status for interface number N"
    }, 
    "cluster.disk.xfers.in.rate": {
      "sub": "Cluster", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.xfers.in.rate.sum", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "all", 
        "disks", 
        "for", 
        "transfers", 
        "xfers", 
        "cluster.disk.xfers.in.rate", 
        "second", 
        "per", 
        "cluster", 
        "rate", 
        "in", 
        "input", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.disk.xfers.in.rate", 
      "units": "operations per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": null, 
      "description": "Input transfers per second for all disks"
    }, 
    "node.cpu.nice.avg": {
      "sub": "Node", 
      "super": "CPU", 
      "aggregation_type": "average", 
      "base_name": "node.cpu.usage", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "of", 
        "average", 
        "percent", 
        "node.cpu.nice.avg", 
        "in", 
        "usage", 
        "avg", 
        "cpu", 
        "tenths", 
        "nice"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.cpu.nice.avg", 
      "units": "permil", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Node average of nice CPU usage in tenths of a percent"
    }, 
    "node.ifs.cache": {
      "sub": "Other", 
      "super": "Cache", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "cache", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "added", 
        "ifs", 
        "node.ifs.cache", 
        "attribute", 
        "cache", 
        "tag", 
        "two", 
        "extra", 
        "read", 
        "via", 
        "defs.", 
        "key", 
        "arbitrary", 
        "performance", 
        "data", 
        "insightiq"
      ], 
      "real_name": null, 
      "xtra_attrs": {
        "Arbitrary detail": "Extra arbitrary key attribute added via tag defs.", 
        "Arbitrary detail TWO": "Extra arbitrary key attribute TWO added via tag defs."
      }, 
      "subsub": null, 
      "key": "node.ifs.cache", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_cache_data", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Read cache performance data"
    }, 
    "cluster.protostats.nfs3.total": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.nfs.total", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "protostats", 
        "for", 
        "cluster.protostats.nfs3.total", 
        "cluster", 
        "nfs3", 
        "performance", 
        "total", 
        "totaled"
      ], 
      "real_name": "cluster.protostats.nfs.total", 
      "subsub": null, 
      "key": "cluster.protostats.nfs3.total", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled performance statistics for NFS3"
    }, 
    "node.disk.bytes.out.rate.avg": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "avg", 
        "for", 
        "read", 
        "average", 
        "disks", 
        "bytes", 
        "second", 
        "node.disk.bytes.out.rate.avg", 
        "rate", 
        "per", 
        "disk", 
        "out"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.bytes.out.rate.avg", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Average bytes read per second for all disks"
    }, 
    "node.clientstats.active.smb1": {
      "sub": "Active", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.proto.cifs", 
      "tags": [
        "client_active", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "of", 
        "clients", 
        "number", 
        "clientstats", 
        "simultaneous", 
        "client_active", 
        "active", 
        "using", 
        "smb1", 
        "node.clientstats.active.smb1", 
        "insightiq"
      ], 
      "real_name": "node.clientstats.active.cifs", 
      "subsub": null, 
      "key": "node.clientstats.active.smb1", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Number of simultaneous active clients using SMB1"
    }, 
    "node.disk.busy.all": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": "node.disk.perfs", 
      "tags": [
        "disk", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "all", 
        "busy", 
        "of", 
        "percent", 
        "node.disk.busy.all", 
        "in", 
        "disk", 
        "tenths", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.busy.all", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_node_disk_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Disk busy in tenths of a percent"
    }, 
    "node.nfs.cache_stats.replay_udp.positive_hits": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "udp", 
        "cache", 
        "node.nfs.cache_stats.replay_udp.positive_hits", 
        "positive", 
        "replay_udp", 
        "cache_stats", 
        "replay", 
        "nfs", 
        "positive_hits", 
        "hits"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.replay_udp.positive_hits", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Replay UDP cache positive hits"
    }, 
    "invalid.N": {
      "sub": null, 
      "super": "Uncategorized", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "invalid.n", 
        "stat", 
        "missing", 
        "invalid", 
        "n"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "invalid.N", 
      "units": "none", 
      "scope": "node", 
      "type": "invalid", 
      "policies": null, 
      "description": "missing stat"
    }, 
    "cluster.protostats.ftp": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.ftp", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "cluster.protostats.ftp", 
        "statistics", 
        "protostats", 
        "for", 
        "ftp", 
        "cluster", 
        "performance", 
        "per-operation", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.ftp", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled per-operation performance statistics for FTP"
    }, 
    "node.ifs.cache.oldest_page_age": {
      "sub": "Other", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "oldest_page_age", 
        "ifs", 
        "node.ifs.cache.oldest_page_age", 
        "seconds", 
        "of", 
        "age", 
        "cache", 
        "in", 
        "oldest", 
        "page"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.oldest_page_age", 
      "units": "seconds", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Age in seconds of oldest page in cache"
    }, 
    "cluster.cpu.intr.avg": {
      "sub": "Cluster", 
      "super": "CPU", 
      "aggregation_type": "average", 
      "base_name": "node.cpu.intr.avg", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "a", 
        "usage", 
        "of", 
        "average", 
        "in", 
        "percent", 
        "cpu", 
        "cluster", 
        "intr", 
        "interrupt", 
        "avg", 
        "cluster.cpu.intr.avg", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.cpu.intr.avg", 
      "units": "permil", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Cluster average of interrupt CPU usage in tenths of a percent"
    }, 
    "node.sensor.misc.data.Ovp1": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "(as", 
        "int)", 
        "data", 
        "misc", 
        "miscellaneous", 
        "number", 
        "ovp1", 
        "of", 
        "9", 
        "sensors", 
        "reading", 
        "sensor", 
        "node.sensor.misc.data.ovp1"
      ], 
      "real_name": "node.sensor.misc.data.9", 
      "subsub": null, 
      "key": "node.sensor.misc.data.Ovp1", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number 9"
    }, 
    "node.clientstats.proto.papi": {
      "sub": "Top-N Clients", 
      "super": "Client", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "client", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "papi", 
        "for", 
        "proto", 
        "node.clientstats.proto.papi", 
        "clientstats", 
        "per", 
        "client", 
        "client-protocol-class", 
        "performance", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.proto.papi", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_client_proto_list_v2", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Per client-protocol-class performance statistics for PAPI"
    }, 
    "cluster.disk.xfers.rate": {
      "sub": "Cluster", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.xfers.rate.sum", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "all", 
        "disk", 
        "disks", 
        "for", 
        "cluster.disk.xfers.rate", 
        "xfers", 
        "second", 
        "per", 
        "cluster", 
        "rate", 
        "transfers", 
        "total"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.disk.xfers.rate", 
      "units": "operations per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Total transfers per second for all disks"
    }, 
    "node.sysfs.var.bytes.avail": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.var.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "available", 
        "node.sysfs.var.bytes.avail", 
        "capacity", 
        "/var", 
        "on", 
        "in", 
        "sysfs", 
        "bytes", 
        "avail", 
        "filesystem", 
        "var", 
        "the"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.var.bytes.avail", 
      "units": "bytes", 
      "scope": "node", 
      "type": "int64", 
      "policies": null, 
      "description": "Available capacity on the /var filesystem in bytes"
    }, 
    "node.sensor.misc.data.addrps1": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "(as", 
        "addrps1", 
        "data", 
        "misc", 
        "miscellaneous", 
        "int)", 
        "number", 
        "3", 
        "of", 
        "node.sensor.misc.data.addrps1", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.misc.data.3", 
      "subsub": null, 
      "key": "node.sensor.misc.data.addrps1", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number 3"
    }, 
    "node.ifs.ops.in.rate": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.ops.in", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.ifs.ops.in.rate", 
        "ops", 
        "/ifs", 
        "ifs", 
        "(ops/sec)", 
        "to", 
        "rate", 
        "in", 
        "input", 
        "operation", 
        "on", 
        "the"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "node.ifs.ops.in.rate", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Operation input rate to /ifs on the node (ops/sec)"
    }, 
    "node.sensor.temp.celsius.tSFC1": {
      "sub": "Temperature", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "node.sensor.temp.celsius.tsfc1", 
        "temperature", 
        "temp", 
        "of", 
        "number", 
        "tsfc1", 
        "celsius", 
        "in", 
        "2", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.temp.celsius.2", 
      "subsub": null, 
      "key": "node.sensor.temp.celsius.tSFC1", 
      "units": "celsius", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Celsius of temperature sensor number 2"
    }, 
    "node.ifs.rbm.throttle_events.rate": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.rbm.throttle_events", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "(num/sec)", 
        "throttle", 
        "throttle_events", 
        "ifs", 
        "node.ifs.rbm.throttle_events.rate", 
        "rate", 
        "rbm", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "node.ifs.rbm.throttle_events.rate", 
      "units": "none", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "RBM Throttle events (num/sec)"
    }, 
    "node.nfs.cache_stats.sec_sid.maximum_size": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.nfs.cache_stats.sec_sid.maximum_size", 
        "cache", 
        "cache_stats", 
        "maximum", 
        "nfs", 
        "sid", 
        "sec_sid", 
        "maximum_size", 
        "security", 
        "size"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_sid.maximum_size", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security SID cache maximum size"
    }, 
    "node.ifs.heat.lock": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "ifs_file_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "on", 
        "node.ifs.heat.lock", 
        "for", 
        "ifs", 
        "this", 
        "lock", 
        "entities", 
        "heat", 
        "/ifs", 
        "hottest", 
        "ifs_file_heat", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.lock", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_heat_list", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Hottest /ifs entities for lock events on this node"
    }, 
    "node.ifs.heat.link": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "ifs_file_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "on", 
        "for", 
        "ifs", 
        "this", 
        "/ifs", 
        "entities", 
        "heat", 
        "link", 
        "node.ifs.heat.link", 
        "hottest", 
        "ifs_file_heat", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.link", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_heat_list", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Hottest /ifs entities for link events on this node"
    }, 
    "node.sensor.volt.volts.12vminusSFC": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "12vminussfc", 
        "electric", 
        "volts", 
        "of", 
        "number", 
        "volt", 
        "potential", 
        "7", 
        "in", 
        "node.sensor.volt.volts.12vminussfc", 
        "reading", 
        "sensor", 
        "sensors"
      ], 
      "real_name": "node.sensor.volt.volts.7", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.12vminusSFC", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 7"
    }, 
    "node.ifs.bytes.out": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "node.ifs.bytes.out", 
        "from", 
        "ifs", 
        "/ifs", 
        "since", 
        "bytes", 
        "boot", 
        "output", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Throughput", 
      "key": "node.ifs.bytes.out", 
      "units": "bytes", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Bytes output from /ifs since node boot"
    }, 
    "node.nfs.v3_error_stats": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "stats", 
        "v3_error_stats", 
        "rpc", 
        "nfs", 
        "node.nfs.v3_error_stats"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.v3_error_stats", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_nfs_v3_error_stats", 
      "policies": null, 
      "description": "NFS RPC stats"
    }, 
    "node.sensor.power.watts.pinps1": {
      "sub": "Power", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "power supplies", 
        "sensors", 
        "PSU"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "via", 
        "extra", 
        "attribute", 
        "number", 
        "one", 
        "tag", 
        "in", 
        "pinps1", 
        "two", 
        "0", 
        "node.sensor.power.watts.pinps1", 
        "reading", 
        "sensor", 
        "node", 
        "power supplies", 
        "added", 
        "power", 
        "key", 
        "sensors", 
        "psu", 
        "watts", 
        "defs.", 
        "of", 
        "arbitrary"
      ], 
      "real_name": "node.sensor.power.watts.0", 
      "xtra_attrs": {
        "Arbitrary detail one": "Extra arbitrary key attribute one added via tag defs.", 
        "Arbitrary detail two": "Extra arbitrary key attribute two added via tag defs."
      }, 
      "subsub": null, 
      "key": "node.sensor.power.watts.pinps1", 
      "units": "watts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Watts of power sensor number 0"
    }, 
    "node.nfs.cache_stats.v4_dircache.negative_hits": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "node.nfs.cache_stats.v4_dircache.negative_hits", 
        "cache", 
        "cache_stats", 
        "negative", 
        "nfs", 
        "v4_dircache", 
        "directory", 
        "v4", 
        "negative_hits"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.v4_dircache.negative_hits", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "V4 directory cache cache negative hits"
    }, 
    "cluster.net.ext.packets.out.rate": {
      "sub": "External", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.net.ext.packets.out.rate", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "all", 
        "for", 
        "second", 
        "interfaces", 
        "packets", 
        "rate", 
        "per", 
        "cluster", 
        "ext", 
        "external", 
        "output", 
        "net", 
        "cluster.net.ext.packets.out.rate", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Cluster", 
      "key": "cluster.net.ext.packets.out.rate", 
      "units": "packets per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Output packets per second for all external interfaces"
    }, 
    "node.nfs.cache_stats.sec_principal.negative_hits": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "sec_principal", 
        "node.nfs.cache_stats.sec_principal.negative_hits", 
        "cache", 
        "cache_stats", 
        "negative", 
        "nfs", 
        "security", 
        "negative_hits", 
        "principal"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_principal.negative_hits", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security principal cache negative hits"
    }, 
    "node.load.5min": {
      "sub": "Load", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.load", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "load", 
        "cents", 
        "average", 
        "in", 
        "5-minute", 
        "node.load.5min", 
        "5min", 
        "(1/100ths)"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.load.5min", 
      "units": "cents", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "5-minute load average in cents (1/100ths)"
    }, 
    "node.ifs.cache.l2.data.read.miss": {
      "sub": "L2 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ifs", 
        "read", 
        "miss", 
        "cache", 
        "misses", 
        "l2", 
        "node.ifs.cache.l2.data.read.miss", 
        "(bytes/sec)", 
        "data"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l2.data.read.miss", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L2 data cache read misses (bytes/sec)"
    }, 
    "node.sensor.misc.data.Uvp1": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "(as", 
        "number", 
        "int)", 
        "node.sensor.misc.data.uvp1", 
        "misc", 
        "miscellaneous", 
        "data", 
        "uvp1", 
        "7", 
        "of", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.misc.data.7", 
      "subsub": null, 
      "key": "node.sensor.misc.data.Uvp1", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number 7"
    }, 
    "node.nfs.cache_stats.sec_username.current_size": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "username", 
        "sec_username", 
        "current_size", 
        "cache", 
        "cache_stats", 
        "node.nfs.cache_stats.sec_username.current_size", 
        "nfs", 
        "current", 
        "security", 
        "size"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_username.current_size", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security username cache current size"
    }, 
    "ifs.bytes.in": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "last", 
      "base_name": "node.ifs.bytes.in", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "ifs", 
        "of", 
        "into", 
        "cumulative", 
        "bytes", 
        "number", 
        "/ifs", 
        "ifs.bytes.in", 
        "in"
      ], 
      "real_name": null, 
      "subsub": "Throughput", 
      "key": "ifs.bytes.in", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "uint64", 
      "policies": null, 
      "description": "Cumulative number of bytes into /ifs"
    }, 
    "node.ifs.cache.l1.data.read.hit": {
      "sub": "L1 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "hit", 
        "ifs", 
        "read", 
        "cache", 
        "node.ifs.cache.l1.data.read.hit", 
        "l1", 
        "(bytes/sec)", 
        "data"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l1.data.read.hit", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L1 data cache read hits (bytes/sec)"
    }, 
    "node.cpu.user.max": {
      "sub": "Node", 
      "super": "CPU", 
      "aggregation_type": "maximum", 
      "base_name": "node.cpu.usage", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "max", 
        "average", 
        "in", 
        "percent", 
        "maximum", 
        "user", 
        "node.cpu.user.max", 
        "of", 
        "usage", 
        "cpu", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.cpu.user.max", 
      "units": "permil", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Maximum node average of user CPU usage in tenths of a percent"
    }, 
    "node.disk.ifs.bytes.total.all": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "custom", 
      "base_name": "node.disk.ifs.space", 
      "tags": [
        "disk_ifs", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "all", 
        "disk", 
        "ifs", 
        "of", 
        "node.disk.ifs.bytes.total.all", 
        "disks", 
        "bytes", 
        "/ifs", 
        "disk_ifs", 
        "total", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.ifs.bytes.total.all", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_node_disk_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Total bytes of /ifs on all disks"
    }, 
    "cluster.node.count.up": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "cluster.group", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "count", 
        "up", 
        "of", 
        "currently", 
        "cluster.node.count.up", 
        "number", 
        "cluster", 
        "nodes"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.node.count.up", 
      "units": "none", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of cluster nodes currently up"
    }, 
    "cluster.protostats.papi.total": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.papi.total", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "papi", 
        "protostats", 
        "cluster.protostats.papi.total", 
        "for", 
        "cluster", 
        "performance", 
        "total", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.papi.total", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled performance statistics for PAPI"
    }, 
    "node.disk.access.unfilt.read.hist5.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "bin", 
        "unfiltered", 
        "read", 
        "of", 
        "hist5", 
        "node.disk.access.unfilt.read.hist5.n", 
        "n", 
        "access", 
        "5", 
        "accesses", 
        "no:", 
        "in", 
        "unfilt", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.unfilt.read.hist5.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of unfiltered accesses in bin 5 N"
    }, 
    "cluster.protostats.cifs": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.cifs", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "protostats", 
        "for", 
        "cluster.protostats.cifs", 
        "smb1", 
        "cluster", 
        "performance", 
        "per-operation", 
        "totaled", 
        "cifs"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.cifs", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled per-operation performance statistics for SMB1"
    }, 
    "node.sensor.volt.count": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "count", 
        "electric", 
        "on", 
        "this", 
        "of", 
        "number", 
        "volt", 
        "potential", 
        "node.sensor.volt.count", 
        "sensor", 
        "sensors"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.volt.count", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of electric potential sensors on this node"
    }, 
    "node.protostats.jobd.total": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.jobd", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "node.protostats.jobd.total", 
        "per", 
        "jobd", 
        "performance", 
        "total"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.jobd.total", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Per protocol performance statistics for JOBD"
    }, 
    "cluster.protostats.lsass_in.total": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.lsass_in.total", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "lsass_in", 
        "protostats", 
        "for", 
        "cluster.protostats.lsass_in.total", 
        "cluster", 
        "performance", 
        "total", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.lsass_in.total", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled performance statistics for LSASS_IN"
    }, 
    "node.sensor.altitude.desc.N": {
      "sub": "Altitude", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "altitude", 
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "node.sensor.altitude.desc.n", 
        "added", 
        "description", 
        "extra", 
        "this", 
        "of", 
        "altitude", 
        "process.", 
        "number", 
        "n", 
        "note", 
        "during", 
        "sensors", 
        "an", 
        "sensor", 
        "is", 
        "tagging", 
        "desc"
      ], 
      "real_name": null, 
      "xtra_attrs": {
        "Note": "This is an extra note added during tagging process."
      }, 
      "subsub": null, 
      "key": "node.sensor.altitude.desc.N", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Description of altitude sensor number N"
    }, 
    "node.sensor.fan.names": {
      "sub": "Fans", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "on", 
        "name", 
        "this", 
        "(csv)", 
        "list", 
        "node.sensor.fan.names", 
        "fan", 
        "names", 
        "of", 
        "sensors", 
        "sensor"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.fan.names", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Name list (CSV) of fan sensors on this node"
    }, 
    "node.nfs.optime_stats": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "stats", 
        "node.nfs.optime_stats", 
        "rpc", 
        "nfs", 
        "optime_stats"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.optime_stats", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_nfs_optime_stats", 
      "policies": null, 
      "description": "NFS RPC stats"
    }, 
    "node.ifs.cache.l3.data.read.hit": {
      "sub": "L3 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "hit", 
        "ifs", 
        "read", 
        "cache", 
        "node.ifs.cache.l3.data.read.hit", 
        "l3", 
        "(bytes/sec)", 
        "data", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l3.data.read.hit", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L3 data cache read hits (bytes/sec)"
    }, 
    "node.ifs.cache.l1.prefetch.miss": {
      "sub": "L1 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "no", 
        "ifs", 
        "with", 
        "of", 
        "cache", 
        "purge", 
        "rate", 
        "prefetch", 
        "l1", 
        "node.ifs.cache.l1.prefetch.miss", 
        "(bytes/sec)", 
        "miss", 
        "pages"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l1.prefetch.miss", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Purge rate of L1 cache pages with no hits (bytes/sec)"
    }, 
    "node.net.iface.name.N": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "iface", 
        "name", 
        "node.net.iface.name.n", 
        "of", 
        "number", 
        "n", 
        "interface", 
        "net", 
        "network"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.iface.name.N", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Name of network interface number N"
    }, 
    "node.ifs.files.removed.rate": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.files.removed", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "files", 
        "(num/sec)", 
        "on", 
        "file", 
        "ifs", 
        "/ifs", 
        "removal", 
        "rate", 
        "node.ifs.files.removed.rate", 
        "the", 
        "removed"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "node.ifs.files.removed.rate", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "File removal rate on /ifs on the node (num/sec)"
    }, 
    "node.net.iface.internal.N": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "iface", 
        "is", 
        "number", 
        "n", 
        "internal", 
        "interface", 
        "node.net.iface.internal.n", 
        "net", 
        "true", 
        "if"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.iface.internal.N", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "True if interface number N is internal"
    }, 
    "cluster.node.list.smartfailed": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "cluster.group", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "cluster.node.list.smartfailed", 
        "lnns", 
        "of", 
        "smartfailed", 
        "list", 
        "cluster", 
        "as", 
        "comma-separated"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.node.list.smartfailed", 
      "units": "none", 
      "scope": "cluster", 
      "type": "string", 
      "policies": null, 
      "description": "List of smartfailed lnns as a comma-separated list"
    }, 
    "node.ifs.cache.l3.meta.prefetch.start": {
      "sub": "L3 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ifs", 
        "meta-data", 
        "cache", 
        "node.ifs.cache.l3.meta.prefetch.start", 
        "start", 
        "insightiq", 
        "meta", 
        "prefetch", 
        "starts", 
        "(bytes/sec)", 
        "l3"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l3.meta.prefetch.start", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L3 meta-data cache prefetch starts (bytes/sec)"
    }, 
    "cluster.cpu.user.avg": {
      "sub": "Cluster", 
      "super": "CPU", 
      "aggregation_type": "average", 
      "base_name": "node.cpu.user.avg", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "a", 
        "of", 
        "average", 
        "percent", 
        "cluster.cpu.user.avg", 
        "cluster", 
        "user", 
        "in", 
        "usage", 
        "avg", 
        "cpu", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.cpu.user.avg", 
      "units": "permil", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Cluster average of user CPU usage in tenths of a percent"
    }, 
    "cluster.disk.xfers.out.rate": {
      "sub": "Cluster", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.xfers.out.rate.sum", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "all", 
        "disks", 
        "for", 
        "xfers", 
        "second", 
        "per", 
        "cluster", 
        "rate", 
        "transfers", 
        "cluster.disk.xfers.out.rate", 
        "output", 
        "disk", 
        "out"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.disk.xfers.out.rate", 
      "units": "operations per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": null, 
      "description": "Output transfers per second for all disks"
    }, 
    "node.disk.xfers.rate.avg": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "avg", 
        "disks", 
        "for", 
        "average", 
        "xfers", 
        "second", 
        "per", 
        "rate", 
        "transfers", 
        "disk", 
        "node.disk.xfers.rate.avg"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfers.rate.avg", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Average transfers per second for all disks"
    }, 
    "node.ifs.ssd.bytes.avail": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.space", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "available", 
        "ifs", 
        "of", 
        "bytes", 
        "number", 
        "node.ifs.ssd.bytes.avail", 
        "avail", 
        "ssds", 
        "ssd", 
        "the", 
        "on"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "node.ifs.ssd.bytes.avail", 
      "units": "bytes", 
      "scope": "node", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Number of available bytes on SSDs on the node"
    }, 
    "node.ifs.cache.l3.meta.read.miss": {
      "sub": "L3 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ifs", 
        "read", 
        "node.ifs.cache.l3.meta.read.miss", 
        "cache", 
        "misses", 
        "meta", 
        "l3", 
        "meta-data", 
        "(bytes/sec)", 
        "miss", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l3.meta.read.miss", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L3 meta-data cache read misses (bytes/sec)"
    }, 
    "node.disk.access.slow.all": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": "node.disk.perfs", 
      "tags": [
        "disk", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "slow", 
        "for", 
        "disks", 
        "accesses", 
        "access", 
        "second", 
        "per", 
        "disk", 
        "node.disk.access.slow.all", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.slow.all", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_node_disk_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Slow accesses per second for all disks"
    }, 
    "ifs.bytes.in.rate": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.bytes.in.rate", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "(bytes", 
        "cumulative", 
        "ifs", 
        "/ifs", 
        "into", 
        "ifs.bytes.in.rate", 
        "bytes", 
        "second)", 
        "per", 
        "rate", 
        "throughput", 
        "in"
      ], 
      "real_name": null, 
      "subsub": "Throughput", 
      "key": "ifs.bytes.in.rate", 
      "units": "bytes per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Cumulative throughput rate (bytes per second) into /ifs"
    }, 
    "node.sensor.temp.count": {
      "sub": "Temperature", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "count", 
        "temperature", 
        "temp", 
        "on", 
        "this", 
        "of", 
        "node.sensor.temp.count", 
        "number", 
        "sensors", 
        "sensor"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.temp.count", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of temperature sensors on this node"
    }, 
    "node.ifs.cache.l1.meta.read.start": {
      "sub": "L1 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "starts", 
        "ifs", 
        "read", 
        "meta-data", 
        "cache", 
        "node.ifs.cache.l1.meta.read.start", 
        "start", 
        "meta", 
        "l1", 
        "(bytes/sec)"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l1.meta.read.start", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L1 meta-data cache read starts (bytes/sec)"
    }, 
    "node.sensor.temp.celsius.tps1": {
      "sub": "Temperature", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "temperature", 
        "temp", 
        "of", 
        "number", 
        "tps1", 
        "node.sensor.temp.celsius.tps1", 
        "celsius", 
        "4", 
        "in", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.temp.celsius.4", 
      "subsub": null, 
      "key": "node.sensor.temp.celsius.tps1", 
      "units": "celsius", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Celsius of temperature sensor number 4"
    }, 
    "node.sensor.temp.celsius.tps2": {
      "sub": "Temperature", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "temperature", 
        "temp", 
        "of", 
        "celsius", 
        "number", 
        "node.sensor.temp.celsius.tps2", 
        "tps2", 
        "5", 
        "in", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.temp.celsius.5", 
      "subsub": null, 
      "key": "node.sensor.temp.celsius.tps2", 
      "units": "celsius", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Celsius of temperature sensor number 5"
    }, 
    "node.ifs.cache.clients": {
      "sub": "Other", 
      "super": "Cache", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "clients", 
        "stats", 
        "per-client", 
        "ifs", 
        "cache", 
        "node.ifs.cache.clients", 
        "performance"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.clients", 
      "units": "none", 
      "scope": "node", 
      "type": "user_cache_clients", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 600
        }, 
        {
          "interval": 600, 
          "persistent": true, 
          "retention": 604800
        }
      ], 
      "description": "Per-client cache performance stats"
    }, 
    "node.je.num_workers": {
      "sub": null, 
      "super": "Job Engine", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "job"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "node.je.num_workers", 
        "num_workers", 
        "of", 
        "workers", 
        "number", 
        "engine", 
        "job", 
        "je"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.je.num_workers", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_je_workers", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 3600
        }, 
        {
          "interval": 60, 
          "persistent": true, 
          "retention": 604800
        }
      ], 
      "description": "Number of job engine workers"
    }, 
    "node.disk.xfer.size.in.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "index", 
        "node.disk.xfer.size.in.n", 
        "disk", 
        "for", 
        "with", 
        "n", 
        "write", 
        "in", 
        "xfer", 
        "avg", 
        "size"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfer.size.in.N", 
      "units": "bytes", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Avg write size for disk with index N"
    }, 
    "node.ifs.cache.stats": {
      "sub": "Other", 
      "super": "Cache", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "statistics", 
        "stats", 
        "ifs", 
        "cache", 
        "system)", 
        "node.ifs.cache.stats", 
        "(file"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.stats", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_ifs_cache", 
      "policies": null, 
      "description": "IFS (File System) cache statistics"
    }, 
    "ifs.ssd.bytes.free": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "ifs.fsspace", 
      "tags": [
        "ifs_cluster"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "on", 
        "in", 
        "ifs", 
        "ifs_cluster", 
        "of", 
        "ifs.ssd.bytes.free", 
        "bytes", 
        "number", 
        "free", 
        "/ifs", 
        "filesystem", 
        "ssds", 
        "ssd", 
        "the"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "ifs.ssd.bytes.free", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "int64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Number of free bytes on SSDs in the /ifs filesystem"
    }, 
    "node.disk.iosched.latency.max": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "maximum", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "latency", 
        "all", 
        "max", 
        "iosched", 
        "disks", 
        "node.disk.iosched.latency.max", 
        "of", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.iosched.latency.max", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Max iosched latency of all disks"
    }, 
    "node.thread.stats": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "stats", 
        "thread", 
        "onefs", 
        "node.thread.stats", 
        "pools"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.thread.stats", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_thread_pool_stats", 
      "policies": null, 
      "description": "OneFS thread pools stats"
    }, 
    "ifs.ops.out": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "last", 
      "base_name": "node.ifs.ops.out", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "operations", 
        "ifs", 
        "ops", 
        "of", 
        "cumulative", 
        "number", 
        "/ifs", 
        "out", 
        "ifs.ops.out"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "ifs.ops.out", 
      "units": "operations", 
      "scope": "cluster", 
      "type": "uint64", 
      "policies": null, 
      "description": "Cumulative number of operations out of /ifs"
    }, 
    "node.disk.ifs.bytes.used.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.ifs.space", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "used", 
        "ifs", 
        "of", 
        "bytes", 
        "n", 
        "node.disk.ifs.bytes.used.n", 
        "index", 
        "/ifs", 
        "disk", 
        "with"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.ifs.bytes.used.N", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Used bytes of /ifs on disk with index N"
    }, 
    "node.nfs.cache_stats.ccb.timeout_period": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.nfs.cache_stats.ccb.timeout_period", 
        "cache", 
        "cache_stats", 
        "period", 
        "timeout_period", 
        "nfs", 
        "timeout", 
        "ccb"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.ccb.timeout_period", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "CCB cache timeout period"
    }, 
    "node.nfs.cache_stats.replay_tcp.negative_hits": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "replay_tcp", 
        "cache", 
        "cache_stats", 
        "tcp", 
        "negative", 
        "replay", 
        "nfs", 
        "node.nfs.cache_stats.replay_tcp.negative_hits", 
        "negative_hits"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.replay_tcp.negative_hits", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Replay TCP cache negative hits"
    }, 
    "node.ifs.ops.out": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "operations", 
        "since", 
        "from", 
        "node.ifs.ops.out", 
        "ops", 
        "/ifs", 
        "ifs", 
        "boot", 
        "output", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "node.ifs.ops.out", 
      "units": "operations", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Output operations from /ifs since node boot"
    }, 
    "node.disk.iosched.queue.all": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": "node.disk.perfs", 
      "tags": [
        "disk", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.disk.iosched.queue.all", 
        "all", 
        "for", 
        "iosched", 
        "disks", 
        "queue", 
        "length", 
        "disk", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.iosched.queue.all", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_node_disk_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Iosched queue length for all disks"
    }, 
    "cluster.node.count.smartfailed": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "cluster.group", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "count", 
        "cluster.node.count.smartfailed", 
        "of", 
        "smartfailed", 
        "number", 
        "cluster", 
        "nodes"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.node.count.smartfailed", 
      "units": "none", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of smartfailed nodes"
    }, 
    "node.nfs.cache_stats.ccb.timeout_count": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "count", 
        "timeout_count", 
        "cache", 
        "cache_stats", 
        "node.nfs.cache_stats.ccb.timeout_count", 
        "nfs", 
        "timeout", 
        "ccb"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.ccb.timeout_count", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "CCB cache timeout count"
    }, 
    "ifs.bytes.in.rate.max": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "maximum", 
      "base_name": "node.ifs.bytes.in.rate", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "(bytes", 
        "ifs", 
        "max", 
        "into", 
        "cumulative", 
        "bytes", 
        "maximum", 
        "per", 
        "/ifs", 
        "rate", 
        "throughput", 
        "second)", 
        "in", 
        "ifs.bytes.in.rate.max"
      ], 
      "real_name": null, 
      "subsub": "Throughput", 
      "key": "ifs.bytes.in.rate.max", 
      "units": "bytes per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Cumulative maximum throughput rate (bytes per second) into /ifs"
    }, 
    "node.disk.xfer.size.out.all": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": "node.disk.perfs", 
      "tags": [
        "disk", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "disk", 
        "node.disk.xfer.size.out.all", 
        "transfer", 
        "size", 
        "bytes", 
        "insightiq", 
        "in", 
        "output", 
        "xfer", 
        "out"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfer.size.out.all", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_node_disk_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Output transfer size in bytes"
    }, 
    "node.sensor.curr.amps.cdcps2": {
      "sub": "Current (Amperage)", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "cdcps2", 
        "curr", 
        "electric", 
        "of", 
        "number", 
        "current", 
        "3", 
        "in", 
        "amps", 
        "node.sensor.curr.amps.cdcps2", 
        "reading", 
        "sensor", 
        "sensors"
      ], 
      "real_name": "node.sensor.curr.amps.3", 
      "subsub": null, 
      "key": "node.sensor.curr.amps.cdcps2", 
      "units": "amps", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Amps of electric current sensor number 3"
    }, 
    "node.sensor.altitude.names": {
      "sub": "Altitude", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "altitude", 
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "on", 
        "note", 
        "name", 
        "extra", 
        "this", 
        "(csv)", 
        "altitude", 
        "process.", 
        "list", 
        "an", 
        "node.sensor.altitude.names", 
        "added", 
        "names", 
        "of", 
        "during", 
        "sensors", 
        "sensor", 
        "is", 
        "tagging"
      ], 
      "real_name": null, 
      "xtra_attrs": {
        "Note": "This is an extra note added during tagging process."
      }, 
      "subsub": null, 
      "key": "node.sensor.altitude.names", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Name list (CSV) of altitude sensors on this node"
    }, 
    "node.clientstats.active.nlm": {
      "sub": "Active", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.proto.nlm", 
      "tags": [
        "client_active", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "of", 
        "clients", 
        "clientstats", 
        "number", 
        "simultaneous", 
        "client_active", 
        "node.clientstats.active.nlm", 
        "active", 
        "using", 
        "nlm", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.active.nlm", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Number of simultaneous active clients using NLM"
    }, 
    "node.disk.xfers.out.rate.all": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": "node.disk.perfs", 
      "tags": [
        "disk", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "disks", 
        "for", 
        "xfers", 
        "second", 
        "per", 
        "rate", 
        "insightiq", 
        "transfers", 
        "output", 
        "disk", 
        "node.disk.xfers.out.rate.all", 
        "out"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfers.out.rate.all", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_node_disk_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Output transfers per second for all disks"
    }, 
    "node.sensor.power.watts.N": {
      "sub": "Power", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "power supplies", 
        "sensors", 
        "PSU"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "via", 
        "extra", 
        "attribute", 
        "number", 
        "one", 
        "tag", 
        "in", 
        "two", 
        "reading", 
        "sensor", 
        "node", 
        "power supplies", 
        "added", 
        "power", 
        "node.sensor.power.watts.n", 
        "key", 
        "sensors", 
        "psu", 
        "watts", 
        "defs.", 
        "of", 
        "n", 
        "arbitrary"
      ], 
      "real_name": null, 
      "xtra_attrs": {
        "Arbitrary detail one": "Extra arbitrary key attribute one added via tag defs.", 
        "Arbitrary detail two": "Extra arbitrary key attribute two added via tag defs."
      }, 
      "subsub": null, 
      "key": "node.sensor.power.watts.N", 
      "units": "watts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Watts of power sensor number N"
    }, 
    "node.ifs.cache.l1.data.prefetch.start": {
      "sub": "L1 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ifs", 
        "starts", 
        "cache", 
        "start", 
        "prefetch", 
        "l1", 
        "(bytes/sec)", 
        "data", 
        "node.ifs.cache.l1.data.prefetch.start"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l1.data.prefetch.start", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L1 data cache prefetch starts (bytes/sec)"
    }, 
    "node.sensor.volt.volts.3.3vSFC": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "number", 
        "electric", 
        "volts", 
        "of", 
        "3vsfc", 
        "node.sensor.volt.volts.3.3vsfc", 
        "volt", 
        "3", 
        "potential", 
        "in", 
        "9", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.volt.volts.9", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.3.3vSFC", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 9"
    }, 
    "node.ifs.cache.l3.meta.prefetch.hit": {
      "sub": "L3 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "hit", 
        "ifs", 
        "node.ifs.cache.l3.meta.prefetch.hit", 
        "cache", 
        "insightiq", 
        "meta", 
        "prefetch", 
        "meta-data", 
        "(bytes/sec)", 
        "l3"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l3.meta.prefetch.hit", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L3 meta-data cache prefetch hits (bytes/sec)"
    }, 
    "node.load.1min": {
      "sub": "Load", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.load", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "load", 
        "cents", 
        "average", 
        "node.load.1min", 
        "1-minute", 
        "1min", 
        "in", 
        "(1/100ths)"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.load.1min", 
      "units": "cents", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "1-minute load average in cents (1/100ths)"
    }, 
    "node.sensor.power.desc.N": {
      "sub": "Power", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "power supplies", 
        "sensors", 
        "PSU"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "via", 
        "extra", 
        "attribute", 
        "number", 
        "one", 
        "tag", 
        "sensors", 
        "two", 
        "desc", 
        "sensor", 
        "node", 
        "power supplies", 
        "added", 
        "description", 
        "power", 
        "key", 
        "node.sensor.power.desc.n", 
        "psu", 
        "defs.", 
        "of", 
        "n", 
        "arbitrary"
      ], 
      "real_name": null, 
      "xtra_attrs": {
        "Arbitrary detail one": "Extra arbitrary key attribute one added via tag defs.", 
        "Arbitrary detail two": "Extra arbitrary key attribute two added via tag defs."
      }, 
      "subsub": null, 
      "key": "node.sensor.power.desc.N", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Description of power sensor number N"
    }, 
    "node.ifs.heat.write.total": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.heat.write", 
      "tags": [
        "ifs_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "node.ifs.heat.write.total", 
        "ifs", 
        "this", 
        "of", 
        "rate", 
        "write", 
        "heat", 
        "ifs_heat", 
        "total", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.write.total", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Total rate of write events on this node"
    }, 
    "cluster.net.int.bytes.in.rate": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.net.int.bytes.in.rate", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "all", 
        "for", 
        "cluster.net.int.bytes.in.rate", 
        "int", 
        "interfaces", 
        "bytes", 
        "second", 
        "per", 
        "cluster", 
        "rate", 
        "internal", 
        "in", 
        "input", 
        "net"
      ], 
      "real_name": null, 
      "subsub": "Cluster", 
      "key": "cluster.net.int.bytes.in.rate", 
      "units": "bytes per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": null, 
      "description": "Input bytes per second for all internal interfaces"
    }, 
    "node.nfs.cache_stats.sec_sid.misses": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "cache", 
        "cache_stats", 
        "misses", 
        "nfs", 
        "sid", 
        "sec_sid", 
        "node.nfs.cache_stats.sec_sid.misses", 
        "security"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_sid.misses", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security SID cache misses"
    }, 
    "node.sensor.temp.celsius.tutCPU1": {
      "sub": "Temperature", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "temperature", 
        "temp", 
        "tutcpu1", 
        "node.sensor.temp.celsius.tutcpu1", 
        "of", 
        "number", 
        "1", 
        "celsius", 
        "in", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.temp.celsius.1", 
      "subsub": null, 
      "key": "node.sensor.temp.celsius.tutCPU1", 
      "units": "celsius", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Celsius of temperature sensor number 1"
    }, 
    "cluster.cpu.idle.avg": {
      "sub": "Cluster", 
      "super": "CPU", 
      "aggregation_type": "average", 
      "base_name": "node.cpu.idle.avg", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "a", 
        "usage", 
        "of", 
        "average", 
        "percent", 
        "cluster", 
        "idle", 
        "in", 
        "cluster.cpu.idle.avg", 
        "avg", 
        "cpu", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.cpu.idle.avg", 
      "units": "permil", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Cluster average of idle CPU usage in tenths of a percent"
    }, 
    "node.nfs.cache_stats.replay_tcp.maximum_size": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "replay_tcp", 
        "node.nfs.cache_stats.replay_tcp.maximum_size", 
        "cache", 
        "cache_stats", 
        "tcp", 
        "maximum", 
        "replay", 
        "nfs", 
        "maximum_size", 
        "size"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.replay_tcp.maximum_size", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Replay TCP cache maximum size"
    }, 
    "cluster.protostats.irp.total": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.irp.total", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "protostats", 
        "for", 
        "irp", 
        "cluster.protostats.irp.total", 
        "cluster", 
        "irps", 
        "performance", 
        "total", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.irp.total", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled performance statistics for IRPs"
    }, 
    "cluster.cpu.nice.max": {
      "sub": "Cluster", 
      "super": "CPU", 
      "aggregation_type": "maximum", 
      "base_name": "node.cpu.nice.max", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "a", 
        "max", 
        "average", 
        "in", 
        "percent", 
        "maximum", 
        "cluster", 
        "of", 
        "usage", 
        "nice", 
        "cpu", 
        "tenths", 
        "cluster.cpu.nice.max"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.cpu.nice.max", 
      "units": "permil", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Maximum cluster average of nice CPU usage in tenths of a percent"
    }, 
    "ifs.bytes.reserved.drive": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "reserved", 
        "ifs.bytes.reserved.drive", 
        "space", 
        "ifs", 
        "bytes", 
        "drive", 
        "per", 
        "drive,", 
        "in"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "ifs.bytes.reserved.drive", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "uint64", 
      "policies": null, 
      "description": "Reserved space per drive, in bytes"
    }, 
    "cluster.protostats.jobd.total": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.jobd.total", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "protostats", 
        "for", 
        "cluster.protostats.jobd.total", 
        "cluster", 
        "jobd", 
        "performance", 
        "total", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.jobd.total", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled performance statistics for JOBD"
    }, 
    "node.protostats.nfs.total": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.nfs", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "node.protostats.nfs.total", 
        "per", 
        "nfs3", 
        "nfs", 
        "performance", 
        "total"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.nfs.total", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol performance statistics for NFS3"
    }, 
    "node.sensor.volt.volts.1.8vSFC": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "12", 
        "electric", 
        "8vsfc", 
        "volts", 
        "of", 
        "number", 
        "1", 
        "volt", 
        "potential", 
        "in", 
        "sensors", 
        "reading", 
        "sensor", 
        "node.sensor.volt.volts.1.8vsfc"
      ], 
      "real_name": "node.sensor.volt.volts.12", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.1.8vSFC", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 12"
    }, 
    "node.ifs.files.created": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "files", 
        "since", 
        "created", 
        "of", 
        "ifs", 
        "boot", 
        "number", 
        "/ifs", 
        "node.ifs.files.created", 
        "on"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "node.ifs.files.created", 
      "units": "operations", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Number of files created on /ifs since node boot"
    }, 
    "node.sensor.power.watts.poutps1": {
      "sub": "Power", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "power supplies", 
        "sensors", 
        "PSU"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "via", 
        "extra", 
        "attribute", 
        "number", 
        "one", 
        "tag", 
        "in", 
        "node.sensor.power.watts.poutps1", 
        "two", 
        "2", 
        "reading", 
        "sensor", 
        "node", 
        "power supplies", 
        "added", 
        "power", 
        "key", 
        "sensors", 
        "psu", 
        "watts", 
        "poutps1", 
        "defs.", 
        "of", 
        "arbitrary"
      ], 
      "real_name": "node.sensor.power.watts.2", 
      "xtra_attrs": {
        "Arbitrary detail one": "Extra arbitrary key attribute one added via tag defs.", 
        "Arbitrary detail two": "Extra arbitrary key attribute two added via tag defs."
      }, 
      "subsub": null, 
      "key": "node.sensor.power.watts.poutps1", 
      "units": "watts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Watts of power sensor number 2"
    }, 
    "node.sensor.power.watts.poutps2": {
      "sub": "Power", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "power supplies", 
        "sensors", 
        "PSU"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "via", 
        "extra", 
        "attribute", 
        "number", 
        "one", 
        "tag", 
        "in", 
        "node.sensor.power.watts.poutps2", 
        "two", 
        "3", 
        "poutps2", 
        "reading", 
        "sensor", 
        "node", 
        "power supplies", 
        "added", 
        "power", 
        "key", 
        "sensors", 
        "psu", 
        "watts", 
        "defs.", 
        "of", 
        "arbitrary"
      ], 
      "real_name": "node.sensor.power.watts.3", 
      "xtra_attrs": {
        "Arbitrary detail one": "Extra arbitrary key attribute one added via tag defs.", 
        "Arbitrary detail two": "Extra arbitrary key attribute two added via tag defs."
      }, 
      "subsub": null, 
      "key": "node.sensor.power.watts.poutps2", 
      "units": "watts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Watts of power sensor number 3"
    }, 
    "node.nfs.cache_stats.replay_tcp.timeout_count": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "count", 
        "timeout_count", 
        "replay_tcp", 
        "cache", 
        "cache_stats", 
        "tcp", 
        "replay", 
        "nfs", 
        "timeout", 
        "node.nfs.cache_stats.replay_tcp.timeout_count"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.replay_tcp.timeout_count", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Replay TCP cache timeout count"
    }, 
    "node.nfs.cache_stats.sec_username.timeout_period": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "username", 
        "sec_username", 
        "cache", 
        "cache_stats", 
        "period", 
        "timeout_period", 
        "nfs", 
        "timeout", 
        "node.nfs.cache_stats.sec_username.timeout_period", 
        "security"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_username.timeout_period", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security username cache timeout period"
    }, 
    "node.sensor.volt.volts.1.5v": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "electric", 
        "node.sensor.volt.volts.1.5v", 
        "16", 
        "volts", 
        "5v", 
        "number", 
        "1", 
        "volt", 
        "of", 
        "in", 
        "sensors", 
        "reading", 
        "sensor", 
        "potential"
      ], 
      "real_name": "node.sensor.volt.volts.16", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.1.5v", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 16"
    }, 
    "node.protostats.jobd": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "protostats", 
        "for", 
        "per", 
        "node.protostats.jobd", 
        "jobd", 
        "performance", 
        "protocol-operation"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.jobd", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Per protocol-operation performance statistics for JOBD"
    }, 
    "node.sensor.fan.rpms.fps21": {
      "sub": "Fans", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "of", 
        "rpms", 
        "number", 
        "fps21", 
        "fan", 
        "node.sensor.fan.rpms.fps21", 
        "in", 
        "sensors", 
        "reading", 
        "sensor", 
        "4"
      ], 
      "real_name": "node.sensor.fan.rpms.4", 
      "subsub": null, 
      "key": "node.sensor.fan.rpms.fps21", 
      "units": "rpms", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading in RPMS of fan sensor number 4"
    }, 
    "node.sensor.misc.data.PwrOff2": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "(as", 
        "number", 
        "16", 
        "int)", 
        "data", 
        "node.sensor.misc.data.pwroff2", 
        "misc", 
        "miscellaneous", 
        "pwroff2", 
        "of", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.misc.data.16", 
      "subsub": null, 
      "key": "node.sensor.misc.data.PwrOff2", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number 16"
    }, 
    "node.sensor.curr.desc.N": {
      "sub": "Current (Amperage)", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "curr", 
        "description", 
        "of", 
        "number", 
        "n", 
        "current", 
        "node.sensor.curr.desc.n", 
        "electric", 
        "sensor", 
        "sensors", 
        "desc"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.curr.desc.N", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Description of electric current sensor number N"
    }, 
    "node.nfs.cache_stats.replay_tcp.timeout_period": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "replay_tcp", 
        "cache", 
        "cache_stats", 
        "tcp", 
        "period", 
        "timeout_period", 
        "replay", 
        "nfs", 
        "timeout", 
        "node.nfs.cache_stats.replay_tcp.timeout_period"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.replay_tcp.timeout_period", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Replay TCP cache timeout period"
    }, 
    "node.ifs.cache.l2.data.prefetch.hit": {
      "sub": "L2 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.ifs.cache.l2.data.prefetch.hit", 
        "hits", 
        "hit", 
        "ifs", 
        "cache", 
        "l2", 
        "prefetch", 
        "(bytes/sec)", 
        "data"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l2.data.prefetch.hit", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L2 data cache prefetch hits (bytes/sec)"
    }, 
    "node.disk.ifs.bytes.total.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.ifs.space", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "disk", 
        "ifs", 
        "of", 
        "bytes", 
        "n", 
        "node.disk.ifs.bytes.total.n", 
        "index", 
        "/ifs", 
        "total", 
        "with"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.ifs.bytes.total.N", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Total bytes of /ifs on disk with index N"
    }, 
    "node.sensor.volt.volts.vDimmCPU1": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "20", 
        "electric", 
        "volts", 
        "of", 
        "number", 
        "volt", 
        "potential", 
        "in", 
        "sensors", 
        "reading", 
        "sensor", 
        "node.sensor.volt.volts.vdimmcpu1", 
        "vdimmcpu1"
      ], 
      "real_name": "node.sensor.volt.volts.20", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.vDimmCPU1", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 20"
    }, 
    "node.protostats.nfs4": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "protocol"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "node.protostats.nfs4", 
        "per", 
        "nfs4", 
        "performance", 
        "protocol-operation"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.nfs4", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol-operation performance statistics for NFS4"
    }, 
    "node.protostats.nfs3": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "protocol"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "per", 
        "node.protostats.nfs3", 
        "nfs3", 
        "performance", 
        "protocol-operation"
      ], 
      "real_name": "node.protostats.nfs", 
      "subsub": null, 
      "key": "node.protostats.nfs3", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol-operation performance statistics for NFS3"
    }, 
    "node.nfs.cache_stats.v4_dircache.positive_hits": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "cache", 
        "positive", 
        "v4_dircache", 
        "cache_stats", 
        "nfs", 
        "node.nfs.cache_stats.v4_dircache.positive_hits", 
        "positive_hits", 
        "directory", 
        "v4"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.v4_dircache.positive_hits", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "V4 directory cache cache positive hits"
    }, 
    "node.ifs.heat.setattr.total": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.heat.setattr", 
      "tags": [
        "ifs_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "node.ifs.heat.setattr.total", 
        "setattr", 
        "ifs", 
        "this", 
        "of", 
        "rate", 
        "heat", 
        "ifs_heat", 
        "total", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.setattr.total", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Total rate of setattr events on this node"
    }, 
    "node.net.int.packets.out.rate": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "for", 
        "int", 
        "interfaces", 
        "packets", 
        "second", 
        "per", 
        "rate", 
        "internal", 
        "node's", 
        "node.net.int.packets.out.rate", 
        "output", 
        "net", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.int.packets.out.rate", 
      "units": "packets per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Output packets per second for a node's internal interfaces"
    }, 
    "cluster.node.list.readonly": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "cluster.group", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "lnns", 
        "cluster.node.list.readonly", 
        "of", 
        "list", 
        "as", 
        "cluster", 
        "readonly", 
        "comma-separated", 
        "read-only"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.node.list.readonly", 
      "units": "none", 
      "scope": "cluster", 
      "type": "string", 
      "policies": null, 
      "description": "List of read-only lnns as a comma-separated list"
    }, 
    "node.disk.access.unfilt.write.hist4.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "write", 
        "node.disk.access.unfilt.write.hist4.n", 
        "of", 
        "in", 
        "hist4", 
        "accesses", 
        "n", 
        "access", 
        "bin", 
        "4", 
        "no:", 
        "unfiltered", 
        "unfilt", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.unfilt.write.hist4.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of unfiltered accesses in bin 4 N"
    }, 
    "cluster.net.ext.errors.out.rate": {
      "sub": "External", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.net.ext.errors.out.rate", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "all", 
        "errors", 
        "for", 
        "second", 
        "external", 
        "rate", 
        "cluster.net.ext.errors.out.rate", 
        "cluster", 
        "ext", 
        "per", 
        "output", 
        "net", 
        "interfaces", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Cluster", 
      "key": "cluster.net.ext.errors.out.rate", 
      "units": "errors per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Output errors per second for all external interfaces"
    }, 
    "node.disk.access.unfilt.write.hist2.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "write", 
        "unfiltered", 
        "of", 
        "hist2", 
        "accesses", 
        "n", 
        "access", 
        "bin", 
        "node.disk.access.unfilt.write.hist2.n", 
        "no:", 
        "in", 
        "unfilt", 
        "2", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.unfilt.write.hist2.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of unfiltered accesses in bin 2 N"
    }, 
    "node.load.15min": {
      "sub": "Load", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.load", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "load", 
        "15-minute", 
        "node.load.15min", 
        "cents", 
        "average", 
        "in", 
        "15min", 
        "(1/100ths)"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.load.15min", 
      "units": "cents", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "15-minute load average in cents (1/100ths)"
    }, 
    "node.sensor.curr.amps.cdcps1": {
      "sub": "Current (Amperage)", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "cdcps1", 
        "curr", 
        "electric", 
        "of", 
        "in", 
        "number", 
        "current", 
        "2", 
        "amps", 
        "node.sensor.curr.amps.cdcps1", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.curr.amps.2", 
      "subsub": null, 
      "key": "node.sensor.curr.amps.cdcps1", 
      "units": "amps", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Amps of electric current sensor number 2"
    }, 
    "node.clientstats.connected.http": {
      "sub": "Connected", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.connected", 
      "tags": [
        "client_connected", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "http", 
        "of", 
        "clients", 
        "clientstats", 
        "number", 
        "connected", 
        "client_connected", 
        "node.clientstats.connected.http", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.connected.http", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Number of connected HTTP clients"
    }, 
    "node.uptime": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": 10, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "uptime", 
        "since", 
        "seconds", 
        "of", 
        "in", 
        "node.uptime", 
        "length", 
        "booted", 
        "time", 
        "the", 
        "was"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.uptime", 
      "units": "seconds", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 100
        }
      ], 
      "description": "Length of time in seconds since the node was booted"
    }, 
    "node.sensor.curr.names": {
      "sub": "Current (Amperage)", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "on", 
        "curr", 
        "name", 
        "this", 
        "(csv)", 
        "list", 
        "current", 
        "names", 
        "node.sensor.curr.names", 
        "of", 
        "sensors", 
        "sensor", 
        "electric"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.curr.names", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Name list (CSV) of electric current sensors on this node"
    }, 
    "node.cpu.sys.N": {
      "sub": "Node", 
      "super": "CPU", 
      "aggregation_type": "average", 
      "base_name": "node.cpu.usage", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "for", 
        "index", 
        "of", 
        "percent", 
        "system", 
        "n", 
        "sys", 
        "in", 
        "usage", 
        "node.cpu.sys.n", 
        "with", 
        "cpu", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.cpu.sys.N", 
      "units": "permil", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "System CPU usage in tenths of a percent for CPU with index N"
    }, 
    "node.ifs.cache.l1.meta.read.hit": {
      "sub": "L1 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "hit", 
        "ifs", 
        "read", 
        "meta-data", 
        "cache", 
        "meta", 
        "l1", 
        "(bytes/sec)", 
        "node.ifs.cache.l1.meta.read.hit"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l1.meta.read.hit", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L1 meta-data cache read hits (bytes/sec)"
    }, 
    "node.sensor.temp.names": {
      "sub": "Temperature", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "on", 
        "node.sensor.temp.names", 
        "name", 
        "temp", 
        "this", 
        "(csv)", 
        "list", 
        "names", 
        "of", 
        "sensors", 
        "sensor", 
        "temperature"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.temp.names", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Name list (CSV) of temperature sensors on this node"
    }, 
    "node.clientstats.connected.nfs": {
      "sub": "Connected", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.connected", 
      "tags": [
        "client_connected", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "of", 
        "clients", 
        "node.clientstats.connected.nfs", 
        "clientstats", 
        "number", 
        "nfs", 
        "client_connected", 
        "connected", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.connected.nfs", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Number of connected NFS clients"
    }, 
    "node.memory.cache": {
      "sub": "Memory and Internal Cache Usage", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.memory", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "use", 
        "in", 
        "for", 
        "that", 
        "of", 
        "cache", 
        "bytes", 
        "system", 
        "node.memory.cache", 
        "are", 
        "memory", 
        "physical"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.memory.cache", 
      "units": "bytes", 
      "scope": "node", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Bytes of physical system memory that are in use for cache"
    }, 
    "node.net.iface.bytes.in.rate.N": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "tags": [
        "ext_interface", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ext_interface", 
        "iface", 
        "for", 
        "bytes", 
        "second", 
        "per", 
        "n", 
        "rate", 
        "in", 
        "interface", 
        "input", 
        "net", 
        "node.net.iface.bytes.in.rate.n", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.iface.bytes.in.rate.N", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Input bytes per second for interface N"
    }, 
    "node.protostats.smb2": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "protocol"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "smb2", 
        "per", 
        "node.protostats.smb2", 
        "performance", 
        "protocol-operation"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.smb2", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol-operation performance statistics for SMB2"
    }, 
    "node.disk.access.write.hist5.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "write", 
        "of", 
        "hist5", 
        "accesses", 
        "n", 
        "access", 
        "node.disk.access.write.hist5.n", 
        "5", 
        "no:", 
        "in", 
        "bin", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.write.hist5.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of write accesses in bin 5 N"
    }, 
    "node.process.count": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.process", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "count", 
        "processes", 
        "on", 
        "process", 
        "of", 
        "number", 
        "node.process.count", 
        "the"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.process.count", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of processes on the node"
    }, 
    "node.ifs.heat.lookup.total": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.heat.lookup", 
      "tags": [
        "ifs_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "ifs", 
        "this", 
        "of", 
        "rate", 
        "heat", 
        "lookup", 
        "ifs_heat", 
        "node.ifs.heat.lookup.total", 
        "total", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.lookup.total", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Total rate of lookup events on this node"
    }, 
    "node.nfs.cache_stats.sec_principal.maximum_size": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "sec_principal", 
        "cache", 
        "cache_stats", 
        "maximum", 
        "node.nfs.cache_stats.sec_principal.maximum_size", 
        "nfs", 
        "maximum_size", 
        "size", 
        "security", 
        "principal"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_principal.maximum_size", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security principal cache maximum size"
    }, 
    "cluster.protostats.smb2": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.smb2", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "protostats", 
        "for", 
        "smb2", 
        "cluster", 
        "cluster.protostats.smb2", 
        "performance", 
        "per-operation", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.smb2", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled per-operation performance statistics for SMB2"
    }, 
    "cluster.protostats.smb1": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.cifs", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "protostats", 
        "for", 
        "smb1", 
        "cluster", 
        "performance", 
        "cluster.protostats.smb1", 
        "per-operation", 
        "totaled"
      ], 
      "real_name": "cluster.protostats.cifs", 
      "subsub": null, 
      "key": "cluster.protostats.smb1", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled per-operation performance statistics for SMB1"
    }, 
    "node.disk.access.unfilt.write.hist0.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "write", 
        "unfiltered", 
        "node.disk.access.unfilt.write.hist0.n", 
        "hist0", 
        "in", 
        "0", 
        "accesses", 
        "n", 
        "access", 
        "bin", 
        "no:", 
        "of", 
        "unfilt", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.unfilt.write.hist0.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of unfiltered accesses in bin 0 N"
    }, 
    "node.disk.bytes.in.rate.avg": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "avg", 
        "for", 
        "second", 
        "average", 
        "disks", 
        "bytes", 
        "written", 
        "per", 
        "rate", 
        "in", 
        "disk", 
        "node.disk.bytes.in.rate.avg"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.bytes.in.rate.avg", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Average bytes written per second for all disks"
    }, 
    "node.rp.stats": {
      "sub": "Memory and Internal Cache Usage", 
      "super": "System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "statistics", 
        "stats", 
        "node.rp.stats", 
        "pools", 
        "rp", 
        "replacement"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.rp.stats", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_rp_stats", 
      "policies": null, 
      "description": "Replacement Pools statistics"
    }, 
    "ifs.ssd.bytes.total": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "ifs.fsspace", 
      "tags": [
        "ifs_cluster"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "on", 
        "ifs", 
        "ifs_cluster", 
        "of", 
        "in", 
        "bytes", 
        "number", 
        "/ifs", 
        "filesystem", 
        "ssds", 
        "ssd", 
        "the", 
        "total", 
        "ifs.ssd.bytes.total"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "ifs.ssd.bytes.total", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "int64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Total number of bytes on SSDs in the /ifs filesystem"
    }, 
    "node.sensor.volt.volts.12vSFC": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "12vsfc", 
        "electric", 
        "node.sensor.volt.volts.12vsfc", 
        "in", 
        "number", 
        "volt", 
        "of", 
        "4", 
        "volts", 
        "sensors", 
        "reading", 
        "sensor", 
        "potential"
      ], 
      "real_name": "node.sensor.volt.volts.4", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.12vSFC", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 4"
    }, 
    "node.disk.bay.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "index", 
        "of", 
        "bay", 
        "number", 
        "n", 
        "node.disk.bay.n", 
        "disk", 
        "with"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.bay.N", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Bay number of disk with index N"
    }, 
    "node.disk.xfer.size.out.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "index", 
        "disk", 
        "for", 
        "read", 
        "with", 
        "size", 
        "n", 
        "node.disk.xfer.size.out.n", 
        "xfer", 
        "avg", 
        "out"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfer.size.out.N", 
      "units": "bytes", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Avg read size for disk with index N"
    }, 
    "node.tcp.conn.stats": {
      "sub": "TCP/IP", 
      "super": "System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "statistics", 
        "stats", 
        "node.tcp.conn.stats", 
        "tcp", 
        "connection", 
        "conn"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.tcp.conn.stats", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_tcp_conn_stats_list", 
      "policies": null, 
      "description": "TCP connection statistics"
    }, 
    "node.sysfs.root.percent.free": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.root.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "capacity", 
        "node.sysfs.root.percent.free", 
        "sysfs", 
        "percent", 
        "free", 
        "percentage", 
        "as", 
        "a", 
        "filesystem", 
        "the", 
        "root", 
        "/root"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.root.percent.free", 
      "units": "percent", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Free capacity on the /root filesystem as a percentage"
    }, 
    "node.clientstats.active.nfs3": {
      "sub": "Active", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.proto.nfs", 
      "tags": [
        "client_active", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.clientstats.active.nfs3", 
        "of", 
        "clients", 
        "clientstats", 
        "number", 
        "nfs3", 
        "simultaneous", 
        "client_active", 
        "active", 
        "using", 
        "insightiq"
      ], 
      "real_name": "node.clientstats.active.nfs", 
      "subsub": null, 
      "key": "node.clientstats.active.nfs3", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Number of simultaneous active clients using NFS3"
    }, 
    "node.ifs.bytes.deleted.rate": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.bytes.deleted", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "ifs", 
        "deleted", 
        "/ifs", 
        "bytes", 
        "to", 
        "rate", 
        "node.ifs.bytes.deleted.rate", 
        "the", 
        "(bytes/sec)", 
        "delete"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "node.ifs.bytes.deleted.rate", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Delete rate to /ifs on the node (bytes/sec)"
    }, 
    "node.cpu.intr.avg": {
      "sub": "Node", 
      "super": "CPU", 
      "aggregation_type": "average", 
      "base_name": "node.cpu.usage", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "node.cpu.intr.avg", 
        "of", 
        "average", 
        "in", 
        "percent", 
        "usage", 
        "intr", 
        "interrupt", 
        "avg", 
        "cpu", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.cpu.intr.avg", 
      "units": "permil", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Node average of interrupt CPU usage in tenths of a percent"
    }, 
    "node.clientstats.proto.ftp": {
      "sub": "Top-N Clients", 
      "super": "Client", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "client", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "ftp", 
        "statistics", 
        "for", 
        "node.clientstats.proto.ftp", 
        "proto", 
        "clientstats", 
        "per", 
        "client", 
        "client-protocol-class", 
        "performance", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.proto.ftp", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_client_proto_list_v2", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Per client-protocol-class performance statistics for FTP"
    }, 
    "node.sensor.altitude.meters.N": {
      "sub": "Altitude", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "altitude", 
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "process.", 
        "added", 
        "an", 
        "extra", 
        "this", 
        "node.sensor.altitude.meters.n", 
        "altitude", 
        "of", 
        "number", 
        "n", 
        "note", 
        "meters", 
        "in", 
        "during", 
        "sensors", 
        "reading", 
        "sensor", 
        "is", 
        "tagging"
      ], 
      "real_name": null, 
      "xtra_attrs": {
        "Note": "This is an extra note added during tagging process."
      }, 
      "subsub": null, 
      "key": "node.sensor.altitude.meters.N", 
      "units": "meters", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in meters of altitude sensor number N"
    }, 
    "cluster.health": {
      "sub": "Cluster Info and Status", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "attention,", 
        "1", 
        "0", 
        "of", 
        "cluster:", 
        "cluster", 
        "2", 
        "health", 
        "healthy,", 
        "cluster.health", 
        "the", 
        "=", 
        "down"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.health", 
      "units": "none", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": null, 
      "description": "Health of the cluster: 0 = Healthy, 1 = Attention, 2 = Down"
    }, 
    "node.nfs.cache_stats.sec_sid.positive_hits": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "cache", 
        "positive", 
        "sid", 
        "cache_stats", 
        "nfs", 
        "positive_hits", 
        "sec_sid", 
        "security", 
        "node.nfs.cache_stats.sec_sid.positive_hits"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_sid.positive_hits", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security SID cache positive hits"
    }, 
    "node.ifs.bytes.out.rate.max": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "maximum", 
      "base_name": "node.ifs.bytes.out", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "from", 
        "ifs", 
        "max", 
        "node.ifs.bytes.out.rate.max", 
        "bytes", 
        "maximum", 
        "rate", 
        "/ifs", 
        "output", 
        "the", 
        "(bytes/sec)", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Throughput", 
      "key": "node.ifs.bytes.out.rate.max", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Maximum output rate from /ifs on the node (bytes/sec)"
    }, 
    "node.disk.busy.avg": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "busy", 
        "of", 
        "average", 
        "percent", 
        "node.disk.busy.avg", 
        "in", 
        "disk", 
        "avg", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.busy.avg", 
      "units": "permil", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Average disk busy in tenths of a percent"
    }, 
    "cluster.protostats.nfs4": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.nfs4", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "cluster.protostats.nfs4", 
        "statistics", 
        "protostats", 
        "for", 
        "cluster", 
        "nfs4", 
        "performance", 
        "per-operation", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.nfs4", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled per-operation performance statistics for NFS4"
    }, 
    "cluster.protostats.nfs3": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.nfs", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "protostats", 
        "cluster.protostats.nfs3", 
        "for", 
        "cluster", 
        "nfs3", 
        "performance", 
        "per-operation", 
        "totaled"
      ], 
      "real_name": "cluster.protostats.nfs", 
      "subsub": null, 
      "key": "cluster.protostats.nfs3", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled per-operation performance statistics for NFS3"
    }, 
    "ifs.ssd.bytes.used": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "ifs.fsspace", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "on", 
        "used", 
        "ifs", 
        "of", 
        "in", 
        "bytes", 
        "number", 
        "/ifs", 
        "ifs.ssd.bytes.used", 
        "filesystem", 
        "ssds", 
        "ssd", 
        "the"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "ifs.ssd.bytes.used", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "int64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Number of used bytes on SSDs in the /ifs filesystem"
    }, 
    "node.nfs.cache_stats.sec_username.negative_hits": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "username", 
        "sec_username", 
        "node.nfs.cache_stats.sec_username.negative_hits", 
        "hits", 
        "cache", 
        "cache_stats", 
        "negative", 
        "nfs", 
        "security", 
        "negative_hits"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_username.negative_hits", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security username cache negative hits"
    }, 
    "node.cpu.count": {
      "sub": "Node", 
      "super": "CPU", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "count", 
        "or", 
        "cpus", 
        "on", 
        "of", 
        "number", 
        "node.cpu.count", 
        "a", 
        "active", 
        "cores", 
        "cpu"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.cpu.count", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of active CPUs or cores on a node"
    }, 
    "node.protostats.hdfs": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "protocol"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "hdfs", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "per", 
        "node.protostats.hdfs", 
        "performance", 
        "protocol-operation"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.hdfs", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol-operation performance statistics for HDFS"
    }, 
    "node.ifs.heat.lookup": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "ifs_file_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "on", 
        "node.ifs.heat.lookup", 
        "for", 
        "ifs", 
        "this", 
        "/ifs", 
        "entities", 
        "heat", 
        "lookup", 
        "hottest", 
        "ifs_file_heat", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.lookup", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_heat_list", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Hottest /ifs entities for lookup events on this node"
    }, 
    "cluster.dedupe.total.used.bytes": {
      "sub": null, 
      "super": "Deduplication", 
      "aggregation_type": "last", 
      "base_name": "cluster.dedupe", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "on", 
        "dedupe", 
        "cluster.", 
        "bytes", 
        "cluster", 
        "cluster.dedupe.total.used.bytes", 
        "used", 
        "the", 
        "total"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.dedupe.total.used.bytes", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "The total used bytes on the cluster."
    }, 
    "node.sensor.temp.name.N": {
      "sub": "Temperature", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "name", 
        "temp", 
        "of", 
        "number", 
        "n", 
        "hardware", 
        "node.sensor.temp.name.n", 
        "sensors", 
        "sensor", 
        "temperature"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.temp.name.N", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Hardware name of temperature sensor number N"
    }, 
    "node.disk.xfers.out.rate.avg": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "avg", 
        "disks", 
        "for", 
        "average", 
        "xfers", 
        "second", 
        "per", 
        "rate", 
        "transfers", 
        "output", 
        "disk", 
        "node.disk.xfers.out.rate.avg", 
        "out"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfers.out.rate.avg", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Average output transfers per second for all disks"
    }, 
    "node.cpu.idle.N": {
      "sub": "Node", 
      "super": "CPU", 
      "aggregation_type": "average", 
      "base_name": "node.cpu.usage", 
      "tags": [
        "cpu", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "for", 
        "index", 
        "of", 
        "percent", 
        "n", 
        "idle", 
        "in", 
        "usage", 
        "insightiq", 
        "with", 
        "cpu", 
        "tenths", 
        "node.cpu.idle.n"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.cpu.idle.N", 
      "units": "permil", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Idle CPU usage in tenths of a percent for CPU with index N"
    }, 
    "cluster.cpu.count": {
      "sub": "Cluster", 
      "super": "CPU", 
      "aggregation_type": "last", 
      "base_name": "node.cpu.count", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "count", 
        "or", 
        "of", 
        "number", 
        "cpus", 
        "cluster", 
        "cluster.cpu.count", 
        "in", 
        "active", 
        "cores", 
        "the", 
        "cpu"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.cpu.count", 
      "units": "none", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of active CPUs or cores in the cluster"
    }, 
    "node.ifs.cache.l2.meta.prefetch.hit": {
      "sub": "L2 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "hit", 
        "ifs", 
        "meta-data", 
        "cache", 
        "node.ifs.cache.l2.meta.prefetch.hit", 
        "meta", 
        "l2", 
        "prefetch", 
        "(bytes/sec)"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l2.meta.prefetch.hit", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L2 meta-data cache prefetch hits (bytes/sec)"
    }, 
    "node.sensor.volt.name.N": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "node.sensor.volt.name.n", 
        "name", 
        "of", 
        "number", 
        "n", 
        "hardware", 
        "volt", 
        "potential", 
        "sensors", 
        "sensor", 
        "electric"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.volt.name.N", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Hardware name of electric potential sensor number N"
    }, 
    "cluster.protostats.papi": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.papi", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "papi", 
        "protostats", 
        "for", 
        "cluster.protostats.papi", 
        "cluster", 
        "performance", 
        "per-operation", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.papi", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled per-operation performance statistics for PAPI"
    }, 
    "node.clientstats.active.irp": {
      "sub": "Active", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.proto.irp", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "irp", 
        "of", 
        "clients", 
        "clientstats", 
        "number", 
        "simultaneous", 
        "irps", 
        "active", 
        "using", 
        "node.clientstats.active.irp"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.active.irp", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Number of simultaneous active clients using IRPs"
    }, 
    "node.sensor.misc.data.PwrOff1": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "(as", 
        "number", 
        "node.sensor.misc.data.pwroff1", 
        "pwroff1", 
        "misc", 
        "miscellaneous", 
        "int)", 
        "data", 
        "of", 
        "15", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.misc.data.15", 
      "subsub": null, 
      "key": "node.sensor.misc.data.PwrOff1", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number 15"
    }, 
    "node.clientstats.connected.smb": {
      "sub": "Connected", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.connected", 
      "tags": [
        "client_connected", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "of", 
        "clients", 
        "number", 
        "node.clientstats.connected.smb", 
        "clientstats", 
        "connected", 
        "client_connected", 
        "smb", 
        "insightiq"
      ], 
      "real_name": "node.clientstats.connected.cifs", 
      "subsub": null, 
      "key": "node.clientstats.connected.smb", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Number of connected SMB clients"
    }, 
    "node.open.files": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "files", 
        "on", 
        "of", 
        "number", 
        "node.open.files", 
        "the", 
        "open"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.open.files", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of open files on the node"
    }, 
    "node.disk.xfers.rate.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "index", 
        "total", 
        "for", 
        "with", 
        "xfers", 
        "second", 
        "per", 
        "n", 
        "rate", 
        "node.disk.xfers.rate.n", 
        "disk", 
        "ransfers"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfers.rate.N", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Total ransfers per second for disk with index N"
    }, 
    "node.disk.xfers.in.rate.avg": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "avg", 
        "node.disk.xfers.in.rate.avg", 
        "for", 
        "average", 
        "xfers", 
        "transfers", 
        "second", 
        "per", 
        "disks", 
        "rate", 
        "in", 
        "input", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfers.in.rate.avg", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Average input transfers per second for all disks"
    }, 
    "node.ifs.heat.getattr": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "ifs_file_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "on", 
        "for", 
        "ifs", 
        "this", 
        "/ifs", 
        "getattr", 
        "entities", 
        "heat", 
        "hottest", 
        "ifs_file_heat", 
        "node.ifs.heat.getattr", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.getattr", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_heat_list", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Hottest /ifs entities for getattr events on this node"
    }, 
    "node.disk.bytes.in.rate.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "index", 
        "for", 
        "second", 
        "bytes", 
        "written", 
        "per", 
        "n", 
        "rate", 
        "node.disk.bytes.in.rate.n", 
        "in", 
        "disk", 
        "with"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.bytes.in.rate.N", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Bytes written per second for disk with index N"
    }, 
    "node.sensor.misc.data.PwrGood1": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "pwrgood1", 
        "(as", 
        "int)", 
        "data", 
        "misc", 
        "miscellaneous", 
        "number", 
        "1", 
        "of", 
        "node.sensor.misc.data.pwrgood1", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.misc.data.1", 
      "subsub": null, 
      "key": "node.sensor.misc.data.PwrGood1", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number 1"
    }, 
    "cluster.disk.xfer.size.in": {
      "sub": "Cluster", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.xfer.size.out.avg", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "all", 
        "disk", 
        "for", 
        "transfer", 
        "average", 
        "disks", 
        "cluster", 
        "in", 
        "input", 
        "xfer", 
        "cluster.disk.xfer.size.in", 
        "size"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.disk.xfer.size.in", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "double", 
      "policies": null, 
      "description": "Average input transfer size for all disks"
    }, 
    "node.disk.health.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": "node.disk.healths", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.disk.health.n", 
        "index", 
        "of", 
        "n", 
        "health", 
        "disk", 
        "with"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.health.N", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Health of disk with index N"
    }, 
    "node.protostats.nfs": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "protostats", 
        "for", 
        "node.protostats.nfs", 
        "per", 
        "nfs3", 
        "nfs", 
        "performance", 
        "protocol-operation"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.nfs", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol-operation performance statistics for NFS3"
    }, 
    "cluster.protostats.jobd": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.jobd", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "protostats", 
        "for", 
        "cluster.protostats.jobd", 
        "cluster", 
        "jobd", 
        "performance", 
        "per-operation", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.jobd", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled per-operation performance statistics for JOBD"
    }, 
    "node.sysfs.var.bytes.free": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.var.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "capacity", 
        "/var", 
        "in", 
        "sysfs", 
        "bytes", 
        "free", 
        "filesystem", 
        "var", 
        "the", 
        "node.sysfs.var.bytes.free"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.var.bytes.free", 
      "units": "bytes", 
      "scope": "node", 
      "type": "int64", 
      "policies": null, 
      "description": "Free capacity on the /var filesystem in bytes"
    }, 
    "node.protostats.ftp.total": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.ftp", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ftp", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "per", 
        "node.protostats.ftp.total", 
        "performance", 
        "total"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.ftp.total", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol performance statistics for FTP"
    }, 
    "node.nfs.cache_stats.sec_principal.timeout_count": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "count", 
        "timeout_count", 
        "sec_principal", 
        "cache", 
        "cache_stats", 
        "nfs", 
        "timeout", 
        "node.nfs.cache_stats.sec_principal.timeout_count", 
        "security", 
        "principal"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_principal.timeout_count", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security principal cache timeout count"
    }, 
    "node.disk.access.latency.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "latency", 
        "for", 
        "index", 
        "of", 
        "accesses", 
        "n", 
        "access", 
        "disk", 
        "with", 
        "node.disk.access.latency.n"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.latency.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Latency of accesses for disk with index N"
    }, 
    "node.disk.access.read.hist2.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "bin", 
        "read", 
        "of", 
        "hist2", 
        "accesses", 
        "n", 
        "access", 
        "node.disk.access.read.hist2.n", 
        "2", 
        "no:", 
        "in", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.read.hist2.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of read accesses in bin 2 N"
    }, 
    "cluster.net.ext.bytes.in.rate": {
      "sub": "External", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.net.ext.bytes.in.rate", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "all", 
        "input", 
        "second", 
        "interfaces", 
        "bytes", 
        "rate", 
        "per", 
        "for", 
        "cluster", 
        "ext", 
        "external", 
        "in", 
        "cluster.net.ext.bytes.in.rate", 
        "net"
      ], 
      "real_name": null, 
      "subsub": "Cluster", 
      "key": "cluster.net.ext.bytes.in.rate", 
      "units": "bytes per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Input bytes per second for all external interfaces"
    }, 
    "node.disk.access.unfilt.read.hist1.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "bin", 
        "node.disk.access.unfilt.read.hist1.n", 
        "unfiltered", 
        "read", 
        "of", 
        "accesses", 
        "n", 
        "access", 
        "hist1", 
        "1", 
        "no:", 
        "in", 
        "unfilt", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.unfilt.read.hist1.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of unfiltered accesses in bin 1 N"
    }, 
    "node.ifs.heat.getattr.total": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.heat.getattr", 
      "tags": [
        "ifs_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "node.ifs.heat.getattr.total", 
        "ifs", 
        "this", 
        "rate", 
        "getattr", 
        "heat", 
        "ifs_heat", 
        "of", 
        "total", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.getattr.total", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Total rate of getattr events on this node"
    }, 
    "node.ifs.heat.unlink.total": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.heat.unlink", 
      "tags": [
        "ifs_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "unlink", 
        "ifs", 
        "this", 
        "of", 
        "rate", 
        "node.ifs.heat.unlink.total", 
        "heat", 
        "ifs_heat", 
        "total", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.unlink.total", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Total rate of unlink events on this node"
    }, 
    "cluster.protostats.http": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.http", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "http", 
        "protostats", 
        "for", 
        "cluster.protostats.http", 
        "cluster", 
        "performance", 
        "per-operation", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.http", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled per-operation performance statistics for HTTP"
    }, 
    "node.sysfs.root.bytes.free": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.root.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "capacity", 
        "in", 
        "sysfs", 
        "bytes", 
        "free", 
        "filesystem", 
        "node.sysfs.root.bytes.free", 
        "the", 
        "root", 
        "/root"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.root.bytes.free", 
      "units": "bytes", 
      "scope": "node", 
      "type": "int64", 
      "policies": null, 
      "description": "Free capacity on the /root filesystem in bytes"
    }, 
    "node.ifs.heat.deadlocked": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "ifs_file_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "on", 
        "node.ifs.heat.deadlocked", 
        "for", 
        "ifs", 
        "this", 
        "/ifs", 
        "events", 
        "entities", 
        "heat", 
        "hottest", 
        "ifs_file_heat", 
        "deadlocked"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.deadlocked", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_heat_list", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Hottest /ifs entities for deadlocked events on this node"
    }, 
    "node.ifs.num.lookups.rate": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.num.lookups", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "lookups", 
        "name", 
        "ifs", 
        "/ifs", 
        "(num/sec)", 
        "rate", 
        "num", 
        "lookup", 
        "filesystem", 
        "node.ifs.num.lookups.rate", 
        "the"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "node.ifs.num.lookups.rate", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Filesystem name lookup rate on /ifs on the node (num/sec)"
    }, 
    "node.ifs.heat.setattr": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "ifs_file_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "on", 
        "for", 
        "setattr", 
        "ifs", 
        "node.ifs.heat.setattr", 
        "/ifs", 
        "this", 
        "entities", 
        "heat", 
        "hottest", 
        "ifs_file_heat", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.setattr", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_heat_list", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Hottest /ifs entities for setattr events on this node"
    }, 
    "cluster.protostats.http.total": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.http.total", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "http", 
        "protostats", 
        "cluster.protostats.http.total", 
        "for", 
        "cluster", 
        "performance", 
        "total", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.http.total", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled performance statistics for HTTP"
    }, 
    "node.protostats.cifs": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "protostats", 
        "for", 
        "node.protostats.cifs", 
        "per", 
        "smb1", 
        "performance", 
        "protocol-operation", 
        "cifs"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.cifs", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol-operation performance statistics for SMB1"
    }, 
    "node.ifs.heat.contended.total": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.heat.contended", 
      "tags": [
        "ifs_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.ifs.heat.contended.total", 
        "on", 
        "ifs", 
        "this", 
        "of", 
        "rate", 
        "events", 
        "heat", 
        "ifs_heat", 
        "total", 
        "contended"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.contended.total", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Total rate of contended events on this node"
    }, 
    "node.sensor.fan.rpms.fisi3": {
      "sub": "Fans", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "reading", 
        "node.sensor.fan.rpms.fisi3", 
        "rpms", 
        "of", 
        "number", 
        "2", 
        "fan", 
        "in", 
        "sensors", 
        "fisi3", 
        "sensor"
      ], 
      "real_name": "node.sensor.fan.rpms.2", 
      "subsub": null, 
      "key": "node.sensor.fan.rpms.fisi3", 
      "units": "rpms", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading in RPMS of fan sensor number 2"
    }, 
    "node.ifs.heat.rename": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "ifs_file_heat"
      ], 
      "policy_cache_time": 10, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "rename", 
        "ifs_file_heat", 
        "for", 
        "ifs", 
        "this", 
        "/ifs", 
        "node.ifs.heat.rename", 
        "entities", 
        "heat", 
        "hottest", 
        "on", 
        "events"
      ], 
      "real_name": null, 
      "subsub": "File Heat", 
      "key": "node.ifs.heat.rename", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_heat_list", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 1000
        }
      ], 
      "description": "Hottest /ifs entities for rename events on this node"
    }, 
    "node.ifs.cache.l3.meta.read.wait": {
      "sub": "L3 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ifs", 
        "read", 
        "meta-data", 
        "cache", 
        "waits", 
        "insightiq", 
        "meta", 
        "l3", 
        "node.ifs.cache.l3.meta.read.wait", 
        "(bytes/sec)", 
        "wait"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l3.meta.read.wait", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L3 meta-data cache read waits (bytes/sec)"
    }, 
    "cluster.disk.busy": {
      "sub": "Cluster", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.busy.avg", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "a", 
        "busy", 
        "cluster.disk.busy", 
        "of", 
        "average", 
        "percent", 
        "cluster", 
        "in", 
        "disk", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.disk.busy", 
      "units": "permil", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": null, 
      "description": "Average busy in tenths of a percent"
    }, 
    "node.ifs.ssd.bytes.total": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.space", 
      "tags": [
        "ifs"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "ifs", 
        "of", 
        "space", 
        "bytes", 
        "node.ifs.ssd.bytes.total", 
        "/ifs", 
        "in", 
        "ssd", 
        "the", 
        "total", 
        "size"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "node.ifs.ssd.bytes.total", 
      "units": "bytes", 
      "scope": "node", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Total size of SSD space in /ifs on the node"
    }, 
    "node.sensor.misc.data.N": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "reading", 
        "number", 
        "(as", 
        "int)", 
        "data", 
        "misc", 
        "miscellaneous", 
        "n", 
        "of", 
        "sensors", 
        "node.sensor.misc.data.n", 
        "sensor"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.misc.data.N", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number N"
    }, 
    "node.clientstats.proto.siq": {
      "sub": "Top-N Clients", 
      "super": "Client", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "tags": [
        "client", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "siq", 
        "statistics", 
        "for", 
        "proto", 
        "clientstats", 
        "per", 
        "client", 
        "client-protocol-class", 
        "performance", 
        "node.clientstats.proto.siq", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.proto.siq", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_client_proto_list_v2", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Per client-protocol-class performance statistics for SIQ"
    }, 
    "node.ifs.cache.l1.data.read.start": {
      "sub": "L1 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ifs", 
        "read", 
        "starts", 
        "node.ifs.cache.l1.data.read.start", 
        "cache", 
        "start", 
        "l1", 
        "(bytes/sec)", 
        "data"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l1.data.read.start", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L1 data cache read starts (bytes/sec)"
    }, 
    "node.net.int.packets.in.rate": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "node.net.int.packets.in.rate", 
        "for", 
        "int", 
        "interfaces", 
        "packets", 
        "second", 
        "per", 
        "rate", 
        "internal", 
        "node's", 
        "in", 
        "input", 
        "net"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.int.packets.in.rate", 
      "units": "packets per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Input packets per second for a node's internal interfaces"
    }, 
    "node.clientstats.connected.nlm": {
      "sub": "Connected", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.connected", 
      "tags": [
        "client_connected", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "of", 
        "clients", 
        "clientstats", 
        "number", 
        "node.clientstats.connected.nlm", 
        "connected", 
        "client_connected", 
        "nlm", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.connected.nlm", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Number of connected NLM clients"
    }, 
    "node.disk.xfers.rate.sum": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "total", 
        "disks", 
        "for", 
        "sum", 
        "xfers", 
        "second", 
        "per", 
        "rate", 
        "transfers", 
        "disk", 
        "node.disk.xfers.rate.sum"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfers.rate.sum", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Total transfers per second for all disks"
    }, 
    "node.net.int.errors.out.rate": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.nets", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "errors", 
        "for", 
        "int", 
        "interfaces", 
        "second", 
        "per", 
        "rate", 
        "internal", 
        "node's", 
        "output", 
        "net", 
        "node.net.int.errors.out.rate", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Node", 
      "key": "node.net.int.errors.out.rate", 
      "units": "errors per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Output errors per second for a node's internal interfaces"
    }, 
    "node.sensor.volt.volts.5vFPF": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "node.sensor.volt.volts.5vfpf", 
        "electric", 
        "volts", 
        "of", 
        "number", 
        "volt", 
        "potential", 
        "5vfpf", 
        "in", 
        "8", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.volt.volts.8", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.5vFPF", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 8"
    }, 
    "node.nfs.cache_stats.ccb.positive_hits": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "positive", 
        "cache", 
        "node.nfs.cache_stats.ccb.positive_hits", 
        "cache_stats", 
        "nfs", 
        "positive_hits", 
        "ccb"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.ccb.positive_hits", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "CCB cache positive hits"
    }, 
    "node.sensor.temp.celsius.tSystem": {
      "sub": "Temperature", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "tsystem", 
        "temperature", 
        "temp", 
        "of", 
        "6", 
        "number", 
        "node.sensor.temp.celsius.tsystem", 
        "celsius", 
        "in", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.temp.celsius.6", 
      "subsub": null, 
      "key": "node.sensor.temp.celsius.tSystem", 
      "units": "celsius", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Celsius of temperature sensor number 6"
    }, 
    "node.ifs.bytes.deleted": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "on", 
        "from", 
        "ifs", 
        "deleted", 
        "of", 
        "since", 
        "bytes", 
        "number", 
        "node.ifs.bytes.deleted", 
        "/ifs", 
        "the", 
        "boot"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "node.ifs.bytes.deleted", 
      "units": "bytes", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Number of bytes deleted from /ifs on the node since boot"
    }, 
    "ifs.ssd.bytes.avail": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "ifs.fsspace", 
      "tags": [
        "ifs_cluster"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "available", 
        "on", 
        "ifs", 
        "ifs_cluster", 
        "of", 
        "in", 
        "bytes", 
        "number", 
        "/ifs", 
        "avail", 
        "ifs.ssd.bytes.avail", 
        "filesystem", 
        "ssds", 
        "ssd", 
        "the"
      ], 
      "real_name": null, 
      "subsub": "Capacity", 
      "key": "ifs.ssd.bytes.avail", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "int64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Number of available bytes on SSDs in the /ifs filesystem"
    }, 
    "node.sensor.volt.volts.3.3vSB": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "electric", 
        "17", 
        "3vsb", 
        "in", 
        "number", 
        "volt", 
        "3", 
        "of", 
        "volts", 
        "sensors", 
        "reading", 
        "sensor", 
        "potential", 
        "node.sensor.volt.volts.3.3vsb"
      ], 
      "real_name": "node.sensor.volt.volts.17", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.3.3vSB", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 17"
    }, 
    "node.nfs.basic_stats": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "stats", 
        "basic_stats", 
        "rpc", 
        "nfs", 
        "node.nfs.basic_stats"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.basic_stats", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_nfs_basic_stats", 
      "policies": null, 
      "description": "NFS RPC stats"
    }, 
    "cluster.cpu.nice.avg": {
      "sub": "Cluster", 
      "super": "CPU", 
      "aggregation_type": "average", 
      "base_name": "node.cpu.nice.avg", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "a", 
        "of", 
        "average", 
        "percent", 
        "cluster", 
        "cluster.cpu.nice.avg", 
        "in", 
        "usage", 
        "avg", 
        "cpu", 
        "tenths", 
        "nice"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.cpu.nice.avg", 
      "units": "permil", 
      "scope": "cluster", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Cluster average of nice CPU usage in tenths of a percent"
    }, 
    "node.sensor.misc.name.N": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "number", 
        "name", 
        "of", 
        "misc", 
        "miscellaneous", 
        "n", 
        "hardware", 
        "node.sensor.misc.name.n", 
        "sensor", 
        "sensors"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sensor.misc.name.N", 
      "units": "none", 
      "scope": "node", 
      "type": "string", 
      "policies": null, 
      "description": "Hardware name of miscellaneous sensor number N"
    }, 
    "node.disk.access.slow.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "index", 
        "slow", 
        "for", 
        "accesses", 
        "n", 
        "access", 
        "second", 
        "per", 
        "disk", 
        "with", 
        "node.disk.access.slow.n"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.slow.N", 
      "units": "cents", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Slow accesses per second for disk with index N"
    }, 
    "node.nfs.cache_stats.replay_tcp.current_size": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "replay_tcp", 
        "current_size", 
        "cache", 
        "cache_stats", 
        "tcp", 
        "current", 
        "replay", 
        "nfs", 
        "size", 
        "node.nfs.cache_stats.replay_tcp.current_size"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.replay_tcp.current_size", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Replay TCP cache current size"
    }, 
    "node.nfs.cache_stats.sec_principal.current_size": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.nfs.cache_stats.sec_principal.current_size", 
        "sec_principal", 
        "current_size", 
        "cache", 
        "cache_stats", 
        "current", 
        "nfs", 
        "security", 
        "size", 
        "principal"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_principal.current_size", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security principal cache current size"
    }, 
    "cluster.protostats.hdfs.total": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.hdfs.total", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "hdfs", 
        "statistics", 
        "protostats", 
        "for", 
        "cluster", 
        "cluster.protostats.hdfs.total", 
        "performance", 
        "total", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.hdfs.total", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled performance statistics for HDFS"
    }, 
    "node.clientstats.active.cifs": {
      "sub": "Active", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.proto.cifs", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "cifs", 
        "of", 
        "clients", 
        "number", 
        "clientstats", 
        "simultaneous", 
        "active", 
        "using", 
        "smb1", 
        "node.clientstats.active.cifs"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.active.cifs", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Number of simultaneous active clients using SMB1"
    }, 
    "node.clientstats.connected.ndmp": {
      "sub": "Connected", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.connected", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ndmp", 
        "of", 
        "clients", 
        "number", 
        "clientstats", 
        "connected", 
        "node.clientstats.connected.ndmp"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.connected.ndmp", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Number of connected NDMP clients"
    }, 
    "node.cpu.idle.max": {
      "sub": "Node", 
      "super": "CPU", 
      "aggregation_type": "maximum", 
      "base_name": "node.cpu.usage", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.cpu.idle.max", 
        "max", 
        "average", 
        "in", 
        "percent", 
        "maximum", 
        "idle", 
        "a", 
        "of", 
        "usage", 
        "cpu", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.cpu.idle.max", 
      "units": "permil", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Maximum node average of idle CPU usage in tenths of a percent"
    }, 
    "node.clientstats.proto.nfs": {
      "sub": "Top-N Clients", 
      "super": "Client", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "node.clientstats.proto.nfs", 
        "for", 
        "proto", 
        "clientstats", 
        "per", 
        "nfs3", 
        "statistics", 
        "nfs", 
        "performance", 
        "client-protocol-class"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.proto.nfs", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_client_proto_list_v2", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Per client-protocol-class performance statistics for NFS3"
    }, 
    "node.disk.count": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 65535, 
      "search_terms": [
        "node", 
        "count", 
        "node.disk.count", 
        "of", 
        "number", 
        "drive", 
        "count)", 
        "bays", 
        "(maximum", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.count", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Number of drive bays (maximum disk count)"
    }, 
    "ifs.ssd.percent.used": {
      "sub": "Cluster", 
      "super": "File System", 
      "aggregation_type": "average", 
      "base_name": "ifs.fsspace", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "used", 
        "for", 
        "ifs.ssd.percent.used", 
        "ifs", 
        "of", 
        "space", 
        "percent", 
        "/ifs", 
        "storage", 
        "filesystem", 
        "in", 
        "ssd"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "ifs.ssd.percent.used", 
      "units": "percent", 
      "scope": "cluster", 
      "type": "double", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "Percent of SSD space in /ifs filesystem used for storage"
    }, 
    "node.protostats.lsass_out.total": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.lsass_out", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "statistics", 
        "protocol", 
        "protostats", 
        "for", 
        "node.protostats.lsass_out.total", 
        "per", 
        "lsass_out", 
        "performance", 
        "total"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.lsass_out.total", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol performance statistics for LSASS_OUT"
    }, 
    "node.sysfs.var.bytes.total": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.var.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "capacity", 
        "/var", 
        "in", 
        "sysfs", 
        "bytes", 
        "node.sysfs.var.bytes.total", 
        "filesystem", 
        "var", 
        "the", 
        "total"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.var.bytes.total", 
      "units": "bytes", 
      "scope": "node", 
      "type": "int64", 
      "policies": null, 
      "description": "Total capacity on the /var filesystem in bytes"
    }, 
    "node.ifs.cache.l3.meta.read.start": {
      "sub": "L3 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "ifs", 
        "read", 
        "meta-data", 
        "cache", 
        "start", 
        "meta", 
        "l3", 
        "starts", 
        "node.ifs.cache.l3.meta.read.start", 
        "(bytes/sec)", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l3.meta.read.start", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L3 meta-data cache read starts (bytes/sec)"
    }, 
    "node.clientstats.proto.jobd": {
      "sub": "Top-N Clients", 
      "super": "Client", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "for", 
        "node.clientstats.proto.jobd", 
        "proto", 
        "clientstats", 
        "per", 
        "jobd", 
        "client-protocol-class", 
        "performance"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.proto.jobd", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_client_proto_list_v2", 
      "policies": null, 
      "description": "Per client-protocol-class performance statistics for JOBD"
    }, 
    "node.ifs.cache.l1.data.prefetch.hit": {
      "sub": "L1 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "hit", 
        "ifs", 
        "cache", 
        "node.ifs.cache.l1.data.prefetch.hit", 
        "prefetch", 
        "l1", 
        "(bytes/sec)", 
        "data"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l1.data.prefetch.hit", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L1 data cache prefetch hits (bytes/sec)"
    }, 
    "node.boottime": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": 10, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "last", 
        "was", 
        "epoch)", 
        "since", 
        "(seconds", 
        "unix", 
        "boottime", 
        "at", 
        "which", 
        "time", 
        "node.boottime", 
        "booted"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.boottime", 
      "units": "epoch seconds", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 10, 
          "persistent": false, 
          "retention": 360
        }
      ], 
      "description": "Time at which node was last booted (seconds since UNIX epoch)"
    }, 
    "cluster.protostats.lsass_in": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.lsass_in", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "lsass_in", 
        "protostats", 
        "for", 
        "cluster.protostats.lsass_in", 
        "cluster", 
        "performance", 
        "per-operation", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.lsass_in", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled per-operation performance statistics for LSASS_IN"
    }, 
    "node.sensor.power.watts.pinps2": {
      "sub": "Power", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "power supplies", 
        "sensors", 
        "PSU"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "via", 
        "extra", 
        "attribute", 
        "number", 
        "one", 
        "tag", 
        "in", 
        "pinps2", 
        "two", 
        "1", 
        "node.sensor.power.watts.pinps2", 
        "reading", 
        "sensor", 
        "node", 
        "power supplies", 
        "added", 
        "power", 
        "key", 
        "sensors", 
        "psu", 
        "watts", 
        "defs.", 
        "of", 
        "arbitrary"
      ], 
      "real_name": "node.sensor.power.watts.1", 
      "xtra_attrs": {
        "Arbitrary detail one": "Extra arbitrary key attribute one added via tag defs.", 
        "Arbitrary detail two": "Extra arbitrary key attribute two added via tag defs."
      }, 
      "subsub": null, 
      "key": "node.sensor.power.watts.pinps2", 
      "units": "watts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in Watts of power sensor number 1"
    }, 
    "node.nfs.cache_stats.sec_sid.timeout_period": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.nfs.cache_stats.sec_sid.timeout_period", 
        "cache", 
        "cache_stats", 
        "period", 
        "timeout_period", 
        "nfs", 
        "timeout", 
        "sid", 
        "sec_sid", 
        "security"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_sid.timeout_period", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security SID cache timeout period"
    }, 
    "node.sysfs.varcrash.bytes.avail": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.varcrash.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "available", 
        "capacity", 
        "in", 
        "on", 
        "sysfs", 
        "bytes", 
        "avail", 
        "filesystem", 
        "/var/crash", 
        "node.sysfs.varcrash.bytes.avail", 
        "the", 
        "varcrash"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.varcrash.bytes.avail", 
      "units": "bytes", 
      "scope": "node", 
      "type": "int64", 
      "policies": null, 
      "description": "Available capacity on the /var/crash filesystem in bytes"
    }, 
    "node.cpu.intr.max": {
      "sub": "Node", 
      "super": "CPU", 
      "aggregation_type": "maximum", 
      "base_name": "node.cpu.usage", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "in", 
        "max", 
        "average", 
        "of", 
        "percent", 
        "maximum", 
        "usage", 
        "intr", 
        "interrupt", 
        "node.cpu.intr.max", 
        "cpu", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.cpu.intr.max", 
      "units": "permil", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Maximum node average of interrupt CPU usage in tenths of a percent"
    }, 
    "node.protostats.lsass_out": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": 5, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "statistics", 
        "protostats", 
        "for", 
        "per", 
        "lsass_out", 
        "performance", 
        "protocol-operation", 
        "node.protostats.lsass_out"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.lsass_out", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol-operation performance statistics for LSASS_OUT"
    }, 
    "node.nfs.cache_stats.sec_username.maximum_size": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "username", 
        "sec_username", 
        "node.nfs.cache_stats.sec_username.maximum_size", 
        "cache", 
        "cache_stats", 
        "maximum", 
        "nfs", 
        "maximum_size", 
        "security", 
        "size"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_username.maximum_size", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security username cache maximum size"
    }, 
    "node.disk.bytes.in.rate.sum": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "total", 
        "for", 
        "second", 
        "sum", 
        "disks", 
        "bytes", 
        "written", 
        "per", 
        "rate", 
        "in", 
        "disk", 
        "node.disk.bytes.in.rate.sum"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.bytes.in.rate.sum", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Total bytes written per second for all disks"
    }, 
    "node.ifs.cache.l2.meta.read.hit": {
      "sub": "L2 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "hits", 
        "hit", 
        "ifs", 
        "read", 
        "node.ifs.cache.l2.meta.read.hit", 
        "cache", 
        "meta", 
        "l2", 
        "meta-data", 
        "(bytes/sec)"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l2.meta.read.hit", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L2 meta-data cache read hits (bytes/sec)"
    }, 
    "node.disk.xfers.out.rate.sum": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "total", 
        "disks", 
        "for", 
        "sum", 
        "xfers", 
        "second", 
        "node.disk.xfers.out.rate.sum", 
        "rate", 
        "per", 
        "transfers", 
        "output", 
        "disk", 
        "out"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfers.out.rate.sum", 
      "units": "operations per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Total output transfers per second for all disks"
    }, 
    "node.sysfs.varcrash.bytes.total": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.varcrash.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "capacity", 
        "in", 
        "sysfs", 
        "bytes", 
        "filesystem", 
        "/var/crash", 
        "node.sysfs.varcrash.bytes.total", 
        "total", 
        "varcrash", 
        "the"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.varcrash.bytes.total", 
      "units": "bytes", 
      "scope": "node", 
      "type": "int64", 
      "policies": null, 
      "description": "Total capacity on the /var/crash filesystem in bytes"
    }, 
    "node.disk.iosched.queue.avg": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "avg", 
        "node.disk.iosched.queue.avg", 
        "for", 
        "iosched", 
        "disks", 
        "queue", 
        "length", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.iosched.queue.avg", 
      "units": "cents", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Avg iosched queue length for all disks"
    }, 
    "node.sensor.volt.volts.3.3v": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "electric", 
        "0", 
        "volts", 
        "node.sensor.volt.volts.3.3v", 
        "of", 
        "3v", 
        "number", 
        "volt", 
        "3", 
        "potential", 
        "in", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.volt.volts.0", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.3.3v", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 0"
    }, 
    "node.clientstats.active.smb2": {
      "sub": "Active", 
      "super": "Client", 
      "aggregation_type": "average", 
      "base_name": "node.clientstats.proto.smb2", 
      "tags": [
        "client_active", 
        "InsightIQ"
      ], 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "of", 
        "clients", 
        "smb2", 
        "clientstats", 
        "number", 
        "simultaneous", 
        "client_active", 
        "active", 
        "using", 
        "node.clientstats.active.smb2", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.clientstats.active.smb2", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 172800
        }
      ], 
      "description": "Number of simultaneous active clients using SMB2"
    }, 
    "cluster.protostats.siq": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.siq", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "siq", 
        "statistics", 
        "protostats", 
        "for", 
        "cluster", 
        "cluster.protostats.siq", 
        "performance", 
        "per-operation", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.siq", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled per-operation performance statistics for SIQ"
    }, 
    "node.ifs.ops.in": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "operations", 
        "since", 
        "ops", 
        "/ifs", 
        "ifs", 
        "boot", 
        "to", 
        "node.ifs.ops.in", 
        "in", 
        "input"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "node.ifs.ops.in", 
      "units": "operations", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Input operations to /ifs since node boot"
    }, 
    "node.ifs.files.removed": {
      "sub": "Node", 
      "super": "File System", 
      "aggregation_type": "last", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 5, 
      "search_terms": [
        "node", 
        "files", 
        "from", 
        "node.ifs.files.removed", 
        "ifs", 
        "of", 
        "since", 
        "boot", 
        "number", 
        "/ifs", 
        "removed"
      ], 
      "real_name": null, 
      "subsub": "Other", 
      "key": "node.ifs.files.removed", 
      "units": "operations", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Number of files removed from /ifs since node boot"
    }, 
    "node.disk.bytes.out.rate.all": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": "node.disk.perfs", 
      "tags": [
        "disk", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "for", 
        "node.disk.bytes.out.rate.all", 
        "read", 
        "disks", 
        "bytes", 
        "second", 
        "per", 
        "rate", 
        "insightiq", 
        "disk", 
        "out"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.bytes.out.rate.all", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_node_disk_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Bytes read per second for all disks"
    }, 
    "node.disk.access.latency.avg": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "latency", 
        "all", 
        "avg", 
        "for", 
        "average", 
        "disks", 
        "access", 
        "node.disk.access.latency.avg", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.latency.avg", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Average access latency for all disks"
    }, 
    "node.sysfs.root.percent.used": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.root.fsspace", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.sysfs.root.percent.used", 
        "used", 
        "capacity", 
        "on", 
        "sysfs", 
        "percent", 
        "percentage", 
        "as", 
        "a", 
        "filesystem", 
        "the", 
        "root", 
        "/root"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.root.percent.used", 
      "units": "percent", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Used capacity on the /root filesystem as a percentage"
    }, 
    "cluster.protostats.nfs": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.nfs", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "cluster.protostats.nfs", 
        "statistics", 
        "protostats", 
        "for", 
        "cluster", 
        "nfs3", 
        "nfs", 
        "performance", 
        "per-operation", 
        "totaled"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.protostats.nfs", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled per-operation performance statistics for NFS3"
    }, 
    "node.malloc.stats": {
      "sub": "Memory and Internal Cache Usage", 
      "super": "System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "node.malloc.stats", 
        "malloc", 
        "statistics", 
        "stats"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.malloc.stats", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_malloc_stats", 
      "policies": null, 
      "description": "malloc statistics"
    }, 
    "cluster.node.list.down": {
      "sub": "Node Info and Status", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "cluster.group", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "lnns", 
        "of", 
        "list", 
        "down", 
        "cluster", 
        "as", 
        "comma-separated", 
        "cluster.node.list.down"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.node.list.down", 
      "units": "none", 
      "scope": "cluster", 
      "type": "string", 
      "policies": null, 
      "description": "List of down lnns as a comma-separated list"
    }, 
    "node.disk.xfer.size.in.avg": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "disk", 
        "node.disk.xfer.size.in.avg", 
        "transfer", 
        "average", 
        "bytes", 
        "in", 
        "input", 
        "xfer", 
        "avg", 
        "size"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfer.size.in.avg", 
      "units": "bytes", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Average input transfer size in bytes"
    }, 
    "node.protostats.lsass_in.total": {
      "sub": "Node", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.lsass_in", 
      "policy_cache_time": 5, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "statistics", 
        "lsass_in", 
        "protostats", 
        "for", 
        "node.protostats.lsass_in.total", 
        "per", 
        "performance", 
        "protocol", 
        "total"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.protostats.lsass_in.total", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_proto_opstat_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 1200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Per protocol performance statistics for LSASS_IN"
    }, 
    "cluster.protostats.smb1.total": {
      "sub": "Cluster", 
      "super": "Protocols", 
      "aggregation_type": "custom", 
      "base_name": "node.protostats.cifs.total", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "statistics", 
        "protostats", 
        "for", 
        "cluster.protostats.smb1.total", 
        "smb1", 
        "cluster", 
        "performance", 
        "total", 
        "totaled"
      ], 
      "real_name": "cluster.protostats.cifs.total", 
      "subsub": null, 
      "key": "cluster.protostats.smb1.total", 
      "units": "none", 
      "scope": "cluster", 
      "type": "stats_proto_opstat_list", 
      "policies": null, 
      "description": "Cluster totaled performance statistics for SMB1"
    }, 
    "node.sensor.volt.volts.5vSB": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "electric", 
        "volts", 
        "of", 
        "number", 
        "18", 
        "volt", 
        "potential", 
        "in", 
        "node.sensor.volt.volts.5vsb", 
        "sensors", 
        "reading", 
        "sensor", 
        "5vsb"
      ], 
      "real_name": "node.sensor.volt.volts.18", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.5vSB", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 18"
    }, 
    "cluster.dedupe.logical.saved.bytes": {
      "sub": null, 
      "super": "Deduplication", 
      "aggregation_type": "last", 
      "base_name": "cluster.dedupe", 
      "tags": [
        "dedupe", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "bytes", 
        "logical", 
        "cluster", 
        "bytes.", 
        "cluster.dedupe.logical.saved.bytes", 
        "the", 
        "dedupe", 
        "saved", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.dedupe.logical.saved.bytes", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "The logical saved bytes."
    }, 
    "node.tcp.stats": {
      "sub": "TCP/IP", 
      "super": "System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "statistics", 
        "stats", 
        "node.tcp.stats", 
        "tcp"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.tcp.stats", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_tcp_stats", 
      "policies": null, 
      "description": "TCP statistics"
    }, 
    "node.disk.bytes.out.rate.sum": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "node.disk.bytes.out.rate.sum", 
        "for", 
        "read", 
        "sum", 
        "disks", 
        "bytes", 
        "second", 
        "per", 
        "rate", 
        "total", 
        "disk", 
        "out"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.bytes.out.rate.sum", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Total bytes read per second for all disks"
    }, 
    "node.sensor.misc.data.Ocp2": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "(as", 
        "int)", 
        "data", 
        "6", 
        "misc", 
        "miscellaneous", 
        "number", 
        "node.sensor.misc.data.ocp2", 
        "of", 
        "ocp2", 
        "sensors", 
        "reading", 
        "sensor"
      ], 
      "real_name": "node.sensor.misc.data.6", 
      "subsub": null, 
      "key": "node.sensor.misc.data.Ocp2", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number 6"
    }, 
    "node.sensor.volt.volts.5vSFC": {
      "sub": "Voltage", 
      "super": "Sensors", 
      "aggregation_type": "average", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "electric", 
        "5vsfc", 
        "node.sensor.volt.volts.5vsfc", 
        "in", 
        "number", 
        "volt", 
        "3", 
        "of", 
        "volts", 
        "sensors", 
        "reading", 
        "sensor", 
        "potential"
      ], 
      "real_name": "node.sensor.volt.volts.3", 
      "subsub": null, 
      "key": "node.sensor.volt.volts.5vSFC", 
      "units": "volts", 
      "scope": "node", 
      "type": "double", 
      "policies": null, 
      "description": "Reading in volts of electric potential sensor number 3"
    }, 
    "node.disk.xfers.rate.all": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "last", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "all", 
        "disks", 
        "for", 
        "xfers", 
        "second", 
        "per", 
        "node.disk.xfers.rate.all", 
        "rate", 
        "transfers", 
        "disk"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.xfers.rate.all", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_node_disk_list", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "Transfers per second for all disks"
    }, 
    "node.ifs.cache.l2.data.read.start": {
      "sub": "L2 Cache", 
      "super": "Cache", 
      "aggregation_type": "average", 
      "base_name": "node.ifs.cache", 
      "tags": [
        "cache"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "node.ifs.cache.l2.data.read.start", 
        "ifs", 
        "read", 
        "starts", 
        "cache", 
        "start", 
        "l2", 
        "(bytes/sec)", 
        "data"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.ifs.cache.l2.data.read.start", 
      "units": "bytes per second", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "L2 data cache read starts (bytes/sec)"
    }, 
    "node.sensor.misc.data.FanFail1": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "11", 
        "(as", 
        "fanfail1", 
        "int)", 
        "sensor", 
        "misc", 
        "miscellaneous", 
        "data", 
        "of", 
        "number", 
        "sensors", 
        "reading", 
        "node.sensor.misc.data.fanfail1"
      ], 
      "real_name": "node.sensor.misc.data.11", 
      "subsub": null, 
      "key": "node.sensor.misc.data.FanFail1", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number 11"
    }, 
    "node.sensor.misc.data.FanFail2": {
      "sub": "Miscellaneous", 
      "super": "Sensors", 
      "aggregation_type": "last", 
      "base_name": null, 
      "tags": [
        "sensors"
      ], 
      "policy_cache_time": null, 
      "default_cache_time": 10, 
      "search_terms": [
        "node", 
        "(as", 
        "fanfail2", 
        "int)", 
        "data", 
        "misc", 
        "miscellaneous", 
        "number", 
        "12", 
        "of", 
        "sensors", 
        "reading", 
        "sensor", 
        "node.sensor.misc.data.fanfail2"
      ], 
      "real_name": "node.sensor.misc.data.12", 
      "subsub": null, 
      "key": "node.sensor.misc.data.FanFail2", 
      "units": "none", 
      "scope": "node", 
      "type": "int32", 
      "policies": null, 
      "description": "Reading (as int) of miscellaneous sensor number 12"
    }, 
    "node.cpu.user.N": {
      "sub": "Node", 
      "super": "CPU", 
      "aggregation_type": "average", 
      "base_name": "node.cpu.usage", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "a", 
        "for", 
        "index", 
        "of", 
        "percent", 
        "n", 
        "node.cpu.user.n", 
        "user", 
        "in", 
        "usage", 
        "with", 
        "cpu", 
        "tenths"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.cpu.user.N", 
      "units": "permil", 
      "scope": "node", 
      "type": "int32", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "User CPU usage in tenths of a percent for CPU with index N"
    }, 
    "cluster.net.int.packets.out.rate": {
      "sub": "Internal", 
      "super": "Network", 
      "aggregation_type": "average", 
      "base_name": "node.net.int.packets.out.rate", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "all", 
        "for", 
        "int", 
        "interfaces", 
        "packets", 
        "second", 
        "per", 
        "cluster", 
        "rate", 
        "internal", 
        "output", 
        "cluster.net.int.packets.out.rate", 
        "net", 
        "out"
      ], 
      "real_name": null, 
      "subsub": "Cluster", 
      "key": "cluster.net.int.packets.out.rate", 
      "units": "packets per second", 
      "scope": "cluster", 
      "type": "double", 
      "policies": null, 
      "description": "Output packets per second for all internal interfaces"
    }, 
    "node.disk.access.unfilt.write.hist6.N": {
      "sub": "Node", 
      "super": "Disk", 
      "aggregation_type": "average", 
      "base_name": "node.disk.perfs", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "write", 
        "unfiltered", 
        "of", 
        "6", 
        "accesses", 
        "hist6", 
        "access", 
        "bin", 
        "n", 
        "no:", 
        "in", 
        "unfilt", 
        "disk", 
        "node.disk.access.unfilt.write.hist6.n"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.disk.access.unfilt.write.hist6.N", 
      "units": "seconds", 
      "scope": "node", 
      "type": "double", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 4200
        }, 
        {
          "interval": 120, 
          "persistent": true, 
          "retention": 1209600
        }
      ], 
      "description": "no: of unfiltered accesses in bin 6 N"
    }, 
    "node.sysfs.varcrash.bytes.used": {
      "sub": "System Volumes", 
      "super": "System", 
      "aggregation_type": "average", 
      "base_name": "node.sysfs.varcrash.fsspace", 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "on", 
        "used", 
        "node.sysfs.varcrash.bytes.used", 
        "in", 
        "sysfs", 
        "bytes", 
        "filesystem", 
        "/var/crash", 
        "capacity", 
        "the", 
        "varcrash"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.sysfs.varcrash.bytes.used", 
      "units": "bytes", 
      "scope": "node", 
      "type": "int64", 
      "policies": [
        {
          "interval": 5, 
          "persistent": false, 
          "retention": 900
        }
      ], 
      "description": "Used capacity on the /var/crash filesystem in bytes"
    }, 
    "cluster.dedupe.logical.deduplicated.bytes": {
      "sub": null, 
      "super": "Deduplication", 
      "aggregation_type": "last", 
      "base_name": "cluster.dedupe", 
      "tags": [
        "dedupe", 
        "InsightIQ"
      ], 
      "policy_cache_time": 7, 
      "default_cache_time": 0, 
      "search_terms": [
        "deduplicated", 
        "cluster.dedupe.logical.deduplicated.bytes", 
        "bytes", 
        "logical", 
        "cluster", 
        "bytes.", 
        "deduped", 
        "the", 
        "dedupe", 
        "insightiq"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "cluster.dedupe.logical.deduplicated.bytes", 
      "units": "bytes", 
      "scope": "cluster", 
      "type": "uint64", 
      "policies": [
        {
          "interval": 300, 
          "persistent": false, 
          "retention": 87000
        }, 
        {
          "interval": 86400, 
          "persistent": true, 
          "retention": 31536000
        }
      ], 
      "description": "The logical deduped bytes."
    }, 
    "node.nfs.cache_stats": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "custom", 
      "base_name": null, 
      "policy_cache_time": null, 
      "default_cache_time": 1, 
      "search_terms": [
        "node", 
        "node.nfs.cache_stats", 
        "stats", 
        "cache_stats", 
        "rpc", 
        "nfs"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats", 
      "units": "none", 
      "scope": "node", 
      "type": "stats_nfs_cache_stats", 
      "policies": null, 
      "description": "NFS RPC stats"
    }, 
    "node.nfs.cache_stats.sec_principal.misses": {
      "sub": "NFS Operational", 
      "super": "System", 
      "aggregation_type": "last", 
      "base_name": "node.nfs.cache_stats", 
      "policy_cache_time": null, 
      "default_cache_time": 0, 
      "search_terms": [
        "node", 
        "sec_principal", 
        "cache", 
        "cache_stats", 
        "misses", 
        "nfs", 
        "node.nfs.cache_stats.sec_principal.misses", 
        "security", 
        "principal"
      ], 
      "real_name": null, 
      "subsub": null, 
      "key": "node.nfs.cache_stats.sec_principal.misses", 
      "units": "none", 
      "scope": "node", 
      "type": "uint64", 
      "policies": null, 
      "description": "Security principal cache misses"
    }
  }, 
  "cluster": {
    "release": "unknown", 
    "host": null
  }, 
  "mappings": {
    "keys": {
      "node.sensor.misc.data.IMBVer": "key_bf078a63b9cc4abf6679fa935aca9395", 
      "node.cpu.user.avg": "key_103419bb08a585dda5fdc7c9fcfee295", 
      "node.protostats.papi": "key_4570d2f9117955bda6835a443992d02e", 
      "cluster.node.count.up": "key_5b1ec821393fdbf0fbc5854bf7d5a70c", 
      "node.cpu.idle.avg": "key_a305852ddbfb6e69e16e5e0a6cbfd1c2", 
      "node.sysfs.var.bytes.used": "key_65f32ae6fb12b7847c3bc7e87fa4ddc6", 
      "node.ifs.cache.l2.meta.read.start": "key_006351d242120ea338a55a2043d6062b", 
      "node.nfs.cache_stats.sec_principal.misses": "key_232d29d4526e6ff353d6c3592bb32879", 
      "node.disk.access.write.hist3.N": "key_c0f7b79d2d13819d06d6235517513b92", 
      "node.sensor.volt.volts.12vSFC": "key_aec9d23d414d7bb8757ea26290809b76", 
      "node.disk.bytes.out.rate.avg": "key_6d47407729c9df6125cc7055c8e8659f", 
      "node.ifs.bytes.total": "key_88da04d87ea5f7a49267d5798c5efaa5", 
      "node.disk.bay.N": "key_43e1f935db97e66e6836b48da30ce54c", 
      "node.disk.access.write.hist1.N": "key_38aac57b647ec7abcb73dc1ccd880a87", 
      "invalid.N": "key_0c14a40758eb27edc10647b79ce521cc", 
      "node.protostats.nfs4.total": "key_e6c9adb1ab12d507633346c9d3246c89", 
      "node.ifs.cache.l3.data.read.wait": "key_b67431611daf20c3c3717fb5d40cfeac", 
      "node.clientstats.proto.irp": "key_c4ac3c4c1218c8337f93168dc3e684e3", 
      "node.ifs.rbm.throttle_events.rate": "key_691eacb3b79d14603116bb67e8d0316f", 
      "node.disk.xfers.out.rate.sum": "key_5cfac33b4e7d86955c87064cfaf67fdf", 
      "node.nfs.cache_stats.ccb.misses": "key_b80df13ac00d957d42d27753b0b21934", 
      "node.clientstats.io": "key_dcd9ee9c379bcb13b791ae99dd75eef2", 
      "node.ifs.cache.l1.meta.prefetch.hit": "key_8b756d4b88752c52ecf4d80d197e8b4b", 
      "node.nfs.cache_stats.v4_dircache.misses": "key_8accd34a11de4a948a6d544bedb57521", 
      "node.clientstats.proto.nfs3": "key_4b94e103e931b9a1e6d8b3cc0c346333", 
      "node.clientstats.proto.nfs4": "key_c19f3791d4ac4136e63f90c1c6b587b1", 
      "node.net.ext.errors.in.rate": "key_e2970b63ae784fb08a3607f21ac3e601", 
      "node.nfs.cache_stats.sec_principal.negative_hits": "key_17d05b5576dec465e9dc9760c8c2f159", 
      "node.sysfs.root.percent.free": "key_9c6799d1e9abd7208a0bf085e3cb5601", 
      "node.nfs.cache_stats.sec_username.misses": "key_792d68e8806047e16aa218a8b79d8356", 
      "node.ifs.bytes.deleted.rate": "key_d28f8ac9e5f20f31c2fcd68eb9ddce0d", 
      "node.ifs.cache.clients": "key_84e676b3381d3ddbc8ef42ddd4f0b31b", 
      "node.memory.used": "key_97d5755888b599d9370cd57183049b2b", 
      "node.ifs.ssd.bytes.used": "key_cf0c4a0b30401d5156f6c0bd77851e77", 
      "node.ifs.cache.l1.meta.read.miss": "key_325d3ba0637ce95d8ff7e5f292cd532b", 
      "node.cpu.intr.avg": "key_c9b2401ff7dd8f1afe77d4548d6fb44e", 
      "node.sensor.power.count": "key_d6c36f801b45c2dc26386612ebdd93da", 
      "node.clientstats.proto.ftp": "key_5c291bbb8142a7255ea6c95383db1a3d", 
      "node.sensor.altitude.meters.N": "key_dd7e9ab8976ff114081a1a456c6da1b3", 
      "cluster.protostats.siq.total": "key_da45e724434ee7530fd1c9a555c0340a", 
      "node.disk.bytes.in.rate.all": "key_6ea80c335d4dd88b0bb77acb418ebe64", 
      "node.cpu.sys.avg": "key_dfb0368359b7e58c931865c38d4c0938", 
      "node.nfs.cache_stats.sec_username.maximum_size": "key_d9cba963dda6bc15591512fc56624eb2", 
      "node.disk.unhealthy.count": "key_4ed33aa8c7c734a709b274ab7e755f65", 
      "node.net.ext.packets.out.rate": "key_61821a06111c9cb1ad25dd8ea128b44d", 
      "node.cpu.nice.max": "key_5fdfaeb810d252a0600fc36c3a4ed5fa", 
      "node.ifs.cache.stats": "key_d43a2224bdf27415c1d4745f82c1e095", 
      "node.disk.iosched.latency.max": "key_922dda09a434e645e7dc5cad639fa7ff", 
      "node.thread.stats": "key_d5f492dd4ff7c72252bc6bfb8611513c", 
      "cluster.health": "key_28de90cb6a7e30df8166d30940f02d17", 
      "node.nfs.cache_stats.sec_sid.positive_hits": "key_c25d57e2128bf8d5a4ea078ccba2d6bb", 
      "node.nfs.cache_stats.ccb.negative_hits": "key_32fe06ac15a1065e72a5b4ac64dce810", 
      "node.disk.ifs.bytes.free.all": "key_d96520893ded57cd6b745136a2192bfb", 
      "node.protostats.smb1.total": "key_7fabbef3b6b227d82b69ed3a597ee84b", 
      "node.disk.access.unfilt.read.hist5.N": "key_0c29e5b28fa4b18d33ecd2a5d5c12aa6", 
      "node.cpu.count": "key_c2759863bd3aa4c6bf9c5508b414e67d", 
      "node.nfs.cache_stats.sec_sid.misses": "key_73515bd71a138dbf7f6fa69a9ecadcec", 
      "cluster.net.ext.packets.in.rate": "key_4e4779cb5dc2647c07c4f9363515ef8a", 
      "node.nfs.cache_stats.v4_dircache.current_size": "key_75b1d123847555a83132495084882f64", 
      "cluster.net.int.errors.out.rate": "key_e7170679864645778aca20ea7e9d50cb", 
      "cluster.net.int.packets.in.rate": "key_604a5565c54cf7809085e1e47c7a322b", 
      "node.sensor.volt.volts.5v": "key_3c5185f913de24c7dbd1d681f2214bf9", 
      "node.cpu.nice.avg": "key_6788da195b47f5ef76061c9d1d6956b0", 
      "node.ifs.cache.l3.data.prefetch.hit": "key_25cb30ebf314a90295a4c3bc6ff59155", 
      "node.disk.busy.avg": "key_ae02bef501e83427efda464e951f18ac", 
      "node.disk.access.read.hist2.N": "key_3547adb264163b4f9307b35914b6ae1b", 
      "cluster.protostats.nfs4": "key_7c5143ad2244a94ca0a7b7ab6f663032", 
      "cluster.cpu.idle.max": "key_d5f5905e0ed3a4c11eff97386f008909", 
      "node.sensor.volt.volts.1.5v": "key_b522e49c978af09f5460d45da3e36915", 
      "node.protostats.http.total": "key_a145268b4348bc8c8324b91daebd610d", 
      "node.ifs.cache": "key_161a5762b9af84eb2518a615661557fd", 
      "node.ifs.rbm.pressure_count": "key_7bdff80a115aff877299086f41d70a59", 
      "ifs.bytes.total": "key_8e1c51623f59bf8002f46605c7c102a4", 
      "node.sysfs.varcrash.percent.avail": "key_3a25229b612763b289747249a4594e58", 
      "ifs.ssd.bytes.used": "key_b8dcbedf29e6473b24e60f8d43a7bb1b", 
      "node.clientstats.active.lsass_out": "key_e59aedae40b6bb571df240d2da50fb90", 
      "node.net.ext.bytes.out.rate": "key_97b43daa9fac4b8340eed003f3d49d56", 
      "node.ifs.heat.link.total": "key_5228ee683396e66b11e965bd0d32d7af", 
      "cluster.node.count.all": "key_43959aec5fd83f55f82da7d89360b8a9", 
      "node.nfs.cache_stats.sec_username.negative_hits": "key_6e2e10c6c37b93ec351c76804ee43446", 
      "node.protostats.siq.total": "key_11ce572f4725cc9d057b30895c6d5958", 
      "ifs.percent.avail": "key_aa0a26b01a126aee5a8542c16ec7f854", 
      "node.disk.access.read.hist5.N": "key_249210cc184bb9111ab14aea2a2d0b51", 
      "node.nfs.cache_stats.sec_username.timeout_period": "key_3b5407da50e45577842565f4354b581f", 
      "node.sensor.curr.amps.cdcps1": "key_b45cc5cf55c78f7ea67d97296166d038", 
      "node.sensor.curr.amps.cdcps2": "key_ab216c71b3f5f7dd11829d395e8f1da4", 
      "node.nfs.cache_stats.replay_udp.positive_hits": "key_75056fde9c7467ba91e97451f9cdc97b", 
      "ifs.ops.in": "key_9eb2d9ab15223ae6e17fc82ffdf504fd", 
      "node.sensor.volt.volts.vacps2": "key_78ae7bb125a1dbe8abd9a43d4e74a5c5", 
      "node.sensor.volt.volts.vacps1": "key_761b64a6fc51afab5aed6c4996c20cf6", 
      "node.disk.xfer.size.out.N": "key_e3373bdd53aae93ac75eb9e83aadc2a3", 
      "node.audit.cee.export.rate": "key_5cfc650ea2dfb8189ed30a7948e9605e", 
      "node.protostats.hdfs": "key_1dde16d062012f0b72553430f7a4f3b5", 
      "cluster.net.int.errors.in.rate": "key_25e8fac35241095ce8fc039ec1804e44", 
      "cluster.protostats.ftp": "key_7a2e042eac0e8f8959c0bbaf6fea58a3", 
      "node.ifs.heat.lookup": "key_691086e8997647a53af1269e3eb9c20f", 
      "node.clientstats.active.nfs3": "key_57af5ec2c965313d94cc353c80a3c974", 
      "cluster.dedupe.total.used.bytes": "key_143cbb3cdb5466e0d8459eea7de3ce6a", 
      "node.sensor.temp.name.N": "key_38825498a181065c6781864dbb7d4814", 
      "node.ifs.cache.l2.data.read.miss": "key_678961d542ffcb16b7e49b505132e510", 
      "cluster.cpu.intr.avg": "key_9b020fd91d2efb68b6f51dcd77c076b9", 
      "node.sensor.misc.data.Ovp1": "key_240b8e02213aa8e0bc8e75d8e10e51a7", 
      "node.ifs.cache.l2.data.prefetch.start": "key_4c4e74b9ed5a2286d6601bedfaeb0c75", 
      "node.sensor.fan.rpms.fisi2": "key_b275716ed0eeba0bc6b28d2b25ac2e4d", 
      "node.sensor.fan.rpms.fisi3": "key_2ff0360b9f727be6eb9848b163149529", 
      "node.sensor.fan.rpms.fisi1": "key_299d0d2fc47331f7e07212bc0e5149d2", 
      "cluster.protostats.smb1.total": "key_6751e6aefc7cf1429ffc30cc1e813a21", 
      "node.disk.access.slow.avg": "key_dcef8358b321006ca703e35babb84b4a", 
      "node.disk.xfers.out.rate.avg": "key_b9ae74f9ef036cb67f7d7fbbf55137eb", 
      "node.ifs.cache.l1.data.read.miss": "key_09243ea5ffcd10e9166c79415d913835", 
      "node.cpu.idle.N": "key_69e30bf54332bbbfde622eab6099e6ff", 
      "cluster.cpu.intr.max": "key_d289efac8b4de6226a23aad5433da6a5", 
      "cluster.disk.xfers.rate": "key_6a3671e91441ef296b3f94e8e3c4c8c6", 
      "node.sysfs.var.bytes.avail": "key_13e400c36468e6bc64d1bf6f3fc9a689", 
      "node.sensor.temp.celsius.tSystem": "key_7d76ab13aa54ce728731906c3f7ca084", 
      "node.ifs.cache.l3.meta.prefetch.hit": "key_bc69dcfcb952b76c5b087a3bcd0ec658", 
      "cluster.cpu.count": "key_598fe836bf3f3a6bb88cd5941bcbeb60", 
      "node.sensor.misc.data.addrps1": "key_cf5e3f9c3c4f50e611d473893f80655f", 
      "node.ifs.bytes.out.rate": "key_0761d6dbef47213d1761e67b087b578f", 
      "node.sensor.misc.data.addrps2": "key_534011583d75a1e9e14badb66b083479", 
      "node.nfs.cache_stats.replay_tcp.current_size": "key_2679b5a1a348ddfff668c9fb67c4a1b2", 
      "node.ifs.ops.in.rate": "key_30b7695f0caf0f50dd170fda93cd6f2c", 
      "node.ifs.cache.l2.meta.prefetch.hit": "key_76a2b4f409e5abff7872e1d45e0fc067", 
      "cluster.node.list.all": "key_8b4b31af14396b13028bde160fc40f50", 
      "node.ifs.ssd.bytes.total": "key_e302e40688845f33aa85155a84912892", 
      "node.ifs.cache.l1.meta.prefetch.start": "key_5dffa3f01fd8687a9f8ff1fcd7891371", 
      "node.disk.latencies": "key_4e1ef8bcf229e6093d2ba16bea66d83e", 
      "node.ifs.bytes.in.rate": "key_fb8e5f7668b1a2cc3293ffdfddd85b20", 
      "node.nfs.v4_error_stats": "key_f83886ca54545edb611d1eaf36c85801", 
      "node.sensor.curr.amps.cacps1": "key_f52b010ff4707e7599536ebde0196939", 
      "node.sensor.volt.count": "key_2d397e3aef6c083e3195fadb9664a539", 
      "node.sensor.curr.amps.cacps2": "key_b4991750e8a8788d96791efa72b3a424", 
      "node.sensor.volt.name.N": "key_74efb6663231676ba5644ec8a6feb0c5", 
      "node.clientstats.proto.nlm": "key_d3027e54970b97c89101a3827e658b2a", 
      "node.ifs.heat.deadlocked": "key_38ed6c20dd3c05b0632cfe49fcc452d1", 
      "node.ifs.cache.oldest_page_age": "key_a81d2100a9635ed7441ea09cc85c5b76", 
      "node.sensor.misc.data.PwrOff1": "key_99e3d31d0c829c0ece676ccab450ba0d", 
      "node.nfs.cache_stats.sec_sid.maximum_size": "key_f04509e548b1b75a4b005993dfb656eb", 
      "node.ifs.ops.out.rate": "key_9afe426df1f138db2d8c72d82cf3d81f", 
      "cluster.protostats.papi": "key_cb222d11246170feb95924d410784bda", 
      "node.sysfs.root.percent.avail": "key_4aca7952449f4c66c068b493eccdd6de", 
      "cluster.node.list.up": "key_cff6a17198323f076698afff052a5691", 
      "node.sysfs.var.percent.used": "key_272eaa5c11dcaef67f9a2e44413cec7c", 
      "node.sensor.misc.data.PwrGood1": "key_71bf26eb74253c2e9bf1fe3957158a16", 
      "node.sensor.misc.data.PwrGood2": "key_e42d12e950b4b216daf70578cd4951d1", 
      "node.sensor.curr.amps.N": "key_85e40632f22f9e5a948e5f51da96d707", 
      "node.disk.access.read.hist4.N": "key_ce6824130969c6959b40ccc03a9182cd", 
      "node.ifs.cache.l2.prefetch.miss": "key_95684768e943ce200db1daa0a4fa93cd", 
      "node.clientstats.connected.smb": "key_b095558f3626fc5f8ec97c0e52ba0dd2", 
      "node.open.files": "key_c558cba25591bcecfedbc6dc5aa2d0e5", 
      "node.nfs.cache_stats.sec_sid.negative_hits": "key_ac923b9eff7444c25a841ddbb3e81d11", 
      "node.disk.access.read.hist6.N": "key_57878a634819273d18d62c31b9a883ea", 
      "node.disk.xfers.rate.N": "key_dbdc2213c0e0a68c7a9168f6d6a94a65", 
      "node.sensor.volt.volts.12vminusSFC": "key_a71098c3eb2cfbdffb0b06a3269c43a2", 
      "node.ifs.bytes.out": "key_37165adee9fece9ee2061fd2f226c1c8", 
      "node.disk.xfers.in.rate.avg": "key_52c1ebeb125223a8ce41b82b2d23de57", 
      "node.nfs.cache_stats.replay_udp.negative_hits": "key_1927b042da8ea4ea2e3a39abfe9805e5", 
      "node.protostats.jobd.total": "key_05ea29352bfc32ec1c8d16f0501e322d", 
      "node.nfs.v3_error_stats": "key_e44c194bfe48b34242e79a289867f326", 
      "node.ifs.cache.l2.meta.read.miss": "key_807ad73b1cbc987d96c1862d17236ed9", 
      "node.ifs.heat.getattr": "key_beb6d509bf3e32a6232f3b30cdb852ae", 
      "node.sensor.fan.count": "key_cc44cd0b2e0cae11c7b9aad5dbf1ba0b", 
      "node.ifs.cache.l3.data.prefetch.start": "key_563505c593de57c96e96d94485ff34a8", 
      "node.nfs.cache_stats.sec_sid.timeout_period": "key_5269e9edaf4c383a34c311173fcf60e8", 
      "node.net.iface.bytes.out.rate.N": "key_4d06465787a976c6c89dcda75d1dad1e", 
      "node.nfs.cache_stats.ccb.timeout_period": "key_1c7178efd6aa80b29726456bb14a000d", 
      "node.disk.bytes.in.rate.N": "key_9fbd92caab5d0c9c7ceb446beaac0f08", 
      "node.net.ext.bytes.in.rate": "key_412a1c794dac4ff6b44e20f946be1292", 
      "cluster.net.ext.packets.out.rate": "key_a4079e758c11683414c62a8c2a8adbcd", 
      "node.disk.access.read.hist0.N": "key_590dd0d0b367591880fa1c1e66d52683", 
      "node.disk.bytes.out.rate.all": "key_3f6b016988c3d4749ed7b9094ccf3388", 
      "cluster.alert.info": "key_c03b9bf2949c815cf1adc5d1631fdeb4", 
      "ifs.bytes.out.rate": "key_e1ac89cfaf1012e5ecb058a30eccb455", 
      "node.nfs.cache_stats": "key_64bde9ebd61eb9920efcc01e5bd8ee6e", 
      "node.net.iface.errors.in.rate.N": "key_311daa83bd35b8700dca724f6d2a54fa", 
      "node.load.5min": "key_12d5936a9986f68293ac773e17cfd15d", 
      "node.sysfs.varcrash.bytes.free": "key_c80316e9a779cb10af7305bc1059ea55", 
      "cluster.node.list.down": "key_36499d0997ea4416f9f97d1bb27fe2ce", 
      "node.protostats.http": "key_fe4ec5d54dca723c84b5b5304c3dc023", 
      "cluster.protostats.nlm.total": "key_03b519df429193262dc44197c5559437", 
      "node.nfs.cache_stats.replay_tcp.misses": "key_f4498a3f89fd70ec529c27a0443f02a6", 
      "node.ifs.heat.blocked": "key_5c6c20da49042733394b38910c24cfef", 
      "node.sensor.misc.data.Uvp1": "key_247b942bf3c985147d1eafd774b49beb", 
      "node.sensor.misc.data.Uvp2": "key_efeb2bbcf97bdf869509560a9e124944", 
      "node.nfs.cache_stats.sec_username.current_size": "key_bedf5e36542f8162e8233704f8fc3f4e", 
      "ifs.bytes.in": "key_e36f5e1a53b0f55a49de9c033f23ea4a", 
      "node.ifs.cache.l1.data.read.hit": "key_01f495cdd9b8a7a4c53998d2abc9f46a", 
      "node.net.iface.errors.out.rate.N": "key_480e764b07de2a16abdce906037e1529", 
      "node.cpu.user.max": "key_ce86e77c329ee4c14b5b500aba571688", 
      "node.sysfs.var.percent.avail": "key_0c023c6769f40c689c5084513418bd18", 
      "cluster.disk.xfer.size.in": "key_59ddc8c4422bd626a8df1161f2a9231d", 
      "ifs.bytes.reserved.drive": "key_7c9cefa5eba0bf330905e03f9a506d8e", 
      "node.sensor.volt.volts.12v": "key_885a6b53fe8c65e2c1283e005f47f0bd", 
      "node.disk.ifs.bytes.total.all": "key_7787ac3ff65ed8f67a85d72c1f97ad0c", 
      "cluster.protostats.nlm": "key_fe1dec30f84e6d5ef1aff4bc918e5590", 
      "node.sensor.fan.rpms.N": "key_07403cf6e5bcc2b1eb9f110d7b4a4a06", 
      "node.sysfs.var.percent.free": "key_73f035745a27178acf7ef8631478e80e", 
      "node.ifs.heat.read.total": "key_9f4a17ba4f79b5e0bcbd89136e3c39b9", 
      "cluster.dedupe.estimated.deduplicated.bytes": "key_e4875b0b3067444c93abb6098027c865", 
      "node.sensor.volt.volts.1.0vSFC": "key_a58b9adadd24d29ce403489d2615c3ca", 
      "cluster.disk.bytes.out.rate": "key_d258d4514412734d21413b50f178f4c7", 
      "cluster.disk.bytes.in.rate": "key_11d8ff4e3e9bafd31d9267b66e3586de", 
      "node.disk.health.N": "key_81c6ca611d6a571556e7ba5b4e97f981", 
      "cluster.protostats.papi.total": "key_d5ea6ad7c6ae11e63e8984ee8245f3df", 
      "ifs.bytes.used": "key_2bd07a5112579d80b2401d596449e61d", 
      "node.protostats.nfs": "key_c3a05085f682d376ebb2d3c64386ab4b", 
      "node.net.iface.status.N": "key_e632e50618fa5394e07d302d12b0ab64", 
      "cluster.protostats.jobd": "key_243982d5ac085c6cc4a87f601b251ec3", 
      "node.ifs.rbm.pressure_count.rate": "key_44f3c0ac6fbbeb02dd9c448502a3e19d", 
      "cluster.node.list.diskless": "key_c384f51afc643d4fcb8557e8b95a68dc", 
      "cluster.protostats.lsass_out": "key_a0c159165700ff1e9d1f3cf01bc94b4e", 
      "node.protostats.nfs3.total": "key_fbe3b9ff7e5047ea946eb18c0f818181", 
      "node.sysfs.var.bytes.free": "key_96b23d6664d9df5418acad67ea56f2aa", 
      "node.net.ext.packets.in.rate": "key_55e07f57b1de099d85bc082eb50b0f56", 
      "node.sysfs.root.bytes.avail": "key_73f1549b7869eb60ef9a9a77928c8f9e", 
      "node.ifs.files.created.rate": "key_0f9d6237c93cefb941702d8ca8399f96", 
      "node.load.1min": "key_cb352bf3fc50c5817c1c590c1fec7acc", 
      "node.sensor.altitude.name.N": "key_c9bbd8d3d4d367b0d481c9db19299736", 
      "node.protostats.ftp.total": "key_46bdcfde16ebd49e8406c746ec9b2aca", 
      "node.nfs.cache_stats.sec_principal.timeout_count": "key_ecc5db6b62103a75664c4bd37722d29c", 
      "node.ifs.heat.write": "key_bf22df5b5eba66acd241a301ce8b47a3", 
      "node.disk.access.latency.N": "key_f2b27ffb85d310dff0aa47ada61f7854", 
      "cluster.net.int.bytes.out.rate": "key_bb046fc8effab92c96640856457f1820", 
      "node.ifs.heat.lock": "key_b693b4c782551ae46ba312c995c5cef2", 
      "cluster.protostats.nfs3.total": "key_c6dfa066a9223f4b08e358ae67835c16", 
      "cluster.protostats.lsass_in.total": "key_5d1a826052759e15b379c8595c50f852", 
      "node.net.iface.packets.out.rate.N": "key_3a2a6fb177be8f62648f51a41c7d2ea5", 
      "node.clientstats.connected.siq": "key_653f755356d7407ea082d76be5cc5f64", 
      "node.ifs.bytes.free": "key_7bae5bae2f4d7cb51469dc9f3d001a44", 
      "node.nfs.cache_stats.replay_udp.current_size": "key_19fceb99dfbe42a02e1f4d5918228762", 
      "node.protostats.cifs.total": "key_4f3f7b615677e5c0b0eb25fbb006115a", 
      "node.nfs.cache_stats.v4_dircache.negative_hits": "key_3980937dfb09f019cb2752d7cf880ca1", 
      "node.sensor.altitude.desc.N": "key_75f05dd0f283bfbaee0b0faaf17ec742", 
      "cluster.protostats.cifs": "key_11331b61f96fbb0fbb4fe411dbbfae29", 
      "node.uma.stats": "key_b83eb082938989749e819e887ac74f8b", 
      "node.nvram.battery.status.N": "key_b3ea1799704dd0055de461e95f4e60b2", 
      "node.disk.busy.all": "key_4f9b2a5b41f82a8fcdf10c1f7405da81", 
      "cluster.dedupe.estimated.saved.bytes": "key_dbbac8ade92116e5fadc6394d2fe471e", 
      "node.sensor.fan.names": "key_e90f1ca85365a151e2a738d9a3c8108e", 
      "node.disk.access.write.hist4.N": "key_96bf8f3d6a3389d1c2af957303492eaa", 
      "node.clientstats.active.nfs": "key_d637f9274d373115ba97e7d5b959cd53", 
      "cluster.protostats.hdfs": "key_965bb7538526e36b4e680e7efa21d591", 
      "node.sensor.volt.volts.3.3vSB": "key_acb525cbaacf02f56e2f1e6f68dfd199", 
      "node.clientstats.proto.lsass_out": "key_8d3ace5330c386f9ea2ccad6ff56ad4d", 
      "node.disk.access.unfilt.read.hist1.N": "key_78ab6ac18916f0f0c8975c65a43bda35", 
      "node.mds.cache.stats": "key_f2fe360eaf76e77b74d0612821bffa01", 
      "node.ifs.heat.getattr.total": "key_87b6092a1f75d4ec4379392216066863", 
      "node.nfs.optime_stats": "key_98af70ee605122f4dbc0fae1cfb80443", 
      "node.ifs.heat.unlink.total": "key_7aa866bbcd46b56a81b71d48c37f19bf", 
      "node.disk.access.unfilt.read.hist3.N": "key_16a833ef67421947105855674cc0cb77", 
      "node.nfs.cache_stats.replay_tcp.positive_hits": "key_4edbc84fc1eb32883d6c09c4cf9b0bc3", 
      "ifs.ssd.bytes.avail": "key_f8f23414db04026baa201d926c3bd88b", 
      "node.ifs.cache.l1.prefetch.miss": "key_aee5efdb6c951f69a9e62f1989237373", 
      "node.clientstats.connected.nlm": "key_4f32bca9f3d0b429d0ab75e8567d96b6", 
      "node.net.iface.name.N": "key_be21e9adef76b1f2634859203b3f9262", 
      "node.clientstats.active.http": "key_bb92353da3a95503eeb345dd8e246961", 
      "node.nfs.cache_stats.ccb.timeout_count": "key_044d4ad16b3f4f76a0f869bdd647c5cf", 
      "ifs.bytes.free": "key_221772bdf1ac54235241c799cd4eb628", 
      "node.ifs.files.removed.rate": "key_da6bc148d8c9f7ff6e9895ba8da6543d", 
      "node.ifs.cache.l2.meta.read.hit": "key_b6eee5d6b51264947a2348a331bffb31", 
      "node.ifs.num.lookups.rate": "key_5f0b8a61b1fcd5743b66a34167353c44", 
      "node.disk.iosched.latency.avg": "key_083344942efb1ad4f2e795e4b92017b4", 
      "node.sensor.misc.data.PwrOff2": "key_e3fe5c8d33a88943f750d7bb2a8e9fa5", 
      "ifs.ops.in.rate": "key_6520ddbca2641443b3a80e0946149588", 
      "cluster.node.list.smartfailed": "key_0ccceeb4f5de9850255237a618ceb2f7", 
      "node.disk.access.write.hist6.N": "key_8e901874475f0793489ed38a68402217", 
      "node.disk.access.unfilt.write.hist5.N": "key_754134912277322d35a77b1337b9240e", 
      "node.sensor.altitude.count": "key_c91c55de3fb6236ce141174b5879e4df", 
      "node.disk.xfer.size.in.all": "key_510786143d8c8e12e93e3209d290085f", 
      "cluster.disk.xfers.out.rate": "key_1439c9c76f2333f8cdfabaa79d444852", 
      "cluster.node.count.diskless": "key_21ec0cc78115aa41f7e0b22cb3e16a08", 
      "node.disk.access.unfilt.write.hist3.N": "key_c11f8d2d80ee8216216f9fc2bb0610a5", 
      "cluster.protostats.http.total": "key_b7089e703682d1f9c73e62c07bd00d0e", 
      "node.sensor.misc.desc.N": "key_2ae0e53ccfb0fc5529423449cf4b89fd", 
      "node.nfs.cache_stats.sec_principal.timeout_period": "key_338b62c9e7c76e7ac72e2d771608f2d4", 
      "node.disk.access.write.hist2.N": "key_c3e85bd962091c46813fe4abc2506ac2", 
      "node.sysfs.root.bytes.used": "key_a17b8fd4229cd0ee4b0c7717a605be84", 
      "node.protostats.jobd": "key_c5079edff29b40e39f0fba82a388000b", 
      "cluster.protostats.ftp.total": "key_f400f2a07891feae8f35829347384499", 
      "node.disk.access.write.hist0.N": "key_e5433ba98534567e5226f7112761e443", 
      "cluster.cpu.sys.avg": "key_781c127eaa0013985747b92223c2322e", 
      "test.node.settable.int": "key_11942d6bbd1eeaf77eb80c41b724f087", 
      "node.sensor.volt.volts.vCore1": "key_7565af3ef8a222fd97a2c2246fdb4e72", 
      "node.sensor.volt.volts.vCore0": "key_639d77040437e27c1acc928f7e65009d", 
      "node.nfs.cache_stats.replay_tcp.timeout_period": "key_02165f3307ba71f56496ce7d3264ca55", 
      "cluster.cpu.user.max": "key_6488aafa44d7c0c6b5e17c12a9eb4f9c", 
      "node.disk.ifs.inodes.used.all": "key_bc4913f8bfc74a1f8eede1cd980c0fc4", 
      "node.disk.ifs.inodes.used.N": "key_f8b985774a6a1647680c526dfc68bd1d", 
      "node.disk.xfers.in.rate.all": "key_4fb69f8cb1487888632b3225b2f6a291", 
      "node.net.int.bytes.out.rate": "key_ad93d2f61175dbe34aa62f37e5c4df09", 
      "node.ifs.heat.read": "key_662d75b03a2e6687988688204fd64190", 
      "node.ifs.cache.l3.meta.read.miss": "key_052e23dc6d0b4918306a7732d73238cb", 
      "node.clientstats.active.irp": "key_471ce3d0b4ca4ce4f4404c1bd6204186", 
      "node.disk.access.slow.all": "key_bc1141104cdbaff70ebb12a89a485f09", 
      "cluster.protostats.http": "key_fbc84b60c6d2417499e5ac0b3254c56b", 
      "node.clientstats.connected.http": "key_93bd608abde175be7fb361e019719b6a", 
      "node.tcp.conn.stats": "key_8670cde66b28a72363b11a02840e7847", 
      "node.ifs.cache.l3.data.read.hit": "key_852c148a6af8b984b7e2620eff6b073b", 
      "node.clientstats.proto.papi": "key_3124b9a7de89034769a95d473d7d622a", 
      "ifs.bytes.in.rate": "key_0cb7c0c44bea3ae753c3fa04b9a5a021", 
      "node.disk.access.latency.all": "key_456cfef83f55bf3983c06350157a5348", 
      "node.protostats.smb2": "key_0e9c068b17988fd17fcb9114c44e351a", 
      "node.protostats.smb1": "key_9897c4162ff3c1f2f320c2ea8558f113", 
      "node.ifs.heat.lookup.total": "key_bcc8cb32199be1ac5ae2d64081ac266c", 
      "node.ifs.cache.l2.meta.prefetch.start": "key_3a5afcce55411c9bb2934744c56eaf84", 
      "cluster.protostats.lsass_out.total": "key_6dd2f84e1bed8bbbe1d111134e32067b", 
      "node.sensor.temp.count": "key_e3f6b33222abaf503562a5e4dc001d9b", 
      "node.ifs.heat.rename": "key_d7a8109b3e124b7d196f69103037a85b", 
      "node.ifs.cache.l1.meta.read.start": "key_6889f70362f93ae9b11e5e34b9530004", 
      "node.sensor.temp.celsius.tps1": "key_d9a9e26772d581dc4c8a6ea303842eb1", 
      "node.sensor.temp.celsius.tps2": "key_29cb9ac9d2ce38faa6fb60f375dcfe8e", 
      "node.ifs.cache.l3.meta.read.wait": "key_7c3caaed96a75c60e9888e88681288ca", 
      "node.ifs.cache.l2.data.read.wait": "key_500ccf55b26839d9c0cca417bc5120b2", 
      "node.je.num_workers": "key_279162bdcb5dec55b34de1bfdf87644d", 
      "node.disk.xfer.size.in.N": "key_6a462846230d0b9b86a38797275c4ec9", 
      "node.ifs.cache.l2.data.read.hit": "key_7345f71ecdeacb1c2f87b1c0e323eda5", 
      "node.ifs.heat.contended": "key_73c53b26e7d0d1377c85ef8242b216a2", 
      "node.ifs.bytes.out.rate.max": "key_1b47164e79e6238661a2ceef3ca9ff8d", 
      "ifs.ssd.bytes.free": "key_513413935717c7b3b8de13ac2da73258", 
      "node.nfs.cache_stats.ccb.maximum_size": "key_c999a5eb9a1875bca26d49505a7148cd", 
      "node.clientstats.connected.ftp": "key_312bf1bfcae1e1e810f6d2108e350c5a", 
      "node.diskless": "key_67b0329981120f82a98604ca6903bdf9", 
      "node.protostats.hdfs.total": "key_9dd56f19fbdf6ee358f310ca81ce36ec", 
      "ifs.ops.out": "key_c4e84988bc5e3abafdf3c7f1b1ca9c3b", 
      "node.sensor.fan.name.N": "key_7be6ee3adb3bf7e8127509b9fe1fde35", 
      "ifs.ops.out.rate": "key_e4c9964e4018daab214a5f62df0bb8e5", 
      "node.clientstats.connected.cifs": "key_0359ed259701f5aff8d96edefd7e3416", 
      "node.sensor.misc.data.N": "key_adec37658e996a2294803402815307f4", 
      "node.sysfs.var.bytes.total": "key_b0f79b12645ed9e553e47d7523730e9f", 
      "node.disk.ifs.bytes.used.N": "key_16ef6b04002026a905d14646cdc4b6c9", 
      "cluster.cpu.idle.avg": "key_0644da4ed5635c3e91398fa3843f16dc", 
      "node.clientstats.proto.hdfs": "key_15331141eb37087b20e37641a6377366", 
      "node.sensor.volt.volts.1.8vSFC": "key_c19495a13804cc53d1114515372fd3a8", 
      "node.net.int.errors.in.rate": "key_3fabb27054a596f0095670a5af398104", 
      "node.ifs.heat.rename.total": "key_eb910d636893c1ecbcce306c7fa76be2", 
      "node.ifs.ops.out": "key_c4761e578b2d414aa7edbdf7be3ce353", 
      "node.disk.ifs.bytes.used.all": "key_c0753347714b9fec91db4233cef2f668", 
      "node.disk.access.unfilt.write.hist1.N": "key_0e8c13a154a868d98ddb3404e2a42dfc", 
      "node.ifs.num.lookups": "key_c2a744f356995036e2f257cfb332652d", 
      "cluster.protostats.irp": "key_07abb22757558ca35be3f009c70976c1", 
      "node.disk.iosched.queue.all": "key_f0a6f71b4c750764dcdb63fda394d3d1", 
      "node.net.int.packets.in.rate": "key_c55d7559d930e4c8815054eea880ead8", 
      "node.ifs.heat.link": "key_46a7657c411270b72009bf5cc16d3b4e", 
      "cluster.node.count.smartfailed": "key_cbc0298d23cea795f979014167f4a241", 
      "node.audit.cee.export.total": "key_338098706f21afeee23fe26b80fe96a3", 
      "cluster.net.ext.bytes.in.rate": "key_989e9f9fca79b2aac6068251b0d65459", 
      "node.cpu.intr.N": "key_66a34727d701e422e242238260ee623d", 
      "node.sensor.misc.count": "key_bc22078780c760f04d59ade32868dbf1", 
      "node.disk.name.N": "key_7d825814623bce8c6030b6a0ca3f7130", 
      "ifs.bytes.reserved.snapshots": "key_595f59d1525cb8266743aba7a60ad791", 
      "node.sensor.power.watts.poutps1": "key_8054cb6cd9d3478fd533322a72c41272", 
      "node.disk.xfers.rate.sum": "key_d702af7407ec9326e937dc6e977af371", 
      "node.net.int.errors.out.rate": "key_0637dbf97851505d07727259b7b34022", 
      "cluster.protostats.nfs4.total": "key_97c656f2ba950b14ec35fe5081958c0d", 
      "ifs.percent.free": "key_9002f10b7064e5a5afb6f2ef4588d43d", 
      "node.sensor.volt.volts.5vFPF": "key_769427af011c32798ac0415e75c06cb0", 
      "node.disk.xfer.size.out.all": "key_069a4f57aba94cef10a04ea63bc98c30", 
      "node.net.iface.packets.in.rate.N": "key_68e0dddc8f7eedd1bb6f57884f03db5f", 
      "cluster.disk.xfer.size.out": "key_3388ddced2abf7f380c85f00f29b12c3", 
      "node.ifs.cache.l3.meta.read.hit": "key_c9863250e7a5101bc7e07ce8960eb4a2", 
      "node.nfs.cache_stats.ccb.positive_hits": "key_f3eb77befb23d49af4ebd4a8c27191a2", 
      "node.sensor.altitude.names": "key_da5796c01b485c6da9cd31b2252ccddc", 
      "cluster.disk.busy": "key_8a66b51bb1106aced8cb14c5ab5a09ba", 
      "node.ifs.cache.l3.data.read.start": "key_3fd60b172abad5d84974a2ca5422094c", 
      "ifs.percent.used": "key_e5278ac39e465886ccd594c6401520f4", 
      "node.nfs.cache_stats.sec_principal.positive_hits": "key_3ab251d1b6818a20a6d58c022b99df8d", 
      "node.sensor.power.names": "key_e8795ab2132097cca8cf4239cacd4f9b", 
      "node.disk.iosched.latency.N": "key_b89061740b1edb723a17a3c1a8d5c9b1", 
      "node.ifs.bytes.deleted": "key_925321333900b69edba9c0c1aa2169c4", 
      "node.net.iface.internal.N": "key_ed45aa4de78376feb32dae26c2916ca9", 
      "node.disk.xfers.out.rate.all": "key_627c3c7d70b91aba7539978c1750ae9d", 
      "cluster.cpu.sys.max": "key_4f8457e383adb79464e26ad985c38c90", 
      "node.clientstats.proto.jobd": "key_081aa3ac1b3c1b72f7fe14248e710bf6", 
      "node.nfs.cache_stats.replay_tcp.maximum_size": "key_2705616da42ecc1f8dd75323880013ee", 
      "cluster.protostats.lsass_in": "key_d576a969f40476b7572ce834591df181", 
      "node.sensor.power.watts.N": "key_68544f0eaa62bc97cd31afd5c10de16f", 
      "node.ifs.cache.l1.data.prefetch.start": "key_78a6eb29039e48e98c98db2f97cbe6cc", 
      "node.sensor.misc.name.N": "key_edd3f2b9c540bfc48b31531c44dda6a1", 
      "node.disk.access.slow.N": "key_fdef6d89b5f39cefa9b91acab9fb3ee2", 
      "node.sensor.volt.volts.5vSFC": "key_78975f40d0900bb122e4493c4d6991e9", 
      "node.clientstats.proto.smb2": "key_2684768969a14b08c644a3da2aa1842f", 
      "node.clientstats.proto.smb1": "key_e2ab4073ef11efced5ef5025b8df5deb", 
      "cluster.protostats.hdfs.total": "key_efec52c272f87d44232772c4235c326a", 
      "node.ifs.heat.lock.total": "key_84612c07493531ad99205cd36e76ed5d", 
      "node.protostats.irp": "key_b0adf935a6e98b2283d85249a33e9216", 
      "node.nfs.cache_stats.replay_tcp.negative_hits": "key_ea78dccf609274debdc1b95ed7a430a9", 
      "node.sensor.volt.volts.3.3vSFC": "key_e0470cb1fc759783cb6b8f30153503a0", 
      "node.ip.stats": "key_f60f2bf4f021abfed36dee9dc6964114", 
      "cluster.protostats.nfs": "key_5d24df7543a74216123412fa7f6bdd21", 
      "node.disk.xfer.size.in.avg": "key_8d1098887efb7ba06bea5c89ce79ac5b", 
      "node.protostats.lsass_in.total": "key_7d76d8309107959eea62cfa3b97bb2e4", 
      "node.rp.stats": "key_b3c9a8663428c837f8300990aa02a266", 
      "node.clientstats.connected.ndmp": "key_75fed05c8c0bd7ea0041f2443724130c", 
      "node.sensor.fan.rpms.fps11": "key_5510f5ed2951326f47727b5541324be3", 
      "node.ifs.heat.setattr": "key_ef1d3bfcf7791bb204bea7b721d3f344", 
      "node.sensor.misc.data.Ocp1": "key_1e755f25982e85472db086ab4497278f", 
      "node.nvram.charge.status": "key_ce02403af979510df6947111e4fb84ce", 
      "node.sensor.misc.data.Ovp2": "key_c94fd260086bb71027a474fb3daff721", 
      "node.nfs.cache_stats.v4_dircache.timeout_period": "key_89396b9bd48e01197497521dd556dcda", 
      "node.nfs.cache_stats.ccb.current_size": "key_66545cfe66c9ae08c54ca2543a542378", 
      "node.cpu.idle.max": "key_51e801550a17c6330ee88ec7ee000f50", 
      "node.clientstats.proto.nfs": "key_251e69d1571af6800437577f20f15357", 
      "node.disk.count": "key_8e649bf66d13c6bc3a18ccf95b052cd3", 
      "ifs.ssd.percent.used": "key_df329c59878ded7dd8fa83b0430cbfcb", 
      "node.disk.xfers.out.rate.N": "key_85b44acd6dd077330bbbec41bd37b441", 
      "node.audit.events.logged.rate": "key_8fd6d3993448dbbff5c43d407e234377", 
      "cluster.node.count.readonly": "key_0a685031d838eb490b0f0c96f71d6102", 
      "node.sysfs.varcrash.percent.used": "key_ad2176538fc0bebfffd444cc1ee1bffe", 
      "node.sensor.curr.desc.N": "key_1570f0efd6e394b0fde5a813916fa740", 
      "node.ifs.heat.blocked.total": "key_6b433ce9677fa28d0dd49fa449a5d1d1", 
      "node.clientstats.active.jobd": "key_4aad385541b4001278be659de5623ca2", 
      "node.ifs.cache.l3.meta.read.start": "key_fb9aaf6fed268d891682077ba6bd88ca", 
      "node.nfs.cache_stats.replay_udp.timeout_count": "key_af6dbd781c6e83f55d96f3b12c25e4ae", 
      "cluster.cpu.user.avg": "key_01f5ad1e1dc8327472aaaa92ec87af4a", 
      "node.disk.iosched.queue.N": "key_55e155408fbf3be57935d2b2e5eede1a", 
      "node.ifs.ssd.bytes.free": "key_6ab4bbd7dda198b572402f49c85882d3", 
      "node.protostats.nlm": "key_afa445252decf563be6b795c8a586343", 
      "node.ifs.cache.l1.data.prefetch.hit": "key_5120eb168699a1c4220f22443849e3d2", 
      "node.ifs.rbm.throttle_events": "key_151f29b8cbfa2df7e1a819687cac214e", 
      "node.clientstats.proto.http": "key_2d81847990d1d3e9a2aafe4d9e2e540f", 
      "node.sensor.power.desc.N": "key_5ac51e41ea1452c61a1acd7819293205", 
      "node.boottime": "key_e9a780e7981c7d7b956a687039dac062", 
      "node.ifs.cache.l2.data.prefetch.hit": "key_3b05bdd05b0eb459fdb9c4217d3f07e6", 
      "node.ifs.heat.write.total": "key_71bbb171e7a21e1988ba3f107d39fcc0", 
      "cluster.net.int.bytes.in.rate": "key_b33c0dfd1adb76ccc25a47fe7fcfbe4d", 
      "cluster.disk.xfers.in.rate": "key_4c54e46b809267167f80160f2d439ae8", 
      "ifs.bytes.avail": "key_d3f5477359621a8998b568be204fd596", 
      "node.disk.bytes.out.rate.N": "key_5a1224cafbaa1e0a90b71217868e400a", 
      "node.sensor.fan.desc.N": "key_1014c6907f3ff179a8681aecd4fae6ae", 
      "node.nfs.cache_stats.replay_udp.misses": "key_a14f0c5bdefd38991b62aaf32af9dc92", 
      "node.sensor.temp.celsius.tSFC1": "key_1115d4c2c2cea58c7e83be7225dd00c1", 
      "node.sensor.power.watts.pinps2": "key_7b55aa0d92616967440276f7a76c9f17", 
      "node.sensor.power.watts.pinps1": "key_c76244ba98970bf0cd3f45fb78c01e9c", 
      "node.sysfs.varcrash.bytes.avail": "key_9013801d2e49bb9f68a7b27c14924d29", 
      "node.cpu.intr.max": "key_af710418c8110aeaef454a4d8e51602d", 
      "node.protostats.lsass_out": "key_3dec27fcaee39993df9637565442b190", 
      "cluster.cpu.nice.max": "key_088a3207d92083f54649e232653135c0", 
      "node.sensor.curr.count": "key_451a5e95beb55b3183eb5334b1bb005c", 
      "node.ifs.heat.unlink": "key_c217da477d53a2fcc344b644046629fb", 
      "node.sensor.temp.desc.N": "key_f5b517d5d258db0022458e3c3f64dea1", 
      "cluster.protostats.jobd.total": "key_9d5a0de14635fd87909d3c61e88f70ed", 
      "node.protostats.nfs.total": "key_8bf6b637522bcb9bfc75750e7d890f78", 
      "node.net.ext.errors.out.rate": "key_79e2d8cc5c2ed0e009c334c51c6d14d5", 
      "node.disk.bytes.in.rate.sum": "key_7586654597f0771820d1fed2e9326757", 
      "node.disk.xfers.in.rate.N": "key_9d80f40e4505d0e4778d69d92bfac022", 
      "node.disk.access.read.hist1.N": "key_319508734e7dcc9666c50c0b75ba0e13", 
      "node.sysfs.varcrash.percent.free": "key_7e4e2e656fa603129a6f16ac1075f44f", 
      "node.nfs.cache_stats.replay_udp.timeout_period": "key_a399afafdca5f1a975a1edc135500cd2", 
      "node.ifs.cache.l3.meta.prefetch.start": "key_73d00ad73eb259f084ed3d9c7b9e2210", 
      "node.disk.lnum.N": "key_9264b7dacd430e6799b8e46d636d3c75", 
      "node.disk.iosched.latency.all": "key_a493d9d690957de6c2179912284afd69", 
      "node.ifs.files.created": "key_1b90cea197a3d1c76ada704c0e4742be", 
      "node.ifm.cache.stats": "key_57bd27ed253d68e65315cd57e5639af2", 
      "node.sensor.volt.volts.vDimmCPU0": "key_62d94f41b6636194f28b6f8c879e43bc", 
      "node.sensor.volt.volts.vDimmCPU1": "key_0169d95d7f90d70bdea0b1ee8c4ecf08", 
      "node.nfs.cache_stats.sec_sid.timeout_count": "key_801163d47f8af905e20d110da42a0e5a", 
      "node.cpu.sys.max": "key_eabb19abd384a0c4ce1caaa97c70fb79", 
      "node.sensor.volt.volts.nv1Vcur": "key_9650808db22e9d339b01b91ef03ca78b", 
      "ifs.ssd.bytes.total": "key_52815b9515df37a7b135c539f1651e28", 
      "node.protostats.papi.total": "key_32666a242afb4c90d2f0998f5674ccf0", 
      "node.protostats.irp.total": "key_46e98e43ecab43e0701bf9385d39d440", 
      "node.sensor.power.watts.poutps2": "key_3ff90c3980970d82a2fbcd977135eb9a", 
      "node.nfs.cache_stats.replay_tcp.timeout_count": "key_04775d15f2da3347af6f1308184f9efd", 
      "node.disk.iosched.queue.avg": "key_54a411a19920e9ea341ab0fa3a0973a6", 
      "cluster.protostats.nfs3": "key_55738b0ffac14f6ffda3aa8fcfb9024a", 
      "node.sensor.volt.volts.3.3v": "key_4f3289ad0f8837d97a41245552f8ac4d", 
      "node.nfs.cache_stats.sec_username.timeout_count": "key_4614ba606cb3b60355e1e2e38ddb0f0f", 
      "cluster.net.ext.bytes.out.rate": "key_0d89f61eff5a2bc5f3ac85009fd214cc", 
      "node.clientstats.active.smb1": "key_78932998b6b2e4d231d2c70ac545ff13", 
      "node.clientstats.active.smb2": "key_676feec05fc1cc70ac753128ac1455d3", 
      "node.disk.busy.N": "key_e15fa9aaa62c6a571172a9f194ea82fb", 
      "cluster.protostats.siq": "key_0de49ba86b2719783decb1b3f02a5338", 
      "node.sensor.temp.celsius.tutCPU1": "key_c91a310972fd42c391c162463593b792", 
      "node.sensor.temp.celsius.tutCPU0": "key_6ea097a8b1d58e567c99063eabbbbf27", 
      "cluster.protostats.irp.total": "key_cd2a4814c8b48f173a8256b426fa93ba", 
      "node.ifs.cache.l1.data.read.wait": "key_596552242e4e4b0a59351282e1064751", 
      "node.ifs.ops.in": "key_5c9c2a3e96b7966a74eb1f8ae38ce89d", 
      "node.stf.cache.stats": "key_35100b5327732b2751a8876dd04ee596", 
      "node.sensor.temp.celsius.N": "key_30f41d65a62ed2a36f6a46e5da0596cc", 
      "node.audit.events.logged.total": "key_9410c6c75d93e6931995de4f56af3bef", 
      "node.ifs.files.removed": "key_5f8bca5f3f252d0683a6a79b003fbe0f", 
      "node.sensor.volt.volts.N": "key_98f3e8913bffbef2f9fe40e701edac02", 
      "node.sensor.misc.names": "key_2491b25f16c9ceafae3cb7791deeec55", 
      "node.protostats.smb2.total": "key_c5ef7e46f239c91a3b48057f5f1a94f8", 
      "node.disk.xfers.rate.avg": "key_8d51e2e23fb34c7bd9c31319d3b51bc6", 
      "node.disk.access.latency.avg": "key_0024daaf65a2a9af6ffb1d434de45330", 
      "node.nfs.cache_stats.replay_udp.maximum_size": "key_e2b89c9c4cfc6ac18e3a06cdf7b9dd54", 
      "node.sensor.misc.data.TempFail2": "key_882c965709e31ac81a67d2bdf61794f7", 
      "node.sensor.misc.data.TempFail1": "key_481aa5233bdac7454168e977a1184ed1", 
      "node.sysfs.root.percent.used": "key_afc73c9e0a923534783332101a24d104", 
      "node.disk.ifs.bytes.total.N": "key_4defc8c2ac0a18095b826628880930cb", 
      "node.clientstats.io.avg": "key_cfe92f526c6f42520e6cbff7faa1e5f5", 
      "node.ifs.heat.contended.total": "key_efb6873d0d459f263cba5b441b8346ac", 
      "cluster.protostats.cifs.total": "key_3236d286efbf72e71aaa53c02414553e", 
      "node.disk.xfers.in.rate.sum": "key_9c9932ddd2f168b0e85e5b64614eb1a1", 
      "node.disk.access.read.hist3.N": "key_8a38f22847044c487f6bfe746e8eb940", 
      "node.disk.type.N": "key_1a1d941fb1ae780ac5ec8214f6f8ee91", 
      "cluster.cpu.nice.avg": "key_c8ace20114e2ca8302bb5168d7d2f630", 
      "node.protostats.nfs4": "key_321a20e58ee2de1386e1b7f5ab481acd", 
      "node.sensor.curr.name.N": "key_aa772833b2e6b13ca11ec5b9501470d8", 
      "node.protostats.nfs3": "key_fce220615ea78f8081c3d034b0be7c3a", 
      "node.nfs.cache_stats.v4_dircache.positive_hits": "key_a3b44f5b03fe6423ffbfdfe81a52bcde", 
      "ifs.bytes.out.rate.max": "key_e6e8496b74e94a2a57b975f4a718743f", 
      "node.sysfs.root.bytes.total": "key_b208965d4537f023098b69166d171d0a", 
      "node.clientstats.active.cifs": "key_52b6290d742c262ed88f9126abe762aa", 
      "node.cpu.nice.N": "key_80aad75b4b845050626428b64db67821", 
      "node.ifs.bytes.in.rate.max": "key_208e3bd75ef3e083c69b6152280c1998", 
      "node.ifs.heat.setattr.total": "key_7a511137382904d413892a4eccf2dd79", 
      "cluster.protostats.smb2.total": "key_ebec38ae09db1fc6ac4308cec6a8fb47", 
      "node.malloc.stats": "key_312ef29a312c68c0cce596dc5327baa2", 
      "node.ifs.ssd.bytes.avail": "key_98bc69d1207ad52caf384dcb318bc290", 
      "node.clientstats.proto.siq": "key_769f56b0ccfdd25164e71a65b4943e68", 
      "ifs.bytes.out": "key_474ee24c9e25f32cb627c031ee82b5eb", 
      "node.clientstats.connected.hdfs": "key_ea219a8b5fe29cdf9e912b8fe5d1bf64", 
      "node.cpu.user.N": "key_bc908c54bf4e6ca817cb8ef20409bd06", 
      "node.clientstats.proto.cifs": "key_d9692b539261cbecbe20945826a39894", 
      "node.disk.xfer.size.out.avg": "key_1d39ba690eace23ab52aa9898a9c31c6", 
      "node.protostats.ftp": "key_1451cddf417dccc61fabb7aa9b78067a", 
      "cluster.dedupe.total.physical.bytes": "key_259057614ad9912d2a431b8eea8c7750", 
      "node.clientstats.active.nfs4": "key_ef166b45581fe5144fa733346cfd9101", 
      "node.nfs.cache_stats.sec_sid.current_size": "key_848eeae36e7b8c02670be94bee86cc39", 
      "node.net.int.packets.out.rate": "key_b0bd28fc2408abe9b28bf39e85dcd2c3", 
      "node.clientstats.active.ftp": "key_a07c8bb4f4f64d80c6be234f39a5bced", 
      "node.ifs.heat.deadlocked.total": "key_3915b8bfaf2734283a73d613962c6c08", 
      "node.sensor.power.name.N": "key_6a3c712099e1249f27897ee95f6ff56d", 
      "node.sysfs.varcrash.bytes.total": "key_89eeb62e5aad3a0e3b7975f7cdcdd3db", 
      "node.clientstats.connected.papi": "key_8d00a0f3dcd76bf938d52fa2f3f1b54a", 
      "cluster.node.list.readonly": "key_5442601d7520cd9e433ac2ebec4b207b", 
      "node.disk.access.unfilt.write.hist4.N": "key_6a27511a082883cabb9af147fcb1d144", 
      "cluster.net.ext.errors.out.rate": "key_a397fe15803fd40855f57d4b1af78854", 
      "node.disk.xfers.rate.all": "key_cfb1de3e0cc802e7406bd9943bc07692", 
      "node.sensor.volt.volts.5vSB": "key_00b54fa50c34bc193b6c217acc45a397", 
      "node.disk.access.unfilt.write.hist2.N": "key_4ffa845100e3abacc5ec734985f93460", 
      "cluster.dedupe.logical.saved.bytes": "key_23438eb6967b72244ac39c02f456c974", 
      "node.ifs.bytes.in": "key_ca2e76fee82890cfcf7ebcad8fc3ce8b", 
      "node.tcp.stats": "key_5c06ecea32057a575e9be8c55dfd3702", 
      "node.disk.bytes.out.rate.sum": "key_3332fc67ded9835fe25e07bd76eca5c4", 
      "node.sensor.misc.data.Ocp2": "key_a0305eb6034b467ce0c3ac74a3c0f33c", 
      "ifs.bytes.in.rate.max": "key_e6f10190cab60c218b6b30e0b4b75689", 
      "node.load.15min": "key_761c45a8240d680d0c2b9ab86e2be813", 
      "node.sensor.volt.volts.nv2Vcur": "key_afc2e2a5c4f0f591df37e84530b64009", 
      "node.sysfs.root.bytes.free": "key_5d9627e8ae971d6a38598e9f1f6fdfd6", 
      "cluster.protostats.nfs.total": "key_fae9f422e6339daa68f87a9e1475d57f", 
      "node.protostats.cifs": "key_ece96946d8254d02258b4b3c3a190390", 
      "node.nfs.cache_stats.v4_dircache.timeout_count": "key_fc043b0b53222f5013debff54b76a2c7", 
      "node.disk.access.unfilt.read.hist4.N": "key_590fde17d234ac65ec858d4e2e2f1416", 
      "node.clientstats.connected.nfs": "key_91809832f0632942baa407089d9c49bc", 
      "cluster.group": "key_8ee8132e6efb8442cea54c10a8b58859", 
      "node.sensor.volt.desc.N": "key_3a60e597ff28c2043fd3a462c01a2601", 
      "node.disk.ifs.bytes.free.N": "key_51983a816c0c45eba1cfc81028081369", 
      "node.nfs.cache_stats.sec_username.positive_hits": "key_8065676340782e4a86bb044560c32ce0", 
      "node.sensor.temp.celsius.tFP": "key_f0e584effa3c0e2bd86937f2e079c57b", 
      "node.clientstats.active.hdfs": "key_b09820fad0af47422eed84f916926960", 
      "node.dfm.cache.stats": "key_52d56bbc070e5dee6eef0b828972ae01", 
      "node.ifs.cache.l3.data.read.miss": "key_85e6094d1e2b04d993d59ac6e63891d7", 
      "node.health": "key_a33334030bd30183af168eea0bbd2fda", 
      "node.ifs.cache.l2.meta.read.wait": "key_ef074e2ace94b0119e6cd0a51dbeea09", 
      "node.ifs.cache.l1.data.read.start": "key_70319b6fd3d6d112a9701131e442423f", 
      "node.uptime": "key_78e568835cacbfa74f3d5704de02ef0e", 
      "node.sensor.fan.rpms.fps21": "key_84529e5537b0a397d032164d8dbe8b2f", 
      "node.sensor.curr.names": "key_d6ea3867e6c913fd03e01010553011d9", 
      "cluster.node.count.down": "key_a616da80216f2aaa03b45906dd708a73", 
      "node.cpu.sys.N": "key_a6192327842b31b983072162707b9f79", 
      "node.nfs.basic_stats": "key_61a2287dbbf46a5c0cf10f0315500b31", 
      "node.ifs.cache.l1.meta.read.hit": "key_d03c765c3ae149d52fede3963ee8e9d4", 
      "node.nfs.cache_stats.sec_principal.current_size": "key_1a5390911cfbc2a67894deb9d9fbf7c4", 
      "node.sensor.temp.names": "key_317b8f4c1cdf941629051f47da935465", 
      "node.protostats.lsass_in": "key_75f101f344e7f8badf72ec19e1e4d915", 
      "node.ifs.cache.l2.data.read.start": "key_c29bb38e410e0c7257eefeef16662b26", 
      "node.ifs.bytes.used": "key_dee37539fb326c34dca131c3be58fce3", 
      "node.memory.cache": "key_c24fcae9a25c35f624acd41a9c774caf", 
      "node.net.iface.bytes.in.rate.N": "key_fc5c5d1cc826193a04dfdd4c43f541bb", 
      "node.nfs.cache_stats.v4_dircache.maximum_size": "key_83f2187e598630453811b864e6b75c38", 
      "node.sensor.volt.names": "key_7a7e9b3fd68b262da47cf9a41da27eca", 
      "node.memory.free": "key_078e5a673d4e7f524db46ba5cb809dce", 
      "node.disk.access.slow.sum": "key_9827721a4c017e008e92331964829e98", 
      "node.protostats.lsass_out.total": "key_2c4e90987d3a86e666b6f2da081ce746", 
      "node.clientstats.active.siq": "key_37abae056e94738b80e455b5f6c97003", 
      "node.net.int.bytes.in.rate": "key_a75a6e2db8c5e824ec9f1ba39c5e6dc2", 
      "node.ifs.cache.l1.meta.read.wait": "key_59a176a2d24ac6d9c2d8fd44d0c19135", 
      "node.disk.access.write.hist5.N": "key_c742b70b8a483aeec6db048e90e230ee", 
      "cluster.net.ext.errors.in.rate": "key_5cd074e3f1144ef1bfebf9c32b31f006", 
      "node.sensor.misc.data.FanFail1": "key_99018a288cbba68b11895b3c42731842", 
      "node.sensor.misc.data.FanFail2": "key_b03c4f174f6e71c01d531ace367bb8a2", 
      "node.disk.access.unfilt.read.hist0.N": "key_9a5b303ad68af2b08f50fd0d983b9490", 
      "node.process.count": "key_07a3836f813a020728a9e64c18d0ae13", 
      "node.protostats.siq": "key_f3b1cb17980b3fd83bcaa8ca8174a221", 
      "node.nfs.cache_stats.sec_principal.maximum_size": "key_4c923a034938bbf5b1703a2fc3035ea9", 
      "cluster.protostats.smb2": "key_230a764b9fe7ff7eea369f5148236979", 
      "cluster.net.int.packets.out.rate": "key_05129225859f0356111d79b016bfbd26", 
      "cluster.protostats.smb1": "key_55a6f3bb8eee78c379eff7b74fe70cae", 
      "node.disk.access.unfilt.read.hist2.N": "key_b96eb86afce16df115cf7c58192ec5e4", 
      "node.disk.access.unfilt.write.hist6.N": "key_83730e321fc3364844a1885441c5373b", 
      "node.disk.access.unfilt.write.hist0.N": "key_d27f7673128e83939bb739f30bf718d6", 
      "node.clientstats.active.papi": "key_f2db6649d06d7514f407d8ec0d5b0a89", 
      "node.sysfs.varcrash.bytes.used": "key_bff24b33f2aca4105eb500876a45979a", 
      "cluster.dedupe.logical.deduplicated.bytes": "key_9d4c15cebf402f0bfe3c40dc40518902", 
      "ifs.ssd.percent.free": "key_190a08f77eefe5c8d150dbfc0c6b1ad3", 
      "node.net.iface.count": "key_828787ad4fc876a0e1c0e25f2e7e1e48", 
      "node.protostats.nlm.total": "key_64c7896a7ae976eac21ec5a58b338cdb", 
      "node.cpu.throttling": "key_1ae59bd122ee714cef4a002e04354c28", 
      "node.disk.access.unfilt.read.hist6.N": "key_b923ddae10dd58c4e5569e5769edce7f", 
      "node.disk.bytes.in.rate.avg": "key_0baa827c83c0db7341590467752b786d", 
      "node.clientstats.active.nlm": "key_121c3ad4777707914a9770b333809f22"
    }, 
    "categories": {
      "System-TCP/IP": "cat_fe7e6426338c7757d563cec4883892d6", 
      "File System-Cluster-Other": "cat_8432808aa656666a79f2905a86210af0", 
      "Network": "cat_eec89088ee408b80387155272b113256", 
      "Deduplication": "cat_83f45cad5e6f535ff10e564a526baad0", 
      "Job Engine": "cat_aa6591610b53847bfb4e19e53c0b4a05", 
      "File System-Cluster-Capacity": "cat_80ae823eafa0293fceb5633dce1b0c95", 
      "File System-Node": "cat_e8c520a00de48591f716f0ff4b39714c", 
      "Cache": "cat_ab0cf104f39708eabd07b8cb67e149ba", 
      "Network-Internal": "cat_38edf5766d2e85e015ba44ffcda83fee", 
      "System": "cat_a45da96d0bf6575970f2d27af22be28a", 
      "File System-Node-Capacity": "cat_50c7cb3c3eddb202318c181ba550341d", 
      "Protocols-Cluster": "cat_b8dfde7a72357f7ad527aaf7884cea4b", 
      "Network-External": "cat_eeaa49c5a616660378ed138a86f4f547", 
      "Sensors-Temperature": "cat_3cb5ea46a2a20a4c306fbae3525f6f9b", 
      "Cache-Other": "cat_1d0011432e7200412ffa46be0b0b0313", 
      "CPU": "cat_2b55387dd066c5bac646ac61543d152d", 
      "File System-Node-Other": "cat_d695947fb41c1604b68dcfb1a3349c33", 
      "System-NVRAM": "cat_638ee15086e7895786abea515956ff0b", 
      "System-Memory and Internal Cache Usage": "cat_67575a4f973dd31203fd040e84c7649b", 
      "Cache-L1 Cache": "cat_8390487b9daa55544979ed4d76acabdb", 
      "Sensors-Power": "cat_58727c97c1eac47a7d8fc28a92ce1e46", 
      "Client-Active": "cat_44eacd3e5b75673b354e86126590ebf3", 
      "Sensors-Fans": "cat_eedbdb92ec8fefad99423be76b7daba5", 
      "File System": "cat_6c202452e44c42e323204da2a3a3c24a", 
      "System-Cluster Info and Status": "cat_2a0ab00a42d2a072ca7e28c816cf02cc", 
      "Client-Connected": "cat_607bce93fa693ff187b5350c862bf55c", 
      "Sensors": "cat_af29aa178ae43211319e28f627e96590", 
      "Uncategorized": "cat_0d015d96f63a8c12d96b8399482b593f", 
      "Sensors-Current (Amperage)": "cat_c02b521d88738890cb562647fced64b4", 
      "Protocols": "cat_9985b4390c40137573e6da05caf85874", 
      "Audit": "cat_eda63b570db82e05c2fd7b5f0c3bb20f", 
      "Protocols-Node": "cat_754ea0bb55fc01d6fba5589e75db64a2", 
      "System-Load": "cat_8619669fe79f5ff640ae182576e64297", 
      "Client-Top-N Clients": "cat_7958c591ae6e36460ebaf10df0624b45", 
      "Client": "cat_577d7068826de925ea2aec01dbadf5e4", 
      "CPU-Cluster": "cat_d6c51a268feacddb15fe622f804ecfb2", 
      "Network-Internal-Node": "cat_ab0f7ac71926a2bdc7a53f62f017477c", 
      "File System-Node-Throughput": "cat_9ce24890bcf290ff27615ebb6e04cdb5", 
      "Client-Disk IO": "cat_a8a5768b812299fc5908a024bd59d719", 
      "Network-External-Cluster": "cat_c0eaa18cbe2b7359618a45f352b56a07", 
      "File System-Node-File Heat": "cat_3762e1da1851babf50a7246253467c47", 
      "CPU-Node": "cat_d4074f6205c2fa0bba44cf48d28acdc6", 
      "System-Node Info and Status": "cat_d9fc7567bd0919c140363b336dbcace7", 
      "Network-Internal-Cluster": "cat_f5dced3568ab4d01ed65936bff55e500", 
      "Disk-Cluster": "cat_76bc1515bfa72e3d5e941ce372aace03", 
      "File System-Cluster-Throughput": "cat_2a722d62cd9f5e10adedef116d2c2e99", 
      "File System-Cluster": "cat_1228ebb984fbed3910a2ae681adfeec1", 
      "Sensors-Voltage": "cat_488d033978b0706646a52f87715db489", 
      "Sensors-Altitude": "cat_ee99345921c96ce954ada6b9f101540c", 
      "Cache-L2 Cache": "cat_250e3538ec2bd5cbcb8eceeaa01a3ef8", 
      "System-System Volumes": "cat_01764b3f29a19e31af2e8250ed10a869", 
      "Cache-L3 Cache": "cat_fd967d8ddc38987e32b9080ea782ea74", 
      "System-NFS Operational": "cat_bdfbf6b40d91fedfb6ea07f4608f60d7", 
      "Disk": "cat_380dbc8d9d2c8a17f6ebb0b2c62d3e85", 
      "Disk-Node": "cat_35fb7936b1427fb839dd86838b43479b", 
      "Network-External-Node": "cat_55b35832f3c7c674726c87b344252e12", 
      "Sensors-Miscellaneous": "cat_8eff98cb7b90e1b2adb9a40d8c876837"
    }
  }, 
  "categories": {
    "Audit": {
      "keys": [
        "node.audit.events.logged.total", 
        "node.audit.cee.export.rate", 
        "node.audit.events.logged.rate", 
        "node.audit.cee.export.total"
      ], 
      "description": "Statistics related to the auditing system", 
      "categories": {}
    }, 
    "Network": {
      "keys": [], 
      "description": "Network statistics for both internal (back-end) and external (front-end) network.", 
      "categories": {
        "Internal": {
          "keys": [], 
          "description": "Internal (back-end) network statistics.", 
          "categories": {
            "Node": {
              "keys": [
                "node.net.iface.errors.in.rate.N", 
                "node.net.iface.errors.out.rate.N", 
                "node.net.iface.bytes.out.rate.N", 
                "node.net.iface.packets.in.rate.N", 
                "node.net.int.bytes.in.rate", 
                "node.net.iface.packets.out.rate.N", 
                "node.net.int.bytes.out.rate", 
                "node.net.int.errors.in.rate", 
                "node.net.iface.count", 
                "node.net.iface.status.N", 
                "node.net.iface.name.N", 
                "node.net.iface.internal.N", 
                "node.net.int.packets.out.rate", 
                "node.net.iface.bytes.in.rate.N", 
                "node.net.int.packets.in.rate", 
                "node.net.int.errors.out.rate"
              ], 
              "description": "Internal NIC counters by Node", 
              "categories": {}
            }, 
            "Cluster": {
              "keys": [
                "cluster.net.int.errors.out.rate", 
                "cluster.net.int.packets.in.rate", 
                "cluster.net.int.errors.in.rate", 
                "cluster.net.int.bytes.out.rate", 
                "cluster.net.int.bytes.in.rate", 
                "cluster.net.int.packets.out.rate"
              ], 
              "description": "Internal NIC counters by Cluster", 
              "categories": {}
            }
          }
        }, 
        "External": {
          "keys": [], 
          "description": "External (front-end) network statistics.", 
          "categories": {
            "Node": {
              "keys": [
                "node.net.ext.packets.out.rate", 
                "node.net.ext.bytes.in.rate", 
                "node.net.ext.packets.in.rate", 
                "node.net.ext.bytes.out.rate", 
                "node.net.ext.errors.out.rate", 
                "node.net.ext.errors.in.rate"
              ], 
              "description": "External NIC counters by Node", 
              "categories": {}
            }, 
            "Cluster": {
              "keys": [
                "cluster.net.ext.packets.in.rate", 
                "cluster.net.ext.bytes.out.rate", 
                "cluster.net.ext.errors.in.rate", 
                "cluster.net.ext.packets.out.rate", 
                "cluster.net.ext.errors.out.rate", 
                "cluster.net.ext.bytes.in.rate"
              ], 
              "description": "External NIC counters by Cluster", 
              "categories": {}
            }
          }
        }
      }
    }, 
    "Deduplication": {
      "keys": [
        "cluster.dedupe.estimated.deduplicated.bytes", 
        "cluster.dedupe.total.physical.bytes", 
        "cluster.dedupe.estimated.saved.bytes", 
        "cluster.dedupe.total.used.bytes", 
        "cluster.dedupe.logical.saved.bytes", 
        "cluster.dedupe.logical.deduplicated.bytes"
      ], 
      "description": "Statistics related to the file deduplication process.", 
      "categories": {}
    }, 
    "Job Engine": {
      "keys": [
        "node.je.num_workers"
      ], 
      "description": "Job engine statistics.", 
      "categories": {}
    }, 
    "Cache": {
      "keys": [], 
      "description": "Statistics related to L1, L2, and L3 Caches.", 
      "categories": {
        "L3 Cache": {
          "keys": [
            "node.ifs.cache.l3.data.prefetch.start", 
            "node.ifs.cache.l3.meta.read.hit", 
            "node.ifs.cache.l3.data.read.miss", 
            "node.ifs.cache.l3.data.read.wait", 
            "node.ifs.cache.l3.data.prefetch.hit", 
            "node.ifs.cache.l3.data.read.start", 
            "node.ifs.cache.l3.data.read.hit", 
            "node.ifs.cache.l3.meta.prefetch.start", 
            "node.ifs.cache.l3.meta.read.miss", 
            "node.ifs.cache.l3.meta.prefetch.hit", 
            "node.ifs.cache.l3.meta.read.wait", 
            "node.ifs.cache.l3.meta.read.start"
          ], 
          "description": "L3 cache stats", 
          "categories": {}
        }, 
        "Other": {
          "keys": [
            "node.ifs.cache", 
            "node.ifs.cache.oldest_page_age", 
            "node.ifs.cache.clients", 
            "node.ifs.cache.stats"
          ], 
          "description": "Miscelaneous Other Cache Stats", 
          "categories": {}
        }, 
        "L2 Cache": {
          "keys": [
            "node.ifs.cache.l2.meta.read.start", 
            "node.ifs.cache.l2.meta.read.miss", 
            "node.ifs.cache.l2.meta.read.wait", 
            "node.ifs.cache.l2.data.prefetch.start", 
            "node.ifs.cache.l2.prefetch.miss", 
            "node.ifs.cache.l2.meta.prefetch.start", 
            "node.ifs.cache.l2.data.read.hit", 
            "node.ifs.cache.l2.data.read.wait", 
            "node.ifs.cache.l2.data.read.miss", 
            "node.ifs.cache.l2.data.prefetch.hit", 
            "node.ifs.cache.l2.meta.prefetch.hit", 
            "node.ifs.cache.l2.meta.read.hit", 
            "node.ifs.cache.l2.data.read.start"
          ], 
          "description": "L2 cache stats", 
          "categories": {}
        }, 
        "L1 Cache": {
          "keys": [
            "node.ifs.cache.l1.meta.read.miss", 
            "node.ifs.cache.l1.data.read.miss", 
            "node.ifs.cache.l1.meta.prefetch.start", 
            "node.ifs.cache.l1.data.read.wait", 
            "node.ifs.cache.l1.meta.prefetch.hit", 
            "node.ifs.cache.l1.meta.read.wait", 
            "node.ifs.cache.l1.data.read.hit", 
            "node.ifs.cache.l1.prefetch.miss", 
            "node.ifs.cache.l1.meta.read.start", 
            "node.ifs.cache.l1.data.prefetch.start", 
            "node.ifs.cache.l1.meta.read.hit", 
            "node.ifs.cache.l1.data.read.start", 
            "node.ifs.cache.l1.data.prefetch.hit"
          ], 
          "description": "L1 cache stats", 
          "categories": {}
        }
      }
    }, 
    "System": {
      "keys": [], 
      "description": "OneFS and System level statistics", 
      "categories": {
        "Load": {
          "keys": [
            "node.load.5min", 
            "node.load.1min", 
            "node.load.15min"
          ], 
          "description": "System load averages", 
          "categories": {}
        }, 
        "Node Info and Status": {
          "keys": [
            "cluster.node.list.diskless", 
            "cluster.node.count.diskless", 
            "node.health", 
            "cluster.node.count.down", 
            "cluster.node.count.all", 
            "cluster.node.list.up", 
            "node.diskless", 
            "cluster.node.count.readonly", 
            "cluster.node.list.all", 
            "cluster.node.count.up", 
            "cluster.node.list.smartfailed", 
            "node.thread.stats", 
            "cluster.node.count.smartfailed", 
            "cluster.node.list.readonly", 
            "node.uptime", 
            "node.process.count", 
            "node.open.files", 
            "node.boottime", 
            "cluster.node.list.down"
          ], 
          "description": "Cluster node status, counts, and info statistics", 
          "categories": {}
        }, 
        "TCP/IP": {
          "keys": [
            "node.ip.stats", 
            "node.tcp.conn.stats", 
            "node.tcp.stats"
          ], 
          "description": "TCP and IP statistics", 
          "categories": {}
        }, 
        "System Volumes": {
          "keys": [
            "node.sysfs.var.percent.used", 
            "node.sysfs.varcrash.percent.free", 
            "node.sysfs.root.bytes.total", 
            "node.sysfs.varcrash.percent.avail", 
            "node.sysfs.root.percent.avail", 
            "node.sysfs.varcrash.bytes.free", 
            "node.sysfs.var.percent.avail", 
            "node.sysfs.var.percent.free", 
            "node.sysfs.root.bytes.avail", 
            "node.sysfs.root.bytes.used", 
            "node.sysfs.varcrash.percent.used", 
            "node.sysfs.var.bytes.used", 
            "node.sysfs.var.bytes.avail", 
            "node.sysfs.root.percent.free", 
            "node.sysfs.var.bytes.free", 
            "node.sysfs.root.bytes.free", 
            "node.sysfs.var.bytes.total", 
            "node.sysfs.varcrash.bytes.avail", 
            "node.sysfs.varcrash.bytes.total", 
            "node.sysfs.root.percent.used", 
            "node.sysfs.varcrash.bytes.used"
          ], 
          "description": "Statistics related to the root OS filesystem volumes on each node.", 
          "categories": {}
        }, 
        "NVRAM": {
          "keys": [
            "node.nvram.battery.status.N", 
            "node.nvram.charge.status"
          ], 
          "description": "Statistics on the NVRAM hardware and system", 
          "categories": {}
        }, 
        "NFS Operational": {
          "keys": [
            "node.nfs.cache_stats.ccb.negative_hits", 
            "node.nfs.cache_stats.replay_udp.misses", 
            "node.nfs.cache_stats.replay_tcp.misses", 
            "node.nfs.cache_stats.replay_udp.current_size", 
            "node.nfs.cache_stats.sec_principal.timeout_period", 
            "node.nfs.cache_stats.v4_dircache.timeout_period", 
            "node.nfs.cache_stats.replay_udp.timeout_count", 
            "node.nfs.cache_stats.sec_sid.timeout_count", 
            "node.nfs.cache_stats.v4_dircache.timeout_count", 
            "node.nfs.cache_stats.sec_sid.current_size", 
            "node.nfs.cache_stats.sec_username.positive_hits", 
            "node.nfs.cache_stats.v4_dircache.maximum_size", 
            "node.nfs.cache_stats.replay_tcp.positive_hits", 
            "node.nfs.cache_stats.v4_dircache.current_size", 
            "node.nfs.cache_stats.ccb.current_size", 
            "node.nfs.v4_error_stats", 
            "node.nfs.cache_stats.replay_udp.timeout_period", 
            "node.nfs.cache_stats.ccb.maximum_size", 
            "node.nfs.cache_stats.sec_principal.positive_hits", 
            "node.nfs.cache_stats.sec_username.timeout_count", 
            "node.nfs.cache_stats.replay_udp.negative_hits", 
            "node.nfs.cache_stats.replay_udp.maximum_size", 
            "node.nfs.cache_stats.sec_sid.negative_hits", 
            "node.nfs.cache_stats.ccb.misses", 
            "node.nfs.cache_stats.v4_dircache.misses", 
            "node.nfs.cache_stats.sec_username.misses", 
            "node.nfs.cache_stats.replay_udp.positive_hits", 
            "node.nfs.cache_stats.sec_sid.maximum_size", 
            "node.nfs.v3_error_stats", 
            "node.nfs.cache_stats.v4_dircache.negative_hits", 
            "node.nfs.cache_stats.sec_principal.negative_hits", 
            "node.nfs.cache_stats.sec_username.current_size", 
            "node.nfs.optime_stats", 
            "node.nfs.cache_stats.ccb.timeout_period", 
            "node.nfs.cache_stats.replay_tcp.negative_hits", 
            "node.nfs.cache_stats.ccb.timeout_count", 
            "node.nfs.cache_stats.sec_sid.misses", 
            "node.nfs.cache_stats.replay_tcp.maximum_size", 
            "node.nfs.cache_stats.replay_tcp.timeout_count", 
            "node.nfs.cache_stats.sec_username.timeout_period", 
            "node.nfs.cache_stats.replay_tcp.timeout_period", 
            "node.nfs.cache_stats.v4_dircache.positive_hits", 
            "node.nfs.cache_stats.sec_principal.maximum_size", 
            "node.nfs.cache_stats.sec_sid.positive_hits", 
            "node.nfs.cache_stats.sec_username.negative_hits", 
            "node.nfs.cache_stats.sec_principal.timeout_count", 
            "node.nfs.cache_stats.ccb.positive_hits", 
            "node.nfs.basic_stats", 
            "node.nfs.cache_stats.replay_tcp.current_size", 
            "node.nfs.cache_stats.sec_principal.current_size", 
            "node.nfs.cache_stats.sec_sid.timeout_period", 
            "node.nfs.cache_stats.sec_username.maximum_size", 
            "node.nfs.cache_stats", 
            "node.nfs.cache_stats.sec_principal.misses"
          ], 
          "description": "Low level NFS protocol operational statistics.", 
          "categories": {}
        }, 
        "Memory and Internal Cache Usage": {
          "keys": [
            "node.memory.used", 
            "node.uma.stats", 
            "node.memory.free", 
            "node.mds.cache.stats", 
            "node.ifm.cache.stats", 
            "node.stf.cache.stats", 
            "node.dfm.cache.stats", 
            "node.memory.cache", 
            "node.rp.stats", 
            "node.malloc.stats"
          ], 
          "description": "System memory usage and allocation statistics", 
          "categories": {}
        }, 
        "Cluster Info and Status": {
          "keys": [
            "cluster.group", 
            "cluster.alert.info", 
            "cluster.health"
          ], 
          "description": "Cluster-wide health and alerts", 
          "categories": {}
        }
      }
    }, 
    "File System": {
      "keys": [], 
      "description": "OneFS File System Statistics.", 
      "categories": {
        "Node": {
          "keys": [], 
          "description": "File system statistics for each node in the cluster.", 
          "categories": {
            "Capacity": {
              "keys": [
                "node.ifs.ssd.bytes.used", 
                "node.ifs.bytes.free", 
                "node.ifs.ssd.bytes.free", 
                "node.ifs.bytes.used", 
                "node.ifs.bytes.total", 
                "node.ifs.ssd.bytes.avail", 
                "node.ifs.bytes.deleted.rate", 
                "node.ifs.ssd.bytes.total", 
                "node.ifs.bytes.deleted"
              ], 
              "description": "File system capacity by node.", 
              "categories": {}
            }, 
            "Other": {
              "keys": [
                "node.ifs.ops.out.rate", 
                "node.ifs.num.lookups", 
                "node.ifs.rbm.throttle_events", 
                "node.ifs.files.created.rate", 
                "node.ifs.rbm.pressure_count", 
                "node.ifs.rbm.pressure_count.rate", 
                "node.ifs.ops.in.rate", 
                "node.ifs.rbm.throttle_events.rate", 
                "node.ifs.files.removed.rate", 
                "node.ifs.ops.out", 
                "node.ifs.files.created", 
                "node.ifs.num.lookups.rate", 
                "node.ifs.ops.in", 
                "node.ifs.files.removed"
              ], 
              "description": "Other miscelaneous node file system stats", 
              "categories": {}
            }, 
            "Throughput": {
              "keys": [
                "node.ifs.bytes.in", 
                "node.ifs.bytes.out.rate", 
                "node.ifs.bytes.in.rate", 
                "node.ifs.bytes.in.rate.max", 
                "node.ifs.bytes.out", 
                "node.ifs.bytes.out.rate.max"
              ], 
              "description": "File system throughput by node.", 
              "categories": {}
            }, 
            "File Heat": {
              "keys": [
                "node.ifs.heat.link.total", 
                "node.ifs.heat.write", 
                "node.ifs.heat.blocked.total", 
                "node.ifs.heat.read", 
                "node.ifs.heat.deadlocked.total", 
                "node.ifs.heat.blocked", 
                "node.ifs.heat.read.total", 
                "node.ifs.heat.contended", 
                "node.ifs.heat.rename.total", 
                "node.ifs.heat.lock.total", 
                "node.ifs.heat.unlink", 
                "node.ifs.heat.lock", 
                "node.ifs.heat.link", 
                "node.ifs.heat.write.total", 
                "node.ifs.heat.setattr.total", 
                "node.ifs.heat.lookup.total", 
                "node.ifs.heat.lookup", 
                "node.ifs.heat.getattr", 
                "node.ifs.heat.getattr.total", 
                "node.ifs.heat.unlink.total", 
                "node.ifs.heat.deadlocked", 
                "node.ifs.heat.setattr", 
                "node.ifs.heat.contended.total", 
                "node.ifs.heat.rename"
              ], 
              "description": "File system event rates by file.", 
              "categories": {}
            }
          }
        }, 
        "Cluster": {
          "keys": [], 
          "description": "File system statistics averaged across all nodes in the cluster.", 
          "categories": {
            "Capacity": {
              "keys": [
                "ifs.bytes.reserved.snapshots", 
                "ifs.bytes.total", 
                "ifs.bytes.used", 
                "ifs.bytes.avail", 
                "ifs.bytes.free", 
                "ifs.ssd.bytes.free", 
                "ifs.bytes.reserved.drive", 
                "ifs.ssd.bytes.total", 
                "ifs.ssd.bytes.used", 
                "ifs.ssd.bytes.avail"
              ], 
              "description": "Cluster capacity.", 
              "categories": {}
            }, 
            "Other": {
              "keys": [
                "ifs.percent.used", 
                "ifs.ssd.percent.free", 
                "ifs.percent.avail", 
                "ifs.ops.in", 
                "ifs.ops.in.rate", 
                "ifs.ops.out.rate", 
                "ifs.percent.free", 
                "ifs.ops.out", 
                "ifs.ssd.percent.used"
              ], 
              "description": "Other miscelaneous cluster file system stats.", 
              "categories": {}
            }, 
            "Throughput": {
              "keys": [
                "ifs.bytes.out.rate.max", 
                "ifs.bytes.out.rate", 
                "ifs.bytes.out", 
                "ifs.bytes.in", 
                "ifs.bytes.in.rate", 
                "ifs.bytes.in.rate.max"
              ], 
              "description": "File system throughput by cluster.", 
              "categories": {}
            }
          }
        }
      }
    }, 
    "Client": {
      "keys": [], 
      "description": "Client statistics showing per-client protocol activity.", 
      "categories": {
        "Active": {
          "keys": [
            "node.clientstats.active.jobd", 
            "node.clientstats.active.nfs4", 
            "node.clientstats.active.ftp", 
            "node.clientstats.active.http", 
            "node.clientstats.active.lsass_out", 
            "node.clientstats.active.hdfs", 
            "node.clientstats.active.nfs", 
            "node.clientstats.active.siq", 
            "node.clientstats.active.papi", 
            "node.clientstats.active.smb1", 
            "node.clientstats.active.nlm", 
            "node.clientstats.active.nfs3", 
            "node.clientstats.active.irp", 
            "node.clientstats.active.cifs", 
            "node.clientstats.active.smb2"
          ], 
          "description": "Active client counts per protocol and node.", 
          "categories": {}
        }, 
        "Disk IO": {
          "keys": [
            "node.clientstats.io.avg", 
            "node.clientstats.io"
          ], 
          "description": "Per client per disk IO Statistics.", 
          "categories": {}
        }, 
        "Connected": {
          "keys": [
            "node.clientstats.connected.siq", 
            "node.clientstats.connected.papi", 
            "node.clientstats.connected.cifs", 
            "node.clientstats.connected.ftp", 
            "node.clientstats.connected.hdfs", 
            "node.clientstats.connected.http", 
            "node.clientstats.connected.nfs", 
            "node.clientstats.connected.smb", 
            "node.clientstats.connected.nlm", 
            "node.clientstats.connected.ndmp"
          ], 
          "description": "Connected client counts per protocol and node.", 
          "categories": {}
        }, 
        "Top-N Clients": {
          "keys": [
            "node.clientstats.proto.nfs4", 
            "node.clientstats.proto.irp", 
            "node.clientstats.proto.nfs3", 
            "node.clientstats.proto.hdfs", 
            "node.clientstats.proto.smb2", 
            "node.clientstats.proto.smb1", 
            "node.clientstats.proto.cifs", 
            "node.clientstats.proto.lsass_out", 
            "node.clientstats.proto.nlm", 
            "node.clientstats.proto.http", 
            "node.clientstats.proto.papi", 
            "node.clientstats.proto.ftp", 
            "node.clientstats.proto.siq", 
            "node.clientstats.proto.nfs", 
            "node.clientstats.proto.jobd"
          ], 
          "description": "Top-N individual client statistics per protocol and node.", 
          "categories": {}
        }
      }
    }, 
    "Sensors": {
      "keys": [], 
      "description": "Stats for sensors related to power, temperature, and altitude.", 
      "categories": {
        "Temperature": {
          "keys": [
            "node.sensor.temp.desc.N", 
            "node.sensor.temp.celsius.N", 
            "node.sensor.temp.celsius.tutCPU0", 
            "node.sensor.temp.celsius.tFP", 
            "node.sensor.temp.celsius.tSFC1", 
            "node.sensor.temp.count", 
            "node.sensor.temp.celsius.tps1", 
            "node.sensor.temp.celsius.tps2", 
            "node.sensor.temp.celsius.tutCPU1", 
            "node.sensor.temp.names", 
            "node.sensor.temp.name.N", 
            "node.sensor.temp.celsius.tSystem"
          ], 
          "description": "Temperature sensors for various components.", 
          "categories": {}
        }, 
        "Power": {
          "keys": [
            "node.sensor.power.names", 
            "node.sensor.power.count", 
            "node.sensor.power.name.N", 
            "node.sensor.power.watts.pinps1", 
            "node.sensor.power.watts.N", 
            "node.sensor.power.desc.N", 
            "node.sensor.power.watts.poutps1", 
            "node.sensor.power.watts.poutps2", 
            "node.sensor.power.watts.pinps2"
          ], 
          "description": "Power sensor information.", 
          "categories": {}
        }, 
        "Altitude": {
          "keys": [
            "node.sensor.altitude.count", 
            "node.sensor.altitude.name.N", 
            "node.sensor.altitude.desc.N", 
            "node.sensor.altitude.names", 
            "node.sensor.altitude.meters.N"
          ], 
          "description": "Altitude sensor information (if node so equipped).", 
          "categories": {}
        }, 
        "Miscellaneous": {
          "keys": [
            "node.sensor.misc.data.addrps2", 
            "node.sensor.misc.data.PwrGood2", 
            "node.sensor.misc.data.Ocp1", 
            "node.sensor.misc.names", 
            "node.sensor.misc.data.TempFail2", 
            "node.sensor.misc.data.TempFail1", 
            "node.sensor.misc.data.Ovp2", 
            "node.sensor.misc.desc.N", 
            "node.sensor.misc.count", 
            "node.sensor.misc.data.Uvp2", 
            "node.sensor.misc.data.IMBVer", 
            "node.sensor.misc.data.Ovp1", 
            "node.sensor.misc.data.addrps1", 
            "node.sensor.misc.data.Uvp1", 
            "node.sensor.misc.data.PwrOff2", 
            "node.sensor.misc.data.PwrOff1", 
            "node.sensor.misc.data.PwrGood1", 
            "node.sensor.misc.data.N", 
            "node.sensor.misc.name.N", 
            "node.sensor.misc.data.Ocp2", 
            "node.sensor.misc.data.FanFail1", 
            "node.sensor.misc.data.FanFail2"
          ], 
          "description": "Miscellaneous sensor information.", 
          "categories": {}
        }, 
        "Fans": {
          "keys": [
            "node.sensor.fan.count", 
            "node.sensor.fan.rpms.N", 
            "node.sensor.fan.desc.N", 
            "node.sensor.fan.rpms.fisi2", 
            "node.sensor.fan.rpms.fisi1", 
            "node.sensor.fan.name.N", 
            "node.sensor.fan.rpms.fps11", 
            "node.sensor.fan.names", 
            "node.sensor.fan.rpms.fps21", 
            "node.sensor.fan.rpms.fisi3"
          ], 
          "description": "Fan speed sensors.", 
          "categories": {}
        }, 
        "Voltage": {
          "keys": [
            "node.sensor.volt.volts.nv1Vcur", 
            "node.sensor.volt.volts.vacps1", 
            "node.sensor.volt.volts.vCore1", 
            "node.sensor.volt.volts.vCore0", 
            "node.sensor.volt.volts.N", 
            "node.sensor.volt.volts.vacps2", 
            "node.sensor.volt.volts.12v", 
            "node.sensor.volt.volts.5v", 
            "node.sensor.volt.volts.1.0vSFC", 
            "node.sensor.volt.volts.vDimmCPU0", 
            "node.sensor.volt.volts.nv2Vcur", 
            "node.sensor.volt.desc.N", 
            "node.sensor.volt.names", 
            "node.sensor.volt.volts.12vminusSFC", 
            "node.sensor.volt.count", 
            "node.sensor.volt.volts.3.3vSFC", 
            "node.sensor.volt.volts.1.8vSFC", 
            "node.sensor.volt.volts.1.5v", 
            "node.sensor.volt.volts.vDimmCPU1", 
            "node.sensor.volt.volts.12vSFC", 
            "node.sensor.volt.name.N", 
            "node.sensor.volt.volts.5vFPF", 
            "node.sensor.volt.volts.3.3vSB", 
            "node.sensor.volt.volts.3.3v", 
            "node.sensor.volt.volts.5vSB", 
            "node.sensor.volt.volts.5vSFC"
          ], 
          "description": "Voltage sensor for various components.", 
          "categories": {}
        }, 
        "Current (Amperage)": {
          "keys": [
            "node.sensor.curr.amps.cacps2", 
            "node.sensor.curr.amps.N", 
            "node.sensor.curr.count", 
            "node.sensor.curr.amps.cacps1", 
            "node.sensor.curr.name.N", 
            "node.sensor.curr.amps.cdcps2", 
            "node.sensor.curr.desc.N", 
            "node.sensor.curr.amps.cdcps1", 
            "node.sensor.curr.names"
          ], 
          "description": "Sensors that display current (amperage) information about various components.", 
          "categories": {}
        }
      }
    }, 
    "Disk": {
      "keys": [], 
      "description": "Disk status and activity statistics", 
      "categories": {
        "Node": {
          "keys": [
            "node.disk.access.write.hist3.N", 
            "node.disk.access.write.hist1.N", 
            "node.disk.bytes.in.rate.all", 
            "node.disk.xfers.in.rate.sum", 
            "node.disk.access.slow.avg", 
            "node.disk.latencies", 
            "node.disk.access.read.hist4.N", 
            "node.disk.access.read.hist6.N", 
            "node.disk.access.read.hist0.N", 
            "node.disk.access.write.hist4.N", 
            "node.disk.xfers.in.rate.all", 
            "node.disk.access.unfilt.read.hist3.N", 
            "node.disk.name.N", 
            "node.disk.iosched.latency.N", 
            "node.disk.xfers.out.rate.N", 
            "node.disk.iosched.queue.N", 
            "node.disk.unhealthy.count", 
            "node.disk.iosched.latency.all", 
            "node.disk.lnum.N", 
            "node.disk.busy.N", 
            "node.disk.ifs.inodes.used.all", 
            "node.disk.access.read.hist3.N", 
            "node.disk.xfer.size.out.avg", 
            "node.disk.access.unfilt.read.hist4.N", 
            "node.disk.ifs.bytes.free.N", 
            "node.disk.access.slow.sum", 
            "node.disk.type.N", 
            "node.disk.ifs.bytes.free.all", 
            "node.disk.ifs.bytes.used.all", 
            "node.disk.iosched.latency.avg", 
            "node.disk.access.write.hist6.N", 
            "node.disk.access.unfilt.write.hist5.N", 
            "node.disk.xfer.size.in.all", 
            "node.disk.access.unfilt.write.hist3.N", 
            "node.disk.access.write.hist2.N", 
            "node.disk.access.write.hist0.N", 
            "node.disk.ifs.inodes.used.N", 
            "node.disk.access.latency.all", 
            "node.disk.access.unfilt.write.hist1.N", 
            "node.disk.access.read.hist5.N", 
            "node.disk.bytes.out.rate.N", 
            "node.disk.xfers.in.rate.N", 
            "node.disk.access.read.hist1.N", 
            "node.disk.access.unfilt.read.hist0.N", 
            "node.disk.access.unfilt.read.hist2.N", 
            "node.disk.access.unfilt.read.hist6.N", 
            "node.disk.bytes.out.rate.avg", 
            "node.disk.busy.all", 
            "node.disk.ifs.bytes.total.all", 
            "node.disk.access.unfilt.read.hist5.N", 
            "node.disk.xfers.rate.avg", 
            "node.disk.access.slow.all", 
            "node.disk.xfer.size.in.N", 
            "node.disk.iosched.latency.max", 
            "node.disk.ifs.bytes.used.N", 
            "node.disk.iosched.queue.all", 
            "node.disk.xfer.size.out.all", 
            "node.disk.xfers.out.rate.all", 
            "node.disk.ifs.bytes.total.N", 
            "node.disk.access.unfilt.write.hist4.N", 
            "node.disk.access.unfilt.write.hist2.N", 
            "node.disk.access.write.hist5.N", 
            "node.disk.access.unfilt.write.hist0.N", 
            "node.disk.bytes.in.rate.avg", 
            "node.disk.bay.N", 
            "node.disk.xfer.size.out.N", 
            "node.disk.busy.avg", 
            "node.disk.xfers.out.rate.avg", 
            "node.disk.xfers.rate.N", 
            "node.disk.xfers.in.rate.avg", 
            "node.disk.bytes.in.rate.N", 
            "node.disk.health.N", 
            "node.disk.access.latency.N", 
            "node.disk.access.read.hist2.N", 
            "node.disk.access.unfilt.read.hist1.N", 
            "node.disk.xfers.rate.sum", 
            "node.disk.access.slow.N", 
            "node.disk.count", 
            "node.disk.bytes.in.rate.sum", 
            "node.disk.xfers.out.rate.sum", 
            "node.disk.iosched.queue.avg", 
            "node.disk.bytes.out.rate.all", 
            "node.disk.access.latency.avg", 
            "node.disk.xfer.size.in.avg", 
            "node.disk.bytes.out.rate.sum", 
            "node.disk.xfers.rate.all", 
            "node.disk.access.unfilt.write.hist6.N"
          ], 
          "description": "Disk statistics per node and per disk.", 
          "categories": {}
        }, 
        "Cluster": {
          "keys": [
            "cluster.disk.bytes.out.rate", 
            "cluster.disk.bytes.in.rate", 
            "cluster.disk.xfer.size.out", 
            "cluster.disk.xfers.in.rate", 
            "cluster.disk.xfers.rate", 
            "cluster.disk.xfers.out.rate", 
            "cluster.disk.xfer.size.in", 
            "cluster.disk.busy"
          ], 
          "description": "Disk statistics averaged across all disks in the cluster.", 
          "categories": {}
        }
      }
    }, 
    "CPU": {
      "keys": [], 
      "description": "CPU utilization statistics.", 
      "categories": {
        "Node": {
          "keys": [
            "node.cpu.sys.avg", 
            "node.cpu.nice.max", 
            "node.cpu.sys.max", 
            "node.cpu.intr.N", 
            "node.cpu.throttling", 
            "node.cpu.user.avg", 
            "node.cpu.idle.avg", 
            "node.cpu.nice.N", 
            "node.cpu.nice.avg", 
            "node.cpu.user.max", 
            "node.cpu.sys.N", 
            "node.cpu.intr.avg", 
            "node.cpu.count", 
            "node.cpu.idle.N", 
            "node.cpu.idle.max", 
            "node.cpu.intr.max", 
            "node.cpu.user.N"
          ], 
          "description": "CPU statistics by node.", 
          "categories": {}
        }, 
        "Cluster": {
          "keys": [
            "cluster.cpu.user.max", 
            "cluster.cpu.sys.max", 
            "cluster.cpu.idle.max", 
            "cluster.cpu.intr.max", 
            "cluster.cpu.sys.avg", 
            "cluster.cpu.intr.avg", 
            "cluster.cpu.user.avg", 
            "cluster.cpu.idle.avg", 
            "cluster.cpu.nice.max", 
            "cluster.cpu.count", 
            "cluster.cpu.nice.avg"
          ], 
          "description": "CPU statistics averaged across all nodes in the cluster.", 
          "categories": {}
        }
      }
    }, 
    "Protocols": {
      "keys": [], 
      "description": "Protocol performance statistics.", 
      "categories": {
        "Node": {
          "keys": [
            "node.protostats.http.total", 
            "node.protostats.cifs.total", 
            "node.protostats.nfs3.total", 
            "node.protostats.papi.total", 
            "node.protostats.smb1", 
            "node.protostats.http", 
            "node.protostats.irp", 
            "node.protostats.smb2.total", 
            "node.protostats.smb1.total", 
            "node.protostats.lsass_in", 
            "node.protostats.siq.total", 
            "node.protostats.ftp", 
            "node.protostats.hdfs.total", 
            "node.protostats.irp.total", 
            "node.protostats.nlm", 
            "node.protostats.siq", 
            "node.protostats.nlm.total", 
            "node.protostats.papi", 
            "node.protostats.nfs4.total", 
            "node.protostats.jobd.total", 
            "node.protostats.nfs.total", 
            "node.protostats.jobd", 
            "node.protostats.nfs4", 
            "node.protostats.nfs3", 
            "node.protostats.smb2", 
            "node.protostats.hdfs", 
            "node.protostats.nfs", 
            "node.protostats.ftp.total", 
            "node.protostats.cifs", 
            "node.protostats.lsass_out.total", 
            "node.protostats.lsass_out", 
            "node.protostats.lsass_in.total"
          ], 
          "description": "Per protocol performance by Node.", 
          "categories": {}
        }, 
        "Cluster": {
          "keys": [
            "cluster.protostats.nlm", 
            "cluster.protostats.hdfs", 
            "cluster.protostats.irp", 
            "cluster.protostats.ftp.total", 
            "cluster.protostats.cifs.total", 
            "cluster.protostats.smb2.total", 
            "cluster.protostats.nfs.total", 
            "cluster.protostats.siq.total", 
            "cluster.protostats.nlm.total", 
            "cluster.protostats.lsass_out", 
            "cluster.protostats.nfs4.total", 
            "cluster.protostats.lsass_out.total", 
            "cluster.protostats.nfs3.total", 
            "cluster.protostats.ftp", 
            "cluster.protostats.papi.total", 
            "cluster.protostats.cifs", 
            "cluster.protostats.lsass_in.total", 
            "cluster.protostats.irp.total", 
            "cluster.protostats.jobd.total", 
            "cluster.protostats.smb2", 
            "cluster.protostats.smb1", 
            "cluster.protostats.nfs4", 
            "cluster.protostats.nfs3", 
            "cluster.protostats.papi", 
            "cluster.protostats.jobd", 
            "cluster.protostats.http", 
            "cluster.protostats.http.total", 
            "cluster.protostats.hdfs.total", 
            "cluster.protostats.lsass_in", 
            "cluster.protostats.siq", 
            "cluster.protostats.nfs", 
            "cluster.protostats.smb1.total"
          ], 
          "description": "Per protocol performance by Cluster.", 
          "categories": {}
        }
      }
    }, 
    "Uncategorized": {
      "keys": [
        "test.node.settable.int", 
        "invalid.N"
      ], 
      "description": "Statistics that have not been assigned a category.", 
      "categories": {}
    }
  }, 
  "tags": [
    "InsightIQ", 
    "PSU", 
    "altitude", 
    "cache", 
    "client", 
    "client_active", 
    "client_connected", 
    "cpu", 
    "dedupe", 
    "disk", 
    "disk_ifs", 
    "ext_interface", 
    "ext_network", 
    "ifs", 
    "ifs_cluster", 
    "ifs_file_heat", 
    "ifs_heat", 
    "ifs_throughput", 
    "job", 
    "power supplies", 
    "protocol", 
    "sensors"
  ]
}