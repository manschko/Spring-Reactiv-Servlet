var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "100",
        "ok": "7",
        "ko": "93"
    },
    "minResponseTime": {
        "total": "102923",
        "ok": "102923",
        "ko": "120000"
    },
    "maxResponseTime": {
        "total": "120021",
        "ok": "119463",
        "ko": "120021"
    },
    "meanResponseTime": {
        "total": "119641",
        "ok": "114744",
        "ko": "120010"
    },
    "standardDeviation": {
        "total": "2073",
        "ok": "5968",
        "ko": "7"
    },
    "percentiles1": {
        "total": "120007",
        "ok": "116937",
        "ko": "120007"
    },
    "percentiles2": {
        "total": "120016",
        "ok": "119343",
        "ko": "120016"
    },
    "percentiles3": {
        "total": "120020",
        "ok": "119433",
        "ko": "120020"
    },
    "percentiles4": {
        "total": "120021",
        "ok": "119457",
        "ko": "120021"
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
    "count": 7,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 93,
    "percentage": 93
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.826",
        "ok": "0.058",
        "ko": "0.769"
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
        "total": "100",
        "ok": "7",
        "ko": "93"
    },
    "minResponseTime": {
        "total": "102923",
        "ok": "102923",
        "ko": "120000"
    },
    "maxResponseTime": {
        "total": "120021",
        "ok": "119463",
        "ko": "120021"
    },
    "meanResponseTime": {
        "total": "119641",
        "ok": "114744",
        "ko": "120010"
    },
    "standardDeviation": {
        "total": "2073",
        "ok": "5968",
        "ko": "7"
    },
    "percentiles1": {
        "total": "120007",
        "ok": "116937",
        "ko": "120007"
    },
    "percentiles2": {
        "total": "120016",
        "ok": "119343",
        "ko": "120016"
    },
    "percentiles3": {
        "total": "120020",
        "ok": "119433",
        "ko": "120020"
    },
    "percentiles4": {
        "total": "120021",
        "ok": "119457",
        "ko": "120021"
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
    "count": 7,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 93,
    "percentage": 93
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.826",
        "ok": "0.058",
        "ko": "0.769"
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
