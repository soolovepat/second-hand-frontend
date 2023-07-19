import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_SECREAT_ACCESS_KEY,
});

const myBucket = new AWS.S3({
  params: { Bucket: process.env.REACT_APP_S3_BUCKET },
  region: process.env.REACT_APP_RESION,
});

const uploadToS3 = (img, _) => {
  const params = {
    ACL: "public-read",
    Body: img,
    Bucket: process.env.REACT_APP_S3_BUCKET,
    Key: `upload/${img.name}`,
  };

  return new Promise((resolve, reject) => {
    myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {})
      .send((err, _) => {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }
        const imageUrl = `https://${process.env.REACT_APP_S3_BUCKET}.s3.${process.env.REACT_APP_RESION}.amazonaws.com/${params.Key}`;
        resolve(imageUrl);
      });
  });
};

export default uploadToS3;
