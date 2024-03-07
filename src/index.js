function doGet() {
    generateHTML("https://docs.google.com/spreadsheets/d/1x9WHtS9I0A2VLXpnoTu8WlTDlbKMkzXR7HsIW7PzQmU/edit", "test");
    return HtmlService.createHtmlOutputFromFile("index");
}
