var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "35970",
        "ok": "16757",
        "ko": "19213"
    },
    "minResponseTime": {
        "total": "279",
        "ok": "466",
        "ko": "279"
    },
    "maxResponseTime": {
        "total": "38249",
        "ok": "26692",
        "ko": "38249"
    },
    "meanResponseTime": {
        "total": "12470",
        "ok": "12911",
        "ko": "12085"
    },
    "standardDeviation": {
        "total": "6855",
        "ok": "5405",
        "ko": "7885"
    },
    "percentiles1": {
        "total": "11368",
        "ok": "11705",
        "ko": "9855"
    },
    "percentiles2": {
        "total": "17910",
        "ok": "17910",
        "ko": "17919"
    },
    "percentiles3": {
        "total": "24521",
        "ok": "22335",
        "ko": "26830"
    },
    "percentiles4": {
        "total": "30032",
        "ok": "24544",
        "ko": "31676"
    },
    "group1": {
    "name": "t < 15000 ms",
    "count": 9541,
    "percentage": 27
},
    "group2": {
    "name": "t ≥ 15000 ms <br> t < 30000 ms",
    "count": 7216,
    "percentage": 20
},
    "group3": {
    "name": "t ≥ 30000 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 19213,
    "percentage": 53
},
    "meanNumberOfRequestsPerSecond": {
        "total": "198.729",
        "ok": "92.58",
        "ko": "106.149"
    }
},
contents: {
"req_get-vendors-3a50d": {
        type: "REQUEST",
        name: "get vendors",
path: "get vendors",
pathFormatted: "req_get-vendors-3a50d",
stats: {
    "name": "get vendors",
    "numberOfRequests": {
        "total": "35970",
        "ok": "16757",
        "ko": "19213"
    },
    "minResponseTime": {
        "total": "279",
        "ok": "466",
        "ko": "279"
    },
    "maxResponseTime": {
        "total": "38249",
        "ok": "26692",
        "ko": "38249"
    },
    "meanResponseTime": {
        "total": "12470",
        "ok": "12911",
        "ko": "12085"
    },
    "standardDeviation": {
        "total": "6855",
        "ok": "5405",
        "ko": "7885"
    },
    "percentiles1": {
        "total": "11369",
        "ok": "11704",
        "ko": "9855"
    },
    "percentiles2": {
        "total": "17910",
        "ok": "17910",
        "ko": "17919"
    },
    "percentiles3": {
        "total": "24521",
        "ok": "22334",
        "ko": "26830"
    },
    "percentiles4": {
        "total": "30032",
        "ok": "24544",
        "ko": "31676"
    },
    "group1": {
    "name": "t < 15000 ms",
    "count": 9541,
    "percentage": 27
},
    "group2": {
    "name": "t ≥ 15000 ms <br> t < 30000 ms",
    "count": 7216,
    "percentage": 20
},
    "group3": {
    "name": "t ≥ 30000 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 19213,
    "percentage": 53
},
    "meanNumberOfRequestsPerSecond": {
        "total": "198.729",
        "ok": "92.58",
        "ko": "106.149"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
