export function isApplyClosed() {
  return new Date() > new Date('2019', '6', '5', '18');
}

export function getApplyDeadline() {
  return new Date('2019', '6', '5', '18');
}

export function isFileUploadPeriod() {
  const now = new Date();
  return now > new Date('2019', '6', '8', '11') && now < new Date('2019', '6', '14', '18');
}
