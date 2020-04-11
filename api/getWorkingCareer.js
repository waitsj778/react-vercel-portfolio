var AWS = require('aws-sdk');
    AWS.config.update({
        "accessKeyId": process.env.accesskeyid,
        "secretAccessKey": process.env.secretaccesskey,
        "region": process.env.region
    })
var s3 = new AWS.S3();
var params = {
        Bucket: process.env.bucket,
        Key: process.env.workingcareerpdf,
        Expires: 60
};
module.exports = async (req, res) => {
        const resumeUrl = await s3.getSignedUrlPromise('getObject', params);
        res.status(200).json({resumeUrl: resumeUrl})
}