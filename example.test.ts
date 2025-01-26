import { shortest } from "@antiwork/shortest";

// Uses baseUrl from config to determine what page to visit.
shortest("Click on `Show confirm box`")
  .expect("Confirmation box is shown with text `I am a confirm alert`")
  .expect("Click `OK`")
  .expect("`You clicked OK, confirm returned true.` is displayed below the confirm button.");

// shortest("Click on `Show prompt box`")
//   .expect("Change the existing text of the prompt to `Hello World`")
//   .expect("Click `OK`")
//   .expect("`You clicked OK. 'prompt' returned Hello World` is displayed below the prompt button.");
