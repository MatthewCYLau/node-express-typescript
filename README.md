# TypeScript Node Express GCP

A reference project to build, and deploy a TypeScript Node Express service to GCP Cloud Run

## Build

```bash
gcloud builds submit --tag gcr.io/<PROJECT-ID>/ts-node
```

## Deploy

```bash
gcloud run deploy --image gcr.io/<PROJECT-ID>/ts-node --platform managed
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
