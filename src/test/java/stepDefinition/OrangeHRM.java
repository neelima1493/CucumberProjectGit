package stepDefinition;

import java.util.List;
import java.util.Random;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OrangeHRM {
	
	WebDriver driver;
	WebDriverWait wait;
    Random rand = new Random();
    String VacancyName, candidateName;

    
    @Given("^User launches OrangeHRM$")
    public void launchJobBackend() {
        //Create a new instance of the Firefox driver
    	System.setProperty("webdriver.gecko.driver", "C:\\Selenium\\geckodriver.exe");
    	driver = new FirefoxDriver();
        wait = new WebDriverWait(driver, 15);
                
        //Open the browser
        driver.get("http://alchemy.hguy.co/orangehrm");
        driver.manage().window().maximize();
    }
    
    @When("^User Logs In to site$")
    public void login() {
    	
    	driver.findElement(By.id("txtUsername")).sendKeys("orange");
    	driver.findElement(By.id("txtPassword")).sendKeys("orangepassword123");
    	driver.findElement(By.id("btnLogin")).click();
    }

    @Then("^User navigates to Vacancies$")
    public void navigateToVacancy() {
    	
    	driver.findElement(By.xpath("//b[text()='Recruitment']")).click();
    	driver.findElement(By.id("menu_recruitment_viewJobVacancy")).click();
    	driver.findElement(By.id("btnAdd")).click();
    	String pageTitle = driver.findElement(By.tagName("h1")).getText();
    	Assert.assertEquals(pageTitle, "Add Job Vacancy");
    	
    }
    
    @And("^Adds vacancy to the portal$")
    public void addVacancy() {
    	
    	Select jobTitle = new Select(driver.findElement(By.id("addJobVacancy_jobTitle")));
    	jobTitle.selectByVisibleText("DevOps Engineer");
    	VacancyName = "DevOps Engineer proj" + rand.nextFloat();
    	driver.findElement(By.id("addJobVacancy_name")).sendKeys(VacancyName);
    	driver.findElement(By.id("addJobVacancy_hiringManager")).sendKeys("Test Employee");
    	driver.findElement(By.id("btnSave")).click();
    }
    
    
    @Then("^User navigates to Add Candidate$")
    public void navigateToAddCandidate() {
    	
    	driver.findElement(By.xpath("//b[text()='Recruitment']")).click();
    	driver.findElement(By.id("menu_recruitment_viewCandidates")).click();
    	driver.findElement(By.id("btnAdd")).click();
    	String pageTitle = driver.findElement(By.tagName("h1")).getText();
    	Assert.assertEquals(pageTitle, "Add Candidate");
    	
    }
    
    @And("^Adds Candidate to the portal$")
    public void addCandidate() {
    	
    	String Fname = "FirstName"+ rand.nextFloat();
    	String Lname = "LastName" + rand.nextFloat();
    	candidateName = Fname+" "+Lname;
    	driver.findElement(By.id("addCandidate_firstName")).sendKeys(Fname);
    	driver.findElement(By.id("addCandidate_lastName")).sendKeys(Lname);
    	driver.findElement(By.id("addCandidate_email")).sendKeys(Fname+"@test.com");
    	driver.findElement(By.id("addCandidate_resume")).sendKeys("C:\\Users\\NeelimaKadali\\Desktop\\Candidate Resume.docx");
    	driver.findElement(By.id("btnSave")).click();
    	
    }
    
    @And("^Verifies the added candidate$")
    public void verifyCandidate() {
    	
    	driver.findElement(By.id("menu_recruitment_viewCandidates")).click();
    	WebElement VacancyTable = driver.findElement(By.id("resultTable"));
    	List<WebElement> candidateRows = VacancyTable.findElements(By.tagName("tr"));
    	String candidate = null;
    	for(int i=1; i<candidateRows.size(); i++){
    		if(candidateRows.get(i).findElements(By.tagName("td")).get(2).getText().equals(candidateName)) {
    			
    			candidate = candidateRows.get(i).findElements(By.tagName("td")).get(2).getText();
    			
    		}
    	}
    	 System.out.println(candidate);
    	 Assert.assertEquals(candidateName, candidate);
    }
   
    @Then("^User navigates to Employee List$")
    public void navigateToEmployeeList() {
    	
    	driver.findElement(By.xpath("//b[text()='PIM']")).click();
    	driver.findElement(By.id("menu_pim_viewEmployeeList")).click();
    
    }
    
    @And("^Adds employees using \"(.*)\", \"(.*)\" and \"(.*)\"$")
    public void addEmployees(String firstName, String lastName, String password) {
    	candidateName = firstName+" "+lastName;
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("btnAdd")));
    	driver.findElement(By.id("btnAdd")).click();
    	driver.findElement(By.id("firstName")).sendKeys(firstName);
    	driver.findElement(By.id("lastName")).sendKeys(lastName);
    	driver.findElement(By.id("photofile")).sendKeys("C:\\Users\\NeelimaKadali\\Desktop\\download.png");
    	
    	
    	if (driver.findElement(By.id("chkLogin")).isSelected()) {
  	  		System.out.println("Full Time is Selected");
  	  	}
    	else {
    		driver.findElement(By.id("chkLogin")).click();
    	}
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("user_name")));
    	driver.findElement(By.id("user_name")).sendKeys("user"+rand.nextFloat());
    	driver.findElement(By.id("user_password")).sendKeys(password);
    	driver.findElement(By.id("re_password")).sendKeys(password);
    	driver.findElement(By.id("btnSave")).click();
    }
    
    @And("^Verifies the added employee$")
    public void verifyCandidateEx(){
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("profile-pic")));
    	String Employee = driver.findElement(By.id("profile-pic")).findElement(By.tagName("h1")).getText();
    	System.out.println(Employee);
    	Assert.assertEquals(candidateName, Employee);
    }
    
    @And("^Adds vacancy to the portal using \"(.*)\", \"(.*)\" and \"(.*)\"$")
    public void addVacancyEx(String jobtitle, String vacancy, String HireManager) {
    	
    	Select jobTitle = new Select(driver.findElement(By.id("addJobVacancy_jobTitle")));
    	jobTitle.selectByVisibleText(jobtitle);
    	VacancyName = vacancy + rand.nextFloat();
    	driver.findElement(By.id("addJobVacancy_name")).sendKeys(VacancyName);
    	driver.findElement(By.id("addJobVacancy_hiringManager")).sendKeys(HireManager);
    	driver.findElement(By.id("btnSave")).click();
    }
    
    @And("^Verifies the added vacancy$")
    public void verifyVacancyAdded() {
    	
    	 driver.findElement(By.id("menu_recruitment_viewJobVacancy")).click();
    	 WebElement VacancyTable = driver.findElement(By.id("resultTable"));
    	 List<WebElement> vacancyRows = VacancyTable.findElements(By.tagName("tr"));
    	 String vacancy = null;
    	 for(int i=1; i<vacancyRows.size(); i++){
    		if(vacancyRows.get(i).findElements(By.tagName("td")).get(1).getText().equals(VacancyName)) {
    			
    			vacancy = vacancyRows.get(i).findElements(By.tagName("td")).get(1).getText();
    			
    		}
    		 }
    	 System.out.println(vacancy);
    	 Assert.assertEquals(VacancyName, vacancy);
    	
    }
    
    @And("^Closes Orange HRM browser$")
    public void closeOrange() {
    	driver.close();
    }
}
