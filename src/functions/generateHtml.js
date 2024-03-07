const generateHTML = (sheet_url, template) => {
    if (!template || typeof template !== "string") return;
    if (!sheet_url || typeof sheet_url !== "string") return;

    const sheet_data = getSheetData(sheet_url);

    if (Reflect.ownKeys(sheet_data).length - 1 <= 0) return;

    let n = 0;
    const folder_name = "native phrase basic";

    for (let key in sheet_data) {
        const html = HtmlService.createTemplateFromFile(template);
        n += 1;
        html.data = sheet_data[key];
        html.php_open = "<?php";
        html.php_close = "; ?>";
        html.opening = "<?php echo __d('po_name', \"";
        html.closing = '"); ?>';

        const file = html.evaluate().getContent();

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

    return;
};
