var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1898",
        "ok": "1740",
        "ko": "158"
    },
    "minResponseTime": {
        "total": "2095",
        "ok": "2095",
        "ko": "120000"
    },
    "maxResponseTime": {
        "total": "120016",
        "ok": "119235",
        "ko": "120016"
    },
    "meanResponseTime": {
        "total": "40690",
        "ok": "33488",
        "ko": "120008"
    },
    "standardDeviation": {
        "total": "38017",
        "ok": "30877",
        "ko": "5"
    },
    "percentiles1": {
        "total": "26605",
        "ok": "23242",
        "ko": "120008"
    },
    "percentiles2": {
        "total": "62574",
        "ok": "51526",
        "ko": "120013"
    },
    "percentiles3": {
        "total": "120005",
        "ok": "99679",
        "ko": "120015"
    },
    "percentiles4": {
        "total": "120015",
        "ok": "115430",
        "ko": "120016"
    },
    "group1": {
    "name": "t < 15000 ms",
    "count": 707,
    "percentage": 37
},
    "group2": {
    "name": "t ≥ 15000 ms <br> t < 30000 ms",
    "count": 298,
    "percentage": 16
},
    "group3": {
    "name": "t ≥ 30000 ms",
    "count": 735,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "count": 158,
    "percentage": 8
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.091",
        "ok": "2.834",
        "ko": "0.257"
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
        "total": "1898",
        "ok": "1740",
        "ko": "158"
    },
    "minResponseTime": {
        "total": "2095",
        "ok": "2095",
        "ko": "120000"
    },
    "maxResponseTime": {
        "total": "120016",
        "ok": "119235",
        "ko": "120016"
    },
    "meanResponseTime": {
        "total": "40690",
        "ok": "33488",
        "ko": "120008"
    },
    "standardDeviation": {
        "total": "38017",
        "ok": "30877",
        "ko": "5"
    },
    "percentiles1": {
        "total": "26605",
        "ok": "23242",
        "ko": "120008"
    },
    "percentiles2": {
        "total": "62574",
        "ok": "51526",
        "ko": "120013"
    },
    "percentiles3": {
        "total": "120005",
        "ok": "99679",
        "ko": "120015"
    },
    "percentiles4": {
        "total": "120015",
        "ok": "115430",
        "ko": "120016"
    },
    "group1": {
    "name": "t < 15000 ms",
    "count": 707,
    "percentage": 37
},
    "group2": {
    "name": "t ≥ 15000 ms <br> t < 30000 ms",
    "count": 298,
    "percentage": 16
},
    "group3": {
    "name": "t ≥ 30000 ms",
    "count": 735,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "count": 158,
    "percentage": 8
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.091",
        "ok": "2.834",
        "ko": "0.257"
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
