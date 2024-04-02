/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getOrder } from "./graphql/queries";
import { updateOrder } from "./graphql/mutations";
const client = generateClient();
export default function OrderUpdateForm(props) {
  const {
    id: idProp,
    order: orderModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    email: "",
    phone: "",
    cashappId: "",
    name: "",
    company: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    total: "",
    paid: false,
    orderHash: "",
    shipped: false,
    shippingType: "",
    shippingCost: "",
    shipporateObjectId: "",
    cartTotalWeight: "",
    labelURL: "",
    completed: "",
    tracking: "",
    trackingURL: "",
    paymentType: "",
    owner: "",
  };
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [cashappId, setCashappId] = React.useState(initialValues.cashappId);
  const [name, setName] = React.useState(initialValues.name);
  const [company, setCompany] = React.useState(initialValues.company);
  const [line1, setLine1] = React.useState(initialValues.line1);
  const [line2, setLine2] = React.useState(initialValues.line2);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [zip, setZip] = React.useState(initialValues.zip);
  const [country, setCountry] = React.useState(initialValues.country);
  const [total, setTotal] = React.useState(initialValues.total);
  const [paid, setPaid] = React.useState(initialValues.paid);
  const [orderHash, setOrderHash] = React.useState(initialValues.orderHash);
  const [shipped, setShipped] = React.useState(initialValues.shipped);
  const [shippingType, setShippingType] = React.useState(
    initialValues.shippingType
  );
  const [shippingCost, setShippingCost] = React.useState(
    initialValues.shippingCost
  );
  const [shipporateObjectId, setShipporateObjectId] = React.useState(
    initialValues.shipporateObjectId
  );
  const [cartTotalWeight, setCartTotalWeight] = React.useState(
    initialValues.cartTotalWeight
  );
  const [labelURL, setLabelURL] = React.useState(initialValues.labelURL);
  const [completed, setCompleted] = React.useState(initialValues.completed);
  const [tracking, setTracking] = React.useState(initialValues.tracking);
  const [trackingURL, setTrackingURL] = React.useState(
    initialValues.trackingURL
  );
  const [paymentType, setPaymentType] = React.useState(
    initialValues.paymentType
  );
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = orderRecord
      ? { ...initialValues, ...orderRecord }
      : initialValues;
    setEmail(cleanValues.email);
    setPhone(cleanValues.phone);
    setCashappId(cleanValues.cashappId);
    setName(cleanValues.name);
    setCompany(cleanValues.company);
    setLine1(cleanValues.line1);
    setLine2(cleanValues.line2);
    setCity(cleanValues.city);
    setState(cleanValues.state);
    setZip(cleanValues.zip);
    setCountry(cleanValues.country);
    setTotal(cleanValues.total);
    setPaid(cleanValues.paid);
    setOrderHash(cleanValues.orderHash);
    setShipped(cleanValues.shipped);
    setShippingType(cleanValues.shippingType);
    setShippingCost(cleanValues.shippingCost);
    setShipporateObjectId(cleanValues.shipporateObjectId);
    setCartTotalWeight(cleanValues.cartTotalWeight);
    setLabelURL(cleanValues.labelURL);
    setCompleted(cleanValues.completed);
    setTracking(cleanValues.tracking);
    setTrackingURL(cleanValues.trackingURL);
    setPaymentType(cleanValues.paymentType);
    setOwner(cleanValues.owner);
    setErrors({});
  };
  const [orderRecord, setOrderRecord] = React.useState(orderModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getOrder.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOrder
        : orderModelProp;
      setOrderRecord(record);
    };
    queryData();
  }, [idProp, orderModelProp]);
  React.useEffect(resetStateValues, [orderRecord]);
  const validations = {
    email: [{ type: "Email" }],
    phone: [{ type: "Phone" }],
    cashappId: [],
    name: [],
    company: [],
    line1: [],
    line2: [],
    city: [],
    state: [],
    zip: [],
    country: [],
    total: [],
    paid: [],
    orderHash: [],
    shipped: [],
    shippingType: [],
    shippingCost: [],
    shipporateObjectId: [],
    cartTotalWeight: [],
    labelURL: [],
    completed: [],
    tracking: [],
    trackingURL: [],
    paymentType: [],
    owner: [],
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
          email: email ?? null,
          phone: phone ?? null,
          cashappId: cashappId ?? null,
          name: name ?? null,
          company: company ?? null,
          line1: line1 ?? null,
          line2: line2 ?? null,
          city: city ?? null,
          state: state ?? null,
          zip: zip ?? null,
          country: country ?? null,
          total: total ?? null,
          paid: paid ?? null,
          orderHash: orderHash ?? null,
          shipped: shipped ?? null,
          shippingType: shippingType ?? null,
          shippingCost: shippingCost ?? null,
          shipporateObjectId: shipporateObjectId ?? null,
          cartTotalWeight: cartTotalWeight ?? null,
          labelURL: labelURL ?? null,
          completed: completed ?? null,
          tracking: tracking ?? null,
          trackingURL: trackingURL ?? null,
          paymentType: paymentType ?? null,
          owner: owner ?? null,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateOrder.replaceAll("__typename", ""),
            variables: {
              input: {
                id: orderRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "OrderUpdateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email: value,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone: value,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Cashapp id"
        isRequired={false}
        isReadOnly={false}
        value={cashappId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId: value,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.cashappId ?? value;
          }
          if (errors.cashappId?.hasError) {
            runValidationTasks("cashappId", value);
          }
          setCashappId(value);
        }}
        onBlur={() => runValidationTasks("cashappId", cashappId)}
        errorMessage={errors.cashappId?.errorMessage}
        hasError={errors.cashappId?.hasError}
        {...getOverrideProps(overrides, "cashappId")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name: value,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Company"
        isRequired={false}
        isReadOnly={false}
        value={company}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company: value,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.company ?? value;
          }
          if (errors.company?.hasError) {
            runValidationTasks("company", value);
          }
          setCompany(value);
        }}
        onBlur={() => runValidationTasks("company", company)}
        errorMessage={errors.company?.errorMessage}
        hasError={errors.company?.hasError}
        {...getOverrideProps(overrides, "company")}
      ></TextField>
      <TextField
        label="Line1"
        isRequired={false}
        isReadOnly={false}
        value={line1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1: value,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.line1 ?? value;
          }
          if (errors.line1?.hasError) {
            runValidationTasks("line1", value);
          }
          setLine1(value);
        }}
        onBlur={() => runValidationTasks("line1", line1)}
        errorMessage={errors.line1?.errorMessage}
        hasError={errors.line1?.hasError}
        {...getOverrideProps(overrides, "line1")}
      ></TextField>
      <TextField
        label="Line2"
        isRequired={false}
        isReadOnly={false}
        value={line2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2: value,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.line2 ?? value;
          }
          if (errors.line2?.hasError) {
            runValidationTasks("line2", value);
          }
          setLine2(value);
        }}
        onBlur={() => runValidationTasks("line2", line2)}
        errorMessage={errors.line2?.errorMessage}
        hasError={errors.line2?.hasError}
        {...getOverrideProps(overrides, "line2")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city: value,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state: value,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Zip"
        isRequired={false}
        isReadOnly={false}
        value={zip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip: value,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.zip ?? value;
          }
          if (errors.zip?.hasError) {
            runValidationTasks("zip", value);
          }
          setZip(value);
        }}
        onBlur={() => runValidationTasks("zip", zip)}
        errorMessage={errors.zip?.errorMessage}
        hasError={errors.zip?.hasError}
        {...getOverrideProps(overrides, "zip")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country: value,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={total}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total: value,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.total ?? value;
          }
          if (errors.total?.hasError) {
            runValidationTasks("total", value);
          }
          setTotal(value);
        }}
        onBlur={() => runValidationTasks("total", total)}
        errorMessage={errors.total?.errorMessage}
        hasError={errors.total?.hasError}
        {...getOverrideProps(overrides, "total")}
      ></TextField>
      <SwitchField
        label="Paid"
        defaultChecked={false}
        isDisabled={false}
        isChecked={paid}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid: value,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.paid ?? value;
          }
          if (errors.paid?.hasError) {
            runValidationTasks("paid", value);
          }
          setPaid(value);
        }}
        onBlur={() => runValidationTasks("paid", paid)}
        errorMessage={errors.paid?.errorMessage}
        hasError={errors.paid?.hasError}
        {...getOverrideProps(overrides, "paid")}
      ></SwitchField>
      <TextField
        label="Order hash"
        isRequired={false}
        isReadOnly={false}
        value={orderHash}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash: value,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.orderHash ?? value;
          }
          if (errors.orderHash?.hasError) {
            runValidationTasks("orderHash", value);
          }
          setOrderHash(value);
        }}
        onBlur={() => runValidationTasks("orderHash", orderHash)}
        errorMessage={errors.orderHash?.errorMessage}
        hasError={errors.orderHash?.hasError}
        {...getOverrideProps(overrides, "orderHash")}
      ></TextField>
      <SwitchField
        label="Shipped"
        defaultChecked={false}
        isDisabled={false}
        isChecked={shipped}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped: value,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.shipped ?? value;
          }
          if (errors.shipped?.hasError) {
            runValidationTasks("shipped", value);
          }
          setShipped(value);
        }}
        onBlur={() => runValidationTasks("shipped", shipped)}
        errorMessage={errors.shipped?.errorMessage}
        hasError={errors.shipped?.hasError}
        {...getOverrideProps(overrides, "shipped")}
      ></SwitchField>
      <TextField
        label="Shipping type"
        isRequired={false}
        isReadOnly={false}
        value={shippingType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType: value,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.shippingType ?? value;
          }
          if (errors.shippingType?.hasError) {
            runValidationTasks("shippingType", value);
          }
          setShippingType(value);
        }}
        onBlur={() => runValidationTasks("shippingType", shippingType)}
        errorMessage={errors.shippingType?.errorMessage}
        hasError={errors.shippingType?.hasError}
        {...getOverrideProps(overrides, "shippingType")}
      ></TextField>
      <TextField
        label="Shipping cost"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={shippingCost}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost: value,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.shippingCost ?? value;
          }
          if (errors.shippingCost?.hasError) {
            runValidationTasks("shippingCost", value);
          }
          setShippingCost(value);
        }}
        onBlur={() => runValidationTasks("shippingCost", shippingCost)}
        errorMessage={errors.shippingCost?.errorMessage}
        hasError={errors.shippingCost?.hasError}
        {...getOverrideProps(overrides, "shippingCost")}
      ></TextField>
      <TextField
        label="Shipporate object id"
        isRequired={false}
        isReadOnly={false}
        value={shipporateObjectId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId: value,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.shipporateObjectId ?? value;
          }
          if (errors.shipporateObjectId?.hasError) {
            runValidationTasks("shipporateObjectId", value);
          }
          setShipporateObjectId(value);
        }}
        onBlur={() =>
          runValidationTasks("shipporateObjectId", shipporateObjectId)
        }
        errorMessage={errors.shipporateObjectId?.errorMessage}
        hasError={errors.shipporateObjectId?.hasError}
        {...getOverrideProps(overrides, "shipporateObjectId")}
      ></TextField>
      <TextField
        label="Cart total weight"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cartTotalWeight}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight: value,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.cartTotalWeight ?? value;
          }
          if (errors.cartTotalWeight?.hasError) {
            runValidationTasks("cartTotalWeight", value);
          }
          setCartTotalWeight(value);
        }}
        onBlur={() => runValidationTasks("cartTotalWeight", cartTotalWeight)}
        errorMessage={errors.cartTotalWeight?.errorMessage}
        hasError={errors.cartTotalWeight?.hasError}
        {...getOverrideProps(overrides, "cartTotalWeight")}
      ></TextField>
      <TextField
        label="Label url"
        isRequired={false}
        isReadOnly={false}
        value={labelURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL: value,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.labelURL ?? value;
          }
          if (errors.labelURL?.hasError) {
            runValidationTasks("labelURL", value);
          }
          setLabelURL(value);
        }}
        onBlur={() => runValidationTasks("labelURL", labelURL)}
        errorMessage={errors.labelURL?.errorMessage}
        hasError={errors.labelURL?.hasError}
        {...getOverrideProps(overrides, "labelURL")}
      ></TextField>
      <TextField
        label="Completed"
        isRequired={false}
        isReadOnly={false}
        value={completed}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed: value,
              tracking,
              trackingURL,
              paymentType,
              owner,
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
      ></TextField>
      <TextField
        label="Tracking"
        isRequired={false}
        isReadOnly={false}
        value={tracking}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking: value,
              trackingURL,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.tracking ?? value;
          }
          if (errors.tracking?.hasError) {
            runValidationTasks("tracking", value);
          }
          setTracking(value);
        }}
        onBlur={() => runValidationTasks("tracking", tracking)}
        errorMessage={errors.tracking?.errorMessage}
        hasError={errors.tracking?.hasError}
        {...getOverrideProps(overrides, "tracking")}
      ></TextField>
      <TextField
        label="Tracking url"
        isRequired={false}
        isReadOnly={false}
        value={trackingURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL: value,
              paymentType,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.trackingURL ?? value;
          }
          if (errors.trackingURL?.hasError) {
            runValidationTasks("trackingURL", value);
          }
          setTrackingURL(value);
        }}
        onBlur={() => runValidationTasks("trackingURL", trackingURL)}
        errorMessage={errors.trackingURL?.errorMessage}
        hasError={errors.trackingURL?.hasError}
        {...getOverrideProps(overrides, "trackingURL")}
      ></TextField>
      <TextField
        label="Payment type"
        isRequired={false}
        isReadOnly={false}
        value={paymentType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType: value,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.paymentType ?? value;
          }
          if (errors.paymentType?.hasError) {
            runValidationTasks("paymentType", value);
          }
          setPaymentType(value);
        }}
        onBlur={() => runValidationTasks("paymentType", paymentType)}
        errorMessage={errors.paymentType?.errorMessage}
        hasError={errors.paymentType?.hasError}
        {...getOverrideProps(overrides, "paymentType")}
      ></TextField>
      <TextField
        label="Owner"
        isRequired={false}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phone,
              cashappId,
              name,
              company,
              line1,
              line2,
              city,
              state,
              zip,
              country,
              total,
              paid,
              orderHash,
              shipped,
              shippingType,
              shippingCost,
              shipporateObjectId,
              cartTotalWeight,
              labelURL,
              completed,
              tracking,
              trackingURL,
              paymentType,
              owner: value,
            };
            const result = onChange(modelFields);
            value = result?.owner ?? value;
          }
          if (errors.owner?.hasError) {
            runValidationTasks("owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("owner", owner)}
        errorMessage={errors.owner?.errorMessage}
        hasError={errors.owner?.hasError}
        {...getOverrideProps(overrides, "owner")}
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
          isDisabled={!(idProp || orderModelProp)}
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
              !(idProp || orderModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
