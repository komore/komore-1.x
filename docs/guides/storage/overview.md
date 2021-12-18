# Overview

## Same Things, Different Names

Each service comes with its own naming convention, but apart from that there are hardly any differences.

As they are very similar, they can also fairly easily be abstracted.

However, so far no concrete shared API initiative has been launched and competition remains favored over openness.

## HTTP Features

While they do not share a common set of APIs, they all share a common set of design decisions.

First, they attempt to remain close to what is already offered by the HTTP protocol:

- File operations map typical CRUD operations to PUT, DELETE, etc.
- Content-Length is used to describe a file size
- Media types can be used to convey a file type

On top of this, they can also function as a simple alternative to full-fledged HTTP servers such as Apache or Nginx:

TODO: HTTP server configuration

TODO: Cross-domain access control headers can be used to limit access

It should be noted that a number of smaller competitors are starting to support the Amazon S3 API to ease the transition
from AWS.

## Block-Level Access

There are also lower level APIs or services that work at the block level.

Amazon has a separate Elastic Block Storage - or EBS - service. Azure and Google offer a different set of APIs but keep
the same service name. As file and block level accesses cannot be used simultaneously, they might as well be considered
separate services though.

Such lower level access is useful for some type of applications and for virtual machines. However, for our current use
case, file level access is a better choice.

## Pricing

Storage is virtually unlimited - assuming your banker is a good friend - and you only pay for what you use.

Unless an application requires working with a large quantity of files, the pricing won't be a major factor when choosing
a cloud provider as there is not a lot of competition there.

However, cost can be a complex subject: TODO.

The following table offers a quick overview of the pricing:

$0.023/month on Amazon S3
$0.0184/month on costs $0.0023 that is resilient to disasters and can be configured with varying degrees of replication: within a zone/data center, within a region/city or cross-region.

A number of elements will affect the price, such as the region where the files are stored.
However, the main difference comes from the type of storage, which is chosen based on availability requirements.
For a real-time application with low latency needs, storage will be more expensive than for backups where durability is important but it is not an issue if it takes few minutes to be able to access the files.
The cheapest options offer storage for as low as $0.0001 per GB/month.
SDKs

## From ACID to BASE, or Eventual Consistency

While (or because) they are easy to use, developers tend to use them the same way they used storage in the past and end up with a nearly identical architecture and sequence when uploading files.
The infrastructure aspect is mostly solved via the use of the services discussed above, but the distributed transaction aspect is not. A request made to a cloud service can still fail or time out.
TODO: updated diagram with VM/docker/function connecting to cloud storage
Picking Sides
The aforementioned model is an Atomicity, Consistency, Isolation, Durability - or ACID - model: to an outside observer it seems like the file upload is a single atomic operation that may fail or succeed, but there is no "in-between".
With a distributed system - in this case file storage and a database - the CAP theorem states that out of Consistency, Availability and Partition tolerance, only 2 out of 3 can be achieved.
Modern platforms, in particular within cloud environments, favor availability and partition tolerance in order to better scale.
We are therefore going to pick sides and trade consistency for availability, with the Basically Available, Soft state, Eventual consistency - or BASE - model. In practice, it means that there will at some point be an "in-between" but this will eventually be resolved by reaching a stable and consistent state.
One-Way Sequence
But enough theory and let's get back our goal:
Store a file
Save information about it
When looking at it from a high-level, it seems like these should be 2 micro-services: a file storage service and a file information service. So let's do exactly that.
Cloud storage services are capable of handling file uploads on their own and do not need any additional code to do so. As long as the service was properly configured - notably in terms of cross-domain access - any browser can directly access the APIs and store files.
Moreover, cloud storage services can notify our application when a file has been uploaded:
Amazon S3 can trigger a Lambda
Azure Blob Storage can trigger an Azure Function
Google Cloud Storage can trigger a Cloud Function
Saving the information to a database can therefore be a service that will be called by the cloud storage service in a one-way sequence.
As a side note, a number of other elements can be triggered by those services: emitting into a message queue, sending emails, etc.

TODO: one-way sequence diagram: user -> cloud storage -> function
If the call to the function fails, the cloud storage service will retry the call a number of times. The function should therefore be made idempotent, i.e. it should properly handle scenarios where it receives the same notification multiple times.
Securing Access
Cloud storage services can be configured to be public, which means anyone can use their API to perform operations on a bucket or container.
While this can be considered convenient, the number of news about documents being "stolen" from unsecured buckets and containers shows that this is rarely a good idea.
Configuring the bucket/container private

Presigned URLs

Azure Blob Storage:

- Shared Access Signature
- Trigger

Google Cloud Storage:

- Signed URL
- Trigger
