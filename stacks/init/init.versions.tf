terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "=5.37.0"
    }

    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.92.0"
    }

    github = {
      source  = "hashicorp/github"
      version = "=6.0.0"
    }

    gitlab = {
      source  = "gitlabhq/gitlab"
      version = "=16.9.1"
    }
  }
}
