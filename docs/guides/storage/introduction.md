# Introduction

The ability to store content is a requirement for a lot of applications, and cloud providers offer numerous services
that can simplify the process.

While using cloud storage is becoming more common, implementations are often simple ports that still work the way more
traditional, on-premise applications do.

## Traditional model

Before diving head first into those aforementioned cloud-based solutions, it is interesting to first take a look at how
such features are usually developed without them.

A typical file upload mechanism often involves creating an API that receives a file, saves it to a local disk array, and
adds the file information to a database.

TODO: sequence diagram

For example, exposing an API using Express and storing information in a MongoDB or MySQL database is one of many valid
options for this.

### Potential for failure

An easy way to evaluate this design - and a basic principle of chaos engineering - is to ask ourselves: "what could go
wrong?".

And many things can wrong:

- What if the user cancels the upload half-way through?
- What if the user loses the connection half-way through?
- What if the user sends a file that's too large to fit in memory?
- What if writing the file to the disk array fails?
- What if writing the file succeeds, but writing to the database fails?
- What if instead of failing, writing to the database times out?
- What if we run out of disk space?
- What if the local disk array fails?
- What if the machine fails?
- What if the data center fails?

The fact that things can go wrong is not an issue on its own, as things can - and eventually will - go wrong.

What matters is that those risks are known, evaluated, documented, and that there are solutions and processes in place
to limit or work around all those scenarios.

Sometimes it means writing additional code that takes care of edge cases: streaming files so they don't need to fit in
memory, handling error cases or adding background jobs that perform recovery operations.

Sometimes it means defining processes for human intervention when disks need to be replaced or a volume needs to be
expanded.

And sometimes it simply means accepting that there are known limitations because not being able to store more than a
petabyte worth of files may not be an issue for the business cases covered by the application.

### Complexity cost

When it comes to known limitations, failure scenarios are less acceptable though.

Writing software that is resilient to distributed transactions - which is the case here, with the file storage and the
database being separate systems - is often complex and error-prone, as it requires additional layers of reconciliation
and recovery processes. Processes that can also fail.

Such additional layers do not add value to a product. They add constraints: more code to understand, to maintain, to
debug and to test.

On top of this, the infrastructure maintenance can be quite cumbersome:

- On-site interventions are frequently necessary to replace failed disks
- Replication and synchronization must be setup for disaster recovery
- Adding additional storage is rarely a cakewalk and induces risks

Hiring skilled engineers who can perform all those tasks also has a cost. A cost that can be dwarfed by the cost of a
complete failure that lasts for hours.

Now that we have a baseline to use for comparison, it is time to take a look at how cloud services could help alleviate
some of our burden.

## Cloud storage

All major cloud providers have file storage services, the most common ones being [Amazon S3], [Azure Blob Storage] and
[Google Cloud Storage].

### Concept

The premise is simple: what if you could have safe, unlimited storage while only paying for what you really use?

This is the idea behind those cloud storage providers:

- Almost no size restrictions: unlimited number of files, up to ~5 TB per file
- High availability guarantees: 99.99% for standard storage
- You pay per GB/month for storage
- You pay per GB transferred to/from the cloud (but usually not within the cloud)

[amazon s3]: TODO
[azure blob storage]: TODO
[google cloud storage]: TODO
