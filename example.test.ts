import { shortest } from "@antiwork/shortest";

// Uses baseUrl from config to determine what page to visit.
shortest("Click on `Show alert box`")
  .expect("Alert is shown with text `I am an alert box!`")
  .expect("Close the alert")
  .expect("Text `You triggered and handled the alert dialog` is displayed below the alert button.");
