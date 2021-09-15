# Going Further

This guide only scratches the surface. There are many other cloud services that cover a lot of features.

The following few items include interesting additional features that could be tackled on top of the basics that were
covered.

## File processing

File are being stored without modifying them, but they can be analyzed and manipulated:

- Transforming images and videos: [Amazon Media Services]
- Detecting text, faces and objects: [Amazon Rekognition], [Azure Cognitive Services], [Google ????]
- Extract structured information from text: [Amazon Comprehend], [Azure Text Analytics] and [Google Natural Language]

## Completion notification

The one-way upload sequence described in this guide would be nicer if it looped back to the users to tell them about the
logical completion of their upload, especially if files get processed.

This can be achieved via a number of mechanisms:

- [WebSockets] or [Server-Sent Events]
- GraphQL subscriptions: [Amazon AppSync] can watch and notify automatically
- Push notifications: [Amamzon SNS], [Azure Notification Hubs], Google's [Firebase Cloud Messaging]

## File sharing

This guide covered how a unique, pre-signed URL that provides access to a file can be generated. Simply sharing such
URLs with other users would let them access the files.

However, it would be nicer to send an email that explains who shared the file and why: [Amazon SES], [Mailchimp] or
[Sendgrid] can be used to send emails.

[amazon media services]: TODO
[amazon rekognition]: TODO
[amazon cognitive services]: TODO
[amazon comprehend]: TODO
[amazon appsync]: TODO
[amazon ses]: TODO
[amazon sns]: TODO
[azure cognitive services]: TODO
[azure notification hubs]: TODO
[azure text analytics]: TODO
[firebase cloud messaging]: TODO
[google natural language]: TODO
[mailchimp]: TODO
[sendgrid]: TODO
[server-sent events]: TODO
[websockets]: TODO
