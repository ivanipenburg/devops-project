/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PrivateRoom } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PrivateRoomUpdateFormInputValues = {
    name?: string;
};
export declare type PrivateRoomUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrivateRoomUpdateFormOverridesProps = {
    PrivateRoomUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PrivateRoomUpdateFormProps = React.PropsWithChildren<{
    overrides?: PrivateRoomUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    privateRoom?: PrivateRoom;
    onSubmit?: (fields: PrivateRoomUpdateFormInputValues) => PrivateRoomUpdateFormInputValues;
    onSuccess?: (fields: PrivateRoomUpdateFormInputValues) => void;
    onError?: (fields: PrivateRoomUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrivateRoomUpdateFormInputValues) => PrivateRoomUpdateFormInputValues;
    onValidate?: PrivateRoomUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PrivateRoomUpdateForm(props: PrivateRoomUpdateFormProps): React.ReactElement;
