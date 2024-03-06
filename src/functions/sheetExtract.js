const getSheetValues = (sheet, sheet_name) => {
    if (sheet && sheet_name) {
        const raw = sheet.getSheetByName(sheet_name);
        if (!raw) return null;
        return raw.getDataRange().getValues();
    }

    // return null
};

const extracDataByRow = (sheet) => {
    if (sheet) {
        const columns = sheet.map((content) => content);
        const column_data = columns.map((colum) => colum);
        let content = {};

        column_data.forEach((data) => {
            data.forEach((item, n) => {
                if (item) {
                    const section_name = `section_${n + 1}`;
                    if (!content[section_name]) {
                        content[section_name] = [item];
                    } else {
                        content[section_name] = [...content[section_name], item];
                    }
                }
            });
        });

        return content;
    }
};

const getSheetData = (url) => {
    const sheet = SpreadsheetApp.openByUrl(url || "https://docs.google.com/spreadsheets/d/1j-osi4jfzLqvTAmaUFR8Xsk24qBSIp2pLTrsZHpBY0s/edit");

    let data = {};
    // let content = {};
    let titles = getSheetValues(sheet, "Titles");
    // const notes = getSheetValues(sheet, "Notes");

    if (titles[0][0] === "") {
        console.error("no titles");
        return;
    }

    const chapter_titles = titles.map((title) => title[0]);
    chapter_titles.forEach((title, n, arr) => {
        const contents = getSheetValues(sheet, `Chapter_${n}`);
        if (contents) {
            contents.shift();
            const content = extracDataByRow(contents);

            data[`chapter_${n}`] = {
                title: arr[n - 1],
                content,
            };
        }
    });

    return data;
};
