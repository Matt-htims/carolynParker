export const PROJECT_PATHS_QUERY = `query ProjectPaths {
    projects {
      data {
        attributes {
          slug
        }
      }
    }
  }`;

export const TEAM_PATHS_QUERY = `query TeamPaths {
  teams {
    data {
      attributes {
        slug
      }
    }
  }
}`;
