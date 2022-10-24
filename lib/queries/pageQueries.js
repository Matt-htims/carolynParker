export const HOME_PAGE_QUERY = `query Home($pagination: PaginationArg) {
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

export const ABOUT_PAGE_QUERY = `query About($pagination: PaginationArg) {
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

export const WHAT_PAGE_QUERY = `query What($pagination: PaginationArg) {
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
