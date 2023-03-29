var AWS = require("aws-sdk");

exports.handler = (event, conttext, callback) => {
    var s3 = new AWS.S3();
    var sourceBucket = "test-sourcebucket1";
    var destinationBucket = "test-destinationbucket1";
    var objectKey = event.Record[0].s3.object.key;
    var copySource = encodeURI(sourceBucket + "/" + objectKey);
    var copyParams = { Buckets: destinationBucket, CopySource:copySource, Key: objectKey };
    s3.copyObject(copyParams, function(err, data) {
        if (err) {
            console.log(err, err.stack);
        } else {
            console.log("s3 object copy successful.");
        }
    });
    
};