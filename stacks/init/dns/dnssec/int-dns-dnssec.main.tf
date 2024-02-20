resource "aws_kms_key" "dnssec" {
  provider                 = aws.security
  customer_master_key_spec = "ECC_NIST_P256"
  deletion_window_in_days  = 7
  key_usage                = "SIGN_VERIFY"
  policy                   = data.aws_iam_policy_document.key.json
}

resource "aws_route53_key_signing_key" "key" {
  name                       = var.domain_name
  hosted_zone_id             = aws_route53_zone.zone.id
  key_management_service_arn = aws_kms_key.key.arn
}

resource "aws_route53_hosted_zone_dnssec" "dnssec" {
  hosted_zone_id = aws_route53_zone.zone.id
  depends_on     = [aws_route53_key_signing_key.key]
}
