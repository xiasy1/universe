// import AWS from "aws-sdk";

// export default function getAWSCDN() {
//     const accessKeyId = "AKIAT7G7VPBDZJLTR7GM";
//     const secretAccessKey = "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";
//
//     let s3 = new AWS.S3({
//         'apiVersion'     : '2012-10-17',
//         'accessKeyId'    : accessKeyId,
//         'secretAccessKey': secretAccessKey,
//     });
//
//     s3.listObjects({
//         Bucket: 'catddle-frontend-item'
//     }, function (err, data) {
//         if (err) {
//             console.log("Error", err);
//         } else {
//             console.log("Success", data);
//         }
//     });
// }
export default function getAWSCDN(folder_name = 'discord-icons', image_name, ext = 'png'){
    return `https://catddle-frontend-item.s3.ap-southeast-1.amazonaws.com/${folder_name}/${image_name}.${ext}`;
}