Feature: Bing
  Scenario: Search MINH in Bing
    Given go to Bing
    When search minh
    Then verify url contain minh