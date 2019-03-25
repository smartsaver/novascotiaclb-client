import processMarkdown from '../../../libs/marked'

const table = [
  {
    city: 'Sydney',
    dateAndTime: processMarkdown(`
Thursday April 4, 2019
4:00 p.m. to 8:00 pm.
    `),
    location: processMarkdown(`
Royal Canadian Legion Branch 128
10 Wesley Street
    `),
  },
  {
    city: 'Truro',
    dateAndTime: processMarkdown(`
Saturday April 6, 2019
10:00 a.m. to 3:00 p.m.
    `),
    location: processMarkdown(`
Colchester-East Hants Public Library
754 Prince Street
    `),
  },
  {
    city: 'Kentville',
    dateAndTime: processMarkdown(`
Friday April 12, 2019
4:30 p.m. to 8:30 p.m.
    `),
    location: processMarkdown(`
The Salvation Army Church
15 Nichols Avenue
    `),
  },
  {
    city: 'Halifax',
    dateAndTime: processMarkdown(`
Saturday April 13, 2019
10:00 a.m. to 3:00 p.m.
    `),
    location: processMarkdown(`
Captain William Spry Community Center
16 Sussex Street
    `),
  },
  {
    city: 'Dartmouth',
    dateAndTime: processMarkdown(`
Tuesday April 16, 2019
3:00 p.m. to 7:00 p.m.
    `),
    location: processMarkdown(`
Dartmouth North Community Food Center 
140-6 Primrose Street
    `),
  },
]

const applyPersonContent = {
  title: 'Apply in Person',
  header: processMarkdown(`
You can get help filing taxes, getting SINs for your children and register for the CLB at a walk-in tax clinic. Clinics are being held around the province in April. 
  `),
  table,
  footer: processMarkdown(`
If you can’t attend one of these clinic, you can get help with your taxes at another free tax clinic in your community. These clinics are for taxes only, not for SINs or the CLB. Visit the Community Volunteer Income Tax Program for more information.

## Before You Start

When you register for the CLB, make sure you have:
 
* Social Insurance Numbers (SIN) for you and your child
* Your most recent income tax and benefit return
* An RESP account where the government can deposit the money.
  `),
}

export default applyPersonContent
