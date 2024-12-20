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
  },
  CIRKLE:{

    GET_CIRKLE_CATEGORIES: "/cirkle-categories",
    GET_USER_CIRKLES: `/cirkles`,
    GET_CIRCLE: (id) => `/cirkles/${id}`,
    UPDATE_CIRCLE_CATEGORY: (id) => `/cirkle-categories/${id}` 
  }
};

