import { createClient } from '@urql/core';

const DatoToken = import.meta.env.VITE_DATO_READ_TOKEN;
const DatoBaseUrl = 'https://graphql.datocms.com';

const fetchOptions = () => {
	return { headers: { authorization: `Bearer ${DatoToken}` } };
};

const datoClient = createClient({
	url: DatoBaseUrl,
	fetchOptions: fetchOptions
});

function getGqlString(doc) {
	return doc.loc && doc.loc.source.body;
}

export { datoClient, getGqlString };
