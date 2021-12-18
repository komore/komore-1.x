# Services

## Amazon S3

The S3 API can be used via the [`@aws-sdk/client-s3`] package, which is one of the many modules available in the
[AWS SDK v3].

The 3.0 SDK has the advantage of using more modern packaging techniques and a streamlined API: each AWS service features
its own package and uses the same client and command input/output model.

Within the scope of this article, the following two operations will be needed:

- [`PutObject`], used to create or update objects
- [`HeadObject`], used to retrieve information about an object

```ts
// TODO
```

The `ContentLength` name is not very intuitive. It comes from the fact the S3 API, just like the other APIs discussed
further below, is heavily based on standard HTTP requests where the `Content-Length` header is used. This also explains
the `PutObject` and `HeadObject` names, which stem from the `PUT` and `HEAD` HTTP methods.

## Azure Blob Storage

[Blob Storage] uses containers, blobs and blob names:

- Containers replace classical disk drives or mounting points
- Blobs are equivalent to files
- Blob names are full file paths

Blob Storage offers an extensive REST API used to deal with containers and objects, but just like with S3 we will only
need to focus on two of them:

- [Put Blob], used to create or update blobs
- [Get Blob Properties], used to get information about a blob

Numerous libraries exist for most common languages. For TypeScript, the official packages can be used.
Each Azure service gets its own package, with its own client and a set of interfaces used to access the service.

Google Cloud Storage

Cloud Storage uses buckets, objects and object names.
Buckets once again replace classical disk drives or mounting points, objects are equivalent to files and object names are full file paths.
A REST API provides all the operations necessary to manipulate the buckets and objects, but we will only take a look at two of them:
Insert Object, used to create or update objects
Get Object, used to get information about an object
And it will not come as a surprise that Google offers dedicated packages we can use with TypeScript.
Each Google service gets its own package, with its own client and set of interfaces.
