locals {
  is_production = var.environment.is_production
}

resource "aws_route53_zone" "zone" {
  name = var.domain_name
}

module "dnssec" {
  count       = local.is_production ? 1 : 0
  source      = "./dnssec"
  domain_name = var.domain_name
}

