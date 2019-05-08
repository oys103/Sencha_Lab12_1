topSuite("Ext.grid.column.Date", ['Ext.grid.Panel'], function() {
    var grid, store, colRef;
    
    function getCell(rowIdx, colIdx) {
        return grid.getView().getCellInclusive({
            row: rowIdx,
            column: colIdx
        }, true);
    }
    
    function getCellText(rowIdx, colIdx) {
        var cell = getCell(rowIdx, colIdx);

        return cell.querySelector(grid.getView().innerSelector).innerHTML;
    }
    
    function makeGrid(value) {
        store = new Ext.data.Store({
            model: spec.TestModel,
            data: [{
                field: value
            }]
        });
        
        grid = new Ext.grid.Panel({
            store: store,
            columns: [{
                xtype: 'datecolumn',
                format: 'Y-m-d',
                text: 'Col',
                dataIndex: 'field',
                flex: 1
            }],
            width: 400,
            height: 100,
            border: false,
            renderTo: Ext.getBody()
        });
        colRef = grid.getColumnManager().getColumns();
    }
    
    beforeEach(function() {
        Ext.define('spec.TestModel', {
            extend: 'Ext.data.Model',
            fields: [{
                name: 'field',
                defaultValue: undefined
            }]
        });
    });
    
    afterEach(function() {
        Ext.destroy(grid, store);
        colRef = store = grid = null;
        Ext.undefine('spec.TestModel');
        Ext.data.Model.schema.clear();
    });
    
    describe("renderer", function() {
        it("should render render non-date values", function() {
            makeGrid(null);
            var text = getCellText(0, 0);

            if (text === '&nbsp;') {
                text = '&#160;';
            }

            expect(text).toBe('&#160;');
        });
        
        it("should render the date according to the format", function() {
            makeGrid(new Date(2010, 2, 3));
            expect(getCellText(0, 0)).toBe('2010-03-03');
        });
    });
    
});
