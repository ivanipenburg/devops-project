/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PrivateTaskCreateFormInputValues = {
    title?: string;
    completed?: boolean;
    room_name?: string;
};
export declare type PrivateTaskCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    completed?: ValidationFunction<boolean>;
    room_name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrivateTaskCreateFormOverridesProps = {
    PrivateTaskCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    room_name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PrivateTaskCreateFormProps = React.PropsWithChildren<{
    overrides?: PrivateTaskCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PrivateTaskCreateFormInputValues) => PrivateTaskCreateFormInputValues;
    onSuccess?: (fields: PrivateTaskCreateFormInputValues) => void;
    onError?: (fields: PrivateTaskCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrivateTaskCreateFormInputValues) => PrivateTaskCreateFormInputValues;
    onValidate?: PrivateTaskCreateFormValidationValues;
} & React.CSSProperties>;
export default function PrivateTaskCreateForm(props: PrivateTaskCreateFormProps): React.ReactElement;
