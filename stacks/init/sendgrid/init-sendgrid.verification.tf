resource "aws_route53_record" "record" {
  for_each = aliases
  name     = each.key
  type     = "CNAME"
  records  = [each.value]
  zone_id  = var.zone_id
}
