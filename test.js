/**
 * Copyright © 2016 Redbox Digital. All rights reserved.
 */

define(
    [
        'jquery',
        'Magento_Ui/js/modal/modal',
        'mage/cookies'
    ],
    function(
        $,
        modal
    ) {
        'use strict';
console.log(345);
        $.widget('redbox.modalInternationalShipping', {
            options : {
                popup: {
                    type: 'popup',
                    autoOpen: false,
                    responsive: true,
                    innerScroll: true,
                    focus: '.setcookie',
                    modalClass: 'modal-international-shipping',
                    modalCloseBtn: '',
                    title: $.mage.__('International Shipping'),
                    buttons: []
                },
                storeCodeInput: $('#store-code'),
                submitButton: $('.action.setcookie'),
                currencySelectId: '#shipping-currency'
            },
            _create: function() {
                console.log(11);
            }
        });

        return $.redbox.modalInternationalShipping;
    }
);
