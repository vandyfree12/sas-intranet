import { FormGroup, FormControl } from "@angular/forms";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import { DynamicFormControlRelationGroup } from "../model/misc/dynamic-form-control-relation.model";
export declare class RelationUtils {
    static findActivationRelation(relGroups: DynamicFormControlRelationGroup[]): DynamicFormControlRelationGroup | null;
    static getRelatedFormControls(model: DynamicFormControlModel, controlGroup: FormGroup): FormControl[];
    static isFormControlToBeDisabled(relGroup: DynamicFormControlRelationGroup, _formGroup: FormGroup): boolean;
}
