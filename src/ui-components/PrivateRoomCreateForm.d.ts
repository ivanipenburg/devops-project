/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PrivateRoomCreateFormInputValues = {
    name?: string;
};
export declare type PrivateRoomCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrivateRoomCreateFormOverridesProps = {
    PrivateRoomCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PrivateRoomCreateFormProps = React.PropsWithChildren<{
    overrides?: PrivateRoomCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PrivateRoomCreateFormInputValues) => PrivateRoomCreateFormInputValues;
    onSuccess?: (fields: PrivateRoomCreateFormInputValues) => void;
    onError?: (fields: PrivateRoomCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrivateRoomCreateFormInputValues) => PrivateRoomCreateFormInputValues;
    onValidate?: PrivateRoomCreateFormValidationValues;
} & React.CSSProperties>;
export default function PrivateRoomCreateForm(props: PrivateRoomCreateFormProps): React.ReactElement;
