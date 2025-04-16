async function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    if (typeof userId !== "number" || userId < 0 || isNaN(userId)) {
      reject("Invalid userID");
      return;
    }
    setTimeout(() => {
      resolve({
        id: userId,
        name: `user ${userId}`,
        email: `user${userId}@example.com`,
      });
    }, 1000);
  });
}

fetchUserData("aa")
  .then((a) => {
    console.log(a);
  })
  .catch((e) => console.log(e));
