export const initState = {
  loading: false,
  err: false,
  res: [],
};

export const HospitalReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOADING": {
      return {
        loading: true,
        err: false,
        res: [],
      };
    }
    case "ERROR": {
      return {
        loading: false,
        err: true,
        res: [],
      };
    }
    case "SUCCESS": {
      return {
        loading: false,
        err: false,
        res: payload,
      };
    }
    default: {
      throw new Error("invalid action type", type);
    }
  }
};
