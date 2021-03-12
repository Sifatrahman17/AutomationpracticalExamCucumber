package step;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.Change_The_ColorPage;
import util.BrowserFactory;

public class StepDefinition {
	WebDriver driver;
	Change_The_ColorPage change_The_ColorPage;

	@Before
	public void beforetest() {
		driver = BrowserFactory.startBrowser();
		change_The_ColorPage = PageFactory.initElements(driver, Change_The_ColorPage.class);
	}

	@Given("^User is on the changeTheColorPage$")
	public void user_is_on_the_changeTheColorPage() {
		System.out.println("First step-User is in Url page");
		driver.get("https://techfios.com/test/101/");
	}

	@When("^Set SkyBlue Background button exists$")
	public void set_SkyBlue_Background_button_exists() {

	}

	@When("^I click on the button$")
	public void i_click_on_the_button() throws Throwable {
		
	}

	@Then("^The background color will change to sky blue$")
	public void the_background_color_will_change_to_sky_blue() {
		
	}

	@Given("^Set SkyWhite Background button exists$")
	public void set_SkyWhite_Background_button_exists() {

	}

	@Then("^The background color will change to sky white$")
	public void the_background_color_will_change_to_sky_white() {

	}

}
