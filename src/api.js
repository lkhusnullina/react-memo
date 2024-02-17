const leaderHost = "https://wedev-api.sky.pro/api/leaderboard";

export function getAllLeaders() {
  return fetch(leaderHost, {
    method: "GET",
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Произошла ошибка сервера, попробуйте позже");
      }
      return response.json();
    })
    .catch(error => {
      console.error("Ошибка при получении данных лидерборда:", error);
      throw error;
    });
}

export function postLeader({ name, time }) {
  return fetch(leaderHost, {
    method: "POST",
    body: JSON.stringify({
      name,
      time,
    }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Произошла ошибка сервера, попробуйте позже");
      }
      return response.json();
    })
    .catch(error => {
      console.error("Ошибка при получении данных лидерборда:", error);
      throw error;
    });
}
