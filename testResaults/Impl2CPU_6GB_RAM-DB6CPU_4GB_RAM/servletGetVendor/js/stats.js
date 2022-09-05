var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "32841",
        "ok": "32841",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "58090",
        "ok": "58090",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "53201",
        "ok": "53201",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6099",
        "ok": "6099",
        "ko": "-"
    },
    "percentiles1": {
        "total": "55377",
        "ok": "55377",
        "ko": "-"
    },
    "percentiles2": {
        "total": "57355",
        "ok": "57355",
        "ko": "-"
    },
    "percentiles3": {
        "total": "57919",
        "ok": "57919",
        "ko": "-"
    },
    "percentiles4": {
        "total": "58083",
        "ok": "58083",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 100,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.695",
        "ok": "1.695",
        "ko": "-"
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
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "32841",
        "ok": "32841",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "58090",
        "ok": "58090",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "53201",
        "ok": "53201",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6099",
        "ok": "6099",
        "ko": "-"
    },
    "percentiles1": {
        "total": "55377",
        "ok": "55377",
        "ko": "-"
    },
    "percentiles2": {
        "total": "57355",
        "ok": "57355",
        "ko": "-"
    },
    "percentiles3": {
        "total": "57919",
        "ok": "57919",
        "ko": "-"
    },
    "percentiles4": {
        "total": "58083",
        "ok": "58083",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 100,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.695",
        "ok": "1.695",
        "ko": "-"
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
