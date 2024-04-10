# Make it your own

1. `npm install`
2. `npx clasp login`
3. `npx clasp create --type webapp --title "TextbookGenerator" --rootDir ./dist`
4. once **`.clasp.json`** is generated inside the **`./dist`** directory, move the `**.clasp.json**` to the root directory
5. `npm run build`
6. `npm run upload`

### How to add a template
Creating a new theme
- add a new html to the themes folder

#### The outputted data extracted from the sheet is structured like this (associative array)
```javascript
[
	chapter_1: {
		title: "some title",
		content: {
			section_1: [
				"some content",
                		"another content"
            		],
            		...
		}
	},
	...
]
```

**The number of chapters reflects the number of chapters in sheet**
- Main title for each chapter sits in Titles sheet
- Sheet chapter should be named as **Chapter_\<number\>**
- Each row in the sheet chapter is considered as section
- Each column in row section is part of the section's content
- ***<mark>For new creation of theme, please refer to how the data is being outputted.</mark>***

<br>

# How to use
Click the link for Content structure in document for templating
[SHEET Reference](https://docs.google.com/spreadsheets/d/1x9WHtS9I0A2VLXpnoTu8WlTDlbKMkzXR7HsIW7PzQmU/edit)

---

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

