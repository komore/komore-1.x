resource "aws_acm_certificate" "certificate" {
  domain_name = var.domain_name
}

resource "aws" {

}
