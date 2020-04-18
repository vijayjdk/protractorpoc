var ReadDataFromExcel = function() {
    this.ReadDataFromExcel = function(filePath, worksheetname, row, columnName) {
        var val;
        var Excel = require('exceljs');
        var workbook = new Excel.Workbook();
        return workbook.xlsx.readFile(filePath).then(function() {
            var worksheet = workbook.getWorksheet(worksheetname);
            val = worksheet.getRow(row).getCell(columnName).value;
            return val;
        });
    };
};

module.exports = new ReadDataFromExcel();