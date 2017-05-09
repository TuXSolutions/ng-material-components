// from here: https://github.com/pleerock/ng2-radio-group

import { Component, Input, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
import { RadioGroupService } from './radio-group.service';

@Component({
    selector: 'radio-group',
    template: `
        <div class="radio-group" [class.fc-alt]="alt">
            <ng-content></ng-content>
        </div>
    `,
    providers: [ RadioGroupService ]
})
export class RadioGroupComponent extends InputBase {

    @Input() fg: FormGroup;
    @Input() field: string;
    @Input() disabled: boolean = false;
    @Input() defaultValue: string;
    @Input() alt: boolean;

    constructor(el: ElementRef, private service: RadioGroupService) {
        super(el);

        this.service.optionSelected$.subscribe((value) => {
            this.control.setValue(value);
        });
    }

    public ngOnInit(): void {
        this.onInit();

        this.service.fieldName = this.field;
        this.service.defaultValue = this.defaultValue;
    }

    public addValidators(): void { }

}
