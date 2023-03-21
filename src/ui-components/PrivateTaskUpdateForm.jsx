/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { PrivateTask } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PrivateTaskUpdateForm(props) {
  const {
    id: idProp,
    privateTask,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    completed: false,
    room_name: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [completed, setCompleted] = React.useState(initialValues.completed);
  const [room_name, setRoom_name] = React.useState(initialValues.room_name);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = privateTaskRecord
      ? { ...initialValues, ...privateTaskRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setCompleted(cleanValues.completed);
    setRoom_name(cleanValues.room_name);
    setErrors({});
  };
  const [privateTaskRecord, setPrivateTaskRecord] = React.useState(privateTask);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PrivateTask, idProp)
        : privateTask;
      setPrivateTaskRecord(record);
    };
    queryData();
  }, [idProp, privateTask]);
  React.useEffect(resetStateValues, [privateTaskRecord]);
  const validations = {
    title: [{ type: "Required" }],
    completed: [{ type: "Required" }],
    room_name: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          completed,
          room_name,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            PrivateTask.copyOf(privateTaskRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PrivateTaskUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              completed,
              room_name,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <SwitchField
        label="Completed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={completed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              completed: value,
              room_name,
            };
            const result = onChange(modelFields);
            value = result?.completed ?? value;
          }
          if (errors.completed?.hasError) {
            runValidationTasks("completed", value);
          }
          setCompleted(value);
        }}
        onBlur={() => runValidationTasks("completed", completed)}
        errorMessage={errors.completed?.errorMessage}
        hasError={errors.completed?.hasError}
        {...getOverrideProps(overrides, "completed")}
      ></SwitchField>
      <TextField
        label="Room name"
        isRequired={true}
        isReadOnly={false}
        value={room_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              completed,
              room_name: value,
            };
            const result = onChange(modelFields);
            value = result?.room_name ?? value;
          }
          if (errors.room_name?.hasError) {
            runValidationTasks("room_name", value);
          }
          setRoom_name(value);
        }}
        onBlur={() => runValidationTasks("room_name", room_name)}
        errorMessage={errors.room_name?.errorMessage}
        hasError={errors.room_name?.hasError}
        {...getOverrideProps(overrides, "room_name")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || privateTask)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || privateTask) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
