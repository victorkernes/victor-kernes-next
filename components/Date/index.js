import { parseISO, format } from 'date-fns';

// function currentYear() {
//   if (date.getFullYear() === (new Date()).getFullYear()) {
//     format(date, 'MMM d')
//   } else {
//     format(date, 'MMM d, YYY')
//   }
// }

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLL d')}</time>;
}