package stepDefinition;

import java.util.List;
import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AlchemyJobs {

	
		WebDriver driver;
		WebDriverWait wait;
	    Random rand = new Random();
	    String userName,jobTitle;

	    
	    @Given("^User launches the backend URL$")
	    public void launchJobBackend() {
	        //Create a new instance of the Firefox driver
	    	System.setProperty("webdriver.gecko.driver", "C:\\Selenium\\geckodriver.exe");
	    	driver = new FirefoxDriver();
	        wait = new WebDriverWait(driver, 15);
	                
	        //Open the browser
	        driver.get("https://alchemy.hguy.co/jobs/wp-admin");
	        driver.manage().window().maximize();
	    }
	    
	    @Given("^User launches the frontent URL$")
	    public void launchFrontEnd() {
	        //Create a new instance of the Firefox driver
	    	System.setProperty("webdriver.gecko.driver", "C:\\Selenium\\geckodriver.exe");
	    	driver = new FirefoxDriver();
	        wait = new WebDriverWait(driver, 15);
	                
	        //Open the browser
	        driver.get("https://alchemy.hguy.co/jobs/");
	        driver.manage().window().maximize();
	    }
	    
	    
	    @When("^User Logs In to site's backend$")
	    public void logIn() {
	    	//Log In
	    	driver.findElement(By.id("user_login")).sendKeys("root");
	  	  	driver.findElement(By.id("user_pass")).sendKeys("pa$$w0rd");
	  	  	driver.findElement(By.id("wp-submit")).click();
	  	  	Assert.assertEquals(driver.getTitle(), "Dashboard ‹ Alchemy Jobs — WordPress", "Not Logged In: "+ driver.getTitle());
	  	  	
	    }

	    @Then("^User navigates to Add New User screen$")
	    public void addNew(){
	    	
	    	driver.findElement(By.xpath("//div[contains(text(),'Users')]")).click();
	    	driver.findElement(By.xpath("//div[@id='wpbody-content']//a[text()='Add New']")).click();
	    	
	    	String title = driver.findElement(By.tagName("h1")).getText();
	    	Assert.assertEquals(title, "Add New User");
	    }
	    
	    @And("^Adds all the necessary details and creates new user$")
	    public void addDetails() {
	    	
	    	userName = "testUserName"+ rand.nextInt(1000);
	    	driver.findElement(By.id("user_login")).sendKeys(userName);
	    	driver.findElement(By.id("email")).sendKeys(userName + "@alchemy.com");
	    	driver.findElement(By.id("first_name")).sendKeys("firstNametest");
	    	driver.findElement(By.id("last_name")).sendKeys("lastNametest");
	    	driver.findElement(By.xpath("//button[text()='Show password']")).click();
	    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("pass-strength-result")));
	    	driver.findElement(By.id("createusersub")).click();
	    	
	    }
	    
	    @And("^Verifies the added user$")
	    public void verifyUser() {
	    	
	    	driver.findElement(By.id("user-search-input")).sendKeys(userName);
	    	driver.findElement(By.id("search-submit")).click();
	    	driver.findElement(By.xpath("//a[text()='"+ userName+"']")).click();
	    	String title = driver.findElement(By.tagName("h1")).getText();
	    	Assert.assertEquals(title, "Edit User firstNametest lastNametest");
	    	
	    	
	    }
	   

	    
	   
		
		@When("^User navigates to Jobs page$")
	    public void navigateToJobs() {
	    	
	    	driver.findElement(By.xpath("//li[@id='menu-item-24']/a[contains(text(),'Jobs')]")).click();
	    	String job = driver.findElement(By.id("post-7")).findElement(By.tagName("h1")).getText();
	  	  	Assert.assertEquals(job, "Jobs","You are on the wrong page.");
	  	  	
	    }
	    
	    @Then("^User Searches for a job full time \"(.*)\"$")
	    public void jobSearch(String jobTitle) {
	    	
	    	driver.findElement(By.id("search_keywords")).sendKeys(jobTitle);
	  	  	driver.findElement(By.className("search_submit")).findElement(By.tagName("input")).click();
	  	  	
	  	  	//Full Time select
	  	  	driver.findElement(By.xpath("//input[@id='job_type_freelance']")).click();
	  	  	driver.findElement(By.xpath("//input[@id='job_type_internship']")).click();
	  	  	driver.findElement(By.xpath("//input[@id='job_type_part-time']")).click();
	  	  	driver.findElement(By.xpath("//input[@id='job_type_temporary']")).click();
	  	  	if (driver.findElement(By.xpath("//input[@id='job_type_full-time']")).isSelected()) {
	  	  		System.out.println("Full Time is Selected");
	  	  	}
	  	  	else {
	  	  	driver.findElement(By.xpath("//input[@id='job_type_full-time']")).click();
	  	  	System.out.println("Full Time is Selected");
	  	  	}
	  	  	
	  	
	    }
	    
	    @And("^Applies for the Job listed$")
	    public void openandApplyJob() {
	    	
	    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("(//ul[contains(@class,'job_listings')]/li)[1]")));
	  	  	driver.findElement(By.xpath("(//ul[contains(@class,'job_listings')]/li)[1]")).click();
	  	  	
	  	  	//printing jobtitle
	  	  	String job = driver.findElement(By.tagName("h1")).getText();
	  	  	System.out.println(job);
	  	  	
	  	  	//apply for job
	  	  	driver.findElement(By.xpath("//input[contains(@value,'Apply for job')]")).click();
	  	  	String email = driver.findElement(By.className("application_details")).findElement(By.tagName("p")).getText();
	  	  	System.out.println(email);
	    	
	    }
	    
	    @When("^User navigates to Post A job$")
	    public void navigateToPostJob() {
	  	  driver.findElement(By.xpath("//a[contains(text(),'Post a Job')]")).click();
	  	  String postjob = driver.findElement(By.id("post-5")).findElement(By.tagName("h1")).getText();
	  	  System.out.println(postjob);
	  	  Assert.assertEquals(postjob, "Post a Job","You are on the wrong page.");
	    }
	    
	    @When("^User logs in to the site$")
	    public void signIn() {
	  	  driver.findElement(By.className("button")).click();
	  	  driver.findElement(By.id("user_login")).sendKeys("root");
	  	  driver.findElement(By.id("user_pass")).sendKeys("pa$$w0rd");
	  	  driver.findElement(By.id("wp-submit")).click();
	    }
	    
	    @And("^Fills job details$")
	    public void fillDetails(DataTable jobDetails) {

	      List<List<String>> details = jobDetails.raw();
	      jobTitle = details.get(0).get(0);
	  	  driver.findElement(By.id("job_title")).sendKeys(details.get(0).get(0));
	  	  driver.findElement(By.id("job_location")).sendKeys("India");
	  	  Select jobtype = new Select(driver.findElement(By.id("job_type")));
	  	  jobtype.selectByVisibleText("Full Time");
	  	  
	  	  driver.switchTo().frame("job_description_ifr");
	  	  driver.findElement(By.id("tinymce")).sendKeys(details.get(0).get(1));
	  	  driver.switchTo().defaultContent();
	  	  driver.findElement(By.id("application")).clear();
	  	  driver.findElement(By.id("application")).sendKeys(details.get(0).get(2));
	  	  driver.findElement(By.id("company_name")).clear();
	  	  driver.findElement(By.id("company_name")).sendKeys(details.get(0).get(3));
	  	  driver.findElement(By.id("company_tagline")).sendKeys(details.get(0).get(4));
	  	  driver.findElement(By.name("submit_job")).click();
	  	  
	  	  //Submitting the Job Listing
	  	  String JobtitleNew = driver.findElement(By.xpath("//div[contains(@class,'job_listing_preview_title')]//following-sibling::div")).findElement(By.tagName("h1")).getText();
	  	  Assert.assertEquals(JobtitleNew, details.get(0).get(0), "An Error has Occured: "+JobtitleNew );
	  	  driver.findElement(By.id("job_preview_submit_button")).click();
	  	  
	  	  String success = driver.findElement(By.xpath("//div[contains(@class,'entry-content clear')]")).getText();
	  	  Assert.assertEquals(success, "Job listed successfully. To view your listing click here.");
	    }
	    
	    @And("^Fills job details with \"(.*)\", \"(.*)\", \"(.*)\", \"(.*)\" and \"(.*)\"$")
	    public void fillDetailsExamples(String title, String desc, String web, String cName, String Ctagline) {
	    	
	      jobTitle = title;
	  	  driver.findElement(By.id("job_title")).sendKeys(title);
	  	  driver.findElement(By.id("job_location")).sendKeys("India");
	  	  Select jobtype = new Select(driver.findElement(By.id("job_type")));
	  	  jobtype.selectByVisibleText("Full Time");
	  	  
	  	  driver.switchTo().frame("job_description_ifr");
	  	  driver.findElement(By.id("tinymce")).sendKeys(desc);
	  	  driver.switchTo().defaultContent();
	  	  driver.findElement(By.id("application")).clear();
	  	  driver.findElement(By.id("application")).sendKeys(web);
	  	  driver.findElement(By.id("company_name")).clear();
	  	  driver.findElement(By.id("company_name")).sendKeys(cName);
	  	  driver.findElement(By.id("company_tagline")).sendKeys(Ctagline);
	  	  driver.findElement(By.name("submit_job")).click();
	  	  
	  	  //Submitting the Job Listing
	  	  String JobtitleNew = driver.findElement(By.xpath("//div[contains(@class,'job_listing_preview_title')]//following-sibling::div")).findElement(By.tagName("h1")).getText();
	  	  Assert.assertEquals(JobtitleNew, title, "An Error has Occured: "+JobtitleNew );
	  	  driver.findElement(By.id("job_preview_submit_button")).click();
	  	  
	  	  String success = driver.findElement(By.xpath("//div[contains(@class,'entry-content clear')]")).getText();
	  	  Assert.assertEquals(success, "Job listed successfully. To view your listing click here.");
	    }
	   
	    
	    @And("^User verifies the job posted$") 
	    public void verifyJobPOst() {
	  	  driver.findElement(By.xpath("//li[@id='menu-item-24']/a[contains(text(),'Jobs')]")).click();

	  	  String expectedEmail = "To apply for this job please visit alchemy.hguy.co.";
	  	  WebDriverWait wait = new WebDriverWait(driver, 40);
	  	  driver.findElement(By.id("search_keywords")).sendKeys(jobTitle);
	  	  driver.findElement(By.className("search_submit")).findElement(By.tagName("input")).click();
	  	  
	  	  wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("(//ul[contains(@class,'job_listings')]/li)[1]")));
	  	  driver.findElement(By.xpath("(//ul[contains(@class,'job_listings')]/li)[1]")).click();
	  	  driver.findElement(By.xpath("//input[contains(@value,'Apply for job')]")).click();
	  	  String email = driver.findElement(By.className("application_details")).findElement(By.tagName("p")).getText();
	  	  Assert.assertEquals(email, expectedEmail);
	    }

	    
	    @And("^Closes the browser$")
	    public void closeBrowser() {
	    	driver.close();
	    } 

}
