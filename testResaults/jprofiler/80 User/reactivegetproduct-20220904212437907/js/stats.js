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
        "total": "5009",
        "ok": "5009",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6208",
        "ok": "6208",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5923",
        "ok": "5923",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "212",
        "ok": "212",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5934",
        "ok": "5934",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6072",
        "ok": "6072",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6171",
        "ok": "6171",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6199",
        "ok": "6199",
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
        "total": "11.429",
        "ok": "11.429",
        "ko": "-"
    }
},
contents: {
"req_get-a-product-3ea6c": {
        type: "REQUEST",
        name: "get a product",
path: "get a product",
pathFormatted: "req_get-a-product-3ea6c",
stats: {
    "name": "get a product",
    "numberOfRequests": {
        "total": "80",
        "ok": "80",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5009",
        "ok": "5009",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6208",
        "ok": "6208",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5923",
        "ok": "5923",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "212",
        "ok": "212",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5934",
        "ok": "5934",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6072",
        "ok": "6072",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6171",
        "ok": "6171",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6199",
        "ok": "6199",
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
        "total": "11.429",
        "ok": "11.429",
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
