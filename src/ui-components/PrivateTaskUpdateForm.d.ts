/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PrivateTask } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PrivateTaskUpdateFormInputValues = {
    title?: string;
    completed?: boolean;
    room_name?: string;
};
export declare type PrivateTaskUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    completed?: ValidationFunction<boolean>;
    room_name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrivateTaskUpdateFormOverridesProps = {
    PrivateTaskUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    room_name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PrivateTaskUpdateFormProps = React.PropsWithChildren<{
    overrides?: PrivateTaskUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    privateTask?: PrivateTask;
    onSubmit?: (fields: PrivateTaskUpdateFormInputValues) => PrivateTaskUpdateFormInputValues;
    onSuccess?: (fields: PrivateTaskUpdateFormInputValues) => void;
    onError?: (fields: PrivateTaskUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrivateTaskUpdateFormInputValues) => PrivateTaskUpdateFormInputValues;
    onValidate?: PrivateTaskUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PrivateTaskUpdateForm(props: PrivateTaskUpdateFormProps): React.ReactElement;
