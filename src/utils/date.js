export function formatUTCDate(utcString) {
  const date = new Date(utcString);
  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return "th"; // for 4-20
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const dayWithSuffix = day + getOrdinalSuffix(day);

  return `${month}, ${dayWithSuffix}`;
}
