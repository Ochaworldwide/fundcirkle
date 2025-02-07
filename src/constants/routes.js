export const ROUTES = {
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/register",
    RESENDOTP: "/auth/verify/resend",
    VERIFY: "/auth/verify-otp",
    FORGOT_PASSWORD: "/auth/password/forgot",
    RESET: "/auth/password/reset",
  },
  MISC: {
    GET_COUNTRIES: "/get/countries",
    GET_STATES: `get/countries/{country_id}/states`,
  },
  CIRKLE: {
    GET_CIRKLE_CATEGORIES: "/cirkle-categories",
    GET_USER_CIRKLES: "/cirkles",
    GET_USER_INVITES: "/invites",
    GET_RECOMMENDED_CIRKLES: "/recommended-cirkles",
    GET_CIRCLE_REQUEST: "/requests/cirkles",
    SEARCH_CIRKLES: "/search/cirkles",

    GET_CIRCLE: (id) => `/cirkles/${id}`,
    UPDATE_CIRCLE_CATEGORY: (id) => `/cirkle-categories/${id}`,
  },
  ACCOUNT: {
    GET_USER_ACCOUNT: "/account",
    GET_DASHBOARD_STATS: "/quickstats",
    UPDATE_USER_PASSWORD: "/account/password",
    UPDATE_BANK_DETAILS: "/account/bank",
    UPDATE_PROFILE_INFO: "/account/profile",
    UPDATE_PROFILE_PHOTO: "/account/profile-photo",
    UPDATE_KYC: "/account/kyc",
  },
};

