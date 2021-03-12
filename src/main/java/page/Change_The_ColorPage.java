package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Change_The_ColorPage {
	
	WebDriver driver;

	public Change_The_ColorPage(WebDriver driver) {
		this.driver = driver;
	}
	
	
	@FindBy(how = How.XPATH,using ="//button[contains(text(),'Set SkyBlue Background')]")
	WebElement SKY_BLUE_BACKGROUND;
	@FindBy(how = How.XPATH, using = "//button[contains(text(),'Set White Background')]//button[contains(text(),'Set White Background')]")
	WebElement SKY_WHITE_BACKGROUND;
	

  public void setSkyblueBackground() {
	  SKY_BLUE_BACKGROUND.click();
  }
  public void setSkywhiteBackground() {
	  SKY_WHITE_BACKGROUND.click();
  }

}
