package activitiesRunner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/Features",
		glue = {"stepDefinition"},
		tags = {"@OrangeHRM"},
		plugin = { "pretty", "html:target/cucumber-reports/OrangeHRM-Reports" , "json:target/cucumber-reports/OrangeHRM"},
		strict = true
)

public class ActivitiesRunner {

}
