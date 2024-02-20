variable "aws" {
  description = "AWS information"
  type = object({
    region = string
  })
}

variable "azure" {
  description = "Azure information"
  type = object({
  })
}

variable "domain" {
  description = "Domain information"
  type = object({
    root = string
  })
}

variable "environment" {
  description = "Environment"
  type        = string
  validation {
    condition     = contains(["development", "integration", "production"], var.environment)
    error_message = "The environment must be one of \"development\", \"integration\" or \"production\""
  }
}

variable "google" {
  description = "Google information"
  type = object({
    gsuite_verification_token = string
  })
}

variable "github" {
  description = "GitHub information"
  type = object({
    challenge  = string
    owner      = string
    repository = string
  })
}

variable "gitlab" {
  description = "GitLab information"
  type = object({
    project    = string
    repository = string
  })
}

variable "sendgrid" {
  description = "SendGrid information"
  type = object({
    aliases = map(string)
  })
}

variable "secrets" {
  description = "Secrets"
  sensitive   = true
  type = object({
    github = object({
      token = string
    })
    sendgrid = object({
      api_key = string
    })
  })
}
