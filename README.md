# About

This is an example usage of Google Cloud Platform's Cloud Storage upload script, using a service account access token json.

Original source of this script: https://github.com/googleapis/nodejs-storage/blob/master/samples/uploadFile.js


## Prereqvisit

This example was written in Node.js. Using node version >=10 is required by the `@google-cloud/storage` dependency.

## Usage for single file

1. Set the access token's path as an environment variable. [A little help](https://cloud.google.com/docs/authentication/getting-started#setting_the_environment_variable)
2. Run this script from the command line: `node upload-file.js bucket-name ./file-to-upload.pdf uploaded-name.pdf`

Note: This example uploads a single file. In order to upload a whole folder, one may call this script from another service for each file, or use the next option.

## Usage for uploading a whole folder

1. Set the access token's path as an environment variable. [A little help](https://cloud.google.com/docs/authentication/getting-started#setting_the_environment_variable)
2. Run this script from the command line: `node upload-folder.js bucket-name ./path-to-folder`

This will upload the folder and its content as-is. If one needs the ability to exclude files from the folder, 