/*
 * File: app/view/RegisterUpdateForm.js
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

Ext.define('HoursLogger.view.RegisterUpdateForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.registerupdateform',

    requires: [
        'HoursLogger.view.RegisterUpdateFormViewModel',
        'HoursLogger.view.RegisterUpdateFormViewController',
        'Ext.field.Number',
        'Ext.Toolbar',
        'Ext.Button'
    ],

    controller: 'registerupdateform',
    viewModel: {
        type: 'registerupdateform'
    },
    centered: true,
    modal: true,
    bodyPadding: 10,
    title: 'Register hours',
    titleAlign: 'center',

    items: [
        {
            xtype: 'textfield',
            bind: '{Hours.start}',
            label: 'Start',
            placeholder: 'dd/mm/yy hh:mm'
        },
        {
            xtype: 'textfield',
            label: 'Stop',
            placeholder: 'dd/mm/yy hh:mm'
        },
        {
            xtype: 'numberfield',
            label: 'Hours',
            placeholder: 'hh:mm'
        },
        {
            xtype: 'textfield',
            label: 'Comment'
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-check',
                    text: 'Submit',
                    listeners: {
                        tap: 'submitUpdate'
                    }
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-close',
                    text: 'Cancel',
                    listeners: {
                        tap: 'cancelUpdate'
                    }
                }
            ]
        }
    ]

});