import { gql } from '@urql/core';

const fetchAllTeamsDashboard = gql`
    query MyQuery {
        allTeams {
            id
            name
            score
            url
						colour {
								hex
						}
						logo {
								responsiveImage {
										src
								}
						}
						
        }
				dashboard {
						round
						winner {
								name
						}
						secondPlace {
								name
						}
						thirdPlace {
								name
						}
						sympathy {
								name
						}
						info
				}
    }
`;

export { fetchAllTeamsDashboard };
