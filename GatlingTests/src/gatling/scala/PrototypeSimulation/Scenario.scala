
package PrototypeSimulation
import io.gatling.core.Predef._
import io.gatling.core.feeder.BatchableFeederBuilder
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef._

import scala.util.Random

package object Scenario {
    val feeder: BatchableFeederBuilder[String] = ssv("mock.ssv").random

    val userAmount = 25
    def radnomId() = Random.nextInt(500000) + 1

    def createProduct: ChainBuilder = {
      exec(http("create a product")
        .post("/product")
        .body(StringBody("#{product}")).asJson
        .check(status.is(200)))
    }

    def getProduct(i: Int): ChainBuilder = {
      exec(http("get a product")
        .get("/product/" + i)
        .check(status.is(200)))
    }

    def getProductByCategoryId(i: Int): ChainBuilder = {
      exec(http("get products by category")
        .get("/category/" + i + "/products")
        .check(status.is(200)))
    }

    def getProductByVendorId(i: Int): ChainBuilder = {
      exec(http("get products by vendor")
        .get("/vendor/" + i + "/products")
        .check(status.is(200)))
    }

    def createVendor: ChainBuilder = {
      exec(http("create a vendor")
        .post("/vendor")
        .body(StringBody("#{vendor}")).asJson
        .check(status.is(200)))
    }

    def getVendors: ChainBuilder = {
      exec(http("get vendors")
        .get("/vendors")
        .check(status.is(200)))
    }

    val scnAll: ScenarioBuilder = scenario("Product")
      .feed(feeder)
      .exec(createProduct)
      .pause(30)
      .exec(getProduct(scala.util.Random.nextInt(500000) + 1))
      .pause(30)
      .exec(getProductByCategoryId(scala.util.Random.nextInt(1000) + 1))
      .pause(30)
      .exec(getProductByVendorId(scala.util.Random.nextInt(500000) + 1))
      .pause(30)
      .exec(createVendor)
      .pause(30)
      .exec(getVendors)

    val scnCreatProduct: ScenarioBuilder = scenario("Create Product")
      .feed(feeder)
      .exec(createProduct)

    val scnGetProduct: ScenarioBuilder = scenario("Get Product")
      .exec(getProduct(radnomId()))

    val scnGetProductByCategoryId: ScenarioBuilder = scenario("Get Product By Category Id")
      .exec(getProductByCategoryId(scala.util.Random.nextInt(1000) + 1))

    val scnGetProductByVendorId: ScenarioBuilder = scenario("Get Product By Vendor Id")
      .exec(getProductByVendorId(scala.util.Random.nextInt(500000) + 1))

    val scnCreatVendor: ScenarioBuilder = scenario("Create Vendor")
      .feed(feeder)
      .exec(createVendor)

    val scnGetVendors: ScenarioBuilder = scenario("Get Vendors")
      .exec(getVendors)
  val scnGetVendors2: ScenarioBuilder = scenario("Get Vendors2")
    .exec(getVendors)



}
