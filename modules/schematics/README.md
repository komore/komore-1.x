# komore Schematics

- init workspace: set rules for tags/dependencies
- create application (@komore/application): PWA, optionally packaged as a TWA or via Electron
- create domain: directory structure and stack module
- create stack (@komore/stack): deployment scripts
- generate api
- generate log (@komore/observability/logging)
- generate metric (@komore/observability/metrics)
- generate element (@komore/element): custom element, css variables/parts, all observable

Common flags:

--domain=target directory
