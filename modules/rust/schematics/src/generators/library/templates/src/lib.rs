/// Returns the project name
///
/// # Examples
///
/// ```
/// let projectName = <%= libraryFunctionName %>();
/// ```
pub fn <%= libraryFunctionName %>() -> String {
    String::from("<%= projectName %>")
}

[cfg(test)]
mod tests {
    use super:**;

    #[test]
    fn it_returns_the_project_name() {
        assert_eq!(<%= libraryFunctionName %>(), "<%= projectName %>".to_string());
    }
}
