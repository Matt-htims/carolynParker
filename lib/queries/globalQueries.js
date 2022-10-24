export const GLOBAL_QUERY = `query Global {
    globalInfo {
      data {
        attributes {
          navBar {
            brand {
              data {
                attributes {
                  url
                  placeholder
                  width
                  height
                  alternativeText
                }
              }
            }
            navLinks {
              url
              title
              id
            }
          }
          footer {
            icon {
              data {
                attributes {
                  alternativeText
                  width
                  height
                  url
                  placeholder
                }
              }
            }
            addressLine1
            addressLine2
            number
            email
            copyrightText
            socialMedia {
              platformName
              link
              id
              icon {
                data {
                  attributes {
                    alternativeText
                    width
                    height
                    url
                    placeholder
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `;
