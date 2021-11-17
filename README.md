# TypeScript Node Express GCP

A reference project to build, and deploy a TypeScript Node Express service to GCP Cloud Run

![cicd cloud run workflow](https://github.com/MatthewCYLau/node-express-typescript/actions/workflows/cicd-cloud-run.yml/badge.svg)

## Pre-requisite

- Please ensure you have [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed locally

## Development

- Create a `.env` file at project root directory. Populate with `PORT`, and `MONGO_DB_CONNECTION_STRING`
- Run `npm run dev`

## Build

```bash
gcloud builds submit --tag gcr.io/<PROJECT-ID>/ts-node
```

## Deploy

```bash
gcloud run deploy --image gcr.io/<PROJECT-ID>/ts-node --platform managed
```

- Add an environment variable for `MONGO_DB_CONNECTION_STRING`. See GCP Cloud Run documentation [here](https://cloud.google.com/run/docs/configuring/environment-variables)

## Usage

- Access app at `<CLOUD-RUN-SERVICE-URL>/ping`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
