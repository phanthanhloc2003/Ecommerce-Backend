const jwt = require("jsonwebtoken");

const genneraAccessToken = async (payload) => {
  const access_Token = jwt.sign(
    {
      ...payload,
    },
    "access_token",
    { expiresIn: "30s" }
  );

  return access_Token;
};

const genneraRefreshToken = async (payload) => {
  const access_Token = jwt.sign(
    {
      ...payload,
    },
    "refresh_token",
    { expiresIn: "365d" }
  );

  return access_Token;
};
const refreshTokenJwtService = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.verify(payload, "refresh_token", async(err, user) => {
      if (err) {
        reject(err);
      } else {
        const access_Token = await genneraAccessToken({
          id: user?.id,
          isAdmin: user?.isAdmin,
        });
        resolve({ access_Token });
      }
    });
  });
};


module.exports = {
  genneraAccessToken,
  genneraRefreshToken,
  refreshTokenJwtService,
};
