const isAdm = (email) => {
  return email === import.meta.env.VITE_USER_ADM_EMAIL;
};

export default isAdm;
