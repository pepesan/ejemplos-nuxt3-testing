// Generated by Selenium IDE
import { Builder, By, Key, until } from 'selenium-webdriver'
import  assert from 'assert'
import {describe, test, expect, beforeEach, afterEach} from 'vitest'

describe('ceros', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  test('ceros', async function() {
    // Test name: ceros
    // Step # | name | target | value
    // 1 | open | /pactometro/ |
    await driver.get("https://cursosdedesarrollo.com/pactometro/")
    // 2 | assertText | id=num-sies | 0
    assert(await driver.findElement(By.id("num-sies")).getText() == "0")
    // 3 | assertText | id=num-abst | 0
    assert(await driver.findElement(By.id("num-abst")).getText() == "0")
    // 4 | assertText | id=num-noes | 0
    assert(await driver.findElement(By.id("num-noes")).getText() == "0")
  })
})
