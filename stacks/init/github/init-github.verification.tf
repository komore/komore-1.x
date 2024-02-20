resource "aws_route53_record" "verification" {
  name    = "_github-challenge-komore.${var.domain_name}"
  type    = "TXT"
  records = [var.challenge]
  zone_id = var.zone_id
}
