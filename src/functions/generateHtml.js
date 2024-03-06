const generateHTML = () => {
    const html = HtmlService.createTemplateFromFile("index");

    html.php_open = "<?php";
    html.php_close = "; ?>";
    html.opening = "<?php echo __d('po_name', \"";
    html.closing = '"); ?>';

    return HtmlService.createHtmlOutput(html.evaluate().getContent());
};
