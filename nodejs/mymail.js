module.exports.sendEmail = function(ReceiverEmail,Subject,Message)
{
    console.log("I will send plain text email");
}
module.exports.sendEmailWithAttachment = function(ReceiverEmail,Subject,Message,attachments)
{
    console.log("I will send email with attachment");
}