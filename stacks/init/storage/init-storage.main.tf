resource "aws_s3_bucket" "bucket" {
  name = "komore-${var.environment.name}"
}
