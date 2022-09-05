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
        "total": "3355",
        "ok": "3355",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4734",
        "ok": "4734",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3967",
        "ok": "3967",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "430",
        "ok": "430",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3739",
        "ok": "3739",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4450",
        "ok": "4450",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4710",
        "ok": "4710",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4733",
        "ok": "4733",
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
        "total": "16",
        "ok": "16",
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
        "total": "80",
        "ok": "80",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3355",
        "ok": "3355",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4734",
        "ok": "4734",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3967",
        "ok": "3967",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "430",
        "ok": "430",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3739",
        "ok": "3739",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4450",
        "ok": "4450",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4710",
        "ok": "4710",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4733",
        "ok": "4733",
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
        "total": "16",
        "ok": "16",
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
