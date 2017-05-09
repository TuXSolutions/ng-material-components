import { inputBaseTemplate } from '../input-base/input-base.template';
import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';

@Component({
    selector: 'text-box',
    template: inputBaseTemplate,
})
export class TextBoxComponent extends InputBase implements OnInit {

    @Input() fg: FormGroup;
    @Input() placeholder: string;
    @Input() field: string;
    @Input() label: string;
    @Input() floatingLabel: boolean;
    @Input() leftIcon: string;
    @Input() rightIcon: string;
    @Input() value: string;
    @Input() disabled: boolean;
    @Input() alt: boolean;

    // validators
    @Input() required: boolean;
    @Input() min: number;
    @Input() max: number;

    constructor(el: ElementRef) {
        super(el);
    }

    public addValidators(): void {
        if (this.min) {
            this.validations.push(InputBase.minValidator(this.min));
        }

        if (this.max) {
            this.validations.push(InputBase.maxValidator(this.max));
        }
    }

    public ngOnInit(): void {
        this.onInit();
    }

    public ngOnDestroy(): void {

    }

}
