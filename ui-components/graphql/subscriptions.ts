/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact($filter: ModelSubscriptionContactFilterInput) {
    onCreateContact(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onCreateOrder(filter: $filter, owner: $owner) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onCreateReview(filter: $filter, owner: $owner) {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact($filter: ModelSubscriptionContactFilterInput) {
    onDeleteContact(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onDeleteOrder(filter: $filter, owner: $owner) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onDeleteReview(filter: $filter, owner: $owner) {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact($filter: ModelSubscriptionContactFilterInput) {
    onUpdateContact(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onUpdateOrder(filter: $filter, owner: $owner) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onUpdateReview(filter: $filter, owner: $owner) {
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
