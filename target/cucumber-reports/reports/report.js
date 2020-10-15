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
  "duration": 8387358100,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.loginToCRM()"
});
formatter.result({
  "duration": 2485273300,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.countDashlet()"
});
formatter.result({
  "duration": 1483235500,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.closeCRM()"
});
formatter.result({
  "duration": 1138127599,
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
  "duration": 7266415899,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.loginToCRM()"
});
formatter.result({
  "duration": 2192711500,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.navigateToMeeting()"
});
formatter.result({
  "duration": 2733941999,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.fillDetails(DataTable)"
});
formatter.result({
  "duration": 7009610600,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.verifymeeting()"
});
formatter.result({
  "duration": 2073003101,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.closeCRM()"
});
formatter.result({
  "duration": 995409199,
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
        "AfirstName17",
        "AlastName17"
      ],
      "line": 33,
      "id": "activities-of-orange-hrm-portal;open-the-leads-page-and-add-multiple-lead-accounts-using-values-passed-from-feature-file;;2"
    },
    {
      "cells": [
        "AfirstName27",
        "AlastName27"
      ],
      "line": 34,
      "id": "activities-of-orange-hrm-portal;open-the-leads-page-and-add-multiple-lead-accounts-using-values-passed-from-feature-file;;3"
    },
    {
      "cells": [
        "AfirstName37",
        "AlastName37"
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
  "name": "User creates lead accounts and verifies using \"AfirstName17\" and \"AlastName17\"",
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
  "duration": 8522107400,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.loginToCRM()"
});
formatter.result({
  "duration": 3264047499,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.navigateToCreateLead()"
});
formatter.result({
  "duration": 2934783699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AfirstName17",
      "offset": 47
    },
    {
      "val": "AlastName17",
      "offset": 66
    }
  ],
  "location": "AlchemyCRM.adddetails(String,String)"
});
formatter.result({
  "duration": 7215684400,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.closeCRM()"
});
formatter.result({
  "duration": 1033673700,
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
  "name": "User creates lead accounts and verifies using \"AfirstName27\" and \"AlastName27\"",
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
  "duration": 6783685600,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.loginToCRM()"
});
formatter.result({
  "duration": 3181094700,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.navigateToCreateLead()"
});
formatter.result({
  "duration": 2818271000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AfirstName27",
      "offset": 47
    },
    {
      "val": "AlastName27",
      "offset": 66
    }
  ],
  "location": "AlchemyCRM.adddetails(String,String)"
});
formatter.result({
  "duration": 6127610000,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.closeCRM()"
});
formatter.result({
  "duration": 1212034100,
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
  "name": "User creates lead accounts and verifies using \"AfirstName37\" and \"AlastName37\"",
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
  "duration": 7764954300,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.loginToCRM()"
});
formatter.result({
  "duration": 2297411400,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.navigateToCreateLead()"
});
formatter.result({
  "duration": 2899079200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AfirstName37",
      "offset": 47
    },
    {
      "val": "AlastName37",
      "offset": 66
    }
  ],
  "location": "AlchemyCRM.adddetails(String,String)"
});
formatter.result({
  "duration": 5890755200,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.closeCRM()"
});
formatter.result({
  "duration": 997452500,
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
        "product17",
        "15",
        "Product for Cucumber project"
      ],
      "line": 49,
      "id": "activities-of-orange-hrm-portal;to-use-an-examples-table-to-add-products;;2"
    },
    {
      "cells": [
        "product27",
        "15",
        "Product for Cucumber project"
      ],
      "line": 50,
      "id": "activities-of-orange-hrm-portal;to-use-an-examples-table-to-add-products;;3"
    },
    {
      "cells": [
        "product37",
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
  "name": "User enters all the details using \"product17\", \"15\" and \"Product for Cucumber project\"",
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
  "duration": 7549116199,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.loginToCRM()"
});
formatter.result({
  "duration": 2715709200,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.navigateToCreateProduct()"
});
formatter.result({
  "duration": 3112088300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product17",
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
  "duration": 2632079900,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.verifyProduct()"
});
formatter.result({
  "duration": 1962862099,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.closeCRM()"
});
formatter.result({
  "duration": 963171599,
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
  "name": "User enters all the details using \"product27\", \"15\" and \"Product for Cucumber project\"",
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
  "duration": 7303180600,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.loginToCRM()"
});
formatter.result({
  "duration": 2318311200,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.navigateToCreateProduct()"
});
formatter.result({
  "duration": 2710176000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product27",
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
  "duration": 2671873200,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.verifyProduct()"
});
formatter.result({
  "duration": 1954629900,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.closeCRM()"
});
formatter.result({
  "duration": 990994900,
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
  "name": "User enters all the details using \"product37\", \"15\" and \"Product for Cucumber project\"",
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
  "duration": 7139692000,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.loginToCRM()"
});
formatter.result({
  "duration": 2512452400,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.navigateToCreateProduct()"
});
formatter.result({
  "duration": 3155125500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product37",
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
  "duration": 2740065001,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.verifyProduct()"
});
formatter.result({
  "duration": 2013541200,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyCRM.closeCRM()"
});
formatter.result({
  "duration": 1112001000,
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
  "duration": 6749712401,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.logIn()"
});
formatter.result({
  "duration": 2012887001,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.addNew()"
});
formatter.result({
  "duration": 3403443600,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.addDetails()"
});
formatter.result({
  "duration": 2092441200,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.verifyUser()"
});
formatter.result({
  "duration": 2575126500,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.closeBrowser()"
});
formatter.result({
  "duration": 1164431501,
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
  "duration": 6053905999,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.navigateToJobs()"
});
formatter.result({
  "duration": 850411700,
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
  "duration": 1515819401,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.openandApplyJob()"
});
formatter.result({
  "duration": 1643805100,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.closeBrowser()"
});
formatter.result({
  "duration": 1398427000,
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
  "duration": 5916993799,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.navigateToPostJob()"
});
formatter.result({
  "duration": 1882641200,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.signIn()"
});
formatter.result({
  "duration": 2171468500,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.fillDetails(DataTable)"
});
formatter.result({
  "duration": 3167509700,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.verifyJobPOst()"
});
formatter.result({
  "duration": 3630435400,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.closeBrowser()"
});
formatter.result({
  "duration": 1148298199,
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
  "duration": 6470181899,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.navigateToPostJob()"
});
formatter.result({
  "duration": 2211898600,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.signIn()"
});
formatter.result({
  "duration": 2241856599,
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
  "duration": 2852276299,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.verifyJobPOst()"
});
formatter.result({
  "duration": 3367462099,
  "status": "passed"
});
formatter.match({
  "location": "AlchemyJobs.closeBrowser()"
});
formatter.result({
  "duration": 1468850900,
  "status": "passed"
});
formatter.uri("OrangeHRM.feature");
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
  "duration": 6096581499,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.login()"
});
formatter.result({
  "duration": 1503512300,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.navigateToVacancy()"
});
formatter.result({
  "duration": 1882446000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.addVacancy()"
});
formatter.result({
  "duration": 1121664799,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyVacancyAdded()"
});
formatter.result({
  "duration": 1943588699,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.closeOrange()"
});
formatter.result({
  "duration": 1063045801,
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
  "duration": 6846021099,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.login()"
});
formatter.result({
  "duration": 1519942800,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.navigateToAddCandidate()"
});
formatter.result({
  "duration": 796314700,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #btnAdd\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.0\u0027, revision: \u00272ecb7d9a\u0027, time: \u00272018-10-31T20:09:30\u0027\nSystem info: host: \u0027LAPTOP-0J7NNLBG\u0027, ip: \u0027172.20.10.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.8\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 80.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200831163820, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 16324, moz:profile: C:\\Users\\NeelimaKadali\\AppD..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b2edb84d-f2d5-4e24-81b6-bd1acba3dd1a\n*** Element info: {Using\u003did, value\u003dbtnAdd}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor9.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.OrangeHRM.navigateToAddCandidate(OrangeHRM.java:75)\r\n\tat ✽.Then User navigates to Add Candidate(OrangeHRM.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "OrangeHRM.addCandidate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHRM.verifyCandidate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHRM.closeOrange()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 6775255000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.login()"
});
formatter.result({
  "duration": 1439123000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.navigateToEmployeeList()"
});
formatter.result({
  "duration": 1567947700,
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
  "duration": 3107689300,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyCandidateEx()"
});
formatter.result({
  "duration": 125474000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.closeOrange()"
});
formatter.result({
  "duration": 1095890800,
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
  "duration": 6017129500,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.login()"
});
formatter.result({
  "duration": 1466555500,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.navigateToEmployeeList()"
});
formatter.result({
  "duration": 1462285300,
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
  "duration": 2718987000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyCandidateEx()"
});
formatter.result({
  "duration": 124591199,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.closeOrange()"
});
formatter.result({
  "duration": 1109808501,
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
