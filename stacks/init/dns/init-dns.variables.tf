variable "domain_name" {
  description = "Domain name"
  type        = string
}

variable "environment" {
  description = "Environment information"
  type = object({
    is_production = bool
  })
}

variable "root_domain" {
  description = "Root domain"
  type        = string
}

variable "subdomains" {
  description = "Subdomains along with their nameservers"
  type        = map(list(string))
}
