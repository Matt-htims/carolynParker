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

export const HOME_QUERY = `query Home($pagination: PaginationArg) {
  pageHome {
    data {
      attributes {
        seo {
          metaTitle
          metaDescription
          keywords
          metaImage {
            data {
              attributes {
                url
              }
            }
          }
        }
        blocks {
          ... on ComponentBlockPadding {
            paddingSize
          }
          ... on ComponentBlockPageIntro {
            image {
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
          ... on ComponentBlockProjectDisplay {
            project {
              data {
                id
                attributes {
                  location
                  displayTitle
                  slug
                  description
                  gallery(pagination: $pagination) {
                    data {
                      attributes {
                        alternativeText
                        width
                        height
                        formats
                        url
                        placeholder
                      }
                    }
                  }
                }
              }
            }
            button {
              text
              link
              colour
            }
            displayType
          }
          ... on ComponentBlockTestimonial {
            quote
            author
            smallQuote
          }
          ... on ComponentBlockBanner {
            text
            backgroundColour
          }
        }
      }
    }
  }
}`;

export const ABOUT_QUERY = `query About($pagination: PaginationArg) {
  pageAbout {
    data {
      attributes {
        seo {
          metaTitle
          metaDescription
          keywords
          metaImage {
            data {
              attributes {
                url
              }
            }
          }
        }
        blocks {
          ... on ComponentBlockPadding {
            paddingSize
          }
          ... on ComponentBlockPageIntro {
            image {
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
          ... on ComponentBlockProjectDisplay {
            project {
              data {
                id
                attributes {
                  location
                  displayTitle
                  slug
                  description
                  gallery(pagination: $pagination) {
                    data {
                      attributes {
                        alternativeText
                        width
                        height
                        formats
                        url
                        placeholder
                      }
                    }
                  }
                }
              }
            }
            button {
              text
              link
              colour
            }
            displayType
          }
          ... on ComponentBlockTestimonial {
            quote
            author
            smallQuote
          }
          ... on ComponentBlockBanner {
            text
            backgroundColour
          }
        }
      }
    }
  }
}`;

export const WHAT_QUERY = `query What($pagination: PaginationArg) {
  pageWhatWeDo {
    data {
      attributes {
        seo {
          metaTitle
          metaDescription
          keywords
          metaImage {
            data {
              attributes {
                url
              }
            }
          }
        }
        blocks {
          ... on ComponentBlockPadding {
            paddingSize
          }
          ... on ComponentBlockPageIntro {
            image {
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
          ... on ComponentBlockProjectDisplay {
            project {
              data {
                id
                attributes {
                  location
                  displayTitle
                  slug
                  description
                  gallery(pagination: $pagination) {
                    data {
                      attributes {
                        alternativeText
                        width
                        height
                        formats
                        url
                        placeholder
                      }
                    }
                  }
                }
              }
            }
            button {
              text
              link
              colour
            }
            displayType
          }
          ... on ComponentBlockTestimonial {
            quote
            author
            smallQuote
          }
          ... on ComponentBlockBanner {
            text
            backgroundColour
          }
        }
      }
    }
  }
}`;
