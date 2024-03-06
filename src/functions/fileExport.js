const exportFileToFolder = (folder_name) => {
    if (folder_name) {
        const folder = DriveApp.getFoldersByName(folder_name);
        const file = generateHTML();

        folder.next().createFile("index", file, MimeType.HTML);
    }
};

const saveFolder = (folder_name) => {
    if (folder_name) {
        const folder = DriveApp.getFoldersByName(folder_name);
        if (folder.hasNext()) {
            exportFileToFolder(folder_name);
        } else {
            DriveApp.createFolder(folder_name);
            exportFileToFolder(folder_name);
        }
    }
};
