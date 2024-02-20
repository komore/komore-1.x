output "repository" {
  description = "Repository information"
  value = {
    node           = github_repository.komore.node_id
    url            = github_repository.komore.html_url
    default_branch = github_branch_default.default.branch
  }
}
