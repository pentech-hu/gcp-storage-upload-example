const { Storage } = require('@google-cloud/storage');

function main(
    bucketName = 'bucket-name',
    filePath = './local/path/to/file.txt',
    destFileName = 'file.txt'
) {
    const storage = new Storage();

    async function uploadFile() {
        await storage.bucket(bucketName).upload(filePath, {
            destination: destFileName,
        });

        console.log(`${filePath} uploaded to ${bucketName}`);
    }

    uploadFile().catch(console.error);
}

main(...process.argv.slice(2));
