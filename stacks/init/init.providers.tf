provider "aws" {
  region = var.aws.region
  default_tags {
    tags = {
      environment = var.environment
    }
  }
}

provider "azurerm" {
  features {

  }
}

provider "github" {
  owner = var.github.owner
  default_tags {
    tags = {
      environment = var.environment
    }
  }
}

provider "gitlab" {
  token = var.gitlab.token
}

provider "google" {
  project = var.google.projectId
  region  = var.google.region
}
