export const useTimeFormat = () => {
  const formatMonthDayYear = (date: Date) => {
    const newDate = new Date(date);

    return newDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return { formatMonthDayYear };
};
