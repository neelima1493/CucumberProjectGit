$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AlchemyCRM.feature");
formatter.feature({
  "line": 2,
  "name": "Activities of Orange HRM portal",
  "description": "",
  "id": "activities-of-orange-hrm-portal",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AlchemyCRM"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Open the homepage and count the number of the dashlets on the page",
  "description": "",
  "id": "activities-of-orange-hrm-portal;open-the-homepage-and-count-the-number-of-the-dashlets-on-the-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User launches Alchemy CRM portal",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Logs In to CRM site",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Counts and prints the dashlet titles",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Closes CRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlchemyCRM.launchJobBackend()"
});
formatter.result({
  "duration": 8507370799,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.loginToCRM()"
});
formatter.result({
  "duration": 2525948900,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.countDashlet()"
});
formatter.result({
  "duration": 1437577901,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.closeCRM()"
});
formatter.result({
  "duration": 1122664400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To schedule a meeting and include at least 3 invitees",
  "description": "",
  "id": "activities-of-orange-hrm-portal;to-schedule-a-meeting-and-include-at-least-3-invitees",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User launches Alchemy CRM portal",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User Logs In to CRM site",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User navigates to Schedule a Meeting",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters all the details",
  "rows": [
    {
      "cells": [
        "firstName14"
      ],
      "line": 17
    },
    {
      "cells": [
        "firstName15"
      ],
      "line": 18
    },
    {
      "cells": [
        "firstName16"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User Verifies the created meeting",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Closes CRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlchemyCRM.launchJobBackend()"
});
formatter.result({
  "duration": 7091335900,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.loginToCRM()"
});
formatter.result({
  "duration": 2582850900,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.navigateToMeeting()"
});
formatter.result({
  "duration": 3397848100,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.fillDetails(DataTable)"
});
formatter.result({
  "duration": 6716794100,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.verifymeeting()"
});
formatter.result({
  "duration": 2573025100,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.closeCRM()"
});
formatter.result({
  "duration": 1038062300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Open the Leads page and add multiple lead accounts using values passed from Feature file",
  "description": "",
  "id": "activities-of-orange-hrm-portal;open-the-leads-page-and-add-multiple-lead-accounts-using-values-passed-from-feature-file",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "User launches Alchemy CRM portal",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User Logs In to CRM site",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User navigates to Create Lead screen",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User creates lead accounts and verifies using \"\u003cfirst\u003e\" and \"\u003clast\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Closes CRM browser",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "activities-of-orange-hrm-portal;open-the-leads-page-and-add-multiple-lead-accounts-using-values-passed-from-feature-file;",
  "rows": [
    {
      "cells": [
        "first",
        "last"
      ],
      "line": 32,
      "id": "activities-of-orange-hrm-portal;open-the-leads-page-and-add-multiple-lead-accounts-using-values-passed-from-feature-file;;1"
    },
    {
      "cells": [
        "AfirstName49",
        "AlastName49"
      ],
      "line": 33,
      "id": "activities-of-orange-hrm-portal;open-the-leads-page-and-add-multiple-lead-accounts-using-values-passed-from-feature-file;;2"
    },
    {
      "cells": [
        "AfirstName59",
        "AlastName59"
      ],
      "line": 34,
      "id": "activities-of-orange-hrm-portal;open-the-leads-page-and-add-multiple-lead-accounts-using-values-passed-from-feature-file;;3"
    },
    {
      "cells": [
        "AfirstName69",
        "AlastName69"
      ],
      "line": 35,
      "id": "activities-of-orange-hrm-portal;open-the-leads-page-and-add-multiple-lead-accounts-using-values-passed-from-feature-file;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Open the Leads page and add multiple lead accounts using values passed from Feature file",
  "description": "",
  "id": "activities-of-orange-hrm-portal;open-the-leads-page-and-add-multiple-lead-accounts-using-values-passed-from-feature-file;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AlchemyCRM"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User launches Alchemy CRM portal",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User Logs In to CRM site",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User navigates to Create Lead screen",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User creates lead accounts and verifies using \"AfirstName49\" and \"AlastName49\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Closes CRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlchemyCRM.launchJobBackend()"
});
formatter.result({
  "duration": 7749570301,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.loginToCRM()"
});
formatter.result({
  "duration": 3096456901,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.navigateToCreateLead()"
});
formatter.result({
  "duration": 3414169600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AfirstName49",
      "offset": 47
    },
    {
      "val": "AlastName49",
      "offset": 66
    }
  ],
  "location": "AlchemyCRM.adddetails(String,String)"
});
formatter.result({
  "duration": 5975598600,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.closeCRM()"
});
formatter.result({
  "duration": 1007761400,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Open the Leads page and add multiple lead accounts using values passed from Feature file",
  "description": "",
  "id": "activities-of-orange-hrm-portal;open-the-leads-page-and-add-multiple-lead-accounts-using-values-passed-from-feature-file;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AlchemyCRM"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User launches Alchemy CRM portal",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User Logs In to CRM site",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User navigates to Create Lead screen",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User creates lead accounts and verifies using \"AfirstName59\" and \"AlastName59\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Closes CRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlchemyCRM.launchJobBackend()"
});
formatter.result({
  "duration": 9907768500,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.loginToCRM()"
});
formatter.result({
  "duration": 3382943700,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.navigateToCreateLead()"
});
formatter.result({
  "duration": 4795493900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AfirstName59",
      "offset": 47
    },
    {
      "val": "AlastName59",
      "offset": 66
    }
  ],
  "location": "AlchemyCRM.adddetails(String,String)"
});
formatter.result({
  "duration": 6161091200,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.closeCRM()"
});
formatter.result({
  "duration": 1234166901,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Open the Leads page and add multiple lead accounts using values passed from Feature file",
  "description": "",
  "id": "activities-of-orange-hrm-portal;open-the-leads-page-and-add-multiple-lead-accounts-using-values-passed-from-feature-file;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AlchemyCRM"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User launches Alchemy CRM portal",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User Logs In to CRM site",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User navigates to Create Lead screen",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User creates lead accounts and verifies using \"AfirstName69\" and \"AlastName69\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Closes CRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlchemyCRM.launchJobBackend()"
});
formatter.result({
  "duration": 9630000600,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.loginToCRM()"
});
formatter.result({
  "duration": 3385536200,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.navigateToCreateLead()"
});
formatter.result({
  "duration": 4398287800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AfirstName69",
      "offset": 47
    },
    {
      "val": "AlastName69",
      "offset": 66
    }
  ],
  "location": "AlchemyCRM.adddetails(String,String)"
});
formatter.result({
  "duration": 6675115300,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.closeCRM()"
});
formatter.result({
  "duration": 1172645900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "To use an Examples table to add products",
  "description": "",
  "id": "activities-of-orange-hrm-portal;to-use-an-examples-table-to-add-products",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "User launches Alchemy CRM portal",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User Logs In to CRM site",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User navigates to create product",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User enters all the details using \"\u003cprodName\u003e\", \"\u003cprice\u003e\" and \"\u003cdesc\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User Verifies the created product",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Closes CRM browser",
  "keyword": "And "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "activities-of-orange-hrm-portal;to-use-an-examples-table-to-add-products;",
  "rows": [
    {
      "cells": [
        "prodName",
        "price",
        "desc"
      ],
      "line": 48,
      "id": "activities-of-orange-hrm-portal;to-use-an-examples-table-to-add-products;;1"
    },
    {
      "cells": [
        "product19",
        "15",
        "Product for Cucumber project"
      ],
      "line": 49,
      "id": "activities-of-orange-hrm-portal;to-use-an-examples-table-to-add-products;;2"
    },
    {
      "cells": [
        "product29",
        "15",
        "Product for Cucumber project"
      ],
      "line": 50,
      "id": "activities-of-orange-hrm-portal;to-use-an-examples-table-to-add-products;;3"
    },
    {
      "cells": [
        "product39",
        "15",
        "Product for Cucumber project"
      ],
      "line": 51,
      "id": "activities-of-orange-hrm-portal;to-use-an-examples-table-to-add-products;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 49,
  "name": "To use an Examples table to add products",
  "description": "",
  "id": "activities-of-orange-hrm-portal;to-use-an-examples-table-to-add-products;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AlchemyCRM"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "User launches Alchemy CRM portal",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User Logs In to CRM site",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User navigates to create product",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User enters all the details using \"product19\", \"15\" and \"Product for Cucumber project\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User Verifies the created product",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Closes CRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlchemyCRM.launchJobBackend()"
});
formatter.result({
  "duration": 7533808900,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.loginToCRM()"
});
formatter.result({
  "duration": 2965504200,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.navigateToCreateProduct()"
});
formatter.result({
  "duration": 3695184600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product19",
      "offset": 35
    },
    {
      "val": "15",
      "offset": 48
    },
    {
      "val": "Product for Cucumber project",
      "offset": 57
    }
  ],
  "location": "AlchemyCRM.addProductDetails(String,String,String)"
});
formatter.result({
  "duration": 2931043099,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.verifyProduct()"
});
formatter.result({
  "duration": 1981131501,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.closeCRM()"
});
formatter.result({
  "duration": 990484999,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "To use an Examples table to add products",
  "description": "",
  "id": "activities-of-orange-hrm-portal;to-use-an-examples-table-to-add-products;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AlchemyCRM"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "User launches Alchemy CRM portal",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User Logs In to CRM site",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User navigates to create product",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User enters all the details using \"product29\", \"15\" and \"Product for Cucumber project\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User Verifies the created product",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Closes CRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlchemyCRM.launchJobBackend()"
});
formatter.result({
  "duration": 7804981901,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.loginToCRM()"
});
formatter.result({
  "duration": 2982634500,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.navigateToCreateProduct()"
});
formatter.result({
  "duration": 2829959400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product29",
      "offset": 35
    },
    {
      "val": "15",
      "offset": 48
    },
    {
      "val": "Product for Cucumber project",
      "offset": 57
    }
  ],
  "location": "AlchemyCRM.addProductDetails(String,String,String)"
});
formatter.result({
  "duration": 2854641100,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.verifyProduct()"
});
formatter.result({
  "duration": 1905814400,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.closeCRM()"
});
formatter.result({
  "duration": 1024398399,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "To use an Examples table to add products",
  "description": "",
  "id": "activities-of-orange-hrm-portal;to-use-an-examples-table-to-add-products;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AlchemyCRM"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "User launches Alchemy CRM portal",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User Logs In to CRM site",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User navigates to create product",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User enters all the details using \"product39\", \"15\" and \"Product for Cucumber project\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User Verifies the created product",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Closes CRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlchemyCRM.launchJobBackend()"
});
formatter.result({
  "duration": 7072103500,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.loginToCRM()"
});
formatter.result({
  "duration": 2538429499,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.navigateToCreateProduct()"
});
formatter.result({
  "duration": 2748958201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product39",
      "offset": 35
    },
    {
      "val": "15",
      "offset": 48
    },
    {
      "val": "Product for Cucumber project",
      "offset": 57
    }
  ],
  "location": "AlchemyCRM.addProductDetails(String,String,String)"
});
formatter.result({
  "duration": 2763618999,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.verifyProduct()"
});
formatter.result({
  "duration": 2021662800,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.closeCRM()"
});
formatter.result({
  "duration": 1106936700,
  "status": "passed"
});
formatter.uri("AlchemyJobs.feature");
formatter.feature({
  "line": 2,
  "name": "Activities of Alchemy Job portal",
  "description": "",
  "id": "activities-of-alchemy-job-portal",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@alchemyJobs"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Visit the site�s backend and create a new user",
  "description": "",
  "id": "activities-of-alchemy-job-portal;visit-the-site�s-backend-and-create-a-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User launches the backend URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Logs In to site\u0027s backend",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User navigates to Add New User screen",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Adds all the necessary details and creates new user",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verifies the added user",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlchemyJobs.launchJobBackend()"
});
formatter.result({
  "duration": 6670950800,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.logIn()"
});
formatter.result({
  "duration": 2078794901,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.addNew()"
});
formatter.result({
  "duration": 3005798801,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.addDetails()"
});
formatter.result({
  "duration": 2546258700,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.verifyUser()"
});
formatter.result({
  "duration": 2541837000,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.closeBrowser()"
});
formatter.result({
  "duration": 1050199899,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Visit the site�s frontend and apply for Job",
  "description": "",
  "id": "activities-of-alchemy-job-portal;visit-the-site�s-frontend-and-apply-for-job",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "User launches the frontent URL",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User navigates to Jobs page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User Searches for a job full time \"Test Specialist\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Applies for the Job listed",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlchemyJobs.launchFrontEnd()"
});
formatter.result({
  "duration": 6247331800,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.navigateToJobs()"
});
formatter.result({
  "duration": 1055907999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Specialist",
      "offset": 35
    }
  ],
  "location": "AlchemyJobs.jobSearch(String)"
});
formatter.result({
  "duration": 1515727800,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.openandApplyJob()"
});
formatter.result({
  "duration": 2434564000,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.closeBrowser()"
});
formatter.result({
  "duration": 982750999,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Visit the site�s frontend and apply for Job",
  "description": "",
  "id": "activities-of-alchemy-job-portal;visit-the-site�s-frontend-and-apply-for-job",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User launches the frontent URL",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User navigates to Post A job",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User logs in to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Fills job details",
  "rows": [
    {
      "cells": [
        "Test Specialist",
        "IBM SDET Batch 2 Training Test Job",
        "https://alchemy.hguy.co/",
        "Alchemy IBM",
        "Alchemy IBM Testing"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User verifies the job posted",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlchemyJobs.launchFrontEnd()"
});
formatter.result({
  "duration": 6099340401,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.navigateToPostJob()"
});
formatter.result({
  "duration": 2162243700,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.signIn()"
});
formatter.result({
  "duration": 2142603401,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.fillDetails(DataTable)"
});
formatter.result({
  "duration": 2670766800,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.verifyJobPOst()"
});
formatter.result({
  "duration": 2888627400,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.closeBrowser()"
});
formatter.result({
  "duration": 1004780600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Visit the site�s frontend and apply for Job",
  "description": "",
  "id": "activities-of-alchemy-job-portal;visit-the-site�s-frontend-and-apply-for-job",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User launches the frontent URL",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User navigates to Post A job",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User logs in to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Fills job details with \"\u003ctitle\u003e\", \"\u003cdescription\u003e\", \"\u003cwebsite\u003e\", \"\u003ccompanyName\u003e\" and \"\u003ccompanyTagline\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User verifies the job posted",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "activities-of-alchemy-job-portal;visit-the-site�s-frontend-and-apply-for-job;",
  "rows": [
    {
      "cells": [
        "title",
        "description",
        "website",
        "companyName",
        "companyTagline"
      ],
      "line": 40,
      "id": "activities-of-alchemy-job-portal;visit-the-site�s-frontend-and-apply-for-job;;1"
    },
    {
      "cells": [
        "Test Specialist",
        "IBM SDET Batch 2 Training Test Job",
        "https://alchemy.hguy.co/",
        "Alchemy IBM",
        "Alchemy IBM Testing"
      ],
      "line": 41,
      "id": "activities-of-alchemy-job-portal;visit-the-site�s-frontend-and-apply-for-job;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "Visit the site�s frontend and apply for Job",
  "description": "",
  "id": "activities-of-alchemy-job-portal;visit-the-site�s-frontend-and-apply-for-job;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@alchemyJobs"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User launches the frontent URL",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User navigates to Post A job",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User logs in to the site",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Fills job details with \"Test Specialist\", \"IBM SDET Batch 2 Training Test Job\", \"https://alchemy.hguy.co/\", \"Alchemy IBM\" and \"Alchemy IBM Testing\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User verifies the job posted",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlchemyJobs.launchFrontEnd()"
});
formatter.result({
  "duration": 6756593700,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.navigateToPostJob()"
});
formatter.result({
  "duration": 2024720900,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.signIn()"
});
formatter.result({
  "duration": 2209311301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Specialist",
      "offset": 24
    },
    {
      "val": "IBM SDET Batch 2 Training Test Job",
      "offset": 43
    },
    {
      "val": "https://alchemy.hguy.co/",
      "offset": 81
    },
    {
      "val": "Alchemy IBM",
      "offset": 109
    },
    {
      "val": "Alchemy IBM Testing",
      "offset": 127
    }
  ],
  "location": "AlchemyJobs.fillDetailsExamples(String,String,String,String,String)"
});
formatter.result({
  "duration": 2263191099,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.verifyJobPOst()"
});
formatter.result({
  "duration": 2761252300,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.closeBrowser()"
});
formatter.result({
  "duration": 1007560000,
  "status": "passed"
});
});