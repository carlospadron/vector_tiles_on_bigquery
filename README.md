# vector_tiles_on_bigquery

This project aims to show how Vector Tiles can be served with a combination of Google BigQuery and Google Cloud Functions.

## TODO
- vts function on bigquery
- ammend cloud function to read new function
- apply authentication

## set CLI
gcloud auth login
gcloud config set project os-data-433106

## Deploy function
cd vts_cloud_function
gcloud functions deploy vts \
  --runtime nodejs20 \
  --trigger-http \
  --allow-unauthenticated \
  --timeout=120s \
  --service-account os-data-433106@appspot.gserviceaccount.com \
  --region europe-west2 \
  --gen2 \
  --min-instances=0 \
  --set-env-vars PROJECT_ID=os-data-433106,DATASET_ID=os,TABLE_ID=os-open-uprn

## Access to function
https://europe-west2-os-data-433106.cloudfunctions.net/vts
https://vts-wuo7rzshuq-nw.a.run.app