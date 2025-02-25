                                     _                             
                                    | |                            
 __      ____ _ _ __ _ __ __ _ _ __ | |_ _   _    __ _ _ __  _ __  
 \ \ /\ / / _` | '__| '__/ _` | '_ \| __| | | |  / _` | '_ \| '_ \ 
  \ V  V / (_| | |  | | | (_| | | | | |_| |_| | | (_| | |_) | |_) |
   \_/\_/ \__,_|_|  |_|  \__,_|_| |_|\__|\__, |  \__,_| .__/| .__/ 
                                          __/ |       | |   | |    
                                         |___/        |_|   |_|                                                                                                                                                                                                 

Developed by Aaron Stearns
Solution Engineer - US Presales
astearns@gk-software.com

This GK App Enablement app is designed to work in the side panel of the 
widescreen OmniPOS and not as a full screen browser window.

The UI flow is as follows:

1. The warranty display is toggled from "none" to "block" when a predetermined item ID is added to the transaction. Currently ItemID 53532005. See app.js Line 39
2. Two warranty options are offered. "One Year Warranty" and "Two Year Warranty"
3. The prices for the two warranties are currently hard-coded, but could be modified to be a percentage of the item price
4. Upon selecting a warranty, the method registerExternalLineItem() pushes a warrnty item to the transaction
5. The warranty item title contains the warranty duration and item name e.g. "1yr Warranty: Chainsaw"