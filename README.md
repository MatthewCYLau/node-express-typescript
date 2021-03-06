# TypeScript Node Express GCP

A reference project to build, and deploy a TypeScript Node Express service to GCP Cloud Run

![cicd cloud run workflow](https://github.com/MatthewCYLau/node-express-typescript/actions/workflows/cicd-cloud-run.yml/badge.svg)

## Pre-requisite

- Please ensure you have [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed locally

## Development

- Create a `.env` file at project root directory, and populate with following:

```
PORT=<PORT-NUMBER>
JWT_KEY=<A-SECRET-JWT-TOKEN>
MONGO_DB_CONNECTION_STRING=<YOUR-MONGO-DB-CONNECTION-STRING>
```

- Then, run the following commands:

```bash
npm i # installs Node dependencies
npm run dev` # app listening at http://localhost:8080
```

## Build

```bash
gcloud builds submit --tag gcr.io/<PROJECT-ID>/ts-node
```

## Deploy

- Create two secrets on [Secrets Manager](https://cloud.google.com/secret-manager) named `jwt-key`, and `mongo-db-connection-string`

- Deploy to Cloud Run by running:

```bash
gcloud run deploy --image gcr.io/<PROJECT-ID>/ts-node --platform managed
```

- Allow Cloud Run service access to the secrets as secret environment variables. See GCP Cloud Run documentation [here](https://cloud.google.com/run/docs/configuring/secrets#mounting-secrets)

## Usage

- Make a `GET` request at `<CLOUD-RUN-SERVICE-URL>/ping`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
