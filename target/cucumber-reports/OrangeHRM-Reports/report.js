$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OrangeHRM.feature");
formatter.feature({
  "line": 2,
  "name": "Activities of Orange HRM portal",
  "description": "",
  "id": "activities-of-orange-hrm-portal",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "To create a job vacancy for �DevOps Engineer�",
  "description": "",
  "id": "activities-of-orange-hrm-portal;to-create-a-job-vacancy-for-�devops-engineer�",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User launches OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Logs In to site",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User navigates to Vacancies",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Adds vacancy to the portal",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verifies the added vacancy",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Closes Orange HRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.launchJobBackend()"
});
formatter.result({
  "duration": 7863344100,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.login()"
});
formatter.result({
  "duration": 1453010600,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.navigateToVacancy()"
});
formatter.result({
  "duration": 1881453999,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.addVacancy()"
});
formatter.result({
  "duration": 1123843000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyVacancyAdded()"
});
formatter.result({
  "duration": 2200843300,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.closeOrange()"
});
formatter.result({
  "duration": 1593388899,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Add information about a candidate for recruitment",
  "description": "",
  "id": "activities-of-orange-hrm-portal;add-information-about-a-candidate-for-recruitment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User launches OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User Logs In to site",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User navigates to Add Candidate",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Adds Candidate to the portal",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verifies the added candidate",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Closes Orange HRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.launchJobBackend()"
});
formatter.result({
  "duration": 6226317200,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.login()"
});
formatter.result({
  "duration": 1705066300,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.navigateToAddCandidate()"
});
formatter.result({
  "duration": 2061866200,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.addCandidate()"
});
formatter.result({
  "duration": 909913901,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyCandidate()"
});
formatter.result({
  "duration": 2164346600,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.closeOrange()"
});
formatter.result({
  "duration": 1008283501,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Add multiple employees using an the Examples table",
  "description": "",
  "id": "activities-of-orange-hrm-portal;add-multiple-employees-using-an-the-examples-table",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "User launches OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User Logs In to site",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User navigates to Employee List",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Adds employees using \"\u003cfirst\u003e\", \"\u003clast\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verifies the added employee",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Closes Orange HRM browser",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "activities-of-orange-hrm-portal;add-multiple-employees-using-an-the-examples-table;",
  "rows": [
    {
      "cells": [
        "first",
        "last",
        "password"
      ],
      "line": 32,
      "id": "activities-of-orange-hrm-portal;add-multiple-employees-using-an-the-examples-table;;1"
    },
    {
      "cells": [
        "AfirstName12",
        "AlastName12",
        "password"
      ],
      "line": 33,
      "id": "activities-of-orange-hrm-portal;add-multiple-employees-using-an-the-examples-table;;2"
    },
    {
      "cells": [
        "AfirstName22",
        "AlastName22",
        "password"
      ],
      "line": 34,
      "id": "activities-of-orange-hrm-portal;add-multiple-employees-using-an-the-examples-table;;3"
    },
    {
      "cells": [
        "AfirstName32",
        "AlastName32",
        "password"
      ],
      "line": 35,
      "id": "activities-of-orange-hrm-portal;add-multiple-employees-using-an-the-examples-table;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Add multiple employees using an the Examples table",
  "description": "",
  "id": "activities-of-orange-hrm-portal;add-multiple-employees-using-an-the-examples-table;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User launches OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User Logs In to site",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User navigates to Employee List",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Adds employees using \"AfirstName12\", \"AlastName12\" and \"password\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verifies the added employee",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Closes Orange HRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.launchJobBackend()"
});
formatter.result({
  "duration": 6433380800,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.login()"
});
formatter.result({
  "duration": 1480143900,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.navigateToEmployeeList()"
});
formatter.result({
  "duration": 1467186600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AfirstName12",
      "offset": 22
    },
    {
      "val": "AlastName12",
      "offset": 38
    },
    {
      "val": "password",
      "offset": 56
    }
  ],
  "location": "OrangeHRM.addEmployees(String,String,String)"
});
formatter.result({
  "duration": 2854423900,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyCandidateEx()"
});
formatter.result({
  "duration": 112588501,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.closeOrange()"
});
formatter.result({
  "duration": 1169069100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Add multiple employees using an the Examples table",
  "description": "",
  "id": "activities-of-orange-hrm-portal;add-multiple-employees-using-an-the-examples-table;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User launches OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User Logs In to site",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User navigates to Employee List",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Adds employees using \"AfirstName22\", \"AlastName22\" and \"password\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verifies the added employee",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Closes Orange HRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.launchJobBackend()"
});
formatter.result({
  "duration": 6520118100,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.login()"
});
formatter.result({
  "duration": 1609221799,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.navigateToEmployeeList()"
});
formatter.result({
  "duration": 1475744100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AfirstName22",
      "offset": 22
    },
    {
      "val": "AlastName22",
      "offset": 38
    },
    {
      "val": "password",
      "offset": 56
    }
  ],
  "location": "OrangeHRM.addEmployees(String,String,String)"
});
formatter.result({
  "duration": 2667749500,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyCandidateEx()"
});
formatter.result({
  "duration": 119311000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.closeOrange()"
});
formatter.result({
  "duration": 1017215800,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Add multiple employees using an the Examples table",
  "description": "",
  "id": "activities-of-orange-hrm-portal;add-multiple-employees-using-an-the-examples-table;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User launches OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User Logs In to site",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User navigates to Employee List",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Adds employees using \"AfirstName32\", \"AlastName32\" and \"password\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verifies the added employee",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Closes Orange HRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.launchJobBackend()"
});
formatter.result({
  "duration": 6379111600,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.login()"
});
formatter.result({
  "duration": 1485114100,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.navigateToEmployeeList()"
});
formatter.result({
  "duration": 2265285100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AfirstName32",
      "offset": 22
    },
    {
      "val": "AlastName32",
      "offset": 38
    },
    {
      "val": "password",
      "offset": 56
    }
  ],
  "location": "OrangeHRM.addEmployees(String,String,String)"
});
formatter.result({
  "duration": 3376842500,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyCandidateEx()"
});
formatter.result({
  "duration": 111015000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.closeOrange()"
});
formatter.result({
  "duration": 1015050600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "Creating multiple vacancies using data from an Examples table",
  "description": "",
  "id": "activities-of-orange-hrm-portal;creating-multiple-vacancies-using-data-from-an-examples-table",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "User launches OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "User Logs In to site",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User navigates to Vacancies",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Adds vacancy to the portal using \"\u003ctitle\u003e\", \"\u003cvacancyName\u003e\" and \"\u003cHireManager\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Verifies the added vacancy",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Closes Orange HRM browser",
  "keyword": "And "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "activities-of-orange-hrm-portal;creating-multiple-vacancies-using-data-from-an-examples-table;",
  "rows": [
    {
      "cells": [
        "title",
        "vacancyName",
        "HireManager"
      ],
      "line": 47,
      "id": "activities-of-orange-hrm-portal;creating-multiple-vacancies-using-data-from-an-examples-table;;1"
    },
    {
      "cells": [
        "Android Developer",
        "Android Developer Proj",
        "Test Employee"
      ],
      "line": 48,
      "id": "activities-of-orange-hrm-portal;creating-multiple-vacancies-using-data-from-an-examples-table;;2"
    },
    {
      "cells": [
        "DevOps Engineer",
        "DevOps Engineer Proj",
        "Test Employee"
      ],
      "line": 49,
      "id": "activities-of-orange-hrm-portal;creating-multiple-vacancies-using-data-from-an-examples-table;;3"
    },
    {
      "cells": [
        "Java Developer",
        "Java Developer Proj",
        "Test Employee"
      ],
      "line": 50,
      "id": "activities-of-orange-hrm-portal;creating-multiple-vacancies-using-data-from-an-examples-table;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "Creating multiple vacancies using data from an Examples table",
  "description": "",
  "id": "activities-of-orange-hrm-portal;creating-multiple-vacancies-using-data-from-an-examples-table;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "User launches OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "User Logs In to site",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User navigates to Vacancies",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Adds vacancy to the portal using \"Android Developer\", \"Android Developer Proj\" and \"Test Employee\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Verifies the added vacancy",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Closes Orange HRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.launchJobBackend()"
});
formatter.result({
  "duration": 6654379699,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.login()"
});
formatter.result({
  "duration": 1573198400,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.navigateToVacancy()"
});
formatter.result({
  "duration": 1888900299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Android Developer",
      "offset": 34
    },
    {
      "val": "Android Developer Proj",
      "offset": 55
    },
    {
      "val": "Test Employee",
      "offset": 84
    }
  ],
  "location": "OrangeHRM.addVacancyEx(String,String,String)"
});
formatter.result({
  "duration": 1145621101,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyVacancyAdded()"
});
formatter.result({
  "duration": 1909176999,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.closeOrange()"
});
formatter.result({
  "duration": 989329300,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Creating multiple vacancies using data from an Examples table",
  "description": "",
  "id": "activities-of-orange-hrm-portal;creating-multiple-vacancies-using-data-from-an-examples-table;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "User launches OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "User Logs In to site",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User navigates to Vacancies",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Adds vacancy to the portal using \"DevOps Engineer\", \"DevOps Engineer Proj\" and \"Test Employee\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Verifies the added vacancy",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Closes Orange HRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.launchJobBackend()"
});
formatter.result({
  "duration": 5975849000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.login()"
});
formatter.result({
  "duration": 1500237100,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.navigateToVacancy()"
});
formatter.result({
  "duration": 1946077900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DevOps Engineer",
      "offset": 34
    },
    {
      "val": "DevOps Engineer Proj",
      "offset": 53
    },
    {
      "val": "Test Employee",
      "offset": 80
    }
  ],
  "location": "OrangeHRM.addVacancyEx(String,String,String)"
});
formatter.result({
  "duration": 1122547900,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyVacancyAdded()"
});
formatter.result({
  "duration": 1989207900,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.closeOrange()"
});
formatter.result({
  "duration": 1350721600,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Creating multiple vacancies using data from an Examples table",
  "description": "",
  "id": "activities-of-orange-hrm-portal;creating-multiple-vacancies-using-data-from-an-examples-table;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "User launches OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "User Logs In to site",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User navigates to Vacancies",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Adds vacancy to the portal using \"Java Developer\", \"Java Developer Proj\" and \"Test Employee\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Verifies the added vacancy",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Closes Orange HRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.launchJobBackend()"
});
formatter.result({
  "duration": 6396948100,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.login()"
});
formatter.result({
  "duration": 1637097799,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.navigateToVacancy()"
});
formatter.result({
  "duration": 1870583400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java Developer",
      "offset": 34
    },
    {
      "val": "Java Developer Proj",
      "offset": 52
    },
    {
      "val": "Test Employee",
      "offset": 78
    }
  ],
  "location": "OrangeHRM.addVacancyEx(String,String,String)"
});
formatter.result({
  "duration": 1198934500,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyVacancyAdded()"
});
formatter.result({
  "duration": 2133793201,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.closeOrange()"
});
formatter.result({
  "duration": 1028437699,
  "status": "passed"
});
});