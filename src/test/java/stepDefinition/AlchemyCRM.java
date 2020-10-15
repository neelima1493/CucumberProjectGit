package stepDefinition;

import java.util.List;
import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class AlchemyCRM {
	
	WebDriver driver;
	WebDriverWait wait;
    Random rand = new Random();
    String MeetingName, productName;

    
    @Given("^User launches Alchemy CRM portal$")
    public void launchJobBackend() {
        //Create a new instance of the Firefox driver
    	System.setProperty("webdriver.gecko.driver", "C:\\Selenium\\geckodriver.exe");
    	driver = new FirefoxDriver();
        wait = new WebDriverWait(driver, 15);
                
        //Open the browser
        driver.get("https://alchemy.hguy.co/crm/");
        driver.manage().window().maximize();
    }
    
    @When("^User Logs In to CRM site$")
    public void loginToCRM() {
    	
    	driver.findElement(By.id("user_name")).sendKeys("admin");
    	driver.findElement(By.id("username_password")).sendKeys("pa$$w0rd");
    	driver.findElement(By.id("bigbutton")).click();
    	System.out.println(driver.getTitle());
    	
    }
    
    @Then("^User Counts and prints the dashlet titles$")
    public void countDashlet() {
    	
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//li[contains(@id,'dashlet')]")));
    	List<WebElement> dashlets = driver.findElements(By.xpath("//li[contains(@id,'dashlet')]"));
    	System.out.println("Number of Dashlets: "+dashlets.size());
    	
    	for(int i=0;i<dashlets.size();i++) {
    		
    		System.out.println("Dashlet Title: "+dashlets.get(i).findElement(By.tagName("h3")).getText());
    		
    	}

    }
    
    @Then("^User navigates to Create Lead screen$")
    public void navigateToCreateLead() {
    	
    	Actions actions = new Actions(driver);
    	actions.moveToElement(driver.findElement(By.xpath("//a[text()='Sales']"))).perform();
    	driver.findElement(By.xpath("//a[text()='Leads']")).click();
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[text()='Create Lead']")));
    	driver.findElement(By.xpath("//div[text()='Create Lead']")).click();
    }
    
    
    @And("^User creates lead accounts and verifies using \"(.*)\" and \"(.*)\"$")
    public void adddetails(String FName, String LName) {
    	String LeadName = "MISS "+FName.toUpperCase()+" "+LName.toUpperCase();
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("first_name")));
    	driver.findElement(By.id("first_name")).sendKeys(FName);
    	driver.findElement(By.id("last_name")).sendKeys(LName);
    	Select salutation = new Select(driver.findElement(By.id("salutation")));
    	salutation.selectByVisibleText("Miss");
    	driver.findElement(By.id("Leads0emailAddress0")).sendKeys(FName+"."+LName+"@test.com");
    	driver.findElement(By.id("SAVE")).click();
    	String save = driver.findElement(By.id("pagecontent")).findElement(By.tagName("h2")).getText();
    	System.out.println(save);
    	Assert.assertEquals(LeadName,save);
    	driver.findElement(By.xpath("//div[text()='View Leads']")).click();
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='content']//h2")));
    	String title = driver.findElement(By.id("content")).findElement(By.tagName("h2")).getText();
    	Assert.assertEquals("LEADS", title.trim());
    }
    
    @Then("^User navigates to Schedule a Meeting$")
    public void navigateToMeeting() {
    	
    	Actions actions = new Actions(driver);
    	actions.moveToElement(driver.findElement(By.xpath("//a[text()='Activities']"))).perform();
    	driver.findElement(By.xpath("//a[text()='Meetings']")).click();
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[text()='Schedule Meeting']")));
    	driver.findElement(By.xpath("//div[text()='Schedule Meeting']")).click();
    }
    
    @And("^User enters all the details$")
    public void fillDetails(DataTable names) {
    	List<List<String>> details = names.raw();
    	MeetingName = "Test Meeting"+rand.nextInt(100);
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("name")));
    	driver.findElement(By.id("name")).sendKeys(MeetingName);
    	driver.findElement(By.id("date_start_date")).sendKeys("10/06/2020");
    	driver.findElement(By.id("date_end_date")).sendKeys("10/06/2020");
    	driver.findElement(By.id("description")).sendKeys("Test Meeting for Cucumber Framework");
    	
    	for(int i=0;i<details.size();i++) {
    		driver.findElement(By.id("search_first_name")).clear();
    		driver.findElement(By.id("search_first_name")).sendKeys(details.get(i).get(0));
    		driver.findElement(By.id("invitees_search")).click();
    		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("invitees_add_1")));
        	driver.findElement(By.id("invitees_add_1")).click();
  	
        	}
    	
    	driver.findElement(By.id("SAVE_HEADER")).click();
    	
    }
    
    @And("^User Verifies the created meeting$")
    public void verifymeeting() {
    	
    	driver.findElement(By.xpath("//div[contains(text(),'View Meetings')]")).click();
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//table[contains(@class,'list view table-responsive')]")));
    	WebElement table = driver.findElement(By.xpath("//table[contains(@class,'list view table-responsive')]"));
    	List<WebElement> tableRows = table.findElements(By.xpath("//table[contains(@class,'list view table-responsive')]/tbody/tr"));
    	System.out.println(tableRows.size());
    	String meeting=null;
    	for(int i=1; i<=tableRows.size(); i++){
    		
    		if(driver.findElement(By.xpath("//table[contains(@class,'list view table-responsive')]/tbody/tr["+i+"]/td[4]//a")).getText().equals(MeetingName)) 
    		{
    			
    			meeting = driver.findElement(By.xpath("//table[contains(@class,'list view table-responsive')]/tbody/tr["+i+"]/td[4]//a")).getText();
    			break;
    		}
    		
    	}
    	System.out.println(meeting);
    	Assert.assertEquals(MeetingName, meeting);
    	
    }
    
    @Then("^User navigates to create product$")
    public void navigateToCreateProduct() {
    	Actions actions = new Actions(driver);
    	actions.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'All')]"))).perform();
    	driver.findElement(By.xpath("//a[text()='Products']")).click();
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[text()='Create Product']")));
    	driver.findElement(By.xpath("//div[text()='Create Product']")).click();
    }
    
    @And("^User enters all the details using \"(.*)\", \"(.*)\" and \"(.*)\"$")
    public void addProductDetails(String prodName, String price, String desc) {
    	productName = prodName;
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("name")));
    	driver.findElement(By.id("name")).sendKeys(prodName);
    	driver.findElement(By.id("price")).sendKeys(price);
    	driver.findElement(By.id("description")).sendKeys(desc);
    	driver.findElement(By.id("SAVE")).click();
    }
    
    @And("^User Verifies the created product$")
    public void verifyProduct() {
    	
    	driver.findElement(By.xpath("//div[text()='View Products']")).click();
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//table[contains(@class,'list view table-responsive')]")));
    	WebElement table = driver.findElement(By.xpath("//table[contains(@class,'list view table-responsive')]"));
    	List<WebElement> tableRows = table.findElements(By.xpath("//table[contains(@class,'list view table-responsive')]/tbody/tr"));
    	System.out.println(tableRows.size());
    	String prod=null;
    	for(int i=1; i<=tableRows.size(); i++){
    		
    		if(driver.findElement(By.xpath("//table[contains(@class,'list view table-responsive')]/tbody/tr["+i+"]/td[3]//a")).getText().equals(productName)) 
    		{
    			
    			prod = driver.findElement(By.xpath("//table[contains(@class,'list view table-responsive')]/tbody/tr["+i+"]/td[3]//a")).getText();
    			break;
    		}
    		
    	}
    	System.out.println(prod);
    	Assert.assertEquals(productName, prod);
    	
    }
    
    @And("^Closes CRM browser$")
    public void closeCRM() {
    	driver.close();
    }

}
