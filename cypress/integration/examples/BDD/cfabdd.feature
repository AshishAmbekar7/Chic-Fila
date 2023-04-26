Feature: Test Navistar application
    Scenario:Create "Vendor Item"
            Given User is on step Login page
            When user Enter Username
            When user Enter Password
            When user clicks on Login button
            When after succesfull login user click on Quick Actions button
            When user click on "Vendor Item" and User needs to fill mandatory attributes to create "Vendor Item"
            When user  clicks on "Brand AAIAID" and selects value from the given dropdown "Brand AAIAID"
            When user enters some text in "Part Number"
            When user  clicks on "Parts Classification" and expand and selects the value from the given dropdown "Parts Classification"
            When user click on Create button
            When user click on Next Button
            When user click on "Show me the entity" button
            When user click on "Hazardous and Regulatory Compliance" link
            When user selects value from the given dropdown Harmonized Tariff Code
            When user click on Save Button1
            When user click on Summary tab
            When user click on "Required Attributes Validation" link
            When user  clicks on "Country of Origin Primary " and selects value from the given dropdown "Country of Origin Primary "
            When user click on Add Button of "Dimensions - Each" attributes
            When user enters some decimal value in "Merchandising Height"
            When user enters some decimal value in "Merchandising Length"
            When user enters some decimal value in "Merchandising Width"
            When user enters some decimal value in "Shipping Height"
            When user enters some decimal value in "Shipping Length"
            When user enters some decimal value in "Shipping Width"
            When user  clicks on "UOM" and selects value from the given dropdown "UOM"
            When user  clicks on "Package UOM - Each" and selects value from the given dropdown "Package UOM - Each"
            When user enters some decimal value in "Quantity of Eaches in Package - Each"
            When user click on Add Button of "Weights - Each" attributes
            When user enters some decimal value in "Dimensional Weight"
            When user  clicks on "UOM" and selects value from the given dropdown "UOM1"
            When user enters some decimal value in "Weight"
            When user  clicks on "Item Container Type" and selects value from the given dropdown "Item Container Type"
            When user  clicks on "Item Quantity Size" and selects value from the given dropdown "Item Quantity Size" and enter the numeric value
            When user  clicks on "Item Quantity Size UOM" and selects value from the given dropdown "Item Quantity Size UOM"
            When user  clicks on "Quantity per Application" and selects value from the given dropdown "Quantity per Application" enter the numeric value
            When user  clicks on "Quantity per Application Qualifier" and selects value from the given dropdown "Quantity per Application Qualifier"
            When user  clicks on "Quantity per Application UOM" and selects value from the given dropdown "Quantity per Application UOM"
            When user enters some decimal value in "Maximum Cases per Pallet Layer"
            When user enters some decimal value in "Pallet Layer Maximum"
            When user enters some decimal value in "Navistar Part Number"
            When user enters some text field in "Part Description"
            When user click on Add Button of "Pricing" attributes
            When user  clicks on "Currency Code" and selects value from the given dropdown "Currency Code"
            When user  clicks on "Expiration Date" and selects date from the given dropdown "Expiration Date"
            When user  clicks on "Price" and selects value from the given dropdown "price" enter the decimal value
            When user  clicks on "Price Break Quantity" and selects value from the given dropdown "Price Break Quantity" enter the integer value
            When user  selects value from the given dropdown "Price Break Quantity UOM"
            When user  clicks on "Price Sheet Level Effective Date" and selects date from the given dropdown "Price Sheet Level Effective Date"
            When user enters some decimal value in "Price Sheet Number"
            When user  clicks on "Price Type" and selects date from the given dropdown "Price Type"
            When user enters some text field in "Price Type Description"
            When user  clicks on "Price UOM" and selects date from the given dropdown "Price UOM"
            When user  clicks on "Product Description – Long" and enter some text value in "Enter more values here to add"
            When user click on Save Button
            When user click on Summary tab1
            When user click on Sumbit button in workflow section
            Then successful message should be displayed

