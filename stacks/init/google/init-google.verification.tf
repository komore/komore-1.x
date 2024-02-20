
resource "aws_route53_record" "verification" {
  count   = var.environment.is_production ? 1 : 0
  name    = var.domain_name
  records = ["google-site-verification=${var.site_verification}"]
  zone_id = var.zone_id
}
