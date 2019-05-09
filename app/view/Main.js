/*
 * File: app/view/Main.js
 *
 * This file was generated by Sencha Architect version 4.2.5.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.7.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.7.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HoursLogger.view.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.main',

    requires: [
        'HoursLogger.view.MainViewModel',
        'HoursLogger.view.MainViewController',
        'Ext.TitleBar',
        'Ext.Button',
        'Ext.Label',
        'Ext.grid.Grid',
        'Ext.grid.column.Number'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },
    tabBarPosition: 'bottom',

    items: [
        {
            xtype: 'container',
            iconAlign: 'top',
            title: 'Day',
            iconCls: 'x-fa fa-calendar-o',
            items: [
                {
                    xtype: 'titlebar',
                    docked: 'top',
                    items: [
                        {
                            xtype: 'button',
                            border: true,
                            padding: 10,
                            text: '+',
                            listeners: {
                                tap: 'onAddHoursButtonTap'
                            }
                        },
                        {
                            xtype: 'button',
                            padding: 10,
                            text: '<',
                            listeners: {
                                tap: 'onSubtractDayTap'
                            }
                        },
                        {
                            xtype: 'label',
                            id: 'dateLabel',
                            html: '',
                            listeners: {
                                initialize: 'onDateLabelInitialize'
                            }
                        },
                        {
                            xtype: 'button',
                            padding: 10,
                            text: '>',
                            listeners: {
                                tap: 'onAddDayTap'
                            }
                        },
                        {
                            xtype: 'label',
                            align: 'right',
                            id: 'sumLabel',
                            html: 'Sum: 0 hours',
                            listeners: {
                                initialize: 'onLabelInitialize'
                            }
                        }
                    ]
                },
                {
                    xtype: 'grid',
                    height: '100%',
                    name: 'DayGrid',
                    width: '100%',
                    store: 'Hours',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            width: 80,
                            dataIndex: 'start',
                            text: 'Start'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 80,
                            dataIndex: 'stop',
                            text: 'Stop'
                        },
                        {
                            xtype: 'numbercolumn',
                            width: 80,
                            dataIndex: 'duration',
                            text: 'Hours'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: '',
                            minWidth: 80,
                            dataIndex: 'comment',
                            text: 'Comment'
                        }
                    ],
                    listeners: {
                        itemtap: 'onItemSelected',
                        initialize: 'onGridInitialize'
                    }
                }
            ]
        },
        {
            xtype: 'container',
            iconAlign: 'top',
            title: 'Week',
            iconCls: 'x-fa fa-calendar-o',
            items: [
                {
                    xtype: 'titlebar',
                    docked: 'top',
                    items: [
                        {
                            xtype: 'button',
                            border: true,
                            padding: 10,
                            text: '+',
                            listeners: {
                                tap: 'onAddHoursButtonTap1'
                            }
                        },
                        {
                            xtype: 'button',
                            padding: 10,
                            text: '<',
                            listeners: {
                                tap: 'onSubtractWeekTap'
                            }
                        },
                        {
                            xtype: 'label',
                            id: 'firstDayOfWeekLabel',
                            html: ''
                        },
                        {
                            xtype: 'label',
                            html: '&ensp; - &ensp;  '
                        },
                        {
                            xtype: 'label',
                            id: 'lastDayOfWeekLabel',
                            listeners: {
                                initialize: 'onWeekLabelInitialize'
                            }
                        },
                        {
                            xtype: 'button',
                            padding: 10,
                            text: '>',
                            listeners: {
                                tap: 'onAddWeekTap'
                            }
                        },
                        {
                            xtype: 'label',
                            align: 'right',
                            id: 'sumLabel1',
                            html: 'Sum: 0 hours',
                            listeners: {
                                initialize: 'onLabelInitialize1'
                            }
                        }
                    ]
                },
                {
                    xtype: 'grid',
                    height: '100%',
                    name: 'WeekGrid',
                    width: '100%',
                    store: 'Hours',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            width: 80,
                            dataIndex: 'start',
                            text: 'Start'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 80,
                            dataIndex: 'stop',
                            text: 'Stop'
                        },
                        {
                            xtype: 'numbercolumn',
                            width: 80,
                            dataIndex: 'duration',
                            text: 'Hours'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: '',
                            minWidth: 80,
                            dataIndex: 'comment',
                            text: 'Comment'
                        }
                    ],
                    listeners: {
                        itemtap: 'onItemSelected1'
                    }
                }
            ]
        },
        {
            xtype: 'container',
            iconAlign: 'top',
            title: 'Month',
            iconCls: 'x-fa fa-calendar',
            html: '<h1>Not implemented</h1><p>Thats a 5 DKP minus!</p><p>Five ponts from Griffindor.</p><p>BTW, Sencha SUXXXX!!!</p>'
        }
    ]

});