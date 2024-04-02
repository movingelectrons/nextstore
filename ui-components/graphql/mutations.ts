/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $condition: ModelContactConditionInput
    $input: CreateContactInput!
  ) {
    createContact(condition: $condition, input: $input) {
      createdAt
      email
      id
      message
      owner
      replied
      updatedAt
      __typename
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $condition: ModelOrderConditionInput
    $input: CreateOrderInput!
  ) {
    createOrder(condition: $condition, input: $input) {
      cartTotalWeight
      cashappId
      city
      company
      completed
      country
      createdAt
      email
      id
      labelURL
      line1
      line2
      name
      orderHash
      owner
      paid
      paymentType
      phone
      shipped
      shippingCost
      shippingType
      shipporateObjectId
      state
      total
      tracking
      trackingURL
      updatedAt
      zip
      __typename
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $condition: ModelProductConditionInput
    $input: CreateProductInput!
  ) {
    createProduct(condition: $condition, input: $input) {
      createdAt
      description
      id
      price
      reviews {
        nextToken
        __typename
      }
      title
      updatedAt
      weight
      __typename
    }
  }
`;
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $condition: ModelReviewConditionInput
    $input: CreateReviewInput!
  ) {
    createReview(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      productReviewsId
      rating
      updatedAt
      __typename
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $condition: ModelContactConditionInput
    $input: DeleteContactInput!
  ) {
    deleteContact(condition: $condition, input: $input) {
      createdAt
      email
      id
      message
      owner
      replied
      updatedAt
      __typename
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $condition: ModelOrderConditionInput
    $input: DeleteOrderInput!
  ) {
    deleteOrder(condition: $condition, input: $input) {
      cartTotalWeight
      cashappId
      city
      company
      completed
      country
      createdAt
      email
      id
      labelURL
      line1
      line2
      name
      orderHash
      owner
      paid
      paymentType
      phone
      shipped
      shippingCost
      shippingType
      shipporateObjectId
      state
      total
      tracking
      trackingURL
      updatedAt
      zip
      __typename
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $condition: ModelProductConditionInput
    $input: DeleteProductInput!
  ) {
    deleteProduct(condition: $condition, input: $input) {
      createdAt
      description
      id
      price
      reviews {
        nextToken
        __typename
      }
      title
      updatedAt
      weight
      __typename
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $condition: ModelReviewConditionInput
    $input: DeleteReviewInput!
  ) {
    deleteReview(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      productReviewsId
      rating
      updatedAt
      __typename
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $condition: ModelContactConditionInput
    $input: UpdateContactInput!
  ) {
    updateContact(condition: $condition, input: $input) {
      createdAt
      email
      id
      message
      owner
      replied
      updatedAt
      __typename
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $condition: ModelOrderConditionInput
    $input: UpdateOrderInput!
  ) {
    updateOrder(condition: $condition, input: $input) {
      cartTotalWeight
      cashappId
      city
      company
      completed
      country
      createdAt
      email
      id
      labelURL
      line1
      line2
      name
      orderHash
      owner
      paid
      paymentType
      phone
      shipped
      shippingCost
      shippingType
      shipporateObjectId
      state
      total
      tracking
      trackingURL
      updatedAt
      zip
      __typename
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $condition: ModelProductConditionInput
    $input: UpdateProductInput!
  ) {
    updateProduct(condition: $condition, input: $input) {
      createdAt
      description
      id
      price
      reviews {
        nextToken
        __typename
      }
      title
      updatedAt
      weight
      __typename
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $condition: ModelReviewConditionInput
    $input: UpdateReviewInput!
  ) {
    updateReview(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      productReviewsId
      rating
      updatedAt
      __typename
    }
  }
`;
