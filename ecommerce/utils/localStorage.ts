export const IS_LOGIN = "isLogin";
export const USER = "user";

export const isBrowser = typeof window !== "undefined";

export const getItem = (key: string) => {
  const item = isBrowser && localStorage.getItem(key);

  return item ? JSON.parse(item) : undefined;
};

export const setItem = (key: string, value: string) => {
  isBrowser && localStorage.setItem(key, value);
};

export const deleteItem = (key: string) => {
  isBrowser && localStorage.removeItem(key);
};
