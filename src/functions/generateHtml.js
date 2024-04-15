const generateHTML = (sheet_url, template, folder_name = "textbook html files") => {
    if (!folder_name.length || typeof folder_name !== "string") throw new Error("Folder name must be set.");
    if (!sheet_url || typeof sheet_url !== "string") throw new Error("URL is unknown or incorrect.");
    if (!template || typeof template !== "string") throw new Error("Template is undefined or unknown.");

    const sheet_data = getSheetData(sheet_url);

    if (Reflect.ownKeys(sheet_data).length - 1 <= 0) throw new Error("Coundn't find any document.");

    let n = 0;

    for (let key in sheet_data) {
        // generate
        const html = HtmlService.createTemplateFromFile(template);
        n += 1;
        html.data = sheet_data[key];
        html.php_open = "<?php";
        html.php_close = "; ?>";
        html.opening = "<?php echo __d('po_name', \"";
        html.closing = '"); ?>';

        const file = html.evaluate().getContent();

        // save to directory
        const folder = DriveApp.getFoldersByName(folder_name);
        if (folder.hasNext()) {
            const curr_file = DriveApp.getFilesByName(`chapter_${n}`);
            if (curr_file.hasNext()) {
                curr_file.next().setContent(file);
            } else {
                folder.next().createFile(`chapter_${n}`, file, MimeType.HTML);
            }
        } else {
            DriveApp.createFolder(folder_name);
            const new_folder = DriveApp.getFoldersByName(folder_name);
            new_folder.next().createFile(`chapter_${n}`, file, MimeType.HTML);
        }
    }

    return 1;
};
