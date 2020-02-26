import processMarkdown from '../../../libs/marked'

const table = [
  {
    city: 'Windsor',
    dateAndTime: processMarkdown(`
Thursday, March 5, 2020
2:00 p.m. to 7:00 p.m.
    `),
    location: processMarkdown(`
Windsor Legion
35 Empire Lane
    `),
  },
  {
    city: 'Spryfield',
    dateAndTime: processMarkdown(`
Saturday, March 7, 2020
10:00 a.m. to 3:00 p.m.
    `),
    location: processMarkdown(`
Captain William Spry Public Library 
16 Sussex Street
    `),
  },
  {
    city: 'Truro',
    dateAndTime: processMarkdown(`
Thursday, March 19, 2020
3:00 p.m. to 7:00 p.m.
    `),
    location: processMarkdown(`
Colchester-East Hants Public Library
754 Prince Street
    `),
  },
  {
    city: 'Amherst',
    dateAndTime: processMarkdown(`
Friday, March 20, 2020
10:00 a.m. to 2:00 p.m.
    `),
    location: processMarkdown(`
Trinity-St. Stephen’s United Church
1 Ratchford Street
    `),
  },
  {
    city: 'Kentville',
    dateAndTime: processMarkdown(`
Saturday, March 21, 2020
10:00 a.m. to 2:00 p.m.
    `),
    location: processMarkdown(`
The Salvation Army Kentville Community Church
15 Nichols Avenue
    `),
  },
  {
    city: 'New Glasgow',
    dateAndTime: processMarkdown(`
Tuesday, March 24, 2020
1:00 p.m. to 4:00 p.m.
    `),
    location: processMarkdown(`
Glasgow Square Theatre
155 Riverside Parkway
    `),
  },
  {
    city: 'Sydney',
    dateAndTime: processMarkdown(`
Thursday, March 26, 2020
4:00 p.m. to 8:00 pm.
    `),
    location: processMarkdown(`
Whitney Pier Royal Canadian Legion
10 Wesley Street
    `),
  },
  {
    city: 'Dartmouth',
    dateAndTime: processMarkdown(`
Saturday, March 28, 2020
10:00 a.m. to 3:00 p.m.
    `),
    location: processMarkdown(`
Dartmouth North Public Library 
105 Highfield Park Drive
    `),
  },
]

const applyPersonContent = {
  title: 'Apply in Person',
  header: processMarkdown(`
You can get help filing taxes, getting SINs for your children and register for the CLB at a walk-in tax clinic. Clinics are being held around the province in March. Each clinic location is wheelchair accessible and will have American Sign Language (ASL) interpreters available.
  `),
  table,
}

export default applyPersonContent
