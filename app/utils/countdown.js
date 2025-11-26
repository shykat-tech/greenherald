export function useCountdown(targetDate, callback) {
  let interval = null;

  const start = () => {
    const eventDate = new Date(targetDate);

    const update = () => {
      const now = Date.now();
      const diff = eventDate - now;

      if (diff <= 0) {
        callback({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        clearInterval(interval);
        return;
      }

      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      );
      const hours = String(
        Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(
        2,
        "0"
      );

      callback({ days, hours, minutes, seconds });
    };

    update(); // initialize
    interval = setInterval(update, 1000);
  };

  const stop = () => interval && clearInterval(interval);

  return { start, stop };
}
