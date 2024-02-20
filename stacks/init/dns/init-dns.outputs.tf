output "zone" {
  description = "Zone information"
  value = {
    id   = aws_route53_zone.zone.id
    name = aws_route53_zone.zone.name
  }
}
