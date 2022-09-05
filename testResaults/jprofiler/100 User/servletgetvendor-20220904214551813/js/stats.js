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
        "total": "5966",
        "ok": "5966",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "24885",
        "ok": "24885",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "20288",
        "ok": "20288",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4765",
        "ok": "4765",
        "ko": "-"
    },
    "percentiles1": {
        "total": "21619",
        "ok": "21619",
        "ko": "-"
    },
    "percentiles2": {
        "total": "24044",
        "ok": "24044",
        "ko": "-"
    },
    "percentiles3": {
        "total": "24643",
        "ok": "24643",
        "ko": "-"
    },
    "percentiles4": {
        "total": "24878",
        "ok": "24878",
        "ko": "-"
    },
    "group1": {
    "name": "t < 15000 ms",
    "count": 15,
    "percentage": 15
},
    "group2": {
    "name": "t ≥ 15000 ms <br> t < 30000 ms",
    "count": 85,
    "percentage": 85
},
    "group3": {
    "name": "t ≥ 30000 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4",
        "ok": "4",
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
        "total": "5966",
        "ok": "5966",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "24885",
        "ok": "24885",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "20288",
        "ok": "20288",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4765",
        "ok": "4765",
        "ko": "-"
    },
    "percentiles1": {
        "total": "21619",
        "ok": "21619",
        "ko": "-"
    },
    "percentiles2": {
        "total": "24044",
        "ok": "24044",
        "ko": "-"
    },
    "percentiles3": {
        "total": "24643",
        "ok": "24643",
        "ko": "-"
    },
    "percentiles4": {
        "total": "24878",
        "ok": "24878",
        "ko": "-"
    },
    "group1": {
    "name": "t < 15000 ms",
    "count": 15,
    "percentage": 15
},
    "group2": {
    "name": "t ≥ 15000 ms <br> t < 30000 ms",
    "count": 85,
    "percentage": 85
},
    "group3": {
    "name": "t ≥ 30000 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4",
        "ok": "4",
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
