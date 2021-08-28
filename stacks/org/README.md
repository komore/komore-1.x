# org Stack

TODO

## DNS

### Github

TEXT _github-challenge-komore.komore.dev. "c77e008428"

### Gmail

TEXT komore.dev.                           google-site-verification=BkVLt_Q6iIAXMVGA4tzJSt8cN2Q0Y4ataB0x6gGGW0U

### Sendgrid

CNAME em495.komore.dev                     u20110364.wl115.sendgrid.net
CNAME s1._domainkey.komore.dev             s1.domainkey.u20110364.wl115.sendgrid.net
CNAME s2._domainkey.komore.dev             s2.domainkey.u20110364.wl115.sendgrid.net

```ts
route53Zone('zone', {
  name: 'komore.dev'
}),
route53Record('record1', 
  
})
```

# Operations

komore is primarily deployed to [AWS].

[Terraform] is used to provision the infrastructure.

## Resources

## Prerequisites

The following steps install the components necessary to manipulate the infrastructure:

- download and install the latest [Terraform package]
- download and install the latest [AWS CLI]
- obtain an AWS access key and secret

Moreover, the [setup] provisoning profile must have been applied for common shared dependencies to be available.

## Configuration

AWS credentials - an access key and a secret key - must be defined in order to perform any operation.

For automated environments, they are defined through GitHub secrets that become environment environment variables:

| Variable name    | Example value        | Description |
| :--------------- | :------------------- | :---------- |
| `AWS_ACCESS_KEY` | `ABCDEF123GHI45NULL` | Access key  |
| `AWS_SECRET_KEY` | `11abCDeFSeCrEtKeY`  | Secret key  |

For development environments, the [AWS CLI configuration] is necessary.

The configuration involves creating an `~/.aws/credentials` file, either manually or using the AWS CLI:

```sh
$ aws configure --profile komore

AWS Access Key ID [None]: <access key>
AWS Secret Access Key [None]: <secret key>
Default region name [None]: us-east-1
Default output format [None]:
```

The following `~/.aws/credentials` and `~/.aws/config` files match the configuration above:

```sh
$ cat ~/.aws/credentials
[komore]
aws_access_key_id = <access key>
aws_secret_access_key = <secret key>
```

```sh
$ cat ~/.aws/config
[profile komore]
region = us-east-1
```

## Initialization

The `init` command initializes Terraform:

- necessary Terraform providers (e.g. AWS) are downloaded
- the state file gets created

```sh
$ terraform init -backend-config="profile=<aws-profile-name>" -backend-config="key=<instance_id>"

Initializing the backend...
Successfully configured the backend "s3"! Terraform will automatically
use this backend unless the backend configuration changes.

Initializing provider plugins...

<cut>

Terraform has been successfully initialized!
```

The `profile` backend configuration is not necessary when using the `default` AWS profile.

The `key` backend configuration is the key of the S3 object that will store the state. It should match the instance
identifier used in the configuration.

## Provisioning

The `apply` command provisions an environmet:

1. Terraform computes the delta between the current infrastructure state and the described target
2. Terraform applies changes to match the described target

The `apply` command can be used for development:

```sh
$ terraform apply

TODO: show output
```

For CI/CD, where multiple deployments may occur in parallel, additional care must be taken to ensure the operation
remains atomic and there is no overlap.

The `plan` command's output can be used as an input for the `apply` command, ensuring the apply command will only
perform the expected set of changes while the S3 bucket used to store the Terraform state is used as a lock.

```sh
$ terraform plan -input=false -out <target-filename>.tfplan
$ terraform apply -input=false -auto-approve <target-filename>.tfplan

TODO: show output
```

The `input` and `auto-approve` flags prevent Terraform from requesting user input, as this would not be possible when
executed by the CI process.

[app]: ./app
[aws]: https://aws.amazon.com
[aws cli]: https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html
[aws cli configuration]: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html
[init]: ./init
[setup]: ./setup
[terraform]: https://terraform.io
[terraform aws provider]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs
[terraform package]: https://www.terraform.io/downloads.html
