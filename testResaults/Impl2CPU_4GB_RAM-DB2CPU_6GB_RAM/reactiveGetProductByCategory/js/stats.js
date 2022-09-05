var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "25",
        "ok": "25",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4085",
        "ok": "4085",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4120",
        "ok": "4120",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4108",
        "ok": "4108",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4114",
        "ok": "4114",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4118",
        "ok": "4118",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4120",
        "ok": "4120",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4120",
        "ok": "4120",
        "ko": "-"
    },
    "group1": {
    "name": "t < 15000 ms",
    "count": 25,
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
        "total": "5",
        "ok": "5",
        "ko": "-"
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
        "total": "25",
        "ok": "25",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4085",
        "ok": "4085",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4120",
        "ok": "4120",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4108",
        "ok": "4108",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4114",
        "ok": "4114",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4118",
        "ok": "4118",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4120",
        "ok": "4120",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4120",
        "ok": "4120",
        "ko": "-"
    },
    "group1": {
    "name": "t < 15000 ms",
    "count": 25,
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
        "total": "5",
        "ok": "5",
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
