export const PROJECT_SINGLE_QUERY = `query Project($filters: ProjectFiltersInput) {
    projects(filters: $filters) {
      data {
        attributes {
          location
          displayTitle
          description
          partners {
            data {
              id
              attributes {
                name
                link
                logo {
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
          gallery {
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
  }`;

export const TEAM_SINGLE_QUERY = `query Team($filters: TeamFiltersInput) {
    teams(filters: $filters) {
      data {
        attributes {
          name
          description
          image {
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
  }`;
