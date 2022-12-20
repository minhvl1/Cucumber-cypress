Feature: Demo QA
  Scenario Outline: Practice form
    Given go to practice page
    And  Open Practice from
    When  Input firstname <firstName>
    And   Input lastname <lastName>
    And   Select gender <gender>
    And   Input userNumber<userNumber>
    And   Select YOB <yearOfBirth>
    And   Select MOB <monthOfBirth>
    And   Select DOB <dayOfBirth>
    And   Select state <state>
    And   Select city <city>
    Then  Submit form
    And  Verify result form
    Examples:
      |firstName  |lastName|gender |userNumber|yearOfBirth|monthOfBirth|dayOfBirth|state|city|
      |minh     |vu        |male   |1231231   |1997       |November    |21        |NCR  |Noida|
      |phuong   |anh       |female |1231231   |1998       |January     |21        |NCR  |Delhi|
