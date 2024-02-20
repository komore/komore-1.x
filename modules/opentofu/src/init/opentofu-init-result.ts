/**
 * `tofu init` result
 */
export interface OpenTofuInitResult {}

/*
tofu init -no-color

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
https://opentofu.org/docs/cli/plugins/signing/

OpenTofu has created a lock file .terraform.lock.hcl to record the provider
selections it made above. Include this file in your version control repository
so that OpenTofu can guarantee to make the same selections by default when
you run "tofu init" in the future.

OpenTofu has been successfully initialized!

You may now begin working with OpenTofu. Try running "tofu plan" to see
any changes that are required for your infrastructure. All OpenTofu commands
should now work.

If you ever set or change modules or backend configuration for OpenTofu,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
*/
