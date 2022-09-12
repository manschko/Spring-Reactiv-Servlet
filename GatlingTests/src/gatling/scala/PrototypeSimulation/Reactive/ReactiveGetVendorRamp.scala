package PrototypeSimulation.Reactive

import PrototypeSimulation.Scenario._

class ReactiveGetVendor extends Simulation {


  val httpProtocol: HttpProtocolBuilder = http
    .baseUrl("http://localhost:8081")
    .inferHtmlResources()
    .acceptHeader("*/*")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:75.0) Gecko/20100101 Firefox/75.0")

  setUp(
    scnGetVendors.inject(
      incrementConcurrentUsers(25)
        .times(4)
        .eachLevelLasting(10)
        .separatedByRampsLasting(10)
        .startingFrom(userAmount)
    ).protocols(httpProtocol)
  )
}
