var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "100",
        "ok": "6",
        "ko": "94"
    },
    "minResponseTime": {
        "total": "111127",
        "ok": "111127",
        "ko": "120000"
    },
    "maxResponseTime": {
        "total": "120016",
        "ok": "117667",
        "ko": "120016"
    },
    "meanResponseTime": {
        "total": "119686",
        "ok": "114679",
        "ko": "120005"
    },
    "standardDeviation": {
        "total": "1392",
        "ok": "2373",
        "ko": "4"
    },
    "percentiles1": {
        "total": "120006",
        "ok": "114545",
        "ko": "120006"
    },
    "percentiles2": {
        "total": "120008",
        "ok": "116882",
        "ko": "120008"
    },
    "percentiles3": {
        "total": "120010",
        "ok": "117605",
        "ko": "120010"
    },
    "percentiles4": {
        "total": "120016",
        "ok": "117655",
        "ko": "120016"
    },
    "group1": {
    "name": "t < 15000 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "t ≥ 15000 ms <br> t < 30000 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 30000 ms",
    "count": 6,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 94,
    "percentage": 94
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.826",
        "ok": "0.05",
        "ko": "0.777"
    }
},
contents: {
"req_get-products-by-d5bb4": {
        type: "REQUEST",
        name: "get products by category",
path: "get products by category",
pathFormatted: "req_get-products-by-d5bb4",
stats: {
    "name": "get products by category",
    "numberOfRequests": {
        "total": "100",
        "ok": "6",
        "ko": "94"
    },
    "minResponseTime": {
        "total": "111127",
        "ok": "111127",
        "ko": "120000"
    },
    "maxResponseTime": {
        "total": "120016",
        "ok": "117667",
        "ko": "120016"
    },
    "meanResponseTime": {
        "total": "119686",
        "ok": "114679",
        "ko": "120005"
    },
    "standardDeviation": {
        "total": "1392",
        "ok": "2373",
        "ko": "4"
    },
    "percentiles1": {
        "total": "120006",
        "ok": "114545",
        "ko": "120006"
    },
    "percentiles2": {
        "total": "120008",
        "ok": "116882",
        "ko": "120008"
    },
    "percentiles3": {
        "total": "120010",
        "ok": "117605",
        "ko": "120010"
    },
    "percentiles4": {
        "total": "120016",
        "ok": "117655",
        "ko": "120016"
    },
    "group1": {
    "name": "t < 15000 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "t ≥ 15000 ms <br> t < 30000 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 30000 ms",
    "count": 6,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 94,
    "percentage": 94
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.826",
        "ok": "0.05",
        "ko": "0.777"
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
