1. Enter a name how you want to identify your folder, so you can easily find it in you google drive
2. Here's a test document you can use -> https://docs.google.com/spreadsheets/d/1j-osi4jfzLqvTAmaUFR8Xsk24qBSIp2pLTrsZHpBY0s/edit

    * Each document is equal to an object,
    * Each sheet named "Chapter_<number>" in the document is equal to an object property,
    * Each row is equal to an array of column items
    * Each column in a row is an item of a row

    The number of titles in the title sheet must have to match the number of Chapter_<number> sheets
        * If the number of Chapter_<number> sheets is less or greater than the number of titles declared in the title sheet,
            the program will only  extract the Chapter_<number> sheet that matches the index of title in titles sheet.

    
    |**Example data output I structured from the document:**|
    ---

    ```json
    {
        "data": {
            "chapter_1": {
                "title": "some title",
                "content": {
                    "section_1": [
                        "section 1 item 1",
                        "section 1 item 2"
                    ],
                    "section_2": [
                        "section 2 item 1",
                        "section 2 item 2"
                    ]
                }
            }
        }
    }
    ```

    * Once done filling the document, copy the document link and paste it to the second field
    * On the third field, select a template you want to use. (At the mean time, There's only one template which is test)
    * Click "Generate" and wait until a prompt apears.
    * Check if the folder you named appears in your google drive, and there you will find the generated files

| P.S. This is not 100% completed yet, I have to fix some parts that are url encoded and add some functionalities.
---


  For templating of textbook, you can ask me to convert a textbook into template and I will structure a document dedicated to a specific theme.
  Though you can uses any document similar the provided one, but you cannot guarantee the expected output you want for a specific textbook, that is why for each textbook theme a specific document structure will be created by the theme author.
