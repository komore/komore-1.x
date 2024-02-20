locals {
  environment = {
    name          = var.environment
    is_production = var.environment == "production"
  }
  domain_name = local.environment.is_production ? var.domain.root : "${substr(local.environment.name, 0, 3)}.${var.domain.root}"
}

module "dns" {
  source      = "./dns"
  domain_name = local.domain_name
  root_domain = var.domain.root
  environment = local.environment
  subdomains  = []
}

module "email" {
  source      = "./email"
  domain_name = local.domain_name
  zone_id     = module.dns.zone.id
}

module "github" {
  count           = local.environment.is_production ? 1 : 0
  source          = "./github"
  domain_name     = local.domain_name
  repository_name = var.github.repository
  zone_id         = module.dns.zone.id
}

module "sendgrid" {
  count   = local.environment.is_production ? 1 : 0
  source  = "./sendgrid"
  aliases = var.sendgrid.aliases
  zone_id = module.dns.zone.id
}
