
export const fQueryParams = (filter?: Record<string, any>) => {
  let query = '?';

  if (filter) {
    Object.entries(filter).forEach(([key, value]) => {
      query += `${key}=${value}&`;
    })
  }

  return query;
}

export const calculateAge = (date: Date | string | null) =>{

  if (!date) return 0;
  const today = new Date();
  const birthDate = new Date(date);
  if (today < birthDate) {
    return 0;
  }
  let ageNow = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    ageNow--;
  }

  return ageNow;
}

export function capitalizeFirstLetter(str?: string | null) {
  const words = str?.split(' ') || [];
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}
export function capitalizeLetters(str: string): string {
  return str.replace(/[a-zA-Z]/g, (char: string) => char.toUpperCase());
}

// Utility function to mask email
export function maskEmail(email: string): string {
  const [localPart, domain] = email.split('@');
  const maskedLocalPart = localPart.length > 2 
    ? `${localPart[0]}${'*'.repeat(localPart.length - 2)}${localPart[localPart.length - 1]}`
    : localPart;
  const [domainName, domainExtension] = domain.split('.');
  const maskedDomainName = domainName.length > 2 
    ? `${domainName[0]}${'*'.repeat(domainName.length - 2)}${domainName[domainName.length - 1]}`
    : domainName;
  return `${maskedLocalPart}@${maskedDomainName}.${domainExtension}`;
}
