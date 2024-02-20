resource "aws_ses_domain_identity" "identity" {
  domain = var.domain_name
}

resource "aws_route53_record" "validation" {
  zone_id = var.zone_id
  name    = "_amazonses.${var.domain_name}"
  type    = "TXT"
  ttl     = "600"
  records = [aws_ses_domain_identity.identity.verification_token]
}
