var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "80",
        "ok": "80",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "346",
        "ok": "346",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "919",
        "ok": "919",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "614",
        "ok": "614",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "161",
        "ok": "161",
        "ko": "-"
    },
    "percentiles1": {
        "total": "624",
        "ok": "624",
        "ko": "-"
    },
    "percentiles2": {
        "total": "726",
        "ok": "726",
        "ko": "-"
    },
    "percentiles3": {
        "total": "900",
        "ok": "900",
        "ko": "-"
    },
    "percentiles4": {
        "total": "917",
        "ok": "917",
        "ko": "-"
    },
    "group1": {
    "name": "t < 15000 ms",
    "count": 80,
    "percentage": 100
},
    "group2": {
    "name": "t ≥ 15000 ms <br> t < 30000 ms",
    "count": 0,
    "percentage": 0
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
        "total": "80",
        "ok": "80",
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
        "total": "80",
        "ok": "80",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "346",
        "ok": "346",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "919",
        "ok": "919",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "614",
        "ok": "614",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "161",
        "ok": "161",
        "ko": "-"
    },
    "percentiles1": {
        "total": "624",
        "ok": "624",
        "ko": "-"
    },
    "percentiles2": {
        "total": "726",
        "ok": "726",
        "ko": "-"
    },
    "percentiles3": {
        "total": "900",
        "ok": "900",
        "ko": "-"
    },
    "percentiles4": {
        "total": "917",
        "ok": "917",
        "ko": "-"
    },
    "group1": {
    "name": "t < 15000 ms",
    "count": 80,
    "percentage": 100
},
    "group2": {
    "name": "t ≥ 15000 ms <br> t < 30000 ms",
    "count": 0,
    "percentage": 0
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
        "total": "80",
        "ok": "80",
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
