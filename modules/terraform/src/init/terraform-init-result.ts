/**
 * `terraform init` result
 */
export interface TerraformInitResult {}

/*
terraform init -no-color

Initializing the backend...

Initializing provider plugins...
- Finding latest version of hashicorp/aws...
- Finding latest version of hashicorp/github...
- Installing hashicorp/aws v5.37.0...
- Installed hashicorp/aws v5.37.0 (signed, key ID 0C0AF313E5FD9F80)
- Installing hashicorp/github v6.0.0...
- Installed hashicorp/github v6.0.0. Signature validation was skipped due to the registry not containing GPG keys for this provider

Providers are signed by their developers.
If you'd like to know more about provider signing, you can read about it here:
https://terraform.org/docs/cli/plugins/signing/

Terraform has created a lock file .terraform.lock.hcl to record the provider
selections it made above. Include this file in your version control repository
so that Terraform can guarantee to make the same selections by default when
you run "terraform init" in the future.

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
*/
