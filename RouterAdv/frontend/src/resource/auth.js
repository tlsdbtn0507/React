export const getTokenDuration = () => {
  const expirationDate = new Date(localStorage.getItem("expiration"));

  const duration = expirationDate.getTime() - new Date().getTime();
  return duration;
};

export const getAuth = () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  if (getTokenDuration() < 0) return "EXPIRED";

  return token;
};
