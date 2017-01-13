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
                var self          = this,
                    cacheAutoOpen = this.options.cacheAutoOpen;
alert(123);
                // sets value to Cache auto open
                this.options.popup.autoOpen = cacheAutoOpen;
                if (!$.mage.cookies.get('store') || this.options.isCheckout) {
                    if (this.options.isCheckout || this.options.isHeader) {
                        this.options.popup.modalCloseBtn = '[data-role="closeBtn"]';
                    }
                    var popup = modal(this.options.popup, this.element);

                    // Disable Escape Key
                    if (!this.options.isCheckout && !this.options.isHeader) {
                        popup.keyEventHandlers.escapeKey = function () {
                            return;
                        };
                    }

                    if (this.options.actionButtonId) {
                        $(document).on('click', this.options.actionButtonId, function () {
                            self.element.modal('openModal');
                        });
                    }
                }

                self.options.submitButton.on('click', function(e) {
                    var selectedCode = $(self.options.currencySelectId).find(':selected').attr('data-storecode');
                    self.options.storeCodeInput.val(selectedCode);
                });
            }
        });

        return $.redbox.modalInternationalShipping;
    }
);
