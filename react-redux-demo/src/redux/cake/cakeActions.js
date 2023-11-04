import { BUY_CAKE } from "./cakeTypes";

//Action creator (function that returns an action)
export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
