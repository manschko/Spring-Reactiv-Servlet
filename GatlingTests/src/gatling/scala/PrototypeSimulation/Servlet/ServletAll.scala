package PrototypeSimulation.Reactive

import PrototypeSimulation.Scenario._
import io.gatling.core.Predef._
import io.gatling.core.feeder.BatchableFeederBuilder
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

class ServletAll extends Simulation {


  val httpProtocol: HttpProtocolBuilder = http
    .baseUrl("http://localhost:8080")
    .inferHtmlResources()
    .acceptHeader("*/*")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:75.0) Gecko/20100101 Firefox/75.0")



  setUp(
    scnAll.inject(atOnceUsers(userAmount))
  ).protocols(httpProtocol)
}
