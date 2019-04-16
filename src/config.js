const dev = {
  s3: {
    REGION: "eu-central-1",
    BUCKET: "noteschich-dev-attachmentsbucket-bsyn6d7e1vkt"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://17lwys7hoa.execute-api.eu-central-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_ZVCEgWVgo",
    APP_CLIENT_ID: "2los42h6uomg60setq3geavqes",
    IDENTITY_POOL_ID: "eu-central-1:5a8a5d4a-f751-49ba-b0e6-adc0a843ee5b"
  }
};

const prod = {
  s3: {
    REGION: "eu-central-1",
    BUCKET: "noteschich-prod-attachmentsbucket-5tdxlcrsexmm"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://43vsrrtide.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_6MPSJyp0x",
    APP_CLIENT_ID: "6bsv8ho8rftvft9s8sjd3hle1e",
    IDENTITY_POOL_ID: "eu-central-1:0018f2bf-bc8a-4a51-8716-7dc32039a7f5"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
