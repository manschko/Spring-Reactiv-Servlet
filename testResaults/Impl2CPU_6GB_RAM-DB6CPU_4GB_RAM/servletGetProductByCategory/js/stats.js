var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "100",
        "ok": "3",
        "ko": "97"
    },
    "minResponseTime": {
        "total": "117653",
        "ok": "117653",
        "ko": "120002"
    },
    "maxResponseTime": {
        "total": "120014",
        "ok": "118327",
        "ko": "120014"
    },
    "meanResponseTime": {
        "total": "119946",
        "ok": "118024",
        "ko": "120006"
    },
    "standardDeviation": {
        "total": "341",
        "ok": "279",
        "ko": "4"
    },
    "percentiles1": {
        "total": "120004",
        "ok": "118093",
        "ko": "120004"
    },
    "percentiles2": {
        "total": "120010",
        "ok": "118210",
        "ko": "120010"
    },
    "percentiles3": {
        "total": "120012",
        "ok": "118304",
        "ko": "120012"
    },
    "percentiles4": {
        "total": "120013",
        "ok": "118322",
        "ko": "120013"
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
    "count": 3,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 97,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.826",
        "ok": "0.025",
        "ko": "0.802"
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
        "ok": "3",
        "ko": "97"
    },
    "minResponseTime": {
        "total": "117653",
        "ok": "117653",
        "ko": "120002"
    },
    "maxResponseTime": {
        "total": "120014",
        "ok": "118327",
        "ko": "120014"
    },
    "meanResponseTime": {
        "total": "119946",
        "ok": "118024",
        "ko": "120006"
    },
    "standardDeviation": {
        "total": "341",
        "ok": "279",
        "ko": "4"
    },
    "percentiles1": {
        "total": "120004",
        "ok": "118093",
        "ko": "120004"
    },
    "percentiles2": {
        "total": "120010",
        "ok": "118210",
        "ko": "120010"
    },
    "percentiles3": {
        "total": "120012",
        "ok": "118304",
        "ko": "120012"
    },
    "percentiles4": {
        "total": "120013",
        "ok": "118322",
        "ko": "120013"
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
    "count": 3,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 97,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.826",
        "ok": "0.025",
        "ko": "0.802"
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
