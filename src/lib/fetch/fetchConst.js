export const urlInit = '/api/';
export const credentials = 'same-origin';
export const jsonHeaders = {
  'content-type': 'application/json',
}
export const catchError = () => {
  alert('Houve um erro.');
  return null;
}
