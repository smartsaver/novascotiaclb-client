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
Walk-in clinic registration has now ended for 2019.
  `),
  table,
  footer: processMarkdown(`
## Before You Start

When you register for the CLB, make sure you have:
 
* Your most recent income tax and benefit return
* Social Insurance Numbers (SIN) for you and your child. [Learn how to apply for a SIN.](https://www.smartsaver.org/startmyresp/en/Learn-How-to-Apply-for-Sin.html)
  `),
}

export default applyPersonContent
