import { GraphQLClient } from "graphql-request";
import { ENDPOINTS } from "~/config/api.config";

const client = new GraphQLClient(ENDPOINTS.BASE_URL);

export default client;
