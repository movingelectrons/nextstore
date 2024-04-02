/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
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
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
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
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listContacts(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        email
        id
        message
        owner
        replied
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProducts(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        description
        id
        price
        title
        updatedAt
        weight
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listReviews(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        content
        createdAt
        id
        owner
        productReviewsId
        rating
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
