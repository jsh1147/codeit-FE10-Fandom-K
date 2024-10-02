export function getTimeLeft(inputDateTime) {
  const now = new Date();
  const inputDate = new Date(inputDateTime);

  // '2024-09-28T00:00:00.000Z' 형태로 왔을때 new Date()를 하면은 time zone이 적용되어 KST+9가 됨
  // 그래서 다시 9시간을 빼는 작업 진행
  const nineHoursInMs = 9 * 60 * 60 * 1000;
  const adjustedInputDate = new Date(inputDate.getTime() - nineHoursInMs);

  const diffInMs = adjustedInputDate - now;

  if (diffInMs <= 0) {
    return '후원 종료';
  }

  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  if (diffInDays > 0) {
    return `${diffInDays}일 남음`;
  }

  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  if (diffInHours > 0) {
    return `${diffInHours}시간 남음`;
  }

  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  if (diffInMinutes > 0) {
    return `${diffInMinutes}분 남음`;
  }
}
