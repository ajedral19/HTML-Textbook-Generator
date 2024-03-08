# How to run textbook html generator

install packages
- `npm install`

login to google account
- `npx clasp login`

create apps script project
- `npx clasp create --type webapp --title "TextbookGenerator" --rootDir ./dist`
- once **`.clasp.json`** is generated inside the **`./dist`** directory, move the `**.clasp.json**` to the root directory

build
- `npm run build`

push
- `npm run upload`

<br><br>

# How to use
Click the link for Content structure in document for templating
[SHEET Reference](https://docs.google.com/spreadsheets/d/1x9WHtS9I0A2VLXpnoTu8WlTDlbKMkzXR7HsIW7PzQmU/edit)

<br>

# How to add a template
Creating a new theme
- add a new html to the themes folder

<br>

#### The outputted data extracted from the sheet is structured like this (associative array)
```json
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
