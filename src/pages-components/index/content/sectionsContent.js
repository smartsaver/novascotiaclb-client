import processMarkdown from '../../../libs/marked'

const sectionsContent = {
  content: processMarkdown(`
## Benefit amount

Children receive $500 initially and $100 more each year that they’re eligible. They can keep receiving the CLB until they’re 15, or until they’ve received a maximum of $2,000. 
  
## Eligibility

Families can register for the CLB if they have:

* Children born on or after January 1, 2004.
* Canadian residency or citizenship.
* A net family income of $47,630 or less for a family with up to 3 children – if you have more than 3, visit the Employment and Social Development [website]( https://www.canada.ca/en/employment-social-development/services/learning-bond/eligibility.html) to find your income limit.

## How to Apply
  
If you already have an RESP, talk to your bank or RESP provider to let them know you want to register for the CLB.
 
If you don’t have an RESP, you can open one and register for your child’s CLB online or by phone.
    `),
}

export default sectionsContent
